let groupBtn = document.getElementById("groups");
console.log(groupBtn);
let groupCollapsedContainer = document.querySelector("#groups + div");
console.log()
let eventsBtn = document.getElementById("events");
let eventsCollapsedContainer = document.querySelector("#events + div");
let photosBtn = document.getElementById("photos");
let photosCollapsedContainer = document.querySelector("#photos + div");
let collapsedBtn = document.querySelector(".collapsed-btn");
let collapsedList = document.querySelector(".collapsedLista");
groupBtn.addEventListener('click',function () { 
    
    groupCollapsedContainer.classList.toggle("show_hide");
 });
 eventsBtn.addEventListener('click',function () { 
    eventsCollapsedContainer.classList.toggle("show_hide");
});
photosBtn.addEventListener('click',function () { 
    photosCollapsedContainer.classList.toggle("show_hide");
});
collapsedBtn.addEventListener('click',function () { 
    collapsedList.classList.toggle("show_hide");
});