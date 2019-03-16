function dayTemperature (degree)
{
    if (degree <= 8)
        {return "winter jacket","scarf", "hat"}
    else if (degree > 8 && degree < 18)
        {return "rainycout", "sweater";}
    else if (degree = 18 && degree <= 22)
        {return "jeans", "T-shirt";}
    else 
        {return "short", "sundress";}
};
const whatToWear = dayTemperature (9);
console.log(whatToWear);
