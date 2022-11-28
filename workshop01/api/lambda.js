const awsLambdaFastify = require('@fastify/aws-lambda');
const build = require("./app");

const app = build({
    logger: true
});

const proxy = awsLambdaFastify(app);

exports.handler = proxy;
