const igdb = require('igdb-api-node').default
const client = igdb('8c21eee51820486565616029c96dba2d');

client.games({
    fields: '*', // Return all fields
    search: "the legend of zelda"
}).then(response => {
    // response.body contains the parsed JSON response to this query
    var arr = response.body;
    arr.forEach(function(element, index) {
     console.log(`${index+1}. ${element.name}`);   
    });
    // console.log(JSON.stringify(response.body, null, 2));
}).catch(error => {
    throw error;
});