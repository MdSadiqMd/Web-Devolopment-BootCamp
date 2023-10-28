const express=require('express');
const app=express();

app.get('/api/products',(req,res)=>{
    const products=[
        {
            id:1,
            name:"A",
            price:100,
            image:"https://picsum.images/940/650"
        }, {
            id:2,
            name:"B",
            price:200,
            image:"https://picsum.images/940/650"
        }, {
            id:3,
            name:"C",
            price:300,
            image:"https://picsum.images/940/650"
        }, {
            id:4,
            name:"D",
            price:400,
            image:"https://picsum.images/940/650"
        }, {
            id:5,
            name:"E",
            price:500,
            image:"https://picsum.images/940/650"
        },
    ]

    // When we perform search the URL will be usually change like "https://localhost:8000/api/products?search=searchedElement"
    if(req.query.search){
        const filterProducts=products.filter(product => {
            product.name.includes(req.query.search)
        })
        res.send(filterProducts);
        return;
    }

    setTimeout(()=>{
        res.send(products)
    },3000);
})

const port=process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`Server Started at ${port}`);
})