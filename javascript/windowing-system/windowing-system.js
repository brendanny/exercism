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
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    this.size.resize(
      newSize.width < 1
        ? 1
        : newSize.width > maxWidth
        ? maxWidth
        : newSize.width,
      newSize.height < 1
        ? 1
        : newSize.height > maxHeight
        ? maxHeight
        : newSize.height
    );
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    this.position.move(
      newPosition.x < 0 ? 0 : newPosition.x > maxX ? maxX : newPosition.x,
      newPosition.y < 0 ? 0 : newPosition.y > maxY ? maxY : newPosition.y
    );
  }
}

export function changeWindow(programWindow) {
  programWindow.move(new Position());

  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}
