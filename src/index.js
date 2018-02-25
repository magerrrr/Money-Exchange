// PLEASE DON'T change function name
module.exports = function makeExchange(currency){
    let amountOfCoins = {};
    let H,Q,D,N,P;
    if (currency > 10000){
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else if (currency <= 0){
      return {};
    }
    H = Math.trunc(currency/50);
    currency = currency - (H * 50)
    if (H!=0){
        amountOfCoins.H = H;
    }
    Q = Math.trunc(currency/25);
    currency = currency - (Q * 25)
    if (Q!=0){
        amountOfCoins.Q = Q;
    }
    D = Math.trunc(currency/10);
    currency = currency - (D * 10)
    if (D!=0){
        amountOfCoins.D = D;
    }
    N = Math.trunc(currency/5);
    currency = currency - (N * 5)
    if (N!=0){
        amountOfCoins.N = N;
    }
    P = Math.trunc(currency/1);
    currency = currency - (P * 1)
    if (P!=0) {
        amountOfCoins.P = P;
    }
    return amountOfCoins;
}
