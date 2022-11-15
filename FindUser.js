const csv = require('csvtojson');

(async ()=>{
    //  load the users
    const user = await csv().fromFile("users-sorted.csv");
    const fname = [];
    for (let i = 0; i < 10; i++) {
        fname[i] = user[i].FirstName;
    }
    const FindByName = "Rozanne";  //Enter the users first name. 
    const indexOfSpecificUser = fname.indexOf(FindByName);
    if(indexOfSpecificUser==-1){
        console.log("User don't exists");
    }else{
        console.log(user[indexOfSpecificUser]);
    }
})();