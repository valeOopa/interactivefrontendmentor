"use strict";
console.clear();

const sendInformation = (value)=>{
    return document.querySelector(".selected").textContent = value;
};

const textErr = document.getElementById("err");
const btnSubmit = document.getElementById("btn-submit");
let value;

for(let i = 1; i < document.querySelector(".buttons-grid").children.length+1; i++) {
    document.getElementById(`btn-${i}`).addEventListener("click",(e)=>{
        e.stopPropagation();
        value = sendInformation(document.getElementById(`btn-${i}`).value)
    });
};

document.body.addEventListener("click",()=>{
    value = null;
});

btnSubmit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(value){
        document.querySelector(".container").remove()
        document.querySelector(".container-2").style.display = "block";
        textErr.remove();

    }else textErr.textContent = "Selecciona una opción.";
    
});