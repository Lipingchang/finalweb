/**
 * Created by DogEgg on 2018/12/22.
 */


let panelList = ["miaosha","dapai","tesepingdao","youjinping","shanghaowu","xiangguohuo","xunhaodian","genduoshangpin"]
let panelTop = 50;
let panelBottom = 100;
var shown = false;
window.addEventListener('scroll',
    function (e) {
        if( (window.pageYOffset > 700) && (!shown) ){
            console.log("显示 顶部")
            shown = !shown;
            document.getElementById("topsearch").setAttribute("class","topsearch-fix")
            document.getElementById("elevator").setAttribute("class","showshow");
        }else if( window.pageYOffset < 640 && shown ){
            console.log("隐藏 顶部",shown);
            shown = !shown;
            document.getElementById("topsearch").setAttribute("class","")
            document.getElementById("topsearch").setAttribute("class","topsearch-fix-up")
            document.getElementById("elevator").setAttribute("class","notshowshow");

        }
        for( let i = 0; i<panelList.length; i++ ){
            //console.log( )
            let currentTop = document.getElementById(panelList[i]).getBoundingClientRect().y;
            if( currentTop > panelTop && currentTop < panelBottom ){
                clearPanel();
                //console.log(document.getElementById(panelList[i]).getBoundingClientRect())
                //console.log(document.getElementById("miaosha").getBoundingClientRect())
                document.getElementById("elevator").children[i].setAttribute("class","selected");
                break;
            }
            //if( i == 0 && currentTop < 0 ){
            //    console.log(currentTop);
            //    clearPanel();
            //}
        }

    }
);
function clearPanel(){
    for( let j = 0; j<panelList.length; j++ ){
        document.getElementById("elevator").children[j].setAttribute("class","");
    }
}

let gototopBTN = document.getElementsByClassName("gotop-wrap")[0];

gototopBTN.addEventListener('click', function () {
    //cancelAnimationFrame(timer);
    let timer = requestAnimationFrame(function fn(){
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }
    });
})


for( let i = 0; i<panelList.length ; i++ ){
    let btn = document.getElementById("elevator").children[i];
    let id = panelList[i];
    btn.addEventListener("click", function (){
        let nowpos = document.body.scrollTop || document.documentElement.scrollTop;
        let goto = document.getElementById(id).getBoundingClientRect().y;
        console.log("nowpos",nowpos,"goto",goto,nowpos+goto);
        goto = nowpos + goto-70;
        let stepcount = 12;
        let step = (goto-nowpos) / stepcount;

        //document.documentElement.scrollTop = goto;
        let j = 0;
        requestAnimationFrame(function fun(){
            j++;
            let k = document.body.scrollTop = document.documentElement.scrollTop = nowpos + (step)*j;
            //console.log("nowpos",k,"goto",goto,j,step);
            if( j < stepcount ) {
                requestAnimationFrame(fun);
            }
        })


    } );
}

let hour = document.getElementsByClassName("hour")[0];
let minutes = document.getElementsByClassName("minutes")[0];
let seconds = document.getElementsByClassName("seconds")[0];
hour.innerHTML = "24";
minutes.innerHTML = "00";
seconds.innerHTML = "00";

setInterval(function () {
    r = getDec(hour.innerHTML,minutes.innerHTML,seconds.innerHTML)
    hour.innerHTML = r[0];
    minutes.innerHTML = r[1];
    seconds.innerHTML = r[2];
},1000);

function getDec(h,m,s){
    let hh = parseInt(h);
    let mm = parseInt(m);
    let ss = parseInt(s)-1;

    if( ss < 0 ){
        ss = 59;
        mm -= 1;
    }
    if( mm < 0 ){
        mm = 59;
        hh -= 1;
    }

    if( hh < 0 ){
        hh = 24;
    }

    h = hh  +""; if (h.length == 1) h = '0'+h;
    m = mm + ""; if( m.length == 1) m = '0'+m;
    s = ss + "";if( s.length == 1) s = '0'+s;
    //console.log(h,m,s);
    return [h,m,s];
}

//轮播
let sliderbtns = document.getElementsByClassName("slider-nav-item");
let sliderbtn_cur = 0;
for( let i=0; i<sliderbtns.length; i++ ){
    let btn = sliderbtns[i];
    btn.addEventListener("mouseover",function(){
        if( i != sliderbtn_cur ){
            sliderbtn_cur = i;
            let slider = document.getElementById("main-global-slider");
            slider.setAttribute("class","main-global-slider-img"+i);
            for( let k =0; k<sliderbtns.length; k++ ){
                sliderbtns[k].setAttribute("class","slider-nav-item")
            }
            sliderbtns[i].setAttribute("class","slider-nav-item cur");
        }
    })
}

//秒杀的 滑动栏：
let minleft = -(document.getElementById("slide-content-items").childElementCount - 5) * 200;
let maxleft = 0;
document.getElementById("slide-content-items").style.left = maxleft + "px";

document.getElementById("slide-content-btn-right").addEventListener("click", function () {
    let left = parseInt( document.getElementById("slide-content-items").style.left ) || 0;
    console.log(left);
    left = (left - 200 > minleft)? (left-200): minleft;
    console.log(left);
    document.getElementById("slide-content-items").style.left = left+"px";
})
document.getElementById("slide-content-btn-left").addEventListener("click", function () {
    let left = parseInt( document.getElementById("slide-content-items").style.left ) || 0;
    console.log(left);
    left = (left + 200 <maxleft ) ? (left+200): 0;
    console.log(left);
    document.getElementById("slide-content-items").style.left = left+"px";
})