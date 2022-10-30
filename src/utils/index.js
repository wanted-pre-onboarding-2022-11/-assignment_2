const getDate = (date) => {
  const day = date.slice(0, 10);
  const time = date.slice(11, 19);
  const result = `${day} ${time}`;
  return result;
};

export { getDate };
