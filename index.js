
let count = 2;
document.getElementById('increasebutton').onclick = function(){
    count+=2;
    document.getElementById('myWork').innerHTML = count;
}

document.getElementById('decreasebutton').onclick = function(){
    count-=2;
    document.getElementById('myWork').innerHTML = count;
}
