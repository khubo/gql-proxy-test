require("dotenv").config({ path: "./.env" });
const serverless = require("serverless-http");
const { createApp } = require("@antstackio/express-graphql-proxy");

const requestParams = {
  resourceUri: "https://graphql-pokemon2.vercel.app/",
};

function handlerFunc(gqlObject, context) {
  console.log("gql Object", gqlObject);
  console.log("ctxt", context.request);
  return true;
}

const app = createApp(requestParams, handlerFunc);

module.exports.handler = serverless(app);
