type CurrencyComponentProps = {
  type: string;
};

export const CurrencyComponent = ({ type }: CurrencyComponentProps) => {
  return (
    <div className="currency-container">
      <div className="type-container">
        <h2>{type} oficial</h2>
        <div className="price-container">
          <span className="price-title">Venta:</span>
          <span className="price-value">$220ARS</span>
        </div>
        <div className="price-container">
          <span className="price-title">Compra:</span>
          <span className="price-value">$230ARS</span>
        </div>
      </div>
      <div className="type-container">
        <h2>{type} blue</h2>
        <div className="price-container">
          <span className="price-title">Venta:</span>
          <span className="price-value">$470ARS</span>
        </div>
        <div className="price-container">
          <span className="price-title">Compra:</span>
          <span className="price-value">$480ARS</span>
        </div>
      </div>
    </div>
  );
};
