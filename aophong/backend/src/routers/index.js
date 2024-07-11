import routerProduct from './product.router.js';

import routerComon from './comon.router.js';



function router(app){
    app.use('/product',routerProduct);
  
    app.use('/',routerComon);
}

export default router;