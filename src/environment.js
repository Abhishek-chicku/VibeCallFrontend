let IS_PROD = true;
const server = IS_PROD
  ? "https://vibecall-2.onrender.com/"
  : "http://localhost:8009";

export default server;
