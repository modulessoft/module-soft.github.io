import anime from "animejs";

class CameraAnimations {
  constructor(isMobile, width, height, timeline = null) {
    this.timeline = timeline;

    this.library = {
      begin: {
        view: "-1000 650 900 500",
        textPosition: "",
      },
      general: {
        view: "0 0 1920 1080",
      },
      door: {
        view: isMobile
          ? `1000 ${1080 - this.height} ${this.width} ${this.height}`
          : "1000 800 400 240",
      },
      laptop: {
        view: "1328 920 60 60",
        textPosition: "",
      },
      certificate: {
        view: this.isMobile ? "1288 900 60 45" : "1288 900 60 25",
        textPosition: this.isMobile ? "bottom" : "right",
      },
      OS: {
        view: this.isMobile ? "1288 900 60 45" : "1288 900 60 25",
        textPosition: this.isMobile ? "bottom" : "right",
      },
    };
  }

  BackgroundScene() {
    // camera transition
    anime.timeline({ loop: false }).add({
      targets: ".page",
      duration: 4000,
      keyframes: [
        // camera transition from the car in the way home to the background
        {
          viewBox: [this.beginView, this.library.general.view],
          duration: (this.timeline += 3000),
          delay: (this.timeline += 1000),
        },
        // camera transition to GarageCamera door
        {
          viewBox: [
            this.library.general.view,
            this.isMobile ? this.doorViewMobile : this.doorViewDesktop,
          ],
          delay: 5000,
        },
      ],
      easing: "easeOutQuad",
    });
  }

  // GarageScene() {
  //   const library = {
  //     certificate: {
  //       view: this.isMobile ? "1288 900 60 45" : "1288 900 60 25",
  //       textPosition: this.isMobile ? "bottom" : "right",
  //     },
  //   };
  // }

  LaptopView(finishedCallback) {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".page",
        duration: 4000,
        keyframes: [
          // camera transition from the GarageCamera door to the laptop
          {
            viewBox: [
              this.isMobile ? this.doorViewMobile : this.doorViewDesktop,
              this.library.laptop.view,
            ],
            // viewBox: mobile ? doorViewMobile : doorViewDesktop,
          },
          // camera transition to GarageCamera door
          {},
        ],
        easing: "easeOutQuad",
      })
      .finished.then(finishedCallback);
  }

  CertificateView(finishedCallback) {
    // Certificate View
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          // camera transition from the laptop to GarageCamera door
          {
            viewBox: [this.library.laptop.view, this.library.certificate.view],
          },
          // camera transition to GarageCamera door
          {},
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
  OSView(finishedCallback) {
    // OS View
    anime(
      {
        targets: ".page",
        duration: 4000,
        keyframes: [
          // camera transition from the laptop to GarageCamera door
          {
            viewBox: [this.library.certificate.view, this.library.OS.view],
          },
          // camera transition to GarageCamera door
          {},
        ],
        easing: "easeOutQuad",
      },
      15000
    ).finished.then(finishedCallback);
  }
}
export default CameraAnimations;