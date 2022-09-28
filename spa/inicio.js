import home from "./pages/home/home.js";

const main = window.document.querySelector("#root")

window.addEventListener("load", () =>{

        main.appendChild(home());

})