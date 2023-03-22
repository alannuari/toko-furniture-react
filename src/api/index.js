const products = {
    data: [
        {
            id: 1,
            idc: 3,
            title: 'Cangkir Mauttie',
            price: 89300,
            imageUrl: 'https://luxspace-html.netlify.app/images/content/image-arrived-1.png',
        },
        {
            id: 2,
            idc: 3,
            title: 'Bankyu Minimay',
            price: 67899,
            imageUrl: 'https://luxspace-html.netlify.app/images/content/image-arrived-2.png',
        },
        {
            id: 3,
            idc: 3,
            title: 'Buku Sidu Edition',
            price: 120699,
            imageUrl: 'https://luxspace-html.netlify.app/images/content/image-arrived-3.png',
        },
        {
            id: 4,
            idc: 3,
            title: 'Watch Notes X',
            price: 1973000,
            imageUrl: 'https://luxspace-html.netlify.app/images/content/image-arrived-4.png',
        },
        {
            id: 5,
            idc: 3,
            title: 'Sweet Modern Dinning Table',
            price: 599400,
            imageUrl: 'https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=562&q=80',
        },
        {
            id: 6,
            idc: 3,
            title: 'Bankyu Minimay',
            price: 67899,
            imageUrl: 'https://luxspace-html.netlify.app/images/content/image-arrived-2.png',
        },
        {
            id: 7,
            idc: 8,
            title: 'Gray White Padded Sofa',
            price: 89999999,
            imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
        },
        {
            id: 8,
            idc: 1,
            title: 'Teal Wooden Cabiner',
            price: 1298599,
            imageUrl: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        },
        {
            id: 9,
            idc: 2,
            title: 'Classy Wooden Chair',
            price: 859000,
            imageUrl: 'https://images.unsplash.com/photo-1487015307662-6ce6210680f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80',
        },
    ],
};

const categories = {
    data: [
        {
            id: 1,
            title: 'Living Room',
            products: 18309,
            imageUrl: 'image-catalog-1.png',
            ratio: {
                default: '1/9',
                md: '1/4',
            },
        },
        {
            id: 2,
            title: 'Children Room',
            products: 837,
            imageUrl: 'image-catalog-3.png',
            ratio: {
                default: '1/9',
                md: '2/2',
            },
        },
        {
            id: 3,
            title: 'Decoration',
            products: 77392,
            imageUrl: 'image-catalog-4.png',
            ratio: {
                default: '1/9',
                md: '2/3',
            },
        },
        {
            id: 4,
            title: 'Master Room',
            products: 22094,
            imageUrl: 'image-catalog-2.png',
            ratio: {
                default: '1/9',
                md: '1/4',
            },
        },
    ],
};

const detailsProduct = {
    data: [
        {
            id: 1,
            price: 12000000,
            title: 'Chair Thatty',
            description:
                "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p><p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            imgUrls: [
                'https://luxspace-html.netlify.app/images/content/showcase-1.front.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            category: {
                id: 1,
                title: 'Living Room',
                products: 18309,
                imageUrl: 'image-catalog-1.png',
            },
            relatedProducts: [
                {
                    id: 1,
                    idc: '1',
                    title: 'Cangkir Mauttie',
                    price: 89300000,
                    imageUrl: 'https://luxspace-html.netlify.app/images/content/chair-1.png',
                },
                {
                    id: 2,
                    idc: '1',
                    title: 'Saman Kakka',
                    price: 14500399,
                    imageUrl: 'https://luxspace-html.netlify.app/images/content/chair-2.png',
                },
                {
                    id: 3,
                    idc: '1',
                    title: 'Lino Dino',
                    price: 22000000,
                    imageUrl: 'https://luxspace-html.netlify.app/images/content/chair-3.png',
                },
                {
                    id: 4,
                    idc: '1',
                    title: 'Syail Ammeno',
                    price: 6399999,
                    imageUrl: 'https://luxspace-html.netlify.app/images/content/chair-4.png',
                },
            ],
        },
        {
            id: 2,
            price: 89300000,
            title: 'Cangkir Mauttie',
            description:
                "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p>\n<p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            imgUrls: [
                'https://luxspace-html.netlify.app/images/content/showcase-1.front.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            category: { id: 1, title: 'Living Room', products: 18309, imageUrl: 'image-catalog-1.png' },
            relatedProducts: [
                {
                    id: 1,
                    idc: '1',
                    title: 'Cangkir Mauttie',
                    price: 89300000,
                    imageUrl: 'https://luxspace-html.netlify.app/images/content/chair-1.png',
                },
                {
                    id: 2,
                    idc: '1',
                    title: 'Saman Kakka',
                    price: 14500399,
                    imageUrl: 'https://luxspace-html.netlify.app/images/content/chair-2.png',
                },
                {
                    id: 3,
                    idc: '1',
                    title: 'Lino Dino',
                    price: 22000000,
                    imageUrl: 'https://luxspace-html.netlify.app/images/content/chair-3.png',
                },
                {
                    id: 4,
                    idc: '1',
                    title: 'Syail Ammeno',
                    price: 6399999,
                    imageUrl: 'https://luxspace-html.netlify.app/images/content/chair-4.png',
                },
            ],
        },
    ],
};

const meta = {
    couriers: [
        {
            id: 1,
            name: 'Fedex',
            imgUrl: 'https://luxspace-html.netlify.app/images/content/logo-fedex.svg',
        },
        {
            id: 2,
            name: 'DHL Express',
            imgUrl: 'https://luxspace-html.netlify.app/images/content/logo-dhl.svg',
        },
    ],
    payments: [
        {
            id: 1,
            name: 'Midtrans',
            imgUrl: 'https://luxspace-html.netlify.app/images/content/logo-midtrans.png',
        },
        {
            id: 2,
            name: 'Mastercard',
            imgUrl: 'https://luxspace-html.netlify.app/images/content/logo-mastercard.svg',
        },
        {
            id: 3,
            name: 'Bitcoin',
            imgUrl: 'https://luxspace-html.netlify.app/images/content/logo-bitcoin.svg',
        },
        {
            id: 4,
            name: 'American Express',
            imgUrl: 'https://luxspace-html.netlify.app/images/content/logo-american-express.svg',
        },
    ],
};

const resolveWithDelay = (result, delay = 1) => new Promise((resolve) => setTimeout(() => resolve(result), delay * 2000));
// const rejectedWithDelay = (msg, delay = 1) => new Promise((resolve, reject) => setTimeout(() => reject(msg), delay * 2000));

const getProducts = async () => resolveWithDelay(products);
const getCategories = async () => resolveWithDelay(categories);
const getProductDetails = async (id) => resolveWithDelay(detailsProduct.data.filter((item) => parseInt(item.id) === parseInt(id)));
const getMeta = async () => resolveWithDelay(meta);
const postCheckout = async (body) => resolveWithDelay(true);

export { getProducts, getCategories, getProductDetails, getMeta, postCheckout };
