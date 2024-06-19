const os = require("os");

// arch() - turns string identifying operating system architecture
console.log(os.arch()); // x64

// platfrom()
console.log(os.platform());
// win32

if (os.platform() === "win32") {
  console.log("You are on windows");
} else if (os.platform() === "darwin") {
  console.log("You are on mac");
} else {
  console.log("You are on linux");
}

// cpus() - return information about each cpu core
console.log(os.cpus());

// freemem() - amount of free memory
console.log(os.freemem());
console.log(`Free Memory ${os.freemem() / 1024 / 1024 / 1024} GB`);

// totalmem() - amount of total memory
console.log(os.totalmem());
console.log(`Free Memory ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homedir() - home directory
console.log(os.homedir());

// uptime()
console.log(os.uptime());

const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const minutes = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;

console.log(
  `Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
);

// hostname()
console.log(os.hostname());
