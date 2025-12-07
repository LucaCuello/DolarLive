import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDolarApi } from "./hooks/useDolarApi";
import { CurrenciesGrid } from "./components/CurrenciesGrid/CurrenciesGrid";
import { Calculator } from "./components/Calculator/Calculator";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Divider } from "./components/Divider/Divider";
import { LastUpdated } from "./components/LastUpdated/LastUpdated";
import { getDefaultTab, saveDefaultTab } from "./utils/utils";
import "./App.css";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toString().slice(2);
  const hours = date.getHours();
  return `${day}/${month}/${year} a las ${hours}hs`;
}

function App() {
  const { data: dolar, loading } = useDolarApi();

  const formattedDate = dolar[0]?.fechaActualizacion
    ? formatDate(dolar[0].fechaActualizacion)
    : "";

  return (
    <div className="extension-container flex flex-col bg-background p-4">
      <Header />
      <Divider />

      <Tabs
        defaultValue={getDefaultTab()}
        onValueChange={saveDefaultTab}
        className="w-full flex-1"
      >
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="cotizaciones">Cotizaciones</TabsTrigger>
          <TabsTrigger value="calculadora">Calculadora</TabsTrigger>
        </TabsList>

        <TabsContent value="cotizaciones" className="mt-4">
          <CurrenciesGrid currencies={dolar} loading={loading} />
        </TabsContent>

        <TabsContent value="calculadora" className="mt-4">
          <Calculator currencies={dolar} />
        </TabsContent>
      </Tabs>

      <Divider />
      <LastUpdated fullDate={formattedDate} />
      <Footer />
    </div>
  );
}

export default App;
