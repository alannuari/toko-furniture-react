import { Category } from '../models/Category';
import { Courier } from '../models/Courier';
import { DetailsProduct } from '../models/DetailsProduct';
import { Payment } from '../models/Payment';
import { Product } from '../models/Product';

export const products = {
    data: [
        new Product(1, 1, 'Cangkir Mauttie', 89300, 'https://luxspace-html.netlify.app/images/content/image-arrived-1.png'),
        new Product(2, 1, 'Bankyu Minimay', 67899, 'https://luxspace-html.netlify.app/images/content/image-arrived-2.png'),
        new Product(3, 2, 'Buku Sidu Edition', 120699, 'https://luxspace-html.netlify.app/images/content/image-arrived-3.png'),
        new Product(4, 2, 'Watch Notes X', 1973000, 'https://luxspace-html.netlify.app/images/content/image-arrived-4.png'),
        new Product(5, 3, 'Sweet Modern Dinning Table', 599400, 'https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=562&q=80'),
        new Product(6, 3, 'Gray White Padded Sofa', 89999999, 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80'),
        new Product(7, 4, 'Teal Wooden Cabiner', 1298599, 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'),
        new Product(8, 4, 'Classy Wooden Chair', 859000, 'https://images.unsplash.com/photo-1487015307662-6ce6210680f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80'),
        new Product(9, 1, 'Gaming Chair', 89300000, 'https://luxspace-html.netlify.app/images/content/chair-1.png'),
        new Product(10, 2, 'Saman Kakka', 14500399, 'https://luxspace-html.netlify.app/images/content/chair-2.png'),
        new Product(11, 3, 'Lino Dino', 22000000, 'https://luxspace-html.netlify.app/images/content/chair-3.png'),
        new Product(12, 4, 'Syail Ammeno', 6399999, 'https://luxspace-html.netlify.app/images/content/chair-4.png'),
    ],
};

export const categories = {
    data: [
        new Category(1, 'Living Room', 3, 'image-catalog-1.png', {
            default: '1/9',
            md: '1/4',
        }),
        new Category(2, 'Children Room', 3, 'image-catalog-3.png', {
            default: '1/9',
            md: '2/2',
        }),
        new Category(3, 'Decoration', 3, 'image-catalog-4.png', {
            default: '1/9',
            md: '2/3',
        }),
        new Category(4, 'Master Room', 3, 'image-catalog-2.png', {
            default: '1/9',
            md: '1/4',
        }),
    ],
};

export const detailsProduct = {
    data: [
        new DetailsProduct(
            1,
            1,
            "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p><p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            [
                'https://luxspace-html.netlify.app/images/content/image-arrived-1.png',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            [...products.data.slice(1, 5)]
        ),
        new DetailsProduct(
            2,
            2,
            "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p>\n<p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            [
                'https://luxspace-html.netlify.app/images/content/image-arrived-2.png',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            [...products.data.slice(2, 6)]
        ),
        new DetailsProduct(
            3,
            3,
            "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p>\n<p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            [
                'https://luxspace-html.netlify.app/images/content/image-arrived-3.png',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            [...products.data.slice(3, 7)]
        ),
        new DetailsProduct(
            4,
            4,
            "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p>\n<p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            [
                'https://luxspace-html.netlify.app/images/content/image-arrived-4.png',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            [...products.data.slice(4, 8)]
        ),
        new DetailsProduct(
            5,
            5,
            "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p>\n<p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            [
                'https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=562&q=80',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            [...products.data.slice(5, 9)]
        ),
        new DetailsProduct(
            6,
            6,
            "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p>\n<p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            [
                'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            [...products.data.slice(6, 10)]
        ),
        new DetailsProduct(
            7,
            7,
            "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p>\n<p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            [
                'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            [...products.data.slice(7, 11)]
        ),
        new DetailsProduct(
            8,
            8,
            "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p>\n<p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            [
                'https://images.unsplash.com/photo-1487015307662-6ce6210680f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            [...products.data.slice(8, 12)]
        ),
        new DetailsProduct(
            9,
            9,
            "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p>\n<p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            [
                'https://luxspace-html.netlify.app/images/content/chair-1.png',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            [...products.data.slice(9, 13)]
        ),
        new DetailsProduct(
            10,
            10,
            "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p>\n<p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            [
                'https://luxspace-html.netlify.app/images/content/chair-2.png',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            [...products.data.slice(10, 14)]
        ),
        new DetailsProduct(
            11,
            11,
            "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p>\n<p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            [
                'https://luxspace-html.netlify.app/images/content/chair-3.png',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            [...products.data.slice(0, 4)]
        ),
        new DetailsProduct(
            12,
            12,
            "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p>\n<p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            [
                'https://luxspace-html.netlify.app/images/content/chair-4.png',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            [...products.data.slice(1, 5)]
        ),
    ],
};

export const meta = {
    couriers: [new Courier(1, 'Fedex', 'https://luxspace-html.netlify.app/images/content/logo-fedex.svg'), new Courier(2, 'DHL Express', 'https://luxspace-html.netlify.app/images/content/logo-dhl.svg')],
    payments: [
        new Payment(1, 'Midtrans', 'https://luxspace-html.netlify.app/images/content/logo-midtrans.png'),
        new Payment(2, 'Mastercard', 'https://luxspace-html.netlify.app/images/content/logo-mastercard.svg'),
        new Payment(3, 'Bitcoin', 'https://luxspace-html.netlify.app/images/content/logo-bitcoin.svg'),
        new Payment(4, 'American Express', 'https://luxspace-html.netlify.app/images/content/logo-american-express.svg'),
    ],
};
