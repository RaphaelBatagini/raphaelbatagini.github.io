export default function getAuthorPhotoPath(type: 'twitter' | 'profile') {
  return `${process.env.NEXT_PUBLIC_SITE_ROOT}/static/images/author/${type}.png`;
}