import { Displayfun } from "./display.module.js";
export class Allcateg{
    constructor(id){
 
this.displayfun=new Displayfun()
  
this.AllCateory(); 

    }



async AllCateory(){
    const api= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let data=await api.json()
    console.log(data.categories)
    this.displayfun.displayallCategory(data);
  
   this.getId1fordes()
   this.getId2fordes() 
}

getId1fordes() {
    document.querySelectorAll(".item").forEach((ele) => {
    ele.addEventListener("click", () => {
    let id=ele.getAttribute('id')
      console.log(id)
    let deta = new Displayfun(id);
     this.getCategoryMeals(id)
  
       });
    });
 }
 

async  getCategoryMeals(idcate) {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${idcate}`)
    let data = await api.json()
     console.log(data)
   this.displayfun.displayMeals(data)
   this.getId2fordes()
}
getId2fordes() {
    document.querySelectorAll(".item.itemm").forEach((ele) => {
    ele.addEventListener("click", () => {
    let id=ele.getAttribute('id2')
      console.log(id)
    let deta = new Displayfun(id);
     this.mealdetails(id);
     
     
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
    this.AllCateory(); 
 });

}

}




