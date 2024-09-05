const formatDate = (date: Date) => {
  const day = ("00" + date.getDate()).slice(-2);
  const month = ("00" + date.getMonth() + 1).slice(-2);
  const year = date.getFullYear();
  const hour = ("00" + date.getHours()).slice(-2);
  const minutes = ("00" + date.getMinutes()).slice(-2);
  return `${day}/${month}/${year}`;
};

export default formatDate;
