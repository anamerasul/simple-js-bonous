// const products=[
//                     {name:"iphone 1", price:100},
//                     {name:"iphone 2", price:200},
//                     {name:"iphone 3", price:300},
//                     {name:"iphone 4", price:400},
//                     {name:"iphone 5", price:500},
//                     {name:"iphone 6", price:600},
//                     {name:"iphone 7", price:700},
//                     {name:"iphone 8", price:800},
//                     {name:"iphone 9", price:900},
//                     {name:"iphone 10", price:1000},
//                     {name:"iphone 11", price:1100},
//                     {name:"iphone 12", price:1200},
//                     {name:"iphone 13", price:1300},
//                     {name:"iphone 14", price:1400},
//                     {name:"iphone 15", price:1500}
// ]

// function searchProducts(products,searchText){
//                     const result=[];
                   
//                     for(const product of products){

                                       
//                                         if(product.name.includes(searchText)){
//                                         result.push(product);       
//             return result;                            // console.log(product.name);
//                                         }
                                        
                                        
//                                         // console.log(product.price);
//                     }
//                     return result;
// }

// searchProducts(products, "3");

const products = [
                    { name: 'samsung s3 phone', price: 12000 },
                    { name: 'asus laptop d34', price: 32000 },
                    { name: 'apple smart watch', price: 18000 },
                    { name: 'bosundhara binding paper', price: 80 },
                    { name: 'lg smart phone', price: 10000 },
                    { name: 'old granny land phone', price: 100 },
                    { name: 'samsung watch', price: 1000 },
                    { name: 'Dell laptop', price: 31000 },
                    { name: 'lenovo laptop', price: 41000 },
                ]
                
                function searchProducts(products, searchText) {
                    const result= [];
                    for (const product of products) {
                        const name = product.name;
                        if (name.includes(searchText)) {
                            result.push(product);
                        }
                    }
                    return result;
                }
                
                const matched = searchProducts(products, 'laptop');
                console.log(matched);