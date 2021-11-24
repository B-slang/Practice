const express = require("express");
const { productCreate, deleteProduct, updateProduct, getAllProduct} = require("./controllers/productController");



const app = express();

const port = 3000;



app.use(express.json())

// app.use(express.static('public'))
// app.use('/uploads', express.static('uploads'));



app.post('/create', productCreate)
app.delete('/product/:id',deleteProduct)
app.put('/updateproduct/:id',updateProduct)
app.get('/getAll',getAllProduct )


app.get("/", (req, res) => {
  console.log("Home page");
  res.send("HomePage");
});
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});


