let count = 0;

document.getElementById("increase").addEventListener("click", increase());

if(count < 0){
    document.getElementById("count").style.color = "red";
}

function increase(){
count++;
document.getElementById("count").textContent = count;
}

function decrease() {
count--;
document.getElementById("count").textContent = count;
}



