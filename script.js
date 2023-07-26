document.querySelector("body").addEventListener("keypress", (bodyevent) => {
    document.querySelector("body").style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    console.log("hi");
})

document.querySelector("ul").addEventListener("mouseover", (hoverEvent) => {
    hoverEvent.target.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
})

let result = "";

document.querySelector(".i").addEventListener("click", (clicked)=>{
    clicked.target.style.backgroundImage = "url('./i.jpg')";
    result += "1";
    console.log(result);
    
if(result === "111"){
    
    const showResulth1 = document.createElement("h1");
    const main  = document.querySelector("main");
    main.prepend(showResulth1);
    document.querySelector("h1").innerText = "Aditya";
    document.querySelector("h1").style.fontSize = "60px ";
    document.querySelector("h1").style.marginTop = "70px ";
    document.querySelector("h1").style.marginBottom = "0px ";
    document.querySelector("h1").style.textAlign = "center";

}
    
})

document.querySelector(".love").addEventListener("click", (clicked)=>{
    clicked.target.style.backgroundImage = "url('./loves.jpg')";
    
    result += "1";
    console.log(result);
    
if(result === "111"){
    
    const showResulth1 = document.createElement("h1");
    const main  = document.querySelector("main");
    main.prepend(showResulth1);
    document.querySelector("h1").innerText = "Aditya";
    document.querySelector("h1").style.fontSize = "60px ";
    document.querySelector("h1").style.marginTop = "70px ";
    document.querySelector("h1").style.marginBottom = "0px ";
    document.querySelector("h1").style.textAlign = "center";
}
})

document.querySelector(".you").addEventListener("click", (clicked)=>{
    clicked.target.style.backgroundImage = "url('./you.jpg')";
    
    result += "1";
    console.log(result);
    
if(result === "111"){
    
    const showResulth1 = document.createElement("h1");
    const main  = document.querySelector("main");
    main.prepend(showResulth1);
    document.querySelector("h1").innerText = "Aditya";
    document.querySelector("h1").style.fontSize = "60px ";
    document.querySelector("h1").style.marginTop = "70px ";
    document.querySelector("h1").style.marginBottom = "0px ";
    document.querySelector("h1").style.textAlign = "center";
}
})

