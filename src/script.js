const fs = require("fs");
fs.writeFileSync(
  "./.env",
  `MAPBOX_TOKEN=${process.env.MAPBOX_TOKEN}\nBACKEND_URL=${process.env.nBACKEND_URL}`
);
