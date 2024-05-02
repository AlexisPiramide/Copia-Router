import URL from "./constante.js";

const getPregunta = async () => {
    const data = await fetch(URL+"/api/pregunta")
    const json = await data.json();
    return json;
};
  
export { getPregunta };