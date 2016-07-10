var deepAssign = require('deep-assign');
var fs = require('fs');

module.exports = function assign(target, source, indent, callback) {
  if (typeof indent === 'function') {
    callback = indent;
    indent = 2;
  }

  fs.readFile(target, function(err, data) {
    if (err) return callback(err, data);
    var file = {};
    try {
      file = JSON.parse(data);
    } catch (e) {}
    var merged = file;
    if (typeof source === 'function') {
      deepAssign(merged, source(file));
    } else {
      deepAssign(merged, source);
    }
    fs.writeFile(target, JSON.stringify(merged, null, indent), callback);
  });
};
