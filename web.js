function loader() {
  var tl = gsap.timeline();
  tl
    .to("#black", {

      height: 0,
      duration: 1,
      delay: 4,
      ease: Expo.easeInOut,

    })
    .to("#green", {
      height: "100%",
      duration: 1,
      delay: -2,
      ease: Expo.easeInOut,

    })

    .to("#green", {
      height: "0%",
      duration: 0.5,

      top: 0,
      ease: Expo.easeInOut,
      onComplete: function () {
        animatehomepage();
      }
    })



}

function revealToSpan() {
  document.querySelectorAll(".reveal")
    .forEach(function (elem) {
      let parent = document.createElement("span")
      let child = document.createElement("span")

      parent.classList.add("parent")
      child.classList.add("child")

      child.innerHTML = elem.innerHTML;
      parent.appendChild(child)

      elem.innerHTML = "";
      elem.appendChild(parent)
    });
}


function reveal() {
  var tl = gsap.timeline();
  tl
    .from(".child span", {
      x: 100,
      duration: 1,
      stagger: 0.2,
      ease: Circ.easeInOut,

    })
    .to(".parent .child", {
      y: "-100%",
      duration: 1,
      delay: 1,
      ease: Circ.easeInOut
    })
    .to("#black", {
      height: 0,
      duration: 1,

      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100%",
      duration: 1,
      delay: -0.2,
      ease: Circ.easeInOut,
    })


}
function animatesvg() {
  document.querySelectorAll("#Visual>g").forEach(function (e) {
    var character = e.childNodes[1].childNodes[1];
    character.style.strokeDasharray = character.getTotalLength() + 'px';
    character.style.strokeDashoffset = character.getTotalLength() + 'px';

  })

  gsap.to("#Visual>g>g>path , #Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: 2,
    delay: 8,
    ease: Expo.easeInOut,
  })
}

function valuesetter() {
  gsap.set("#nav", {
    y: "-100%",
    opacity: 0,
  })
  gsap.set("#white .parent .child", {
    y: "100%",
  })
}

function animatehomepage() {
  var tl = gsap.timeline();

  tl
    .to("#nav ", {
      y: 0,
      opacity: 1,
      stagger: 0.5,
      ease: Expo.easeInOut
    })
    .to("#white .parent .child", {
      y: 0,
      stagger: 0.1,
      duration: 2,
      ease: Expo.easeInOut
    })
}

function cardhover() {
  document.querySelectorAll(".cnt")
    .forEach(function (cnt) {
      var showingimage;
      cnt.addEventListener("mousemove", function (dets) {
        document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity =1 ;
        showingimage= dets.target;
        document.querySelector("#cursor").children[dets.target.dataset.index].style.transform =`translate(${dets.clientX}px , ${dets.clientY}px)`;
        showingimage.style.filter ="grayscale(1)";

        document.querySelector("#white").style.backgroundColor = "#" + dets.target.dataset.color 
      })
      cnt.addEventListener("mouseleave", function (dets) {
        document.querySelector("#cursor").children[showingimage.dataset.index].style.opacity =0 ;
        showingimage.style.filter ="grayscale(0)";
        document.querySelector("#white").style.backgroundColor = "#dadada"; 
      })
    })

}


revealToSpan();

reveal();
valuesetter();
loader();
animatesvg();
cardhover();
