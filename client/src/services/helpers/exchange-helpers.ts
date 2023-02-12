interface IExchangeUsd {
  usdRate: number;
  price: string;
}

export const exchangeUsd = ({ usdRate, price }: IExchangeUsd) => {
  let newPrice = price.includes(",") ? price.split(",").join(".") : price;
  let result = Math.ceil(usdRate * Number(newPrice));
  return result;
};
