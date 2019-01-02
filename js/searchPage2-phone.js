window.onload = function () {

    //手机筛选的伸缩框 start
    let pulldown = document.getElementsByClassName("search-filter-line-selectMore")[0];//.getElementsByTagName("button")[0];
    let pullup = document.getElementsByClassName("search-filter-line-anti-selectMore")[0];
    let hiddenbox = document.getElementsByClassName("search-filter-lines-hidden")[0];

    console.log(pulldown)
    console.log(pullup)
    console.log(hiddenbox)
    pulldown.addEventListener("click",function(){
        pulldown.style.display = "none";
        pullup.style.display = "block";
        hiddenbox.style.display = "block"
    })
    pullup.addEventListener("click",function(){
        pulldown.style.display = "block";
        pullup.style.display = "none";
        hiddenbox.style.display = "none"
    })
    //手机筛选的伸缩框 end

}