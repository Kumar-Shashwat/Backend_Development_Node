const products = [];

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

    static fetchCart(){
        return db.execute('SELECT p.*, c.count FROM products p INNER JOIN cart c ON p.id = c.product_id; ');
    }

    static addToCart(prodId){

        db.execute('SELECT product_id FROM cart;').then( ([rows, fieldData]) => {
            
            let i ;
            for( i = 0; i< rows.length; i++){

                if(rows[i].product_id === parseInt(prodId))
                {   
                    return db.execute('update cart set count = count + 1 where product_id = ?;',[prodId]);
                }
            }
            if(i === rows.length){
                return db.execute('INSERT INTO cart (product_id, count) VALUES  (?,?);', [prodId, 1]);
            }
        }).catch(err => console.log(err));
    }

    static removeItem(prodId){

        return db.execute('DELETE FROM cart WHERE product_id = ?;', [prodId]);
    }

    static decreaseCount(prodId){
        return db.execute('UPDATE cart SET count = count - 1 WHERE product_id = ?;',[prodId]);
    }

    static increaseCount(prodId){
        return db.execute('UPDATE cart SET count = count + 1 WHERE product_id = ?;',[prodId]);
    }

};