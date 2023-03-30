import { categories, detailsProduct, meta, products } from '../data/dummyData';
import resolveWithDelay from '../helpers/functions/resolveWithDelay';

const getProducts = async () => resolveWithDelay(products);
const getCategories = async () => resolveWithDelay(categories);
const getMeta = async () => resolveWithDelay(meta);
const postCheckout = async (body) => resolveWithDelay(true);

const getProductDetails = async (id) =>
    resolveWithDelay({
        ...detailsProduct.data.find((item) => parseInt(item.id) === parseInt(id)),
        title: products.data.find((item) => parseInt(item.id) === parseInt(detailsProduct.data.find((item) => parseInt(item.id) === parseInt(id)).idp)).title,
        price: products.data.find((item) => parseInt(item.id) === parseInt(detailsProduct.data.find((item) => parseInt(item.id) === parseInt(id)).idp)).price,
        idc: categories.data.find((item) => parseInt(item.id) === parseInt(products.data.find((item) => parseInt(item.id) === parseInt(detailsProduct.data.find((item) => parseInt(item.id) === parseInt(id)).idp)).idc)).id,
        category: categories.data.find((item) => parseInt(item.id) === parseInt(products.data.find((item) => parseInt(item.id) === parseInt(detailsProduct.data.find((item) => parseInt(item.id) === parseInt(id)).idp)).idc)).title,
    });

const getProductsByCategory = async (id) => resolveWithDelay(products.data.filter((item) => parseInt(item.idc) === parseInt(id)));

export { getProducts, getCategories, getProductDetails, getMeta, postCheckout, getProductsByCategory };
