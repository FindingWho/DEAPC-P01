function tempAlert(msg,duration) {
    var el = document.createElement("div");
    el.setAttribute("style","position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:white;");
    el.innerHTML = msg;
    setTimeout(function(){
    el.parentNode.removeChild(el);
    },duration);
    document.body.appendChild(el);
}

$("#fetcher1").click(function(){
    $(".page-fetcher").load("adm-pages/add-product.php");
    //alert("Is it working?");
});

$("#fetcher2").click(function(){
    $(".page-fetcher").load("adm-pages/edit.php");
    //alert("Is it working?");
});

$("#fetcher3").click(function(){
    $(".page-fetcher").load("adm-pages/remove.php");
    //alert("Is it working?");
});

$("#fetcher4").click(function(){
    $(".page-fetcher").load("adm-pages/check-stock.php");
    //alert("Is it working?");
});