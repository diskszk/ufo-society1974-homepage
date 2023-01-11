export const NO_IMAGE_PATH =
  "https://1.bp.blogspot.com/-D2I7Z7-HLGU/Xlyf7OYUi8I/AAAAAAABXq4/jZ0035aDGiE5dP3WiYhlSqhhMgGy8p7zACNcBGAsYHQ/s1600/no_image_square.jpg";

export const MIN_WIDTH = "960px";

export const WEB_API_BASE_URL = `${process.env.VITE_API_BASE_URL}/api` as const;

export const AltImageFile = {
  filename: "no_image",
  path: NO_IMAGE_PATH,
} as const;
