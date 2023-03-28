/// <reference path="../typings/globals/jquery/index.d.ts" />
import { closeside } from "./main.js";

export class Displayfun{
  constructor(){
   closeside();

  }
    display(data){
      console.log(data.meals)
        let temp=''
        data.meals.forEach((ele)=> {
          temp+=`<div class="col-md-3 col-sm-6  item">
          <div class=" position-relative overflow-hidden  rounded-3">

           <img src="${ele.strMealThumb}" class="w-100">
           <div class="im-layer  ">
           <p class="fs-3 fw-bold">${ele.strMeal}</p>
           </div>
          </div>
        
        </div>`
        
        
        })
        document.getElementById('yrow').innerHTML=temp;
      }

 
      displayallCategory(data){
        let temp = "";

        data.categories.forEach((ele)=> {
          temp+=`<div  id="${ele.strCategory}" class="col-md-3 col-sm-6  item">
          <div class=" position-relative overflow-hidden  rounded-3">

           <img src="${ele.strCategoryThumb}" class="w-100">
           <div class="im-layer d-block justify-content-center">
           <h3>${ele.strCategory}</h3>
           <p>${ele.strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
           </div>
          </div>
        
        </div>`

      })
      
      document.getElementById('yrow').innerHTML=temp;
      }

  
     



       displayArea(data) {
        let temp = "";
    
       data.meals.forEach((ele)=>{
        temp += `
        <div class="col-md-3 col-sm-6 col-10  item" id="${ele.strArea}">
                <div  class="rounded-2 text-center text-white">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${ele.strArea}</h3>
                </div>
        </div>
        `
    }) 
    
        document.getElementById('yrow').innerHTML=temp;
    }



    displayIngred(data){
      let temp = "";

      data.forEach((ele)=>{
      temp += `
      <div  idg=${ele.strIngredient} class="col-md-3 col-sm-6 col-10  item">
      <div class="rounded-2 text-center  text-white ">
              <i class="fa-solid fa-drumstick-bite fa-4x"></i>
              <h3>${ele.strIngredient}</h3>
              <p>${ele.strDescription.split(" ").slice(0,20).join(" ")}</p>
      </div>
      </div>`
       
   }) 
   
       document.getElementById('yrow').innerHTML=temp;
      
      
    }

    displayMeals(data) {
      let temp = "";
     data.meals.slice(0,20).forEach((ele)=>{
      temp+=`
       <div  id2="${ele.idMeal}" class="col-md-3 col-sm-6 item itemm">
          <div = class=" position-relative overflow-hidden rounded-3">
          <img src="${ele.strMealThumb}" class="w-100" >
          <div class="im-layer justify-content-center align-items-center ">
          <p class="fs-3 fw-bold">${ele.strMeal}</p>
          </div>
          </div>
      </div>
`
     })
      
      document.getElementById('yrow').innerHTML=temp;
      // document.getElementById("drow").style.display="none"
     
              
  }
 

    displaydetails(meal) {
      
      let ingredients = ``
  
      for (let i = 1; i <= 20; i++) {
          if (meal[`strIngredient${i}`]) {
              ingredients += `<li class="alert alert-info m-2 p-1 text-white">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
          }
      }
  
      let tags = meal.strTags?.split(",")
      if (!tags) tags = []
  
      let tagsStr = ''
      for (let i = 0; i < tags.length; i++) {
          tagsStr += `
          <li class="alert alert-danger m-2 p-1 ">${tags[i]}</li>`
      }
      
  
      
      let temp = `
             <header class="justify-content-between">
               
               <button class="btn-close btn-close-white" id="xbtn"></button>
            </header>
      <div class=" text-white col-md-4 col-8">
                  <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                      alt="">
                      <h2>${meal.strMeal}</h2>
                  </div>
                 <div class=" text-white col-md-8 col-8">
                  <h2>Instructions</h2>
                  <p>${meal.strInstructions}</p>
                  <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                  <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                  <h3>Recipes :</h3>
                  <ul class="list-unstyled d-flex g-3 flex-wrap text ">
                      ${ingredients}
                  </ul>
  
                  <h3>Tags :</h3>
                  <ul class="list-unstyled d-flex g-3 flex-wrap " style="color:red;">
                      ${tagsStr}
                  </ul>
  
                  <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                  <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
              </div>`
              document.getElementById('yrow').innerHTML=temp;
              closeside()
              
              
           
     
  }
  Searchinputs() {
    document.getElementById("searchContainer").innerHTML= `
    <div class="row py-4 ">
        <div class="col-md-6 ">
            <input  class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input  maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>
    </div>`

    document.getElementById('yrow').innerHTML = ""
}


    
      }

      
       
