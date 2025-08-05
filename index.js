const cards = document.querySelectorAll(".card");


//disable see more fucntion from the text contents that the height is less than the minimum
//visible height of a text content on page load.
window.onload = function(){
    cards.forEach((card) => {
        let seeMoreBtn = card.querySelector(".see-more-btn");
        let textContent = card.querySelector(".card-content .text");

        if(textContent.scrollHeight == textContent.clientHeight){
            seeMoreBtn.style.display = "none";
            textContent.style.height = "fit-content";
        }else{
            card.classList.add("gradient");
        }
    })
}


//See more function on click the see more button  on each card.

cards.forEach((card)=> {
    let seeMoreBtn = card.querySelector(".see-more-btn");
    let textContent = card.querySelector(".card-content .text");

    seeMoreBtn.addEventListener("click", ()=> {
        card.classList.toggle("active");
        card.classList.toggle("gradient");

        if(card.classList.contains("active")){
            seeMoreBtn.innerHTML = "see Less";
            textContent.style.height = textContent.scrollHeight + "px";
        }else{
            seeMoreBtn.innerHTML = "see More";
            textContent.style.height = "100px";
        }
    })
})