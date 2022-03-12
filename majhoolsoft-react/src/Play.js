import CarAnimations from "./helpers/CarAnimations";
import IntroTextAnimations from "./helpers/IntroTextAnimations";
import BackgroundAnimations from "./helpers/BackgroundAnimations";
import Camera from "./helpers/lib/Camera";
import Typewriter from "./helpers/lib/Typewriter";
import WalkingAnimations from "./helpers/WalkingAnimations";
import FaceAnimations from "./helpers/FaceAnimations";
function Play(scroll, maxScroll, isMobile, width, height, texts, timeline = 0) {
  const library = {
    begin: {
      view: "-1000 0 800 1080",
      textPosition: "",
    },
    general: {
      view: "0 0 1920 1080",
    },
    door: {
      view: isMobile
        ? `1000 ${1080 - height} ${width} ${height}`
        : "1000 800 400 240",
    },
    laptop: {
      view: "1328 920 60 60",
      textPosition: isMobile
        ? { x: 16, y: 16, width: `${width - 16}` }
        : { x: 16, y: 16, width: `${width - 16}` },
    },
    degree: {
      view: isMobile ? "1288 900 60 45" : "1288 900 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : {
            x: `${(1 / 2) * width}`,
            y: `${(1 / 2) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    os: {
      view: isMobile ? "1252 900 60 45" : "1240 900 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
    },
    firstRowEnd: {
      view: isMobile ? "1230 900 60 45" : "1200 900 60 28",
    },
    frontEndOne: {
      view: isMobile ? "1230 930 60 45" : "1200 930 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(1 / 2) * height}`, width: `${(1 / 2) * width}` },
    },
    frontEndTwo: {
      view: isMobile ? "1257 920 60 45" : "1230 930 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(20 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
    },
    backEndOne: {
      view: isMobile ? "1288 930 60 45" : "1260 930 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
    },
    notebookOne: {
      view: isMobile ? "1252 960 60 45" : "1215 962 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : {
            x: 16,
            y: `${(25 / 100) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    notebookTwo: {
      view: isMobile ? "1270 960 60 45" : "1270 962 60 28",
      textPosition: isMobile
        ? { x: 16, y: `${(65 / 100) * height}`, width: `${width - 16}` }
        : { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` },
    },
    microphone: {
      view: isMobile ? "1130 900 100 62" : "1130 900 100 62",
      textPosition: {
        x: 16,
        y: `${(90 / 100) * height}`,
        width: `${width - 16}`,
      },
    },
    motorcycle: {
      view: isMobile ? "1010 850 390 220" : "1000 850 200 180",
      textPosition: isMobile
        ? { x: 16, y: `${(90 / 100) * height}`, width: `${width - 16}` }
        : {
            x: `${(1 / 2) * width}`,
            y: `${(1 / 2) * height}`,
            width: `${(1 / 2) * width}`,
          },
    },
    garden: {
      view: isMobile ? "20 550 600 420" : "20 550 600 420",
      textPosition: {
        x: 16,
        y: `${(10 / 100) * height}`,
        width: `${width - 16}`,
      },
    },
    mountain: {
      view: isMobile ? "300 250 600 420" : "150 250 600 420",
      textPosition: {
        x: 16,
        y: `${(90 / 100) * height}`,
        width: `${width - 16}`,
      },
    },
  };
  // distinguish textposition and view for camera and typewriter data
  let cameraData = {};
  let typewriterData = {};
  Object.keys(library).forEach(function (k) {
    cameraData = { ...cameraData, ...{ [k]: { view: library[k]["view"] } } };
    typewriterData = {
      ...typewriterData,
      ...{
        [k]: { text: texts?.[k], textPosition: library[k]["textPosition"] },
      },
    };
  });
  let from = cameraData.door.view.split(" ").map(Number);
  if (scroll > 0 && scroll < maxScroll) {
    from = Camera(
      ".page",
      calculateView(cameraData.laptop.view),
      scroll,
      laptopText
    );
    console.log(from);
  } else if (scroll > 20 && scroll < 40) {
  } else if (scroll > 40 && scroll < 60) {
  }
  function calculateView(view) {
    let to = view.split(" ").map(Number);
    let sub = [];
    for (let i = 0; i < from.length; i++) {
      sub.push(Math.ceil((to[i] - from[i]) / maxScroll));
    }
    return [from, to, sub];
  }
  // function introScene(finishedCallback) {
  //   CarAnimations(walking);
  //   function walking() {
  //     WalkingAnimations();
  //   }
  //   IntroTextAnimations().introScene();
  //   firstCamera();
  //   function firstCamera() {
  //     Camera().fromTo(
  //       ".page",
  //       [cameraData.begin.view, cameraData.general.view],
  //       4000,
  //       "easeOutQuart",
  //       4000,
  //       secondCamera
  //     );
  //   }
  //   function secondCamera() {
  //     Camera().fromTo(
  //       ".page",
  //       [cameraData.general.view, cameraData.door.view],
  //       4000,
  //       "easeOutQuart",
  //       6000,
  //       finishedCallback
  //     );
  //   }

  //   BackgroundAnimations(timeline);
  // }

  // function garageScene(finishedCallback) {
  // function laptopCamera(scroll, view) {
  //   Camera().fromTo(".page", view, scroll, laptopText);
  // }
  function laptopText() {
    // additional smile face pop right for laptop and straight face for mobile
    FaceAnimations(isMobile, "#straightFace", "#smileFace");
    Typewriter(
      "article",
      "text-background",
      50,
      typewriterData.laptop.text,
      typewriterData.laptop.textPosition
    );
  }
  // function degreeCamera() {
  //   Camera().fromTo(
  //     ".page",
  //     [cameraData.laptop.view, cameraData.degree.view],
  //     3000,
  //     "easeOutQuad",
  //     0,
  //     degreeText
  //   );
  // }
  // function degreeText() {
  //   Typewriter(
  //     "article",
  //     "text-background",
  //     50,
  //     typewriterData.degree.text,
  //     typewriterData.degree.textPosition,
  //     OSCamera
  //   );
  // }
  // function OSCamera() {
  //   Camera().fromTo(
  //     ".page",
  //     [cameraData.degree.view, cameraData.door.view, cameraData.os.view],
  //     3000,
  //     "easeOutQuad",
  //     0,
  //     osText
  //   );
  // }
  // function osText() {
  //   Typewriter(
  //     "article",
  //     "text-background",
  //     50,
  //     typewriterData.os.text,
  //     typewriterData.os.textPosition,
  //     frontEndOneCamera
  //   );
  // }
  // function frontEndOneCamera() {
  //   Camera().fromTo(
  //     ".page",
  //     [
  //       cameraData.os.view,
  //       cameraData.firstRowEnd.view,
  //       cameraData.frontEndOne.view,
  //     ],
  //     3000,
  //     "easeOutQuad",
  //     0,
  //     frontEndOneText
  //   );
  // }
  // // front end
  // function frontEndOneText() {
  //   Typewriter(
  //     "article",
  //     "text-background",
  //     50,
  //     typewriterData.frontEndOne.text,
  //     typewriterData.frontEndOne.textPosition,
  //     frontEndTwoCamera
  //   );
  // }
  // function frontEndTwoCamera() {
  //   Camera().fromTo(
  //     ".page",
  //     [cameraData.frontEndOne.view, cameraData.frontEndTwo.view],
  //     3000,
  //     "easeOutQuad",
  //     0,
  //     frontEndTwoText
  //   );
  // }
  // function frontEndTwoText() {
  //   Typewriter(
  //     "article",
  //     "text-background",
  //     50,
  //     typewriterData.frontEndTwo.text,
  //     typewriterData.frontEndTwo.textPosition,
  //     backEndCamera
  //   );
  // }
  // // back end
  // function backEndCamera() {
  //   Camera().fromTo(
  //     ".page",
  //     [cameraData.frontEndTwo.view, cameraData.backEndOne.view],
  //     3000,
  //     "easeOutQuad",
  //     0,
  //     backEndText
  //   );
  // }
  // function backEndText() {
  //   Typewriter(
  //     "article",
  //     "text-background",
  //     50,
  //     typewriterData.backEndOne.text,
  //     typewriterData.backEndOne.textPosition,
  //     notebookOneCamera
  //   );
  // }
  // // notebook view
  // function notebookOneCamera() {
  //   Camera().fromTo(
  //     ".page",
  //     [
  //       cameraData.backEndOne.view,
  //       cameraData.door.view,
  //       cameraData.notebookOne.view,
  //     ],
  //     3000,
  //     "easeOutQuad",
  //     0,
  //     notebookOneText
  //   );
  // }
  // function notebookOneText() {
  //   Typewriter(
  //     "article",
  //     "text-background",
  //     50,
  //     typewriterData.notebookOne.text,
  //     typewriterData.notebookOne.textPosition,
  //     notebookTwoCamera
  //   );
  // }
  // function notebookTwoCamera() {
  //   Camera().fromTo(
  //     ".page",
  //     [cameraData.notebookOne.view, cameraData.notebookTwo.view],
  //     3000,
  //     "easeOutQuad",
  //     0,
  //     notebookTwoText
  //   );
  // }
  // function notebookTwoText() {
  //   Typewriter(
  //     "article",
  //     "text-background",
  //     50,
  //     typewriterData.notebookTwo.text,
  //     typewriterData.notebookTwo.textPosition,
  //     scroll
  //   );
  // }
  //scroll down to see the hobbies
  // function scroll() {
  //   IntroTextAnimations().addScrollIcon(
  //     ".scrollHobbies",
  //     finishedCallback(true)
  //   );
  // }
  // }
  // function hobbiesScene(finishedCallback) {
  //   IntroTextAnimations().removeScrollIcon();

  //   microphoneCamera();
  //   function microphoneCamera() {
  //     Camera().fromTo(
  //       ".page",
  //       [
  //         cameraData.notebookTwo.view,
  //         cameraData.door.view,
  //         cameraData.microphone.view,
  //       ],
  //       3000,
  //       "easeOutQuad",
  //       0,
  //       microphoneText
  //     );
  //   }
  //   function microphoneText() {
  //     Typewriter(
  //       "article",
  //       "text-background",
  //       50,
  //       typewriterData.microphone.text,
  //       typewriterData.microphone.textPosition,
  //       motorcycleCamera
  //     );
  //   }
  //   function motorcycleCamera() {
  //     Camera().fromTo(
  //       ".page",
  //       [cameraData.microphone.view, cameraData.motorcycle.view],
  //       3000,
  //       "easeOutQuad",
  //       0,
  //       motorcycleText
  //     );
  //   }
  //   function motorcycleText() {
  //     Typewriter(
  //       "article",
  //       "text-background",
  //       50,
  //       typewriterData.motorcycle.text,
  //       typewriterData.motorcycle.textPosition,
  //       gardenCamera
  //     );
  //   }
  //   function gardenCamera() {
  //     Camera().fromTo(
  //       ".page",
  //       [cameraData.motorcycle.view, cameraData.garden.view],
  //       3000,
  //       "easeOutQuad",
  //       0,
  //       gardenText
  //     );
  //   }
  //   function gardenText() {
  //     Typewriter(
  //       "article",
  //       "text-background",
  //       50,
  //       typewriterData.garden.text,
  //       typewriterData.garden.textPosition,
  //       mountainCamera
  //     );
  //   }
  //   function mountainCamera() {
  //     Camera().fromTo(
  //       ".page",
  //       [cameraData.garden.view, cameraData.mountain.view],
  //       3000,
  //       "easeOutQuad",
  //       0,
  //       mountainText
  //     );
  //   }
  //   function mountainText() {
  //     Typewriter(
  //       "article",
  //       "text-background",
  //       50,
  //       typewriterData.mountain.text,
  //       typewriterData.mountain.textPosition,
  //       finishedCallback
  //     );
  //   }
  // }
  function removeScrollIcon() {
    IntroTextAnimations().removeScrollIcon();
  }

  return { removeScrollIcon };
}
export default Play;
