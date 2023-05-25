const fs = require('fs')
const csv = require('csv-parser')
const results = [];

// const app = express()

fs.createReadStream('snakes_count_1000.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', ()=> {
        console.log(results);
    })


// app.listen(3000,()=>{
//     console.log("Imeanza buada........");
// })