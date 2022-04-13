var x = 0;
function left(){
    x=x-370;
    document.getElementById("id1").style.left=x.toString()+"px";
    console.log(x);
}
function right(){
    x=x+370;
    document.getElementById("id1").style.left=x.toString()+"px";
    console.log(x);
}
function show(x){
    document.getElementById(x).style.display="flex";
}
function hide(x){
    document.getElementById(x).style.display="none";
}