// node fs
// const fs = require("fs"); // callback - sync
const fs = require("fs/promises"); // promise

// Write to a file //

// Callback version
// file name + content + callback
// fs.writeFile("file1.txt", "Hello World", (err) => {
//   if (err) throw err;
//   console.log("File created");
// });

// Promise version
// fs.writeFile("file2.txt", "Hello World")
//   .then(() => console.log("File created"))
//   .catch((err) => console.log(err));

// Sync version
// fs.writeFileSync("file3.txt", "Hello World"); // without this lane executed below of it will not be executed
// console.log("File created");

// Async/Await
async function createFile(filename, content) {
  try {
    await fs.writeFile(filename, content);
    console.log("File created");
  } catch (error) {
    console.log(error);
  }
}

createFile("file4.txt", "Hello World");

// Read from a file //

async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

readFile("file1.txt");
readFile("file2.txt");
readFile("file3.txt");

// Delete a file

async function deleteFile(filename) {
  try {
    await fs.unlink(filename);
    console.log(`File ${filename} deleted`);
  } catch (error) {
    console.log(error);
  }
}

deleteFile("file4.txt");

// Rename a file
async function renameFile(oldName, newName) {
  try {
    await fs.rename(oldName, newName);
    console.log(`File ${oldName} changed to ${newName}`);
  } catch (error) {
    console.log(error);
  }
}

renameFile("file1.txt", "file.txt");

// Create a folder
async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`Folder ${oldName} created`);
  } catch (error) {
    console.log(error);
  }
}

createFolder("folder1");

// https://nodejs.org/api/fs.html
