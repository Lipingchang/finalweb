/**
 * Created by DogEgg on 2018/12/22.
 */

var shown = false;
window.addEventListener('scroll',
    function (e) {
        if( (window.pageYOffset > 640) && (!shown) ){
            console.log("显示 顶部")
            shown = !shown;
            document.getElementById("topsearch").setAttribute("class","topsearch-fix")
        }else if( window.pageYOffset < 640 && shown ){
            console.log("隐藏 顶部",shown);
            shown = !shown;
            document.getElementById("topsearch").setAttribute("class","")
            document.getElementById("topsearch").setAttribute("class","topsearch-fix-up")

        }
    }
);
