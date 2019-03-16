function getFullname(firstname, surname, useFormalName) {
    var fullname1=firstname;
    var fullname2=surname;
    if(useFormalName) 
        {return ("Lord" + fullname1 + "" + fullname2);}
    else 
        {return (Fullname1 + "" + fullname2);}

console.log(getFullname("Suzan","Albitar", true));
console.log(getFullname("Suzan", "Albitar"));
