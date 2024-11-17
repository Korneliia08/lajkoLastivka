export default function toScroll(element) {
  setTimeout(() => {
    let intervalFun;
    const eventHandler = () => {
      clearInterval(intervalFun);
      clearEvent();
    };
    document.addEventListener("wheel", eventHandler);
    const clearEvent = () => {
      document.removeEventListener("wheel", eventHandler);
    };

    const yCoordinate =
      element.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -50;
    let positionScrollY = window.scrollY;
    if (positionScrollY < yCoordinate + yOffset) {
      // window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
      intervalFun = setInterval(() => {
        if (positionScrollY < yCoordinate + yOffset) {
          positionScrollY += 90;
          window.scrollTo(0, positionScrollY);
        } else {
          clearInterval(intervalFun);
          clearEvent();
        }
      }, 1);
    } else {
      //window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
      intervalFun = setInterval(() => {
        if (positionScrollY > yCoordinate + yOffset) {
          positionScrollY -= 90;
          window.scrollTo(0, positionScrollY);
        } else {
          clearInterval(intervalFun);
          clearEvent();
        }
      }, 20);
    }
    setTimeout(() => {
      clearEvent();
      clearInterval(intervalFun);
    }, 5000);
  }, 100);
}
