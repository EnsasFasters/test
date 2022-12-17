
var sNavBarPhoneCounter=0;
function NavBarPhone(){
  var sNavBarPhone = window.document.getElementById("headerNavBar");  
  if(sNavBarPhoneCounter%2==0){
	    sNavBarPhone.style.left = '0';
   }else{
		sNavBarPhone.style.left = '-100vw';
   }
    sNavBarPhoneCounter++;
   }