export interface Notification {
  id: string;
  title: string;
  description: string;
  date: string;
}

export const notifications: Notification[] = [
  {
    id: "6",
    title: "Mejoras visuales",
    description: "Nuevas animaciones en tabs e indicador Live",
    date: "2024-12-08",
  },
  {
    id: "5",
    title: "Copiá resultados",
    description: "Click en cualquier precio para copiarlo al portapapeles",
    date: "2024-12-07",
  },
  {
    id: "4",
    title: "Calculadora mejorada",
    description: "Ahora muestra precio de Compra y Venta simultáneamente",
    date: "2024-12-06",
  },
  {
    id: "3",
    title: "Modo oscuro",
    description: "Cambiá entre tema claro y oscuro desde el header",
    date: "2024-12-05",
  },
  {
    id: "2",
    title: "Nueva pestaña: Históricos",
    description: "Gráfico comparativo Blue vs Oficial con diferentes rangos",
    date: "2024-12-04",
  },
  {
    id: "1",
    title: "Nueva pestaña: Inflación",
    description: "Seguí la inflación mensual y acumulada de Argentina",
    date: "2024-12-03",
  },
];
