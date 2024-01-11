import React, { useState } from 'react'
import { createContext } from 'react'

export const dataContext = createContext()
function Productdata({children}) {
    const [productData, setProductData] = useState([
        {
            "id": 1,
            "name": "Worricow Good ",
            "productImage": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "electronic",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "images": [
                {
                    "imageP": "image-1",
                    "url": "https://images.unsplash.com/photo-1505740106531-4243f3831c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    "imageP": "image-2",
                    "url": "https://images.unsplash.com/photo-1505740106531-4243f3831c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    "imageP": "image-3",
                    "url": "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
            ],
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ],
    
        },
        {
            "id": 2,
            "name": "Watech",
            "productImage": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "electronic",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 3,
            "name": "Earphone",
            "productImage": "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "electronic",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 4,
            "name": "Ipad collections",
            "productImage": "https://images.unsplash.com/photo-1524289286702-f07229da36f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "electronic",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 5,
            "name": "Watch collections",
            "productImage": "https://images.unsplash.com/photo-1526887520775-4b14b8aed897?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "electronic",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 6,
            "name": "watch ",
            "productImage": "https://images.unsplash.com/photo-1636877648317-fc6275acf0dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "electronic",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 7,
            "name": "gaming play instrument",
            "productImage": "https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "electronic",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "desire" : true,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 8,
            "name": "printer",
            "productImage": "https://images.unsplash.com/photo-1516962126636-27ad087061cc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "electronic",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : true,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 9,
            "name": "apple laptop",
            "productImage": "https://images.unsplash.com/photo-1525101238777-8878781fc06d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "electronic",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 10,
            "name": "camera",
            "productImage": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "electronic",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 11,
            "name": "white chairs",
            "productImage": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "tables",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 12,
            "name": "black chair",
            "productImage": "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "tables",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : true,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 13,
            "name": "chair professional",
            "productImage": "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "tables",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 14,
            "name": "sofa",
            "productImage": "https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "tables",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 15,
            "name": "pillo with chair",
            "productImage": "https://images.unsplash.com/photo-1589584649628-b597067e07a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "tables",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 16,
            "name": "pink chair",
            "productImage": "https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "tables",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 17,
            "name": "green chair",
            "productImage": "https://images.unsplash.com/photo-1599004831521-f9b1f81f5a84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "tables",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : true,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 18,
            "name": "white chair with pillo",
            "productImage": "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "tables",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 19,
            "name": "green sofa pillo",
            "productImage": "https://images.unsplash.com/photo-1575806980151-1078f5578718?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "tables",
            "desire" : true,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 20,
            "name": "greay sofa",
            "productImage": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "tables",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 21,
            "name": "red shooes",
            "productImage": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "boots",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 22,
            "name": "black and white shooes",
            "productImage": "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "boots",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 23,
            "name": "black shooes",
            "productImage": "https://images.unsplash.com/photo-1543508282-5c1f427f023f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "boots",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : true,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 24,
            "name": "camera",
            "productImage": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "boots",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 25,
            "name": "blue shooes",
            "productImage": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "boots",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 26,
            "name": "red and white shooes",
            "productImage": "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "boots",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 27,
            "name": "whites shooes",
            "productImage": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "boots",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "desire" : true,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 28,
            "name": "pink shooes",
            "productImage": "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "boots",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 29,
            "name": "grey shooes",
            "productImage": "https://images.unsplash.com/photo-1542219550-37153d387c27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "boots",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 30,
            "name": "black jacket",
            "productImage": "https://images.unsplash.com/photo-1522968439036-e6338d0ed84f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "boots",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 31,
            "name": "black meoly ",
            "productImage": "https://images.unsplash.com/photo-1620064881980-1023851173f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "male",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : true,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 32,
            "name": "black and grey shooes",
            "productImage": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "male",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 33,
            "name": "black bol",
            "productImage": "https://images.unsplash.com/photo-1608568442995-37bdb4c905ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "male",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : true,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 34,
            "name": "green jacket",
            "productImage": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "male",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 35,
            "name": "dark green jackets",
            "productImage": "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "male",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 36,
            "name": "blue jackets",
            "productImage": "https://images.unsplash.com/photo-1594938328870-9623159c8c99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "male",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 37,
            "name": "t-serts",
            "productImage": "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "male",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 38,
            "name": "full cloth",
            "productImage": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "male",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 39,
            "name": "black and full balck jackets",
            "productImage": "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbiUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "male",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 40,
            "name": "whote greys jackets",
            "productImage": "https://plus.unsplash.com/premium_photo-1683121564871-bcab8f7de477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "male",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 41,
            "name": "blackie bags ",
            "productImage": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "bags",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : true,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 42,
            "name": "yellow bags",
            "productImage": "https://images.unsplash.com/photo-1531938716357-224c16b5ace3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "bags",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 43,
            "name": "pink bags",
            "productImage": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "bags",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 44,
            "name": "black illastic back pak",
            "productImage": "https://images.unsplash.com/photo-1541267732407-8f72c182cf11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "bags",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 45,
            "name": "pinkly bags",
            "productImage": "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "bags",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 46,
            "name": "advent bags",
            "productImage": "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "bags",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 47,
            "name": "bag adventages",
            "productImage": "https://images.unsplash.com/photo-1611010344444-5f9e4d86a6e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "bags",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 48,
            "name": "simple bag",
            "productImage": "https://images.unsplash.com/photo-1611254666354-d75bfe3cadbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "bags",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 49,
            "name": "double backpack",
            "productImage": "https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "bags",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 50,
            "name": "old age bag",
            "productImage": "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "bags",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 51,
            "name": "old age car toy",
            "productImage": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "toys",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "desire" : true,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 52,
            "name": "green and white robot toy",
            "productImage": "https://images.unsplash.com/photo-1581557991964-125469da3b8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "toys",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 53,
            "name": "color mixer block play toy",
            "productImage": "https://images.unsplash.com/photo-1560113562-a0a37ada6d91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "toys",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 54,
            "name": "white blue robot toys",
            "productImage": "https://images.unsplash.com/photo-1598541264502-84dc6aa2fb87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "toys",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : true,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 55,
            "name": "train toys",
            "productImage": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "toys",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 56,
            "name": "old black car toy",
            "productImage": "https://images.unsplash.com/photo-1572635196184-84e35138cf62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "toys",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 57,
            "name": "black duck toy",
            "productImage": "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "toys",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 58,
            "name": "toys collections",
            "productImage": "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "toys",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 59,
            "name": "yellow car toys",
            "productImage": "https://images.unsplash.com/photo-1534732806146-b3bf32171b48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "toys",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        },
        {
            "id": 60,
            "name": "multicolor toys ",
            "productImage": "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
            "quantity": 1,
            "discountPercentage": 10,
            "afterDiscountamt": 90,
            "category": "toys",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam leo ut urna hendrerit, eu rhoncus dui semper.",
            "trending" : false,
            "reviews": [
                {
                    "user": "User1",
                    "comment": "Great product!",
                    "rating": 5
                },
                {
                    "user": "User2",
                    "comment": "Satisfied with the purchase.",
                    "rating": 4
                }
            ]
        }
    ])
    const [searchToggle,setSearchToggle] = useState(false)
    
  return (
    <dataContext.Provider value={{productData, setProductData, searchToggle, setSearchToggle}}>
        {children}
    </dataContext.Provider>
  )
}

export default Productdata