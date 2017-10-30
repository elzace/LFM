//document.onreadystatechange = loadingChange;//当页面加载状态改变的时候执行这个方法.    
//function loadingChange()     
//{     
//  if(document.readyState == "complete"){//当页面加载状态为完全结束时进入     
//           $(".loading").delay(500).fadeOut(function(){
//           	$('.wrap').fadeIn(); 
//           	$('.cd-section header').css({'background-position': '-10px -10px' , 'background-image': 'url(img/bg2.jpg)'})
//           	
//           	$('.cd-title').fadeIn(1000)
//       		$('.span1,.span2,.span4,.span5').css({
//       		'-webkit-transform':'translateX(0px)',
//       		'-moz-transform':'translateX(0px)',
//       		'transform':'translateX(0px)'
//       		})
//       		$('.cd-title').animate({'top':'46%'},500,function(){
//       			$('.cd-title2').fadeIn()
//       		})
//
//           });//当页面加载完成后将loading页隐藏
//  }
//  else{
//  	$('.wrap').hide();
//  	$(".loading").show();
//  }
//}