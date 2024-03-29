export default class InputHandler {
  constructor(paddle, game) {
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
        case 27:
          game.togglePause();
          break;
        case 32:
          game.start();
          break;
        default:
          break;
      }
    });

    document.addEventListener("keyup", event => {
      // alert(event.keyCode);
      switch (event.keyCode) {
        case 37:
        case 65:
          if (paddle.speed < 0) paddle.stop();
          break;
        case 39:
        case 68:
          if (paddle.speed > 0) paddle.stop();
          break;
        default:
      }
    });
  }
}
