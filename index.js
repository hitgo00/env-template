#!/usr/bin/env node

const fs = require('fs');

fs.readFile('.env', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  let tempData = [];
  let tempEnv = '';
  data = data.split('\n');
  data = data.forEach((element) => {
    let key = element.split('=')[0];
    tempData.push(key.concat(`=#Your ${key} here\n`));
  });
  tempData.forEach((element) => {
    tempEnv = `${tempEnv}${element}`;
  });

  fs.writeFile('.env.template', tempEnv, function (err) {
    if (err) throw err;
    console.log('.env.template file created successfully');
  });
});
