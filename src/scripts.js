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
    switch (name) {
        default:
            alert("你是怎么触发这个弹窗的¿");
            break;
        case 'igt':
            myvideo.src = "../source/video/igt.mp4";
            break;
    }
}

function mprint() {
    alert(myvideo.duration);
}