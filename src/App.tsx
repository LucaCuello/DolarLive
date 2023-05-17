import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<any>(null);

  const URL = "https://api.bluelytics.com.ar/v2/latest";

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(URL),
        json = await fetchData.json(),
        response = await json;

      setData(response);
    };

    getData();
  }, []);

  return (
    <>
      <p>Valor venta: ${data?.oficial.value_sell} ARS</p>
      <p>Valor compra: ${data?.oficial.value_buy} ARS</p>
    </>
  );
}

export default App;
