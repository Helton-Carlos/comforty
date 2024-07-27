import * as productApp from '../applications/productApplications';

const router = createRouter();

router.get('/product', defineEventHandler(productApp.getProduct));

export default useBase('/api/v1', router.handler)

