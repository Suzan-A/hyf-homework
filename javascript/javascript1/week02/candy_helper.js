const boughtCandyPrices = [];
function addCandy (candyType, weight) {
    if (candyType==="Sweet")
        {candyPrices.push(weight*0.5);}
    else if (candyType==="Chocolate")
        {candyPrices.push(weight*0.7);}
    else if (candyType==="Toffee")
        {candyPrices.push(weight*1.1);}
    else if (candyType==="Chewing-gum")
        {candyPrices.push(weight*0.03);}
}

var amountToSpend = Math.random () *100;

function canBuyMoreCandy () {
    var totalPrice = 0;
    for (i=0; i < boughtCandyPrices.length; i++)
        {totalPrice += boughtCandyPrices[i];}
    if (amountToSpend > totalPrice)
        {return"You can buy more candy."}
    else 
        {return"You cannot buy anymore candy."}
}