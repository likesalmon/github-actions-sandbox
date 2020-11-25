const axios = require("axios");
const core = require("@actions/core");

const run = async () => {
  const id = core.getInput("id") || 1;

  const { name, climate, terrain } = await axios
    .get(`https://swapi.dev/api/planets/${id}/`)
    .then((res) => res.data);
  console.log(`${name} is an ${climate} ${terrain}.`);

  core.setOutput("planet", name);
};

run();
