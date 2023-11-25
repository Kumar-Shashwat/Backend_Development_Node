
const db = require('../util/database');

module.exports = class Product{

    constructor(title, price, imageUrl, author , description){
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.author = author;
        this.description = description;
    }

    save() {

        db.execute('insert into  products (title, price, imageURL, author, description  ) values ( ?, ?, ?, ?, ? )',
            [this.title, this.price, this.imageUrl, this.author, this.description] 
        );

        // this.id = Math.random().toString();
        // products.push(this);
    }

    static fetchAll(){

        return db.execute('SELECT * FROM products');
        
        // return products;
    }

    static findById(id){

        return db.execute('SELECT * FROM products WHERE id = ?', [id]) ;

        // for(let x of products){
        //     if(x.id ===  id)
        //     {
        //         return x;
        //     }
        // }
    }

    static deleteById(id){

        return db.execute('DELETE FROM products WHERE id = ?;', [id]);

        // for(let i =0; i< products.length; i++){
        //     if(products[i].id ===  id)
        //     {
        //         products.splice(i,1);
        //         break;
        //     }
        // }
    }

    static updateAll(id, title, price, imageUrl, author, description){
        return db.execute('UPDATE products set title = ?, price = ?, imageUrl = ?, author = ?, description = ? where id = ?;',
            [title, price, imageUrl, author, description, id]
        )
    };




};