let land = document.querySelector(".land");

// Create strips
for (let i = 0; i < 100; i++) {
  const strip = document.createElement("div");
  strip.classList.add("land-strip");
  land.appendChild(strip);
}

gsap.to(".land-strip", {
  ease: Power1.easeInOut,
  duration: 10,
  ease: "none",
  x: "-=1920",
  modifiers: {
    x: gsap.utils.unitize((x) => parseFloat(x) % 1920),
  },
  repeat: -1,
});

gsap.to("#Body", {
  ease: Power1.easeInOut,
  y: 15,
  duration: 0.2,
  yoyo: true,
  repeat: -1,
});

gsap.to("#Leg3, #Leg1", {
  ease: Power1.easeInOut,
  y: -15,
  duration: 0.2,
  yoyo: true,
  repeat: -1,
  delay: 0.3,
});

gsap.to("#Leg2, #Leg4", {
  ease: Power1.easeInOut,
  y: -15,
  duration: 0.2,
  yoyo: true,
  repeat: -1,
});

gsap.to("#Face", {
  ease: Power1.easeInOut,
  y: 15,
  duration: 0.2,
  yoyo: true,
  repeat: -1,
  delay: 0.3,
  rotate: 8,
  transformOrigin: "left",
});

gsap.to("#Ear", {
  ease: Power1.easeInOut,
  y: 5,
  duration: 0.2,
  yoyo: true,
  repeat: -1,
  delay: 0.2,
});