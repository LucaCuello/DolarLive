import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";
import { Calculator } from "./components/Calculator/Calculator";
import { CurrenciesGrid } from "./components/CurrenciesGrid/CurrenciesGrid";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Historicos } from "./components/Historicos/Historicos";
import { Inflacion } from "./components/Inflacion/Inflacion";
import { LastUpdated } from "./components/LastUpdated/LastUpdated";
import { useDolarApi } from "./hooks/useDolarApi";
import { getDefaultTab, getTheme, saveDefaultTab, saveTheme, Theme } from "./utils/utils";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toString().slice(2);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function App() {
  const { data: dolar, loading, refetch } = useDolarApi();
  const [theme, setTheme] = useState<Theme>(getTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    saveTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const formattedDate = dolar[0]?.fechaActualizacion
    ? formatDate(dolar[0].fechaActualizacion)
    : "";

  return (
    <div className="extension-container flex flex-col bg-background">
      <div className="px-6 pt-3 pb-1">
        <Header theme={theme} onToggleTheme={toggleTheme} onRefresh={refetch} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex-1 px-6"
      >
        <Tabs
          defaultValue={getDefaultTab()}
          onValueChange={saveDefaultTab}
          className="w-full"
        >
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="cotizaciones">Cotizaciones</TabsTrigger>
            <TabsTrigger value="calculadora">Calculadora</TabsTrigger>
            <TabsTrigger value="inflacion">Inflación</TabsTrigger>
            <TabsTrigger value="historicos">Históricos</TabsTrigger>
          </TabsList>

          <TabsContent value="cotizaciones">
            <CurrenciesGrid currencies={dolar} loading={loading} />
          </TabsContent>

          <TabsContent value="calculadora">
            <Calculator currencies={dolar} />
          </TabsContent>

          <TabsContent value="inflacion">
            <Inflacion />
          </TabsContent>

          <TabsContent value="historicos">
            <Historicos />
          </TabsContent>
        </Tabs>
      </motion.div>

      <div className="px-6 mt-auto">
        <LastUpdated fullDate={formattedDate} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
