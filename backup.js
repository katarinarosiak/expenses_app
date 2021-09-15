#!/usr/bin/env node

const { Client } = require("pg");
const { argv, exit } = require("process");
const client = new Client({ database: 'expenses' });


class CLI {
  constructor() {

  }
}

class ExpenseData {
  constructor() {

  }
}



async function displayTableData() {
  await client.connect().catch(error => logAndExit(error));

  let queryText = "SELECT * FROM expenses";
  let data = await client.query(queryText).catch(error => {
    console.log(error);
    exit();
  });

  data.rows.forEach(obj => {
    console.log(`${obj.id} | ${obj.created_on.toDateString().padStart(10)} |  ${obj.amount.padStart(12)}  | ${obj.memo}`);
  });
  client.end();
};

async function displayCommands() {
  await client.connect().catch(error => logAndExit(error));

  let commands = "An expense recording system\n\n\n" +
    "Commands:\n\nadd AMOUNT MEMO [DATE] - record a new expense\n" +
    "clear - delete all expenses\n" +
    "list - list all expenses\n" +
    "delete NUMBER - remove expense with id NUMBER\n" +
    "search QUERY - list expenses with a matching memo field";
  console.log(commands);
  client.end();
};

async function addExpenses(amount, memo) {
  await client.connect().catch(error => logAndExit(error));

  // let rgx = /'/g;
  // if (memo.match("'")) {
  //   memo = memo.replace(rgx, "''");
  // };


  let queryText = `INSERT INTO expenses (amount, memo, created_on) VALUES ($1, $2, NOW())`;

  await client.query(queryText, [amount, memo]).catch(error => logAndExit(error));

  client.end();
};

function logAndExit(err) {
  console.log(err);
  exit(1);
};

if (argv[2] === 'list') {
  displayTableData();
} else if (argv[2] === 'add') {
  if (argv[3] === undefined || argv[4] === undefined) {
    console.log('You must provide an amount and memo.');
  } else {
    addExpenses(argv[3], argv[4]);
  }
} else {
  displayCommands();
};
