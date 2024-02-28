// let website = document.querySelector("body")

// let buttons = document.querySelectorAll("button")

// buttons.forEach(function(button){
//     button.addEventListener("click", function(dets){
//         if(dets.target.id === "red"){
//             website.style.backgroundColor = dets.target.id
//         }
//         if(dets.target.id === "orange"){
//             website.style.backgroundColor = dets.target.id
//         }
//         if(dets.target.id === "yellow"){
//             website.style.backgroundColor = dets.target.id
//         }
//         if(dets.target.id === "green"){
//             website.style.backgroundColor = dets.target.id
//         }
//         if(dets.target.id === "blue"){
//             website.style.backgroundColor = dets.target.id
//         }
//         if(dets.target.id === "indigo"){
//             website.style.backgroundColor = dets.target.id
//         }
//         if(dets.target.id === "violet"){
//             website.style.backgroundColor = dets.target.id
//         }
//     })
// })

// let website = document.querySelector("body")

// let buttons = document.querySelectorAll("button")

// buttons.forEach(function (button) {
//     button.addEventListener("click", function (dets) {
//         switch (button) {
//             case red:
//                 website.style.backgroundColor = dets.target.id
//                 break;
//             case orange:
//                 website.style.backgroundColor = dets.target.id
//                 break;
//             case yellow:
//                 website.style.backgroundColor = dets.target.id
//                 break;
//             default:
//             case green:
//                 website.style.backgroundColor = dets.target.id
//                 break;
//             case blue:
//                 website.style.backgroundColor = dets.target.id
//                 break;
//             case indigo:
//                 website.style.backgroundColor = dets.target.id
//                 break;
//             case violet:
//                 website.style.backgroundColor = dets.target.id
//                 break;
//                 break;
//         }
//     })
// })

// let website = document.querySelector("body")

// let buttons = document.querySelector(".button-container")

// buttons.addEventListener("click", function (color) {
//     website.style.backgroundColor = color.target.id
// })

let website = document.querySelector("body")

let buttons = document.querySelectorAll("button")

buttons.forEach(function(button){
    button.addEventListener("click", function(color){
        website.style.backgroundColor = color.target.id
    })
})