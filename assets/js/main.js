



$(function(){



  // 
  // to -> ~에게 이후값을세팅
  // from -> ~부터 이전값을세팅 원래대로돌림
  // stagger -> 순차적
  gsap.to('.sc-top-card .card-item',{
    opacity:1,
    stagger:0.3
  })










    // $('.gnb-item').hover(function(){
    //     $(this).addClass('on').siblings().removeClass('on');
    // },function(){
    //     $('.gnb-item').addClass('on')
    // })


    $('.header .side-btn').click(function(){
      $('.side-nav').addClass('on')

  })

    $('.side-inner .side-btn').click(function(){
      $('.side-nav.on').removeClass('on')

  })


  var swiper = new Swiper(".top-card-swiper", {
    slidesPerView: 2.2,
    spaceBetween: 10,
 
  });



    // 구글 검색 : jquery 애플 스크롤 이벤트


    // for (let i = 0; i < 100; i++) {
    //   console.log(i);
    // }
    // 1=0이다~ 
    // i < 100 i는100보다 작습니까? TRUE
    //  console.log(i);
    // i++ i=1


    const canvas = document.querySelector('#downloads-bg');
    const ctx = canvas.getContext('2d');

    canvas.width = 1440;
    canvas.height = 1181;

    const frameCount = 240; //이미지 총개수


    // 이미지를 교체할때 미리불러오고 사용해야 깜빡이는 효과가 없음
    //padStart 
    const currentFrame = (idx) => {
      return `https://outfit7.com/img-sequence/desktop/desktop_${idx.toString().padStart(3, '0')}.png`;
    }; // 리턴 필수

    const images = [];
    const card = {
      frame: 0,
    };

    //미리이미지 로드해라
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i + 1);
      images.push(img);
    }

    gsap.to(card, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: '.sc-downloads .sticky-area',
        scrub: 1,
        start: '0% 0%', //(sc-downloads)트리거기준 상단 , 윈도우화면기준 상단
        end: '100% 100%',
        // markers:true,
      },
      onUpdate: render,
    });

    images[0].onload = render;

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(images[card.frame], 0, 0);
    }
    

    const downloadsText = new SplitType('.sc-downloads .slide-text .text-box span', { types: 'words, chars', });


    // timeline -> 시간순서대로 실행시켜주는것 모션을 다함께 써줄수있다.


    const textMotion = gsap.timeline({
      scrollTrigger:{
        trigger: '.sc-downloads .sticky-area',
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub: 1,
      },
    })

    textMotion.addLabel('a')
    textMotion.to('.sc-downloads .slide-text',{ 'padding-top':73, },'a')
    textMotion.to('.sc-downloads .slide-text .text-box .char',{color:'#fff', stagger:0.1 },'a')
    textMotion.to('.sc-downloads .bg-color',{yPercent:-100},'a')



    const hyperdotMotion =  gsap.timeline({
      scrollTrigger:{
        trigger: '.sc-hyperdot .hyper-inner',
        start:"0% 0%",
        end:"80% 100%",
        // markers:true,
        scrub: 1,
      },
    })

    hyperdotMotion.to('.sc-hyperdot .bg-blue',{
      scale:6
    })
    hyperdotMotion.to('.sc-hyperdot .card-list',0.4,{
      scale:1,
      opacity:1,
    })





    // gsap.to('.sc-team .slide-card.s',{
    //   scrollTrigger:{
    //     trigger: '.sc-team .slide-card.s',
    //     start:"0% 100%",
    //     end:"100% 0%",
    //     markers:true,
    //     scrub: 1,
    //   },
    //   yPercent:-30
    // })


    $('.sc-team .slide-card').each(function(index,element){
      y=$(this).data('y');
      gsap.to(element,{
        scrollTrigger:{
          trigger: element,
          start:"0% 100%",
          end:"100% 0%",
          // markers:true,
          scrub: 1,
        },
        yPercent:y
      })
    })





  //   const frameCount = 240;
  //   const canvas = document.getElementById("downloads-bg");
  //   const context = canvas.getContext("2d");
    
  //   const currentFrame = index => (
  //       `./assets/bg/desktop_${index.toString().padStart(3, '0')}.png`
  //   )
    
  //   const preloadImages = () => {
  //     for (let i = 1; i < frameCount; i++) {
  //       const img = new Image();
  //       img.src = currentFrame(i);
  //     }
  //   };    
    
  //   const img = new Image()
  //   img.src = currentFrame(1);
  //   canvas.width=1440;
  //   canvas.height=1181;
  //   img.onload=function(){
  //     context.drawImage(img, 0, 0);
  //   }
    
    
  //   const updateImage = index => {
  //   img.src = currentFrame(index);
  //   context.drawImage(img, 0, 0);
  // }
  
  // window.addEventListener('scroll', () => {  
  //   const scrollTop = html.scrollTop>200;
  //   const maxScrollTop = html.scrollHeight - window.innerHeight;
  //   const scrollFraction = scrollTop / maxScrollTop;
  //   const frameIndex = Math.min(
  //     frameCount - 1,
  //     Math.ceil(scrollFraction * frameCount)
  //   );
    
  //   requestAnimationFrame(() => updateImage(frameIndex + 1))
  // });
  
  // preloadImages() 

  // $('.sc-hyperdot .bg').scroll(function(){

  // })

})


