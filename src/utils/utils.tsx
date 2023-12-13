export const storageView = (state: boolean) => {
  localStorage.setItem("IsCalculatorSticky", state.toString());
};

export const getStorageViewValue = () => {
  const storage = localStorage.getItem("IsCalculatorSticky");
  if (!storage) return;
  return storage === "true";
};

export const toolTipStyles = {
  backgroundColor: "#e5e5d5",
  fontFamily: "'Montserrat', sans-serif",
  color: "#35393C",
  fontWeight: 600,
  fontSize: "12px",
};

export const errorTooltipStyles = {
  backgroundColor: "#f8f3d6",
  fontFamily: "'Montserrat', sans-serif",
  color: "#967133",
  fontWeight: 600,
  fontSize: "12px",
};
