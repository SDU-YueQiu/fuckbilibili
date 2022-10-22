var video = document.getElementById("thisvideo");
var asideWidth = 300;
var minWidth = 500;
var maxWidth = 1500;
var WaH;
var cnttime;
var progresswidth = 600;
var volumewidth = 60;
var curpos = 60;
var halfslider = 6;
var rflag = false;
var barrgeData;
var barrge={
    data:[],
    curtime:0
};
var isreplay=false;

function getbarrge(){
    if(typeof(barrgedate)!="undefined"){
        barrgeData=barrgedate;
    }
    if(barrgeData.length==0) return;
    barrge.data=barrge.data.concat(barrgeData);
    barrge.data.sort(function(a,b){
        return a.time-b.time;
    });
}

function setSize() {
    var dw = 60;
    var width = document.body.clientWidth - asideWidth - dw;
    if (width < minWidth + dw) {
        width = minWidth + dw;
    } else if (width > maxWidth + dw) {
        width = maxWidth + dw;
    }
    var height = width / WaH;
    progresswidth = width;
    video.width = width;
    video.height = height;
    document.getElementById("playwindow").style.width = width + asideWidth - 40 + "px";
    document.getElementById("playbox").style.width = width + "px";
    document.getElementById("playbox").style.height = height + 48 + "px";
    document.getElementById("barrges").style.width = width + "px";
    document.getElementById("barrges").style.height = height + "px";
    document.getElementById("videobox").style.height = height + "px";
    document.getElementById("progress").style.width = width + "px";
    document.getElementById("maside").style.width = asideWidth - 50 + "px";
    document.getElementById("main").style.width = width + asideWidth + "px";

}

video.oncanplay = function () {
    WaH = video.clientWidth / video.clientHeight;
    setSize();
    var wholetime = video.duration;
    document.getElementById("wholetime").innerHTML = formtime(wholetime);
    curtime();
    getbarrge();
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
    cnttime = setInterval(function () {
        curtime();
        setprogress();
    }, 1000);
    if(isreplay){
        clearbarrge();
        getbarrge();
        isreplay=false;
    }
}

function pause() {
    document.getElementById("play").className = "play";
    document.getElementById("innerplay").src = "../source/img/SVGs/学院-视频播放.svg";
    video.pause();
    clearInterval(cnttime);
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
    setprogress();
    isreplay=true;
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
        document.getElementById("barrge-icon").setAttribute("src", "../source/img/SVGs/tanmuClose.svg");
        document.getElementById("barrgebut").setAttribute("onclick", "change(0)");
        document.getElementById("barrges").style.opacity=0;
    }
    else {
        document.getElementById("switch").setAttribute("src", "../source/img/SVGs/tanmuOpen.svg");
        document.getElementById("swtdiv").setAttribute("onclick", "change(1)");
        document.getElementById("barrge-icon").setAttribute("src", "../source/img/SVGs/tanmuOpen.svg");
        document.getElementById("barrgebut").setAttribute("onclick", "change(1)");
        document.getElementById("barrges").style.opacity=1;
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

function setprogress() {
    var cur = video.currentTime / video.duration * progresswidth;
    document.getElementById("now").style.width = cur + "px";
}

document.getElementById("progress").onclick = function (e) {
    var cur = e.offsetX / progresswidth;
    document.getElementById("now").style.width = cur + "px";
    video.currentTime = cur * video.duration;
};

var speedlist = document.getElementById("speed_list").getElementsByTagName("div");
for (var i in speedlist) {
    speedlist[i].onclick = function () {
        var v = this.getAttribute("value");
        document.getElementById("curspeed").innerHTML = "倍速" + v + "&times;";
        video.playbackRate = v;
    }
}

document.getElementById("mute").onclick = function () {
    var muted = video.muted;
    if (muted) {
        this.className = "mute";
        this.title = "静音";
        video.muted = !muted;
        document.getElementById("muteicons").src = "../source/img/SVGs/声音开.svg";

    } else {
        this.className = "muted";
        this.title = "取消静音";
        video.muted = !muted;
        document.getElementById("muteicons").src = "../source/img/SVGs/声音无.svg";
    }
}

function setpos(pos) {
    if (pos < 0) {
        pos = 0;
    } else if (pos > volumewidth) {
        pos = volumewidth;
    }
    document.getElementById("curvolume").style.width = pos + "px";
    document.getElementById("slider-control").style.left = (pos - halfslider) + "px";
    curpos = pos;
    video.volume = curpos / volumewidth;
}

document.getElementById("volume").onclick=function(e){
    if(!rflag){
        setpos(e.offsetX);
    }
    rflag=false;
}

document.getElementById("slider-control").onmousedown=function(e){
    rflag=true;
    var x=e.clientX*0.05;
    document.onmousemove=function(ev){
        var mx=ev.clientX*0.05;
        var ls=mx-x+curpos;
        setpos(ls);
    };
    document.onmouseup=function(){
        document.onmousemove=null;
        return;
    }
}

function showbarrge(){
    var barrges=document.getElementById("barrges");
    var width=parseInt(barrges.style.width);
    var height=parseInt(barrges.style.height);
    if(width<=0) return;
    var top=Math.random()*(height-20);
    var dt=6;
    if(width>600) dt+=2;
    if(width>800) dt+=2;
    if(width>1000) dt+=2;
    var dmtime=Math.random()*10+dt;
    if(data.text.length>10) dmtime+=5;
    if(data.text.length>20) dmtime+=4;
    if(data.text.length>30) dmtime+=3;
    var d2=document.createElement("div");
    var t=document.createTextNode(data.text);
    var attr=document.createAttribute("style");
    attr.value="top:"+top+"px;"+"animation-duration:"+dmtime;
    d2.setAttributeNode(attr);
    d2.appendChild(t);
    barrges.appendChild(d2);
}

function clearbarrge(){
    document.getElementById("barrges").innerHTML="";
    barrge.data.length=0;
    barrge.curtime=0;
}