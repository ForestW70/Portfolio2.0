// html routes
const projSquares = document.querySelectorAll(".title-cont");

const bigDisp = document.getElementById("showCase");
const projTitle = document.getElementById("projTitle");
const projLink = document.getElementById("projLink");

// for each function that attaches these three events to all of the project divs.
projSquares.forEach( (elem) => {

    // hover events
    elem.addEventListener("mouseenter", e => {
        e.target.firstElementChild.classList.add("hide");
        e.target.lastElementChild.classList.remove("hide");
    })

    elem.addEventListener("mouseleave", e => {
        e.target.firstElementChild.classList.remove("hide");
        e.target.lastElementChild.classList.add("hide");
    })

    // click event
    elem.lastElementChild.addEventListener("click", e => {
        let selecTopic = e.target.getAttribute("name");
        let descrip = e.target.dataset.descrip;
        let link = e.target.dataset.link;
        bigDisp.style.backgroundImage = `url(./assets/images/${selecTopic}.png)`;
        projTitle.innerText = `"${descrip}"`;
        projLink.href = link;
    })
})

