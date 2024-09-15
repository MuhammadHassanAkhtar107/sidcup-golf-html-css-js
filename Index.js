cursor=document.querySelector(".cursor")
cursorblur=document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(cursr){
    cursor.style.left=cursr.x+"px"
    cursor.style.top=cursr.y+"px"
    cursorblur.style.left=cursr.x-70+"px"
    cursorblur.style.top=cursr.y-70+"px"
})
gsap.to(".head",{
    backgroundColor:"black",
    duration:1,
    height:"45px",
    scrollTrigger:{
        triger:".head",
        scroll:"body",
        scrub:1,
    }
})
gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:1,
    }
})