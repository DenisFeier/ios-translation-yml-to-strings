const YAML = require('yaml')
const fs = require('fs');

const {processYaml} = require('./src/processYaml');

const myArgs = process.argv.slice(2);

if (myArgs.length < 1) {
    console.log("Usage: npm start <InputFile> <OutputFile>")
    process.exit(1);
}

const inputFile = myArgs[0];

String.prototype.replaceAll = function(find, replace) {
    return this.split(find).join(replace);
};

fs.readFile(inputFile, 'utf8', (err, data) => {
    processYaml(YAML.parse(data), myArgs.slice(1));
})
