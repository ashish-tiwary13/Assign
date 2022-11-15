const fetch = require("cross-fetch")
const fs = require("fs");
const csv = require('csvtojson');
const {Parser}= require('json2csv');

let i=0;
const data = async()=>{
    const response = await fetch('https://random-data-api.com/api/v2/users',{
         method:'GET',
         headers:{
            'Content-Type':'application/json; charset=utf-8'
    }
});
const res = await response.json();

//
(async ()=>{
    //  load the users
    const user = await csv().fromFile("users.csv");
    // Insert the api data to user
        user[i].id = res.id;    
        user[i].FirstName = res.first_name;    
        user[i].LastName = res.last_name;    
        user[i].UserName = res.username;    
        user[i].Email = res.email;    
        user[i].Avatar = res.avatar;    
        user[i].Gender = res.gender;    
        user[i].DoB = res.date_of_birth;    
        user[i].Address = res.address.street_name+","+res.address.street_address+","+res.address.state+","+res.address.country;   
        i++; 
    //save the user
    const userInCsv = new Parser({fields: ["id","FirstName","LastName","UserName","Email","Avatar","Gender","DoB","Address"] }).parse(user);
    fs.writeFileSync("users.csv",userInCsv);
})();
}

let t = setInterval(() => {
    data();
}, 1000);
setTimeout(() => {
    clearInterval(t);
}, 11000);

