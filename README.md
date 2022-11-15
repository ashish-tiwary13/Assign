
# Importing the following packages:

cross-fetch:    npm install --save cross-fetch
csvtojson:      npm i csvtojson
json2csv:       npm i json2csv
fs              npm i fs

### `cross-fetch`

The cross-fetch helps to use fetch API when the same JavaScript codebase needs to run on different platforms.

### `csvtojson`

csvtojson module is a comprehensive node.js csv parser to convert csv to json or column arrays.

### `json2csv`

Converts json into csv with column titles and proper line endings.

### (data.js) 
Getting started with fetching the data from

[Random Data API](https://random-data-api.com/api/v2/users) using Async/await in the file `data.js`.

The response is converted into json and The individual data like id, first name, last name, etc from the api is stored in "users.csv". After that the data is saved in "users.csv".

The setInterval is used for fetching the api data for multiple times(say 10 times) and to stop the api call we used setTimeout and clearInterval. At the 11sec the clearInterval are called using setTimeout, so that till 10 sec only api will call.

### sortingUser.js

In this `sortingUsers.js` file, we imported all the above dependencies except fetching one.

First of all, we get all the data from the `users.csv` to `user` and this `user` is sorted using sort function in js. After that the user which was sorted is getting stored in new file `users-sorted.csv`.

### FindUser.js

The data from `user-sorted.csv` is stored in `user` and another array is created named `fname` and the first name of the data is only stored in `fname`.
Another variable is created (FindByName) were you can enter the users first name.
Now, by using `indexOf` we can get the index of `FindByName` and after that the user of that index is printed out.
