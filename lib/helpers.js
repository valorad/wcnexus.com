"use strict";

const path = require('path');
const _root = path.resolve(__dirname, '..');
const { createReadStream, createWriteStream } = require('fs');
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

const copy = (source, target, cb) => {
  let cbCalled = false;

  const done = (err) => {
    if (cb&&!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }

  let rd = createReadStream(source);
  rd.on("error", (err) => {
    done(err);
  });
  let wr = createWriteStream(target);
  wr.on("error", (err) => {
    done(err);
  });
  wr.on("close", (ex) => {
    done();
  });
  rd.pipe(wr);
}

module.exports= {
  root,
  copy
}