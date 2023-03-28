/// <reference path="../typings/globals/jquery/index.d.ts" />
 import { Area } from "./area.module.js";
import { Allcateg } from "./categoresall.module.js";
import { Ingreddd } from "./ingred.module.js";

 import { Displayfun } from "./display.module.js";
 


 export class Search{
    constructor() {

        this.nameInputTouched = false;
        this.emailInputTouched = false;
        this.phoneInputTouched = false;
        this.ageInputTouched = false;
        this.passwordInputTouched = false;
        this.repasswordInputTouched = false;
        this.submitBtn = document.getElementById("submitBtn")
        this.displayfun=new Displayfun ()
        this.area=new Area()
        this.ingr=new Ingreddd()
        this.categ=new Allcateg();
        
 this.search=document.getElementById("name");
 this.search.addEventListener('keyup',()=>{
    this.searchByName(this.search.value)

    

 })
 this.searchl=document.getElementById("letter");
 this.searchl.addEventListener('keyup',()=>{
    this.searchByFLetter(this.searchl.value)

 })
        document.getElementById("searchContainer").style.display="none"
        document.getElementById("form").style.display="none";
        document.getElementById("home").style.display="block";
        this.homeSearch('')
        this.getId2fordes()

        document.getElementById('sch').addEventListener('click',()=>{
            document.getElementById("searchContainer").style.display="block"
            document.getElementById("home").style.display="block";
            
            this.homeSearch("")
           
        })
        document.getElementById('Home').addEventListener('click',()=>{
            this.homeSearch("") 
            document.getElementById("searchContainer").style.display="none"
            document.getElementById("form").style.display="none";
            document.getElementById("home").style.display="block";
        })
        document.getElementById('Ar').addEventListener('click',()=>{
            this.area.Area()
              document.getElementById("searchContainer").style.display="none"
              document.getElementById("form").style.display="none";
              document.getElementById("home").style.display="block";
        })
        document.getElementById('Ingr').addEventListener('click',()=>{
            this.ingr.Ingred()
             document.getElementById("searchContainer").style.display="none"
             document.getElementById("form").style.display="none";
             document.getElementById("home").style.display="block";
        })
        document.getElementById('cat').addEventListener('click',()=>{
            this.categ.AllCateory();
            document.getElementById("searchContainer").style.display="none"
            document.getElementById("form").style.display="none";
            document.getElementById("home").style.display="block";
           
        })
        document.getElementById('Cont').addEventListener('click',()=>{
            document.getElementById("home").style.display="none";
            document.getElementById("drow").style.display="none";
            
            document.getElementById("form").style.display="block";
            document.getElementById("nameInput").addEventListener("focus", () => {
                this.nameInputTouched = true
            })
        
            document.getElementById("emailInput").addEventListener("focus", () => {
                this.emailInputTouched = true
            })
        
            document.getElementById("phoneInput").addEventListener("focus", () => {
                this.phoneInputTouched = true
            })
        
            document.getElementById("ageInput").addEventListener("focus", () => {
                this.ageInputTouched = true
            })
        
            document.getElementById("passwordInput").addEventListener("focus", () => {
                this.passwordInputTouched = true
            })
        
            document.getElementById("repasswordInput").addEventListener("focus", () => {
                this.repasswordInputTouched = true
            })
    
    
            document.getElementById("nameInput").addEventListener("keyup", () => {
                this.inputsValidation()
            })
        
            document.getElementById("emailInput").addEventListener("keyup", () => {
                this.inputsValidation()
            })
        
            document.getElementById("phoneInput").addEventListener("keyup", () => {
                this.inputsValidation()
            })
        
            document.getElementById("ageInput").addEventListener("keyup", () => {
                this.inputsValidation()
            })
        
            document.getElementById("passwordInput").addEventListener("keyup", () => {
                this.inputsValidation()
            })
        
            document.getElementById("repasswordInput").addEventListener("keyup", () => {
                this.inputsValidation()
            })

        })
     }
    
    
    async homeSearch(name){
        const api= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        let datalist=await api.json()
        console.log(datalist)
       
        this.displayfun.displayMeals(datalist);
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
    
    
    }
   
    async  searchByName(name) {
        document.getElementById('yrow').innerHTML = ""
   
    
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        let data = await api.json()
        data ?  this.displayfun.displayMeals(data) :  this.displayfun.displayMeals([])
        console.log("vvvv")

    }
    
    async  searchByFLetter(letter) {
        document.getElementById('yrow').innerHTML = ""
    
        letter == "" ? letter = "a" : "";
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        let data = await api.json()
    
        data.meals ?  this.displayfun.displayMeals(data) :  this.displayfun.displayMeals([])
        
        console.log("lllll")
        
    
    }

     inputsValidation() {
        if (this.nameInputTouched) {
            if (this.nameValidation()) {
                document.getElementById("nameAlert").classList.replace("d-block", "d-none")
    
            } else {
                document.getElementById("nameAlert").classList.replace("d-none", "d-block")
    
            }
        }
        if (this.emailInputTouched) {
    
            if (this.emailValidation()) {
                document.getElementById("emailAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("emailAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
        if (this.phoneInputTouched) {
            if (this.phoneValidation()) {
                document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("phoneAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
        if (this.ageInputTouched) {
            if (this.ageValidation()) {
                document.getElementById("ageAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("ageAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
        if (this.passwordInputTouched) {
            if (this.passwordValidation()) {
                document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("passwordAlert").classList.replace("d-none", "d-block")
    
            }
        }
        if (this.repasswordInputTouched) {
            if (this.repasswordValidation()) {
                document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")
    
            }
        }
    
    
        if (this.nameValidation() &&
            this.emailValidation() &&
            this.phoneValidation() &&
            this.ageValidation() &&
            this.passwordValidation() &&
            this.repasswordValidation()) {
            this.submitBtn.removeAttribute("disabled")
        } else {
            this.submitBtn.setAttribute("disabled", true)
        }
    }
    
     nameValidation() {
        return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
    }
    
     emailValidation() {
        return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
    }
    
     phoneValidation() {
        return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
    }
    
     ageValidation() {
        return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
    }
    
     passwordValidation() {
        return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
    }
    
     repasswordValidation() {
        return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
    }
    
   
  

}



