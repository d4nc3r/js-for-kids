const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

const getCookies = () => {
  return document.cookie.split(";").reduce((prev, next) => {
    let keyValue = next.trim().split("=");
    return { ...prev, [keyValue[0]]: keyValue[1] };
  }, {});
};
