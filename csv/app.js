const fs = require('fs')
const csv = require('csv-parser')
const results = [];

// const app = express()

fs.createReadStream('data2.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', ()=> {
        console.log(results);
    })


// app.listen(3000,()=>{
//     console.log("Imeanza buada........");
// })