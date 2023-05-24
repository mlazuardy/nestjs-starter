export const $string = (val?: string) => ({
  random(stringLength = 10) {
    let randomString = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < stringLength; i++) {
      randomString += possible.charAt(
        Math.floor(Math.random() * possible.length),
      );
    }

    return randomString;
  },
  slug(separator = "-") {
    return val
      ?.toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, separator);
  },
});
