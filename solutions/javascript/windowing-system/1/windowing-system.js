// @ts-check

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    this.size.resize(newSize.width, newSize.height);
    // () => {
    // if (newSize.width + this.position.x > this.screenSize.width) {
    //   newSize.width = this.screenSize.width - this.position.x;
    // }
    // if (newSize.height + this.position.y > this.screenSize.height) {
    //   newSize.height = this.screenSize.height - this.position.y;
    // }

    // return {
    //   width: newSize.width < 1 ? 1 : newSize.width,
    //   height: newSize.height < 1 ? 1 : newSize.height,
    // };
    // });
  }

  move(newPosition) {
    this.position.move(newPosition.x, newPosition.y);
  }

  changeWindow(newProgramWindow) {
    let newSize = new Size(400, 300);
    let newPosition = new Position(100, 150);
    newProgramWindow.resize(newSize);
    newProgramWindow.move(newPosition);
    return newProgramWindow;
  }
}
