const fs = require("fs");
const csv = require('csvtojson');
const {Parser}= require('json2csv');

(async ()=>{
    //  load the users
    const user = await csv().fromFile("users.csv");
    
    user.sort((a, b) => a.FirstName.localeCompare(b.FirstName));
    
     //save the user
    const sortedUserInCsv = new Parser({fields: ["id","FirstName","LastName","UserName","Email","Avatar","Gender","DoB","Address"] }).parse(user);
    fs.writeFileSync("users-sorted.csv",sortedUserInCsv);
    
})();