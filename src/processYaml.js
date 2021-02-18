const fs = require('fs');

const processYaml = (doc, ignore) => {
    const initialOutput = flatten(doc);

    const asArrayOfPairs = Object.keys(initialOutput).map((key) => [key, initialOutput[key]]);

    const res = asArrayOfPairs.map(pair => precessEntry(pair, ignore));

    console.log(res);

    const file = fs.createWriteStream('./outputTrans.strings', {flags: 'w'});
   
    res.forEach(element => {
        const output = element[0] + " = " + element[1] + '\n\n';
        file.write(output);
    });

    file.close()
}

const flatten = (data) => {
    var result = {};
    const recurse = (cur, prop) => {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
             for(var i=0, l=cur.length; i<l; i++)
                 recurse(cur[i], prop + "[" + i + "]");
            if (l == 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop+"."+p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
}

const precessEntry = (pair, ignore = []) => {

    const key = pair[0]
    const value = `"${pair[1].replaceAll('\n', '\\n')}"`;
    // const value = pair[1];
    const separatedKeys = key.split(".");

    const filterdSrings = separatedKeys.filter(value => !ignore.includes(value));

    const finalKey = filterdSrings.reduce((prev, current) => {
        return prev + '.' + current;
    })

    return [`"${finalKey}"`, value];
}

exports.processYaml = processYaml;