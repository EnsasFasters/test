    var sNavBarPhoneCounter=0;
  $('#slideNavBarButton').click(function(){
   if(sNavBarPhoneCounter%2==0){
      $('#headerNavBar').css('left','0');
   }else{
      $('#headerNavBar').css('left','-120vw');
   }
    sNavBarPhoneCounter++;
  }
  );
$('headerNavBar')

$('#activitsInner1').hover(function(){
           $('#activitsInner2-1').css('top','70%');
           $('#activitsInner2-1').css('color','yellow');
      }
    ,function(){
             $('#activitsInner2-1').css('top','100%');
             $('#activitsInner2-1').css('color','white');
  }
  );

  $('#activitsInner2').hover(function(){
           $('#activitsInner2-2').css('top','70%');
           $('#activitsInner2-2').css('color','yellow');
      }
    ,function(){
             $('#activitsInner2-2').css('top','100%');
             $('#activitsInner2-2').css('color','white');
  }
  );

  $('#activitsInner3').hover(function(){
           $('#activitsInner2-3').css('top','70%');
           $('#activitsInner2-3').css('color','yellow');
      }
    ,function(){
             $('#activitsInner2-3').css('top','100%');
             $('#activitsInner2-3').css('color','white');
  }
  );

  $('#activitsInner4').hover(function(){
           $('#activitsInner2-4').css('top','70%');
           $('#activitsInner2-4').css('color','yellow');
      }
    ,function(){
             $('#activitsInner2-4').css('top','100%');
             $('#activitsInner2-4').css('color','white');
  }
  );
     
     $('#activitsInner5').hover(function(){
           $('#activitsInner2-5').css('top','70%');
           $('#activitsInner2-5').css('color','yellow');
      }
    ,function(){
             $('#activitsInner2-5').css('top','100%');
             $('#activitsInner2-5').css('color','white');
  }
  );

   $('#activitsInner6').hover(function(){
           $('#activitsInner2-6').css({'top':'70%',});       //.css({ "background-color": "#ffe", "border-left": "5px solid #ccc" }) 
           $('#activitsInner2-6').css('color','yellow');
      }
    ,function(){
             $('#activitsInner2-6').css('top','100%');
             $('#activitsInner2-6').css('color','white');
  }
  );
//Benefits
   $('#benefitsInner1').hover(
       function() {
          $('#benefitsInner1b').css('filter','blur(8px)');
          $('#benefitsInner11').css('top','-60%');
       }
      ,function(){
          $('#benefitsInner1b').css('filter','blur(0)');
          $('#benefitsInner11').css('top','0');
         })  
   $('#benefitsInner2').hover(
       function() {
          $('#benefitsInner2b').css('filter','blur(8px)');
          $('#benefitsInner22').css('top','-60%');
       }
      ,function(){ 
          $('#benefitsInner2b').css('filter','blur(0)');
          $('#benefitsInner22').css('top','0');
         })
   $('#benefitsInner3').hover(
       function() {
          $('#benefitsInner3b').css('filter','blur(8px)');
          $('#benefitsInner33').css('top','-60%');
       }
      ,function(){
          $('#benefitsInner3b').css('filter','blur(0px)');
          $('#benefitsInner33').css('top', '0');
      })

$('.clicky').click(function(){
if($(window).width() <= 570){                           
 $('#slideNavBarButton').trigger('click');

}});
