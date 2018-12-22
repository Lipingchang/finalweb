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

