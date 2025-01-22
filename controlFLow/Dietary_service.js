let Dietary_service = prompt("Star the letter with block")
//console.log(Dietary_service)
let userCategory;
switch(Dietary_service){
    case "Employee":
        userCategory ="Access to Dietary service";
        break;
    case "Enrolled Member":
        userCategory ="Access to 'Dietary service' and  'dietician'";
        break;
    case "Subscriber":
            userCategory ="Partial access to faciliate 'Dietary service'";
        break;
    default:
            userCategory ="Subscribe frist to avail this facility"
        break;
}
console.log("User Category:",userCategory);