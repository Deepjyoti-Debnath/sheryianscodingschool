
// const scroll = new LocomotiveScroll({
// 	el: document.querySelector('.main'),
// 	smooth: true
// });


function showTime(){
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var session = "AM";
 

if(h>12){
	h = h-12;
	// 13-12=1;
}

if(h>=12){
	session="PM";
}


h = h < 10 ? "0"+h : h;
m = m < 10 ? "0"+m : m;
s = s < 10 ? "0"+s : s;


var time = "Time" + ": " + h + " : " + m + " : " + s + " " + session;
document.getElementsByTagName("div")[0].innerText= time;
setTimeout(showTime,1000);
}



let a = document.querySelector(".cursor");
let b = document.querySelector("window");


// b.addEventListener('mousemove',function(om){
// 	a.style.left= om.x+"px"
// 	a.style.top= om.y+"px"

// })

	window.addEventListener('mousemove',function(dets){
	a.style.left= dets.x+"px"
	a.style.top=dets.y+"px"
})

	function openWin(){
		window.open("https://www.sheryians.com","width:100vw", "height:100vh")
	}

 function course(){
	window.open("https://sheryians.com/courses/")
 }

let nav = document.querySelector(".icon");
let main = document.querySelector(".main");

 let toggleNavbar = () => {
	main.classList.toggle('active')
 }

nav.addEventListener('click', () => toggleNavbar())
let ex = document.querySelector(".btn");

ex.addEventListener('click',() => {
	window.open('https://www.youtube.com/results?search_query=sheryians')
})



// Quiz has started

var f = document.querySelector(".fst");
var s = document.querySelector(".snd");
var t = document.querySelector(".trd");
var h = document.querySelector(".frth");



f.addEventListener('click',function(){
	f.style.border="5px solid green"
	f.style.boxShadow="0px 0px 20px green"
	s.style.border="5px solid red"
	s.style.boxShadow="0px 0px 20px red"
	t.style.border="5px solid red"
	t.style.boxShadow="0px 0px 20px red"
	h.style.border="5px solid red"
	h.style.boxShadow="0px 0px 20px red"
})

s.addEventListener('click',function(){
	f.style.border="5px solid green"
	f.style.boxShadow="0px 0px 20px green"
	s.style.border="5px solid red"
	s.style.boxShadow="0px 0px 20px red"
})
t.addEventListener('click',function(){
	f.style.border="5px solid green"
	f.style.boxShadow="0px 0px 20px green"
	t.style.border="5px solid red"
	t.style.boxShadow="0px 0px 20px red"
})
h.addEventListener('click',function(){
	f.style.border="5px solid green"
	f.style.boxShadow="0px 0px 20px green"
	h.style.border="5px solid red"
	h.style.boxShadow="0px 0px 20px red"
})


let an = document.querySelector(".an");
let con = document.querySelector(".con");
let arr = document.querySelector(".arr");
let es = document.querySelector(".es");

an.addEventListener('click',function(){
	an.style.border="5px solid red"
	an.style.boxShadow="0px 0px 20px red"
	con.style.border="5px solid green"
	con.style.boxShadow="0px 0px 20px green"
	
})

con.addEventListener('click',function(){
	an.style.border="5px solid red"
	an.style.boxShadow="0px 0px 20px red"
	con.style.border="5px solid green"
	con.style.boxShadow="0px 0px 20px green"
	arr.style.border="5px solid red"
	arr.style.boxShadow="0px 0px 20px red"
	es.style.border="5px solid red"
	es.style.boxShadow="0px 0px 20px red"
})
arr.addEventListener('click',function(){
	con.style.border="5px solid green"
	con.style.boxShadow="0px 0px 20px green"
	arr.style.border="5px solid red"
	arr.style.boxShadow="0px 0px 20px red"
})
es.addEventListener('click',function(){
	con.style.border="5px solid green"
	con.style.boxShadow="0px 0px 20px green"
	es.style.border="5px solid red"
	es.style.boxShadow="0px 0px 20px red"
})


// Home section

let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");
let card4 = document.querySelector("#card4");


card1.addEventListener('mouseenter',function(){
	card2.style.filter="blur(10px)"
	card3.style.filter="blur(10px)"
	card4.style.filter="blur(10px)"
})
card1.addEventListener('mouseleave',function(){
	card2.style.filter="blur(0)"
	card3.style.filter="blur(0)"
	card4.style.filter="blur(0)"
})

card2.addEventListener('mouseenter',function(){
	card1.style.filter="blur(10px)"
	card3.style.filter="blur(10px)"
	card4.style.filter="blur(10px)"
})
card2.addEventListener('mouseleave',function(){
	card1.style.filter="blur(0)"
	card3.style.filter="blur(0)"
	card4.style.filter="blur(0)"
})

card3.addEventListener('mouseenter',function(){
	card2.style.filter="blur(10px)"
	card1.style.filter="blur(10px)"
	card4.style.filter="blur(10px)"
})
card3.addEventListener('mouseleave',function(){
	card2.style.filter="blur(0)"
	card1.style.filter="blur(0)"
	card4.style.filter="blur(0)"
})

card4.addEventListener('mouseenter',function(){
	card2.style.filter="blur(10px)"
	card3.style.filter="blur(10px)"
	card1.style.filter="blur(10px)"
})
card4.addEventListener('mouseleave',function(){
	card2.style.filter="blur(0)"
	card3.style.filter="blur(0)"
	card1.style.filter="blur(0)"
})


var contact = document.querySelector("#contact");
var preload = document.querySelector(".preloader")

contact.addEventListener('click',function(){
	window.open("https://sheryians.com/Courses/CoursesDetails/Mastering%20the%20Art%20of%20Resume")
})

var tContact = document.querySelector(".trd-contact");

tContact.addEventListener('click',function(){
	setTimeout(function(){
		// document.write("hello")
	document.write("<center><h1>Please wait</h1></center>")
	},1000)
	setTimeout(function(){
		window.open("https://sheryians.com/Courses/CoursesDetails/Mastering%20the%20Art%20of%20Resume")
	},2000)
})


let iccon = document.querySelector("#iccon");
let img = document.querySelector(".img");
let image = document.querySelector("#image");
let theory = document.querySelector(".theory");

iccon.addEventListener('click',function(){
	  img.style.display="none"
		theory.style.display="block"
})
image.addEventListener('click',() => {
	window.open("https://www.postermywall.com/index.php/art/template/2d5d49d6f30406e32216d7098e1c0fff/junior-coding-classes-post-template-design")
})
img.addEventListener('mouseenter',function(){
	a.style.filter="blur(0)"
	a.style.backgroundColor="lightseagreen"
	a.style.opacity="0.5"
})
img.addEventListener('mouseleave',function(){
	a.style.filter="blur(50px)"
})


 const sign = document.getElementById("sign");

 sign.addEventListener('click',function(){
	setTimeout(function(){
    window.open("j2.html")
	},2000)
 })