const breakfastMenu =['Pancakes- $12','Eggs Benedict-$22.99','Oatmeal-$21.99','Frittata-$15']
const mainCourseMenu =['steak-$20.01','Pasta-$9.99','Burger-$19.89','Salmon-$24.43'];
const dessertMenu =['Cake-$2.99','Ice Cream-$3.99','Pudding-$5.01','Fruit Salad-$4.43'];
const breakfastMenuItems = breakfastMenu.map((item,index) => `<p> Item ${index+1}: ${item}</p>`).join('');
 document.getElementById('breakFastMenuItems').innerHTML = breakfastMenuItems;
let mainCourseItem ='';
mainCourseMenu.forEach((item,index)=>{
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
let dessertItem ='';
for(let i=0; i <dessertMenu.length;i++){
    dessertItem += `<p> Item ${i+1}:${dessertMenu[i]}</p>`
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
