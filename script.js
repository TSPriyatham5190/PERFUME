const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconAnimation(){
    
var videocon = document.querySelector("#video-container")
var playbtn =  document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){//as the mouse enters
    gsap.to(playbtn,{ //cause of this now it even animates when mouse enters
        scale:1,
        opacity:1
    })
    
    // playbtn.style.opacity = 1
    // playbtn.style.scale = 1
})



videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{ 
        scale:0,
        opacity:0
    })
})//as the mouse leaves

videocon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn,{
        left:dets.x-50 //minus 50 will catch up with mouse cursor
    })
    gsap.to(playbtn,{
        top:dets.y-100
    })
})
}

videoconAnimation()

// gsap.to("#nav-part1",{
//     transform: 'translateY(-100%)',
// })

function loadingAnimation(){
    gsap.from("#page1 h1" ,{
        y:-30,
        opacity:0,
        delay:0.5,
        duraition:0.9,
        stagger:0.3
    })

    gsap.from("#page1 #video-container" ,{
        y:100,
        opacity:0,
        delay:1.3,
        duraition:0.3,
    })
}

loadingAnimation()


function cursorAnimation(){

    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
        })
    })
    
    // document.querySelector("#child1").addEventListener("mouseenter",function(){
    //     gsap.to("#cursor", {
    //         transform: 'translate(-50%, -50%) scale(1)'
    //     })
    // })
    
    // document.querySelector("#child1").addEventListener("mouseleave",function(){
    //     gsap.to("#cursor", {
    //         transform: 'translate(-50%, -50%) scale(0)'
    //     })
    // })
    
    
    document.querySelectorAll(".child").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to("#cursor", {
                transform: 'translate(-50%, -50%) scale(1)'
            }) 
        })    
        elem.addEventListener("mouseleave",function(){
            gsap.to("#cursor", {
                transform: 'translate(-50%, -50%) scale(0)'
            }) 
        })
    })
    
    
}

cursorAnimation()