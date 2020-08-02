 $(document).ready(function(){
            setTimeout(function(){
                $('#first-h1').html("We are The Web Developers ");
                       $('#first-h1').addClass('animated fadeInDown');
                       $('#first-h1').css('animation-delay','0.00s');
                 
                
                
    }, 500);
             setTimeout(function(){
              
                 $('#first-p1').html("We create the world best websites");
                       $('#first-p1').addClass('animated zoomIn');
                       
                
                
    }, 2000);
            setTimeout(function(){
                
                $('.header-buttons').css('display','block');
                $('.header-buttons').addClass('animated slideInUp');
                       
                
            },3000);
        /****************** scrolling part start ********************/    
            
           $(window).scroll(function(){
             var positiontop=$(document).scrollTop();
               console.log(positiontop);
               
               /****************** extra div part start ********************
               
                if(positiontop>236)
                {
                    setTimeout(function(){
                        $('#extra-div1').css('visibility','visible');
                       $('#extra-div1').addClass('animated zoomIn');
                         
                        
                    });
                    
                     setTimeout(function(){
                        $('#extra-div2').css('visibility','visible');
                       $('#extra-div2').addClass('animated zoomIn'); 
                         
                        
                    },500);
                 
                     setTimeout(function(){
                        $('#extra-div3').css('visibility','visible');
                       $('#extra-div3').addClass('animated zoomIn'); 
                         
                        
                    },1000);
                 
                 
                }
               
               /****************** extra div part end ********************/
               
               /****************** service section part start ********************/
               if(positiontop>480)
                   {
                        setTimeout(function(){
                        $('#names0').css('visibility','visible');
                       $('#names0').addClass('animated slideInLeft');
                        $('#names0').css('animation-delay','0.10s'); 
                        
                    });
                       
                        setTimeout(function(){
                        $('#names1').css('visibility','visible');
                       $('#names1').addClass('animated slideInLeft');
                        $('#names1').css('animation-delay','0.15s'); 
                        
                    });
                       
                        setTimeout(function(){
                        $('#names2').css('visibility','visible');
                       $('#names2').addClass('animated slideInLeft');
                        $('#names2').css('animation-delay','0.20s'); 
                        
                    });
                       
                        setTimeout(function(){
                        $('#names3').css('visibility','visible');
                       $('#names3').addClass('animated slideInLeft');
                        $('#names3').css('animation-delay','0.25s'); 
                        
                    });
                       
                        setTimeout(function(){
                        $('#names4').css('visibility','visible');
                       $('#names4').addClass('animated slideInLeft');
                        $('#names4').css('animation-delay','0.30s'); 
                        
                    });
                       
                         /*********** left div end *************/ 
                       
                    /***********right div start *************/   
                       
                     setTimeout(function(){
                        $('#service-div1').css('visibility','visible');
                       $('#service-div1').addClass('animated fadeInDown');
                        $('#service-div1').css('animation-delay','1.00s'); 
                        
                    });
                       
                        setTimeout(function(){
                        $('#service-div2').css('visibility','visible');
                       $('#service-div2').addClass('animated fadeInDown');
                        $('#service-div2').css('animation-delay','1.50s'); 
                        
                    });   
                        setTimeout(function(){
                        $('#service-div3').css('visibility','visible');
                       $('#service-div3').addClass('animated fadeInDown');
                        $('#service-div3').css('animation-delay','2.00s'); 
                        
                    });   
                       
                       
                       
                       
                   }
               
                /****************** service section part end ********************/
                      
                 if(positiontop>1030 && positiontop<1150) 
                     {
                          a=1;
                         count1=setTimeout(function(){mycount()}); 
                        function mycount()
                         {
                        
                         a=a+1;
                       
                             if(a<=1500)
                                 {
                         document.getElementById("c1").innerHTML=a;
                                 }
                             
                             if(a<=500)
                                 {
                         document.getElementById("c2").innerHTML=a;
                                 }
                              
                             if(a<=700)
                                 {
                         document.getElementById("c3").innerHTML=a;
                                 }
                              
                             if(a<=400)
                                 {
                         document.getElementById("c4").innerHTML=a;
                                     
                                     
                                 }
                             count1=setTimeout(function(){mycount()},2);
                            
                         }
                          
                     }
               if(positiontop>1500 && positiontop<1030)
                   {
                       setTimeout(function(){stopcount()});
                       function stopcount()
                       {
                           window.clearTimeout(count1);
                       }
                   }
                   
               
               
           }); 
                
        });
      
/************  footer scroll elements start *******************/
mybutton=document.getElementById("myBtn");
window.onscroll=function(){scrollFunction()};

function scrollFunction()
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop>20)
        {
            mybutton.style.display="block";
        }
    else{
        mybutton.style.display="none";
    }
}

function topFunction()
{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
/************  footer scroll elements end *******************/