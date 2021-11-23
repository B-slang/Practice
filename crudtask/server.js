const express = require("express");
const { productCreate, deleteProduct } = require("./controllers/productController");



const app = express();

const port = 3000;



app.use(express.json())



app.post('/create', productCreate)
app.delete('/product/:id',deleteProduct)


app.get("/", (req, res) => {
  console.log("Home page");
  res.send("HomePage");
});
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});


