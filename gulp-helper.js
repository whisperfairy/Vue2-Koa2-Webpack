/**
 * Created by whisp_000 on 2016/5/27.
 */
"use strict"
const path = require('path');
function filepath(filepath){
  let filename = path.basename(filepath);
  let folderPath =path.relative('./src',path.dirname(filepath).toString());
  let result={
    filename:filename,
    folderPath:folderPath
  };
  return result;
};
exports.filepath=filepath;
