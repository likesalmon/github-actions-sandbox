const axios = require("axios");

const run = async () => {
  const { name, climate, terrain } = await axios
    .get("https://swapi.dev/api/planets/1/")
    .then((res) => res.data);
  console.log(`${name} is an ${climate} ${terrain}.`);
};

run();
