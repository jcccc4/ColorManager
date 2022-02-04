function createColorManager(defaultColor) {
    let colorStack = [defaultColor, "red", "blue", "yellow", "white"];
    let index = 0;

    return {
      get: function () {
        return colorStack[index];
      },

      next: function () {
        index += 1;
        if (index >= colorStack.length) {
          index = 0;
        }

        return this.get();
      },

      prev: function () {
        index -= 1;
        if (index < 0) {
          index = colorStack.length - 1;
        }

        return this.get();
      },

      reset: function () {
        index = colorStack.indexOf(defaultColor);
        return this.get();
      },

      setPalette: function (colours) {
        colorStack = [defaultColor, ...colours];
      },
    };
  }
  const cm1 = createColorManager("purple");

  console.log(cm1.get()); // purple
  console.log(cm1.next()); // red
  console.log(cm1.next()); // blue
  console.log(cm1.prev()); // red
  console.log(cm1.reset()); // purple


