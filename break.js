const products = [
                                        { name: 'samsung s3 phone', price: 12000 },
                                        { name: 'asus laptop d34', price: 36000 },
                                        { name: 'apple smart watch', price: 15000 },
                                        { name: 'bosundhara binding paper', price: 680 },
                                        { name: 'lg smart phone', price: 10500 },
                                        { name: 'old granny land phone', price: 100 },
                                        { name: 'samsung watch', price: 1000 },
                                        { name: 'Dell laptop', price: 31000 },
                                        { name: 'lenovo laptop', price: 41000 },
                    ]
// for(const product of products){
//                     if(product.price<=500){
//                                         break;
//                     }
//       console.log(product);              
// }
// console.log("after the loop")

for(const product of products){
                    if(product.price<20000){
                                        continue;
                    }
                    console.log(product)
}
console.log("after the loop")