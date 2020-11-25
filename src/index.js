const axios = require("axios");
const core = require("@actions/core");

const DEFAULT_ID = 1;
const AVAILABLE_IDS = [1, 2, 3, 4];

const run = async () => {
  const id = core.getInput("id") || DEFAULT_ID;
  core.debug(`[CI] ID: ${id}`);

  if (!AVAILABLE_IDS.includes(id)) {
    core.setFailed(`[CI] Unknown ID: ${id}`);
    return;
  }

  core.debug(`[CI] Fetching planet with ID ${id}`);

  const { data } = await axios.get(`https://swapi.dev/api/planets/${id}/`);

  core.debug(`Retrieved: ${JSON.stringify(data)}`);

  const { name, climate, terrain } = data;
  console.log(`${name} is an ${climate} ${terrain}.`);

  core.setOutput("planet", name);
};

run();
