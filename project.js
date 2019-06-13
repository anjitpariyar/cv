
var count,button,i,text,j;
// for changing hamburger icon into cross
count=0;
i=0;


var button=document.querySelector('#crisscross');
button.addEventListener('click',function(){
if (button.classList.contains('fa-bars')) {
  button.classList.remove('fa-bars');
  button.classList.add('fa-times');
} else {

  button.classList.add('fa-bars');
  button.classList.remove('fa-times');
}


});

//animate at start;

type();

window.addEventListener('scroll',function(){
	 var scrolled= window.pageYOffset;
	var contact=document.querySelector('.contact');
	var subcontact=document.querySelector('.subcontact');
	var addtop=document.querySelector('.addtop');
	var phone=document.querySelector('.phone');
	var introimg=document.querySelector('.introimg');
	var innerkcc=document.querySelector('.innerkcc');
	var webcv=document.querySelector('.btn4');
	var institute=document.querySelector('.btn3');
	var hospital=document.querySelector('.btn2');
	var game=document.querySelector('.btn1');

	var element;

	
	
    
	contact.style.transform='translate3d(0, '+scrolled*0.25+'px, 0)';
    
	phone.style.transform='translate3d('+scrolled*0.2+'px,0, 0)';
	addtop.style.transform='translate3d('+scrolled*(-0.25)+'px,0, 0)';
	subcontact.style.transform='translate3d(0,'+scrolled*(0.1)+'px, 0)';
	introimg.style.transform='translate3d(0, '+scrolled*(-0.2)+'px, 0)';

	// demo projects

	

subcontact.style.overflow='hidden';
if(scrolled>=175)
 document.querySelector('.top').style.display='inline';
 else
document.querySelector('.top').style.display='none';
if (scrolled>=2655) {
	innerkcc.style.display='inline-block';
}
else
	innerkcc.style.display='none';



	




})












function type(){
	text= "Anjit Pariyar - A Web CV";
if(i<text.length){

	
document.querySelector('#home').innerHTML+=text.charAt(i);
i++;
 setTimeout(type,200);	
}

}

