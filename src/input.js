import paddle from "./paddle";

export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", event => {
      // alert(event.keyCode);

      switch (event.keyCode) {
        case 37:
        case 65:
          paddle.moveLeft();
          break;
        case 39:
        case 68:
          paddle.moveRight();
          break;
        default:
      }
    });
  }
}
