//else- if statement
let userRole = "admin";
let accesslevel;
if(userRole === "admin"){
    accessLevel = "Full access granted";
}
else if(userRole === "manager"){
    accessLevel = "Limited access granted";
}
else{
    accessLevel = "No access granted";
}
console.log("Access Level:",accessLevel);
//nested else-if statement
let isLoggedIn = true ;
let userMessage;
if(isLoggedIn){
    if(userRole === "admin"){
        userMessage ="Welcome Admin!";
    }else{
        userMessage ="Welcome, User!";
    }
} else{
    userMessage = "Please log in to access the system.";
}
console.log("User Message:",userMessage);
//switch statement
let userType = "subscriber";
let userCategory;
switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory ="Subscriber";
        break;
    default:
        userCategory ="Unknow";
}
console.log("User Category:",userCategory);
//ternary statement
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated":"NoAuthentication"
console.log("Authentication Status: ",authenticationStatus);