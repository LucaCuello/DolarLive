import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { InflacionData } from "@/hooks/useInflacion";
import { Area, AreaChart, XAxis, YAxis } from "recharts";

interface InflacionChartProps {
  data: InflacionData[];
}

const chartConfig = {
  valor: {
    label: "Inflación",
    color: "hsl(var(--foreground))",
  },
} satisfies ChartConfig;

function formatMonth(fecha: string): string {
  const [year, month] = fecha.split("-");
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  return `${months[parseInt(month) - 1]} ${year.slice(2)}`;
}

export function InflacionChart({ data }: InflacionChartProps) {
  const chartData = data.map((item) => ({
    ...item,
    monthLabel: formatMonth(item.fecha),
  }));

  return (
    <ChartContainer config={chartConfig} className="h-[120px] w-full">
      <AreaChart
        data={chartData}
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
      >
        <defs>
          <linearGradient id="fillInflacion" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="hsl(var(--foreground))"
              stopOpacity={0.3}
            />
            <stop
              offset="100%"
              stopColor="hsl(var(--foreground))"
              stopOpacity={0.02}
            />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="monthLabel"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tick={{ fontSize: 10 }}
          interval="preserveStartEnd"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tick={{ fontSize: 10 }}
          tickFormatter={(value) => `${value}%`}
          domain={["dataMin - 1", "dataMax + 1"]}
        />
        <ChartTooltip
          cursor={{ stroke: "hsl(var(--muted-foreground))", strokeWidth: 1 }}
          content={
            <ChartTooltipContent
              formatter={(value) => (
                <span className="font-semibold">
                  {Number(value).toFixed(1)}%
                </span>
              )}
              labelFormatter={(_, payload) => {
                if (payload && payload[0]) {
                  return formatMonth(payload[0].payload.fecha);
                }
                return "";
              }}
            />
          }
        />
        <Area
          type="monotone"
          dataKey="valor"
          stroke="hsl(var(--foreground))"
          strokeWidth={2}
          fill="url(#fillInflacion)"
        />
      </AreaChart>
    </ChartContainer>
  );
}
