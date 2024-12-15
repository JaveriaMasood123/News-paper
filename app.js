let extracontent1= document.getElementById("extracontent1");
let extracontent2= document.getElementById("extracontent2");
let extracontent3= document.getElementById("extracontent3");
let extracontent4= document.getElementById("extracontent4");

let btn1= document.getElementById("btn1");
let btn2= document.getElementById("btn2");
let btn3= document.getElementById("btn3");
let btn4= document.getElementById("btn4");

btn1.onclick = () =>{
    if(extracontent1.style.display==="none"){
    extracontent1.style.display="inline";
    btn1.textContent="Read less";
}
else{
    extracontent1.style.display="none";
    btn1.textContent="Read more";
}
}


btn2.onclick = () =>{
    if(extracontent2.style.display==="none"){
    extracontent2.style.display="inline";
    btn2.textContent="Read less";
}
else{
    extracontent2.style.display="none";
    btn2.textContent="Read more";
}
}

btn3.onclick = () =>{
    if(extracontent3.style.display==="none"){
    extracontent3.style.display="inline";
    btn3.textContent="Read less";
}
else{
    extracontent3.style.display="none";
    btn3.textContent="Read more";
}
}
btn4.onclick = () =>{
    if(extracontent4.style.display==="none"){
    extracontent4.style.display="inline";
    btn4.textContent="Read less";
}
else{
    extracontent4.style.display="none";
    btn4.textContent="Read more";
}
}