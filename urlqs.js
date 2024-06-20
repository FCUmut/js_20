const url = require("url");
const querystring = require("querystring");

// url.parse()
const myUrl = url.parse("https://example.com/listing?id=1000&premium=true");
console.log(myUrl);

// url.format()
const myUrl2 = url.format({
  protocol: "https",
  host: "www.example.com",
  pathname: "listing",
  query: {
    id: 1000,
    premium: true,
  },
});

console.log(myUrl2);

// querystring.parse()
const myQs = "year=2024&month=june&day=20";
const q = querystring.parse(myQs);
console.log(q);
console.log(q.month); // to get single value

// querystring.stringify() // reverse version of .parse() one
const myQs2 = querystring.stringify({
  year: 2024,
  month: "june",
  day: 20,
});
console.log(myQs2);
