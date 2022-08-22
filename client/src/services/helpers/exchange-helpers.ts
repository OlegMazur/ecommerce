interface IExchangeUsd{
    usdRate:number,
    price:number
}

export const exchangeUsd=({usdRate,price}:IExchangeUsd)=>{
    return Math.ceil(usdRate*price)
}