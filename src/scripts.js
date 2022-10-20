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
    document.getElementById("myplayer").setAttribute("onclick","pauseorplay(1)");
    switch (name) {
        default:
            alert("你是怎么触发这个弹窗的¿");
            break;
        case 'igt':
            myvideo.src = "../source/video/igt.mp4";
            break;
    }
}

function pauseorplay(now) {
    if(now==0){
        alert("选择一个视频再点播放器喵~")
    }
    else{
        if(myvideo.paused==false){
            myvideo.pause();
        }
        else myvideo.play();
    }
}