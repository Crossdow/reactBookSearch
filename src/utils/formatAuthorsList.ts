export const formatAuthorsList = (authors: string[]) => {
  if (authors.length > 1) {
    return authors.map((author: string, index: number) => (
      index !== authors.length - 1 ? `${author}, ` : author
    ));
  } else {
    return authors;
  }
};