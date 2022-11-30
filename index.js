const tl = new TimelineMax()

tl.fromTo(".type-me", 5, {
    width: "0",
  }, {
    width: "1000px", /* same as text-description width*/
    ease: SteppedEase.config(20)
  }, 0);
  