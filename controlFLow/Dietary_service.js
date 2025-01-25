let Dietary_service = prompt(`Enter your choice "Employee","Enrolled Member","Subscriber" or "Unsubscriber`)
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
    case  "Unsubscriber":
           userCategory ="Subscribe frist to avail this facility"
        break;
    default:
            userCategory ="please choose the option from give choice."
        break;
}
console.log("User Category:",userCategory);