const name = require("./test1");
const hi = require("./test2");
const data = require("./test3");

require("./test4");
console.log(data);
hi("Gob");
hi(name.name1);
hi(name.name2);
