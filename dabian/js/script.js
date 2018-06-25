//轮播
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed:1000,//轮播过度时间
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//返回顶部
function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo (0,currentScroll - (currentScroll/20));
    }
}

var gotop = document.querySelector(".fan");



if(gotop!==null){

    window.addEventListener("scroll",function(){
        if(document.body.scrollTop>300){
            gotop.style.opacity = "0.7";
        }else{
            gotop.style.opacity = "0";
        }
    });

    gotop.onclick = function(){
        smoothscroll();
    }
}




//分类头部

new Vue({
    el:"#remai",
    data:{
        arrs:[
            {img:"img/fenlei/top/鲜果.jpg"},
            {img:"img/fenlei/top/石榴汁.jpg"},
            {img:"img/fenlei/top/鲜奶.jpg"},
            {img:"img/fenlei/top/酸奶.jpg"},
            {img:"img/fenlei/top/古皂.jpg"},
            {img:"img/fenlei/top/蜂蜜.jpg"},
            {img:"img/fenlei/top/蜂王浆.jpg"},
            {img:"img/fenlei/top/蜂胶.jpg"},
            {img:"img/fenlei/top/牛羊肉.jpg"},
            {img:"img/fenlei/top/熟食.jpg"},
            {img:"img/fenlei/top/藏红花.jpg"},
            {img:"img/fenlei/top/枸杞.jpg"},
            {img:"img/fenlei/top/黑枸杞.jpg"},
            {img:"img/fenlei/top/奶粉.jpg"},
            {img:"img/fenlei/top/长绒棉被.jpg"}
        ],
        arr1:[
            {img:"img/fenlei/liangyou/大列巴.jpg"},
            {img:"img/fenlei/liangyou/大米.jpg"},
            {img:"img/fenlei/liangyou/面粉.jpg"},
            {img:"img/fenlei/liangyou/面条.jpg"},
            {img:"img/fenlei/liangyou/大豆油.jpg"},
            {img:"img/fenlei/liangyou/菜籽油.jpg"},
            {img:"img/fenlei/liangyou/橄榄油.jpg"},
            {img:"img/fenlei/liangyou/山茶油.jpg"},
            {img:"img/fenlei/liangyou/亚麻籽油.jpg"},
            {img:"img/fenlei/liangyou/酸辣粉.jpg"}
        ],
        arr2:[
            {img:"img/fenlei/zaliang/紫米.jpg"},
            {img:"img/fenlei/zaliang/糯米.jpg"},
            {img:"img/fenlei/zaliang/糙米.jpg"},
            {img:"img/fenlei/zaliang/小米.jpg"},
            {img:"img/fenlei/zaliang/绿豆.jpg"},
            {img:"img/fenlei/zaliang/黑香米.jpg"},
            {img:"img/fenlei/zaliang/黄豆.jpg"},
            {img:"img/fenlei/zaliang/花生.jpg"},
            {img:"img/fenlei/zaliang/鹰嘴豆.jpg"},
            {img:"img/fenlei/zaliang/芝麻.jpg"},
            {img:"img/fenlei/zaliang/燕麦.jpg"},
            {img:"img/fenlei/zaliang/高粱米.jpg"},
            {img:"img/fenlei/zaliang/芸豆.jpg"},
            {img:"img/fenlei/zaliang/黑豆.jpg"},
            {img:"img/fenlei/zaliang/红小豆.jpg"},
            {img:"img/fenlei/zaliang/玉米面.jpg"},
            {img:"img/fenlei/zaliang/玉米碴.jpg"},
            {img:"img/fenlei/zaliang/薏仁米.jpg"},
            {img:"img/fenlei/zaliang/大黄米.jpg"}
        ]
    }
})

new Vue({
    el:"#haha",
    data:{
        arr3:[
            {img:"img/tuijian/20111226006.jpg",jia:"￥500"},
            {img:"img/tuijian/20111226008.jpg",jia:"￥500"},
            {img:"img/tuijian/20111226012.jpg",jia:"￥500"},
            {img:"img/tuijian/20111226013.jpg",jia:"￥500"},
            {img:"img/tuijian/20111226022.jpg",jia:"￥500"},
            {img:"img/tuijian/mix0026.jpg",jia:"￥500"},
            {img:"img/tuijian/mix0027.jpg",jia:"￥500"},
            {img:"img/tuijian/mix0030.jpg",jia:"￥500"},
            {img:"img/tuijian/mix0032.jpg",jia:"￥500"},
            {img:"img/tuijian/sgz_005.jpg",jia:"￥500"},
            {img:"img/tuijian/sgz_007.jpg",jia:"￥500"},
            {img:"img/tuijian/sgz_008.jpg",jia:"￥500"},
            {img:"img/tuijian/sgz_011.jpg",jia:"￥500"},
            {img:"img/tuijian/sgz_018.jpg",jia:"￥500"},
            {img:"img/tuijian/tc20121221017.jpg",jia:"￥500"},
            {img:"img/tuijian/tc20151112002.jpg",jia:"￥500"},
            {img:"img/tuijian/tc20151125014.jpg",jia:"￥500"},
            {img:"img/tuijian/tc20170410002.jpg",jia:"￥500"},
            {img:"img/tuijian/tc20170502001.jpg",jia:"￥500"},
            {img:"img/tuijian/tc20170502002.jpg",jia:"￥500"}
        ]
    }
})