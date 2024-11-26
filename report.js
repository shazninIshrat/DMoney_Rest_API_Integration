const newman = require('newman');
 require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/38363274-a55c3a33-5a74-44f7-906d-814c60b6aca5?access_key=${process.env.access_key}`,
    //collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    environment: './env.json',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});