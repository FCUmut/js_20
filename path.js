const path = require("path");

const myFilePath = "subfolder/anotherfolder/index.js";

// basename();
const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, ".js"); // to remove also extention

console.log(base1); // index.js
console.log(base2); // index

// extname
const ext = path.extname(myFilePath);
console.log(ext); // .js

// dirname()
const dir = path.dirname(myFilePath);
console.log(dir); // opposite of basename()

// join()
const myPath = path.join("subfolder", "anotherfolder", "index.js");
console.log(myPath); // join will give you relative path

// resolve()
const resolve = path.resolve("subfolder", "anotherfolder", "index.js");
console.log(resolve); // resolve  will give you absolute path

// __dirname // whenever you are pointing to the file you are in, you should use '__dirname' instead of './'
console.log(__dirname);

// __filename
console.log(__filename); // gives same thing but in addition it gives us file name too
