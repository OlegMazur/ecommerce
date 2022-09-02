       
    const fs = require('fs')
    const fileContents = fs.readFileSync('../static/export-products-31-08-22_20-12-20.json', 'utf8')
    let jsonData
     try {
     jsonData = JSON.parse(fileContents)
    
    } catch(err) {
    console.error(err)
    }
   module.exports=jsonData