const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();

const swaggerDocumentEN = YAML.load(path.join(__dirname, 'swagger', 'swagger-en.yaml'));
const swaggerDocumentET = YAML.load(path.join(__dirname, 'swagger', 'swagger-et.yaml'));

// Inglise dokumentatsioon
app.use('/docs/en', swaggerUi.serveFiles(swaggerDocumentEN), swaggerUi.setup(swaggerDocumentEN));

// Eesti dokumentatsioon
app.use('/docs/et', swaggerUi.serveFiles(swaggerDocumentET), swaggerUi.setup(swaggerDocumentET));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


