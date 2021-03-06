jQuery(document).ready(function($) {

    //*******Home page
    $(".item-img").mouseenter(function(){
     	$(this).find(".item-hover").show(); //show click button when hover tutorial
    });
    $(".item-img").mouseleave(function(){
     	$(this).find(".item-hover").hide(); //hide click button when hover tutorial
    });
    // $(".add-img").click(function(){
    //     $(".media-manager").css({"left":0}); //show manager upload when click on add more image
    // })

    $(".navbar-toggle").click(function(){
        $(".mobimenu").toggle(); //show menu on mobile
    })

    $(".media-uploaded li img").click(function(){
        $(this).next(".choose-uploaded").addClass("active"); //Click on image uploaded then add class active to sign choosed img  
    })
    $(".choose-uploaded").click(function(){
        $(this).removeClass("active"); //Click again on image uploaded then remove class active
    })
    
    //*** Ask a question  
    $(".new-ask").click(function(){
        $(".form-ask-question").css({"left":0}); //Click on new ask button (in ask a question page) then show form to add new question
    })
    
    $(".item-hover").click(function(){ //click on each images will show slide of all image
        $(".popup-images").css({"left":0});        
    }) 

    $(".close-popup-images").click(function(){ //click on outside of wrapper slide then close popup images
        $(".popup-images, .form-ask-question, .article-detail, .essay-detail").css({"left":"100%"});
    })

    $(".total-question i").click(function(){ //show sort question in top of ask a question
        $(".sort-answer").toggle();
    })
    $(".sort-answer li").click(function(){ //hide sort question in top of ask a question
        $(".sort-answer").hide();
        
        var a = $(this).text();
        $(".sort").html(a);
    })


    $(".profile-user").click(function(){ //Show profile of user when click on arrow button on header
        $(".user-info").slideToggle();
    })

    $(".video-thumnail").mouseenter(function(){
        $(this).find(".hover-video").show(); //show click button video when hover tutorial
    });
    $(".video-thumnail").mouseleave(function(){
        $(this).find(".hover-video").hide(); //hide click button video when hover tutorial
    });

    $(".mentors-infor-img-wrapper, .feature-thumnail").mouseenter(function(){
        $(this).find(".mentors-img-hover, .hover-video").show(); //show img mentor then show to icon to go to mentors details
    });
    $(".mentors-infor-img-wrapper, .feature-thumnail").mouseleave(function(){
        $(this).find(".mentors-img-hover, .hover-video").hide(); //show img mentor then show to icon to go to mentors details
    });
    $(".edit-details-question").click(function(){  //
        $(this).find(".edit-question").toggle();
    })
    $(".edit-answer").click(function(){  //
        $(this).find(".edit-answer-detail").toggle();
    })
    $(".sort").click(function(){        //show sort answer
        $(".sort-answer").toggle();
    })
    $(".article li").click(function(){
        $(this).next().find(".article-detail").css({"left":"0"}); 
    });

    $(".your-essay-content li").click(function(){
        $(this).next().find(".article-detail, .essay-detail").css({"left":"0"});//show popup article details (college article, college essay)
    })
    $(".close-form").click(function(){
        $(this).parents(".form-ask-question").css({"left":"100%"}); //click on button close -> close popup form
    })
    $(".close-popup-detail").click(function(){
        $(".article-detail, .essay-detail").css({"left":"100%"}); //click on button close -> close popup college article & essay
    })
    $(".notification").click(function(){
        $(".notification-content").toggle(); //show notification 
    })
    $(".close-popup-images").click(function(){
        $(".college-notification").animate({right: '100%', left:'-100%'}, 500); //hide notification
    })
    // $(".unsubcrib").hover(function(){
    //     $(".unsubcrib-hover").css({"z-index":"3"});
    // })
    // $(".subscribers").hover(function(){
    //     $(".unsubcrib-hover").toggle();
    //     $(".unsubcrib").toggle();
    // })
    // $(window).on("load",function(){
    //   $(".content-question-wrapper").mCustomScrollbar({ //Scroll for content of question
    //       theme:"dark",
    //       autoHideScrollbar: "boolean",
    //   });
    // })
    $(window).on("load",function(){
      $(".series-video-list, .answer-detail-right-content").mCustomScrollbar({
          theme:"light"
      });
    })
    $(window).on("load",function(){
      $(".essay-detail-right-content-wrapper, .article-detail-right-content-wrapper, .tab-answered-tab, .dt-txt-question").mCustomScrollbar({
          theme:"dark",
          autoHideScrollbar: "boolean",
      });
    })
    $("#add-comment").click(function(){$
        (".comment-action").show();
    })
    $(".cancel").click(function(){
        $("#add-comment").val('');
        $(".comment-action").hide()
    });

    $(".unfavourite").click(function(){
      $(this).addClass("favourite");
    })

    $('[data-toggle="popover"]').popover();

    $(".has-answer").click(function(){
      $(this).parents(".number-answer").find(".detail-answer-question").slideToggle();
    });
    $("#question-details .total-answer i").click(function(){
        $(".sort-answer").slideToggle()
    })
    $(".menuSub").click(function(){
      $("#sidebar-menu .navigation .nav>.active>a span.sub-menu").toggleClass ("show");
      $(this).next().slideToggle();
    })

    // Slide for student Mentor page
    $('#studentCarousel[data-type="multi"] .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
      }
    });


    $(".navbar-header button").on( "click",function(){
        $(".mentor-left-header, #sidebar-menu, .mentor-center-header, .center-content").toggleClass("in");
    })

    $(window).scroll(function(){    
      var qa_scroll = $(window).scrollTop();
      console.log(qa_scroll);
      if (qa_scroll > 90) {
        $(".mentor-manage-qa-content .left-qa").css({"top":"112px", "height":"90%"});
        $(".mentor-manage-qa-content .left-qa .tab-answered .tab-content").css({"height":"75vh"});
      }
      else {
        $(".mentor-manage-qa-content .left-qa").css("top","auto");
        $(".mentor-manage-qa-content .left-qa .tab-answered .tab-content").css({"height":"70vh"});
      }
  })



    // Get border for broswer-mentor
    border_broswer();
    $(window).resize(function(){      
      border_broswer();
    })
    function border_broswer(){
      var number_item = $(".browser-mentors-infor-wrapper>div").length; 
        
        winwidth = $("body").innerWidth();

        if ( winwidth >= 1200){
          $(".browser-mentors-infor-wrapper>div").css("border-bottom","1px solid #ececed");
          num_int = number_item % 3 ;
          num_int = (num_int == 0) ? 3 : num_int;
          for (var i = 1 ; i <= num_int ; i++) {
            $(".browser-mentors-infor-wrapper>div:nth-last-child("+ i +")").css("border","none");
          }
        }

        else if ( (767 < winwidth) && (winwidth < 991) ){
          console.log($("body").innerWidth());
          $(".browser-mentors-infor-wrapper>div").css("border-bottom","1px solid #ececed");
          num_int = number_item % 2 ;
          num_int = (num_int == 0) ? 2 : num_int;
          for (var i = 1 ; i <= num_int ; i++) {
            $(".browser-mentors-infor-wrapper>div:nth-last-child("+ i +")").css("border","none");
          }
        } 

        else if ( 767 > winwidth){
            $(".browser-mentors-infor-wrapper>div").css("border-bottom","1px solid #ececed");
            $(".browser-mentors-infor-wrapper>div:last-child").css("border","none");
         
        } 
      }
      // End Get border for broswer-mentor


        var $j = jQuery.noConflict();

        var realSlider= $j("ul#bxslider").bxSlider({
              speed:1000,
              pager:false,
              nextText:'',
              prevText:'',
              infiniteLoop:false,
              hideControlOnEnd:true,
              onSlideBefore:function($slideElement, oldIndex, newIndex){
                changeRealThumb(realThumbSlider,newIndex);
                
              }
              
            });
            
            var realThumbSlider=$j("ul#bxslider-pager").bxSlider({
              minSlides: 5,
              maxSlides: 5,
              slideWidth: 100,
              slideMargin: 15,
              moveSlides: 1,
              pager:false,
              speed:1000,
              infiniteLoop:false,
              hideControlOnEnd:true,
              nextText:'<span>></span>',
              prevText:'<span><</span>',
              onSlideBefore:function($slideElement, oldIndex, newIndex){
                /*$j("#sliderThumbReal ul .active").removeClass("active");
                $slideElement.addClass("active"); */

              }
            });
            // $(".popup-images").reloadSlider();
            linkRealSliders(realSlider,realThumbSlider);
            
            if($j("#bxslider-pager li").length<5){
              $j("#bxslider-pager .bx-next").hide();
            }


        // sincronizza sliders realizzazioni
        function linkRealSliders(bigS,thumbS){
          
          $j("ul#bxslider-pager").on("click","a",function(event){
            event.preventDefault();
            var newIndex=$j(this).parent().attr("data-slideIndex");
                bigS.goToSlide(newIndex);
          });
        }

        //slider!=$thumbSlider. slider is the realslider
        function changeRealThumb(slider,newIndex){
          
          var $thumbS=$j("#bxslider-pager");
          $thumbS.find('.active').removeClass("active");
          $thumbS.find('li[data-slideIndex="'+newIndex+'"]').addClass("active");
          
          if(slider.getSlideCount()-newIndex>=4)slider.goToSlide(newIndex);
          else slider.goToSlide(slider.getSlideCount()-4);

        }
    //End Bxslider - Slider images of ask a question page
    
    

    // Get images has choosen
    function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object

        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {

          // Only process image files.
          if (!f.type.match('image.*')) {
            continue;
          }

          var reader = new FileReader();

          // Closure to capture the file information.
          reader.onload = (function(theFile) {
            return function(e) {
              // Render thumbnail.
              var div = document.createElement('div');
              div.innerHTML = ['<img class="thumb" src="', e.target.result,
                                '" title="', escape(theFile.name), '"/><div class="remove-image"><img src="../images/remove-img.png"></div>'].join('');
              document.getElementById('list').insertBefore(div, null);
              $(".media-manager").hide();
              

            };
          })(f);


          // Read in the image file as a data URL.
          reader.readAsDataURL(f);
        }

      }

    document.getElementById('files').addEventListener('change', handleFileSelect, false);

    function FileSelectEditVideo(evt) {
        var files = evt.target.files; // FileList object

        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {

          // Only process image files.
          if (!f.type.match('image.*')) {
            continue;
          }

          var reader = new FileReader();

          // Closure to capture the file information.
          reader.onload = (function(theFile) {
            return function(e) {
              // Render thumbnail.
              var div = document.createElement('div');
              div.innerHTML = ['<img class="thumb" src="', e.target.result,
                                '" title="', escape(theFile.name), '"/><div class="remove-image"><span data-icon="&#x4d;"></span></div>'].join('');
              document.getElementById('list-edit').insertBefore(div, null);
              $(".media-manager").hide();
              

            };
          })(f);


          // Read in the image file as a data URL.
          reader.readAsDataURL(f);
        }

      }
  document.getElementById('filesEdit').addEventListener('change', FileSelectEditVideo, false);

  function FileSelectAddVideo(evt) {
        var files = evt.target.files; // FileList object

        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {

          // Only process image files.
          if (!f.type.match('image.*')) {
            continue;
          }

          var reader = new FileReader();

          // Closure to capture the file information.
          reader.onload = (function(theFile) {
            return function(e) {
              // Render thumbnail.
              var div = document.createElement('div');
              div.innerHTML = ['<img class="thumb" src="', e.target.result,
                                '" title="', escape(theFile.name), '"/><div class="remove-image"><span data-icon="&#x4d;"></span></div>'].join('');
              document.getElementById('list-addnew').insertBefore(div, null);
              $(".media-manager").hide();
              

            };
          })(f);


          // Read in the image file as a data URL.
          reader.readAsDataURL(f);
        }

      }
  document.getElementById('files').addEventListener('change', FileSelectAddVideo, false);
  
})