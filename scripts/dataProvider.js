const path = require('path');
const fs = require('fs');

const jsonPath = path.join(__dirname, '../data', 'paintings-nested.json');
const jsonData = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(jsonData);

module.exports = data;