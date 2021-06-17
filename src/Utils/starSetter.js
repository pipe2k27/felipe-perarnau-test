// converts average votes into star rating
const starSetter = (rating) => {
  if (rating < 2) {
    return 1;
  }
  if (rating >= 2 && rating < 4) {
    return 2;
  }
  if (rating >= 4 && rating < 6) {
    return 3;
  }
  if (rating >= 6 && rating < 8) {
    return 4;
  }
  return 5;
};

export default starSetter;
