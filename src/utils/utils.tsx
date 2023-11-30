export const storageView = (state: boolean) => {
  localStorage.setItem("IsCalculatorSticky", state.toString());
};

export const getStorageViewValue = () => {
  const storage = localStorage.getItem("IsCalculatorSticky");
  if (!storage) return;
  return storage === "true";
};
