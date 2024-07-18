import * as productController from '../../controller/product.controller'

const router = createRouter();

router.get('/products', defineEventHandler(productController.getProducts));

export default useBase("api/v1", router.handler)