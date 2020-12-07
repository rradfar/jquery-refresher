$(function () {
  // Fade out element over 2000ms
  // $(".red-box").fadeOut(2000);
  // Fade back in over 1000ms
  // $(".red-box").fadeIn(1000);
  // Fade element to specific opacity (here 50%)
  // $(".blue-box").fadeTo(1000, 0.5);
  // Note that the blue box animation starts right away, whereas the second red box animation waits until the first animation finished. This is because each element has its own animation queue which is executed one after the other. So while the red box is still "busy" with its first animation, the second animation waits in the queue.
  // Fade element in or out, depending on current status
  // $(".blue-box").fadeToggle();
  // $(".blue-box").fadeToggle();
  // Notice that fadeToggle fades back to the blue box's previous opacity, thus only back to 50% opacity.
  // Fade out element over 2000ms
  // $(".red-box").fadeOut(2000);
  // Try to use fadeTo
  // $(".red-box").fadeTo(1000, 1.0);
  // This doesn't work because fadeOut() will set display: none and fadeTo doesn't modify the display property. Thus, it's not able to make it reappear.
  // Back to original state
  // $(".red-box").fadeIn(100);
  // To keep red box in the layout, use only fadeTo
  // $(".red-box").fadeTo(2000, 0);
  // Can now make it re-appear in the way we tried above
  // $(".red-box").fadeTo(1000, 1.0);
  // Hide an element
  // $(".red-box").hide();
  // Show it again
  // $(".red-box").show();
  // Just toggle visibility depending on whether element is shown or hidden
  // $(".red-box").toggle(); // hides
  // Up until this point, you can't even see what happens in the browser because it happens in a matter of milliseconds.
  // Use show/hide as animations (not very commonly used)
  // $(".green-box").hide(1000);
  // $(".green-box").show(1000);
  // Slide element up to hide (over 2s)
  // $(".blue-box").slideUp(2000);
  // Slide back down to show element
  // $(".blue-box").slideDown(2000);
  // Toggle sliding up/down depending on current state
  // $(".blue-box").slideToggle(1000);
  // $(".blue-box").slideToggle(1000);
  // Custom animation to move element by gradually increasing margin to 200px
  // $(".green-box").animate({
  //   "margin-left": "+=200px",
  // });
  // Reset
  // $(".green-box").animate({
  //   "margin-left": "0px",
  // });
  // Move element by gradually increasing margin BY 200px (using +=) (no matter what it was before)
  // $(".green-box").animate({
  //   "margin-left": "+=200px",
  // });
  // Define animation duration (here 2s)
  // Default duration is 300ms
  // $(".green-box").animate(
  //   {
  //     "margin-left": "-=200px",
  //   },
  //   2000
  // );
  // Define animation progression function
  // Linear updates the margin-left linearly
  // $(".green-box").animate(
  //   {
  //     "margin-left": "+=200px",
  //   },
  //   2000,
  //   "linear"
  // );
  // Animate various CSS properties of the blue box
  // $(".blue-box").animate(
  //   {
  //     marginLeft: "200px",
  //     opacity: "0",
  //     height: "50px",
  //     width: "50px",
  //     marginTop: "25px",
  //   },
  //   1000
  // );
  // Animate font size of all paragraphs
  // $("p").animate(
  //   {
  //     fontSize: "20px"
  //   },
  //   1000
  // );
});
