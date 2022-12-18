
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

$('#activitsInner1').hover(function(){
           $('#activitsInner2-1').css('top','70%');
           $('#activitsInner2-1').css('color','var(--fire--)');
      }
    ,function(){
             $('#activitsInner2-1').css('top','100%');
             $('#activitsInner2-1').css('color','white');
  }
  );

  $('#activitsInner2').hover(function(){
           $('#activitsInner2-2').css('top','70%');
           $('#activitsInner2-2').css('color','var(--fire--)');
      }
    ,function(){
             $('#activitsInner2-2').css('top','100%');
             $('#activitsInner2-2').css('color','white');
  }
  );

  $('#activitsInner3').hover(function(){
           $('#activitsInner2-3').css('top','70%');
           $('#activitsInner2-3').css('color','var(--fire--)');
      }
    ,function(){
             $('#activitsInner2-3').css('top','100%');
             $('#activitsInner2-3').css('color','white');
  }
  );

  $('#activitsInner4').hover(function(){
           $('#activitsInner2-4').css('top','70%');
           $('#activitsInner2-4').css('color','var(--fire--)');
      }
    ,function(){
             $('#activitsInner2-4').css('top','100%');
             $('#activitsInner2-4').css('color','white');
  }
  );
     
     $('#activitsInner5').hover(function(){
           $('#activitsInner2-5').css('top','70%');
           $('#activitsInner2-5').css('color','var(--fire--)');
      }
    ,function(){
             $('#activitsInner2-5').css('top','100%');
             $('#activitsInner2-5').css('color','white');
  }
  );

   $('#activitsInner6').hover(function(){
           $('#activitsInner2-6').css('top','70%');
           $('#activitsInner2-6').css('color','var(--fire--)');
      }
    ,function(){
             $('#activitsInner2-6').css('top','100%');
             $('#activitsInner2-6').css('color','white');
  }
  );
