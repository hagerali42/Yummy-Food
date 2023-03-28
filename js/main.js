import { Search } from "./search.module.js";

let search=new Search;
function openside() {
        $('.side-nav').animate({left:0},500)
        $(".open-close-icon").removeClass("fa-align-justify");
        $(".open-close-icon").addClass("fa-x");
    
    

    for (let i = 0; i < 6; i++) {
        $(".link li").eq(i).animate({
            top: 0
        }, (i + 6) * 100)
    }
}

 export function closeside() {
        let width = $(".side-nav .nav-tab").outerWidth()
        $('.side-nav').animate({left:-width},500)
        $(".open-close-icon").addClass("fa-align-justify");
        $(".open-close-icon").removeClass("fa-x");

    $(".link li").animate({
        top: 400
    }, 500)
}

$(".side-nav i.open-close-icon").click(() => {
    if ($(".side-nav").css("left") == "0px") {
        closeside()
    } else {
        openside()
    }
})
closeside()










