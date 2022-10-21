var input=prompt('输入数字改变倍速，输入n切换至夜间模式');
console.dir(input);
if (input == 'n') {
    document.querySelector(".video-container-v1").style.backgroundColor = "#3d3d3d";
    document.querySelector(".comment-container").style.backgroundColor = "#3d3d3d";
    document.querySelector(".bui-collapse-header").style.backgroundColor = "#3d3d3d";
    document.querySelector(".bili-header__bar").style.backgroundColor = "#3d3d3d";
    document.querySelector(".reply-tag-item").style.backgroundColor = "#3d3d3d";
    document.querySelector("#nav-searchform").style.backgroundColor = "#3d3d3d";
}
else{
    var temp = document.createElement('script');
    temp.setAttribute('type','text/javascript');
    temp.innerHTML="document.querySelector('bwp-video').playbackRate = 3;";
}