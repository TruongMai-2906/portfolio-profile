// image.d.ts
/// <reference types="next-images" />

declare module "*.svg" {
  const content: any;
  export default content;
}
