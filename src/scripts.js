var video = document.getElementById("thisvideo");
var asideWidth = 300;
var minWidth = 500;
var maxWidth = 1500;
var WaH;

function setSize() {
    var dw = 60;
    var width = document.body.clientWidth - asideWidth - dw;
    if (width < minWidth + dw) {
        width = minWidth + dw;
    } else if (width > maxWidth + dw) {
        width = maxWidth + dw;
    }
    var height = width / WaH;
    video.width = width;
    video.height = height;
    document.getElementById("playwindow").style.width = width + asideWidth - 40 + "px";
    document.getElementById("playbox").style.width = width + "px";
    document.getElementById("playbox").style.height = height + 48 + "px";
    document.getElementById("videobox").style.height = height + "px";
    document.getElementById("progress").style.width = width + "px";
    document.getElementById("maside").style.width = asideWidth - 60 + "px";
    document.getElementById("main").style.width=width+asideWidth+"px";
}

video.oncanplay = function () {
    WaH = video.clientWidth / video.clientHeight;
    setSize();
    var wholetime = video.duration;
    document.getElementById("wholetime").innerHTML = formtime(wholetime);
    curtime();
}

window.addEventListener("resize", function () {
    setSize()
});

document.getElementById("fullscreen").onclick = function () {
    video.requestFullscreen();
};

function play() {
    document.getElementById("play").className = "pause";
    document.getElementById("innerplay").src = "../source/img/SVGs/学院-视频暂停.svg";
    video.play();
}

function pause() {
    document.getElementById("play").className = "play";
    document.getElementById("innerplay").src = "../source/img/SVGs/学院-视频播放.svg";
    video.pause();
}

document.getElementById("play").onclick = function () {
    if (video.paused) {
        play();
    }
    else {
        pause();
    }
}

video.onclick = function () {
    if (video.paused) {
        play();
    }
    else {
        pause();
    }
};

function curtime() {
    document.getElementById("nowtime").innerHTML = formtime(video.currentTime);
}



function mystop() {
    pause();
    video.currentTime = 0;
}

document.getElementById("stop").onclick = function () {
    mystop();
}

video.onended = function () {
    stop();
}

function formtime(time) {
    time = Math.floor(time);
    var m = Math.floor(time / 60);
    var s = time - m * 60;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    return m + ":" + s;
}

function nowTime() {
    document.getElementById("nowtime").innerHTML = formtime(video.currentTime);
}



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

function changevideo(name) {
    document.getElementById("myplayer").setAttribute("onclick", "pauseorplay(1)");
    switch (name) {
        default:
            alert("你是怎么触发这个弹窗的¿");
            break;
        case 'igt':
            break;
    }
}

function test() {
    let alldiv = document.querySelectorAll('div');
    alldiv.setAttribute("background-color", "black");
}