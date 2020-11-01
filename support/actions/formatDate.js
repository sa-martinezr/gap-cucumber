/**
 * Returns the date in format MM/dd/YYYY
 * @param {string} dateToTransform
 */
export default dateToTransform => {
  const transformedDate = dateToTransform.split('-');
  return `${transformedDate[1]}/${transformedDate[0]}/${transformedDate[2]}`;
};
