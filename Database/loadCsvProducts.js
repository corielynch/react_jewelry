const csvtojson = require('csvtojson');
const csvfilepath = './MonaAssemi-Product-list.csv'

csvtojson()
.fromFile(csvfilepath)
.then((json) => {
    console.log(json.length)
})
csvtojson()