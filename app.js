const rating = document.querySelectorAll(".rating");
const btn = document.querySelector("#btn");
const container = document.querySelector("#container");
let selectedRating = "";

rating.forEach((rating) => {
    rating.addEventListener("click", (event) => {
        //emoji ko click yin value ya chin loh 
        // console.log(event.target.innerText || event.target.parentNode.innerText);
        //active ko remove pyn lote 
        removeActive();
        selectedRating =
            event.target.innerText || event.target.parentNode.innerText;
        //active class add chin
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")

    });
});

btn.addEventListener("click", () => {
    if (selectedRating != "") {
        container.innerHTML = `
        <strong>Thank You!</strong>
        <br/>
        <br/>
        <strong>Feedback =  ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }
})

function removeActive() {
    rating.forEach((rating) => {
        rating.classList.remove("active");
    });
}
console.log("this is my second commit");