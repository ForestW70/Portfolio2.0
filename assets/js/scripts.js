



const projSquares = document.querySelectorAll(".title-cont");
const bigDisp = document.getElementById("showCase");
const projTitle = document.getElementById("projTitle");
const projLink = document.getElementById("projLink");
const topicButtons = document.querySelectorAll(".title-cont, .off, .hover-on")
console.log("welcome");

projSquares.forEach( (elem) => {


    elem.addEventListener("mouseenter", e => {
        e.target.firstElementChild.classList.add("hide");
        e.target.lastElementChild.classList.remove("hide");
        console.log("yep");
    })

    elem.addEventListener("mouseleave", e => {
        e.target.firstElementChild.classList.remove("hide");
        e.target.lastElementChild.classList.add("hide");
    })

    elem.lastElementChild.addEventListener("click", e => {
        let selecTopic = e.target.getAttribute("name");
        let descrip = e.target.dataset.descrip;
        let link = e.target.dataset.link;
        bigDisp.style.backgroundImage = `url(./assets/images/${selecTopic}.png)`;
        projTitle.innerText = `"${descrip}"`;
        projLink.href = link;
        // displayBigBox(selecTopic)
    })
    

    
})


function displayBigBox(topicName) {
    // el.preventDefault;
    // bigDisp.classList.add("new-pic");
    // let contentPic = document.getElementsByName(`"${topicName}"`)
    bigDisp.style.backgroundImage = `url(./assets/images/${topicName}.png)`;

}
