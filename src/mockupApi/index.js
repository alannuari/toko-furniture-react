import { categories, detailsProduct, meta, products } from '../data/dummyData';
import resolveWithDelay from '../helpers/functions/resolveWithDelay';

const getProducts = async () => resolveWithDelay(products);
const getCategories = async () => resolveWithDelay(categories);
const getProductDetails = async (id) => resolveWithDelay(detailsProduct.data.find((item) => parseInt(item.id) === parseInt(id)));
const getMeta = async () => resolveWithDelay(meta);
const postCheckout = async (body) => resolveWithDelay(true);

export { getProducts, getCategories, getProductDetails, getMeta, postCheckout };
