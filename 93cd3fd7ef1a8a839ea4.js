import image1 from"./../../img/MenuCarousel/BlackJackMenuImg.png";import image2 from"./../../img/MenuCarousel/SlotMachineMenuImg.png";import image3 from"./../../img/MenuCarousel/RouletteMenuImg.png";var Homepage=()=>{var a=document.querySelector("main"),e='\n  <div class="backHome">\n  <div class="container">\n  <div class="slider">\n    <div class="box1">\n    <a class="nav-link" aria-current="page" href="/blackJack" data-uri="/blackJack"><img class="ImageMenu" src="'.concat(image1,'"></a>\n    </div>\n    <div class="box2">\n    <a class="nav-link" aria-current="page" href="/slotMachine" data-uri="/slotMachine"><img class="ImageMenu" src="').concat(image2,'"></a>\n    </div>\n    <div class="box3">\n    <a class="nav-link" aria-current="page" href="/roulette" data-uri="/roulette"><img class="ImageMenu" src="').concat(image3,'"></a>\n    </div>\n    <div class="box4">\n    <a class="nav-link" aria-current="page" href="/blackJack" data-uri="/blackJack"><img class="ImageMenu" src="').concat(image1,'"></a>\n    </div>\n    <div class="box5">\n    <a class="nav-link" aria-current="page" href="/slotMachine" data-uri="/slotMachine"><img class="ImageMenu" src="').concat(image2,'"></a>\n    </div>\n    <div class="box6">\n    <a class="nav-link" aria-current="page" href="/roulette" data-uri="/roulette"><img class="ImageMenu" src="').concat(image3,'"></a>\n    </div>\n  </div>\n</div>\n</div>\n<div id="test"></div>\n  ');a.innerHTML=e};function rotate(){var a=$(".slider div:last-child").clone();$(".slider div").removeClass("firstSlide"),$(".slider div:last-child").remove(),$(".slider").prepend(a),$(a).addClass("firstSlide")}window.setInterval((function(){rotate()}),3e3),jQuery,window;export default Homepage;