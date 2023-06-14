// let dark = document.querySelector(".aboutUs");
//     dark.addEventListener("click", (e)=>{
//       let target = e.target;
//      if(dark.nextElementSibling("click")){
//         document.body.style.backgroundColor = "black";
//      }
//    ;

const btn = document.querySelector('.pic');

btn.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    window.scrollTo(0, 800);
   //$(this).addClass('change-color');
});


