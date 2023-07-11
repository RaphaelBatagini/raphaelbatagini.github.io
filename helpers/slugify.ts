export const slugify = (text: string): string => {
  return text
    .toString()                         // Cast to string (optional)
    .normalize('NFKD')                  // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .replace( /[\u0300-\u036f]/g, '' )  // Remove all characters that are not letters, numbers, dash, or underscore
    .toLowerCase()                      // Convert the string to lowercase letters
    .trim()                             // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, '-')               // Replace spaces with -
    .replace(/[^\w-]+/g, '')            // Remove all non-word chars
    .replace(/_/g,'-')                  // Replace _ with -
    .replace(/--+/g, '-')               // Replace multiple - with single -
    .replace(/-$/g, '');                // Remove trailing -
}