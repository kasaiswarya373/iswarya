
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".child").addEventListener("click", () => {
        console.log("child got fired")
    }, true);

    document.querySelector(".parent").addEventListener("click", () => {
        console.log("Parent got fired")
    }, true);
   
});

