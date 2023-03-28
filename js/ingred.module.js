import { Displayfun } from "./display.module.js";
export class Ingreddd{
    constructor(){
   
this.displayfun=new Displayfun()
this.Ingred(); 

    }

    async Ingred() {

        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        let data = await api.json()
          
        
        this.displayfun.displayIngred((data.meals.slice(0, 20)))

       this.getid2()
       this.getId2fordes() 
        
    }


    getid2(){
        document.querySelectorAll(".item").forEach((ele)=>{
         ele.addEventListener("click", () => {
            let id=ele.getAttribute('idg')
            let deta = new Displayfun(id);
          
           this.gredientsMeals(id)
         });
     })
     }
    async  gredientsMeals(ingredients) {  
         const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
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
        this.Ingred(); 
     });
    
    
    }





}