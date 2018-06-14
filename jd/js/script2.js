var search=document.querySelector(".search");

var ad = document.querySelector(".ad");
var guan = document.querySelector("#guanbi");

if(sessionStorage.ad = "2"){
    ad.style.display="none";
    search.style.top = "0";
}else{
    ad.style.display="block";
}

guan.onclick = function(){
    ad.style.display="none";
    sessionStorage.ad = "2"
}