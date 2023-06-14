function tempAlert(msg,duration) {
    var el = document.createElement("div");
    el.setAttribute("style","position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:white;");
    el.innerHTML = msg;
    setTimeout(function(){
    el.parentNode.removeChild(el);
    },duration);
    document.body.appendChild(el);
}

$("#fetcher").click(function(){
    $(".page-fetcher").load("adm-pages/add-product.php");
    //alert("Is it working?");
});