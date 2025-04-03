var textarea_html = document.getElementById("textarea");


function f1(e){
    var value = e.value;
    textarea.style.fontSize = value + "px";
}

function f2(e){
    if(textarea.style.fontWeight == "bold")
        {
            textarea.style.fontWeight = "normal";
        }
        else{
            textarea.style.fontWeight = "bold";
        }
}

function f3(e){
    if(textarea.style.fontStyle == "italic")
        {
            textarea.style.fontStyle = "normal";
        }
        else{
            textarea.style.fontStyle = "italic";
        }
            
}

function f4(e){
    if(textarea.style.textDecoration == "underline")
        {
            textarea.style.textDecoration = "none" ;
        }
        else{
            textarea.style.textDecoration = "underline";
        }
}

function f5(e){
    
    textarea.style.textAlign = "left";
}

function f6(e){
    textarea.style.textAlign = "center";
}

function f7(e){
    textarea.style.textAlign = "right";
}

function f8(e){
    if(textarea.style.textTransform == "uppercase"){
        textarea.style.textTransform = "none";
    }
    else{
        textarea.style.textTransform = "uppercase";
    }
}

function f9(e){
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "captalize";
    textarea.value = ""; 
}

function f10(e){
    var value = e.value;
    textarea.style.color = value;
}

window.addEventListener("load"), ()=>{ 
    textarea.value = "";
}