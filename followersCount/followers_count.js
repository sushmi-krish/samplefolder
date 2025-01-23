let count = 0;//Initialize count to 0
function IncreaseCount(){
    count++ //Increment the count by 1
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
function increaseCount(){
    count++;//Increment the count by 1
    displayCount(); //Display the count
    checkCountValue();//check count value and didplay message 
}
function checkCountValue(){
    if(count === 10){
        alert("Your Instagram post gained 10 followers!Congtatulations!");
    }
else if(count === 20)
{
        alert("Your Instagram post gained 20 followers!keep it up !");

    }
}
function resetCount(){
    count = 0;
    document.getElementById('countDisplay').innerHTML = count;
    alert("The Followers count has been reset")
}