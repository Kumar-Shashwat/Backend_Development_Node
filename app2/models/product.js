const products = [];

module.exports = class Product{

    constructor(title, price, imageUrl, author , description){
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.author = author;
        this.description = description;
    }

    save() {
        this.id = Math.random().toString();
        products.push(this);
    }

    static fetchAll(){
        return products;
    }

    static findById(id){
        for(let x of products){
            if(x.id ===  id)
            {
                return x;
            }
        }
    }

    
};

// const fs = require('fs');
// const path = require('path');

// module.exports = class Product {
//   constructor(t) {
//     this.title = t;
//   }

//   save() {
//     const p = path.join(
//       path.dirname(process.mainModule.filename),
//       'data',
//       'products.json'
//     );
//     fs.readFile(p, (err, fileContent) => {
//       let products = [];
//       if (!err) {
//         products = JSON.parse(fileContent);
//       }
//       products.push(this);
//       fs.writeFile(p, JSON.stringify(products), err => {
//         console.log(err);
//       });
//     });
//   }

//   static fetchAll(cb) {
//     const p = path.join(
//       path.dirname(process.mainModule.filename),
//       'data',
//       'products.json'
//     );
//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         cb([]);
//       }
//       cb(JSON.parse(fileContent));
//     });
//   }
// };
