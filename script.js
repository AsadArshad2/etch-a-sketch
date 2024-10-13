for (let i=0; i<10000; i++){
    let div = document.createElement("div");
div.style.width = "9.6px";
div.style.height = "9.6px";
div.style.background = "red";
div.style.color = "white";
div.style.margin = "0px";


div.addEventListener('mouseover', () => {
    div.style.background = "black";
});

document.getElementById("main").appendChild(div);
}

function clicked(){
    let lol = prompt("Enter a number ");
    // let main = document.getElementById("main");
    // main.removeChild;
    document.getElementById("main").replaceChildren();
    let volume = lol*lol;
    let size = 960/lol;
    console.log(size);
    
    for (let i=0; i<volume; i++){
        let div = document.createElement("div");
    div.style.width = size+"px";
    div.style.height = size+"px";
    div.style.background = "red";
    div.style.color = "white";
    div.style.margin = "0px";
    
    
    div.addEventListener('mouseover', () => {
        div.style.background = "black";
    });
    document.getElementById("main").appendChild(div);

}
}

