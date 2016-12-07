'use strict';
module.exports = function() {

var modules = {};



function setValue(key, value){
  modules[key] = value;
}

function getValue(key){
 if(modules[key]){
  return modules[key];
 }
 else {
  return null;
 }
}

return {
  setValue: setValue,
  getValue: getValue

};


};




