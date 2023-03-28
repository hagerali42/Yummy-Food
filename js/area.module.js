import { Displayfun } from "./display.module.js";
export class Area{
    constructor(){
   
this.displayfun=new Displayfun()
this.Area(); 

    }



async Area(){
    const api= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let data=await api.json()
    console.log(data)
   
    this.displayfun.displayArea(data);
    this.getid3()

   
}
getid3(){
    document.querySelectorAll(".item").forEach((ele)=>{
     ele.addEventListener("click", () => {
        let id=ele.getAttribute('id')
        let deta = new Displayfun(id);
        
       this.Areaa(id)
       this.getId2fordes() 
     });
 })
 }

async  Areaa(area) {
  
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    let data = await api.json()
    this.displayfun.displayMeals(data)
    this.getId2fordes() 

}
getId2fordes() {
    document.querySelectorAll(".item.itemm").forEach((ele) => {
    ele.addEventListener("click", () => {
    let id=ele.getAttribute('id2')
      console.log(id)
    let deta = new Displayfun(id);
     this.mealdetails(id)
  
       });
    });
 }
async mealdetails(id) {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
let data = await api.json();
console.log(data)
 let deta = new Displayfun(id);
 this.displayfun.displaydetails(data.meals[[0]])

 document.getElementById("xbtn").addEventListener("click", () => {
    this.Area(); 
 });
}





}