var ovideo = document.querySelector("player");
function change(now) {
    if (now == 1) {
        document.getElementById("switch").setAttribute("src", "../source/img/SVGs/tanmuClose.svg");
        document.getElementById("swtdiv").setAttribute("onclick", "change(0)");
    }
    else {
        document.getElementById("switch").setAttribute("src", "../source/img/SVGs/tanmuOpen.svg");
        document.getElementById("swtdiv").setAttribute("onclick", "change(1)");
    }
}
function start() {
    /* alert("fuckyou"); */
    document.querySelector("player").setAttribute("src","../source/video/i got smoke.mp4");
    
    alert("fuckyou");
}