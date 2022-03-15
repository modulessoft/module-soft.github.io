import anime from "animejs";
function FaceAnimations(isMobile, mobileTarget, desktopTarget) {
  if (isMobile === undefined) return;
  if (isMobile) {
    anime({
      targets: mobileTarget,
      duration: 5000,
      easing: "easeOutQuad",
      y: 45,
    });
  } else {
    anime
      .timeline({ loop: false })
      .add({
        targets: mobileTarget,
        duration: 2000,
        easing: "easeOutQuad",
        y: 60,
      })
      .add({
        targets: desktopTarget,
        duration: 2000,
        easing: "easeOutQuad",
        translateX: 20,
        translateY: -6,
        rotate: "50deg",
      });
  }
}
export default FaceAnimations;
