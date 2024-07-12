// require('dotenv').config();

 import express from 'express';
 import mongoose from 'mongoose';
import 'dotenv/config'

const app = express()
const port = process.env.PORT

// Kết nối tới MongoDB
 mongoose.connect(process.env.CONNECTION_STRING_MONGODB)
    .then(() => console.log('Connected!'));
    app.use(express.json());



    





import routerProduct from './routers/product.router.js'

app.use('/product', routerProduct);





app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})