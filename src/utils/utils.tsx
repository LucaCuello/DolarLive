const TAB_STORAGE_KEY = "defaultTab";

export const getDefaultTab = (): string => {
  return localStorage.getItem(TAB_STORAGE_KEY) || "cotizaciones";
};

export const saveDefaultTab = (tab: string): void => {
  localStorage.setItem(TAB_STORAGE_KEY, tab);
};

export const toolTipStyles = {
  backgroundColor: "hsl(var(--popover))",
  color: "hsl(var(--popover-foreground))",
  borderRadius: "6px",
  padding: "8px 12px",
  fontSize: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
};

export const errorTooltipStyles = {
  backgroundColor: "hsl(var(--destructive))",
  color: "hsl(var(--destructive-foreground))",
  borderRadius: "6px",
  padding: "8px 12px",
  fontSize: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
};
