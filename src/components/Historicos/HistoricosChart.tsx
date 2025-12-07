import { Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DolarHistoricoData } from "@/hooks/useDolarHistorico";

interface HistoricosChartProps {
  data: DolarHistoricoData[];
}

const chartConfig = {
  blue: {
    label: "Blue",
    color: "hsl(var(--foreground))",
  },
  oficial: {
    label: "Oficial",
    color: "hsl(var(--muted-foreground))",
  },
} satisfies ChartConfig;

function formatDate(fecha: string): string {
  const date = new Date(fecha);
  const day = date.getDate();
  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  return `${day} ${months[date.getMonth()]}`;
}

function formatPrice(value: number): string {
  return `$${value.toLocaleString("es-AR")}`;
}

export function HistoricosChart({ data }: HistoricosChartProps) {
  const chartData = data.map((item) => ({
    ...item,
    dateLabel: formatDate(item.fecha),
  }));

  // Calcular dominio Y con margen
  const allValues = data.flatMap((d) => [d.blue, d.oficial]).filter((v) => v > 0);
  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);
  const padding = (maxValue - minValue) * 0.1;

  return (
    <ChartContainer config={chartConfig} className="h-[160px] w-full">
      <LineChart
        data={chartData}
        margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
      >
        <XAxis
          dataKey="dateLabel"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tick={{ fontSize: 9 }}
          interval="preserveStartEnd"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tick={{ fontSize: 9 }}
          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          domain={[minValue - padding, maxValue + padding]}
        />
        <ChartTooltip
          cursor={{ stroke: "hsl(var(--muted-foreground))", strokeWidth: 1 }}
          content={
            <ChartTooltipContent
              formatter={(value, name) => (
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      name === "blue" ? "bg-foreground" : "bg-muted-foreground"
                    }`}
                  />
                  <span className="text-muted-foreground capitalize">{name}:</span>
                  <span className="font-semibold">{formatPrice(Number(value))}</span>
                </div>
              )}
              labelFormatter={(_, payload) => {
                if (payload && payload[0]) {
                  return formatDate(payload[0].payload.fecha);
                }
                return "";
              }}
            />
          }
        />
        <Line
          type="monotone"
          dataKey="blue"
          stroke="hsl(var(--foreground))"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, strokeWidth: 0 }}
        />
        <Line
          type="monotone"
          dataKey="oficial"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth={1.5}
          strokeDasharray="4 2"
          dot={false}
          activeDot={{ r: 3, strokeWidth: 0 }}
        />
      </LineChart>
    </ChartContainer>
  );
}
