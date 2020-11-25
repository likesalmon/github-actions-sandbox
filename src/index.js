const axios = require("axios");
const core = require("@actions/core");

const DEFAULT_ID = 1;
const AVAILABLE_IDS = [1, 2, 3, 4];

const run = async () => {
  const id = core.getInput("id") || DEFAULT_ID;

  if (!AVAILABLE_IDS.includes(id)) {
    core.setFailed(`Unknown ID: ${id}`);
    return;
  }

  const { name, climate, terrain } = await axios
    .get(`https://swapi.dev/api/planets/${id}/`)
    .then((res) => res.data);
  console.log(`${name} is an ${climate} ${terrain}.`);

  core.setOutput("planet", name);
};

run();
