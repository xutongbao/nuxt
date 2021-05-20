import render from "./render";

export default nuxtConfig => {
  //console.log(nuxtConfig);
  return {
    render: render(nuxtConfig)
  };
};
