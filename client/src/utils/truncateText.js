export const truncateText = (text) => {
  const maxLength = 100;
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }

  return text;
};
