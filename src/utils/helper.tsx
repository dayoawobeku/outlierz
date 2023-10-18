const fileName = 'Helper';
const truncate = (str: string, num: number) => {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
};
const navigateTo = (route: string) => {
  window.location.href = route;
};
const genStr = () => {
  return (Math.random() + 1).toString(36).substring(2);
};
export { fileName, truncate, navigateTo, genStr };
