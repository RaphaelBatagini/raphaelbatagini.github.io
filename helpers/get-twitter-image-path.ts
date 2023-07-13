export default function getTwitterImagePath(imageFileName: string) {
  return `/static/images/posts/banners/${imageFileName.split('.')[0]}-twitter.${imageFileName.split('.')[1]}`;
}