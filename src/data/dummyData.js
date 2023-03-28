import { Category } from '../models/Category';
import { Courier } from '../models/Courier';
import { DetailsProduct } from '../models/DetailsProduct';
import { Payment } from '../models/Payment';
import { Product } from '../models/Product';
import { RelatedProducts } from '../models/RelatedProducts';

export const products = {
    data: [
        new Product(1, 3, 'Cangkir Mauttie', 89300, 'https://luxspace-html.netlify.app/images/content/image-arrived-1.png'),
        new Product(2, 3, 'Bankyu Minimay', 67899, 'https://luxspace-html.netlify.app/images/content/image-arrived-2.png'),
        new Product(3, 3, 'Buku Sidu Edition', 120699, 'https://luxspace-html.netlify.app/images/content/image-arrived-3.png'),
        new Product(4, 3, 'Watch Notes X', 1973000, 'https://luxspace-html.netlify.app/images/content/image-arrived-4.png'),
        new Product(5, 3, 'Sweet Modern Dinning Table', 599400, 'https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=562&q=80'),
        new Product(6, 3, 'Bankyu Minimay', 67899, 'https://luxspace-html.netlify.app/images/content/image-arrived-2.png'),
        new Product(7, 8, 'Gray White Padded Sofa', 89999999, 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80'),
        new Product(8, 1, 'Teal Wooden Cabiner', 1298599, 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'),
        new Product(9, 2, 'Classy Wooden Chair', 859000, 'https://images.unsplash.com/photo-1487015307662-6ce6210680f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80'),
    ],
};

export const categories = {
    data: [
        new Category(1, 'Living Room', 18309, 'image-catalog-1.png', {
            default: '1/9',
            md: '1/4',
        }),
        new Category(2, 'Children Room', 837, 'image-catalog-3.png', {
            default: '1/9',
            md: '2/2',
        }),
        new Category(3, 'Decoration', 77392, 'image-catalog-4.png', {
            default: '1/9',
            md: '2/3',
        }),
        new Category(4, 'Master Room', 22094, 'image-catalog-2.png', {
            default: '1/9',
            md: '1/4',
        }),
    ],
};

export const detailsProduct = {
    data: [
        new DetailsProduct(
            1,
            12000000,
            'Chair Thatty',
            "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p><p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            [
                'https://luxspace-html.netlify.app/images/content/showcase-1.front.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            new Category(1, 'Living Room', 18309, 'image-catalog-1.png'),
            [
                new RelatedProducts(1, '1', 'Cangkir Mauttie', 89300000, 'https://luxspace-html.netlify.app/images/content/chair-1.png'),
                new RelatedProducts(2, '1', 'Saman Kakka', 14500399, 'https://luxspace-html.netlify.app/images/content/chair-2.png'),
                new RelatedProducts(3, '1', 'Lino Dino', 22000000, 'https://luxspace-html.netlify.app/images/content/chair-3.png'),
                new RelatedProducts(4, '1', 'Syail Ammeno', 6399999, 'https://luxspace-html.netlify.app/images/content/chair-4.png'),
            ]
        ),
        new DetailsProduct(
            2,
            89300000,
            'Cangkir Mauttie',
            "<p class='text-xl leading-7 mb-6'>Tailored to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, Jetty has been influenced by timeless 1950s style.</p>\n<p class='text-xl leading-7 mb-6'>Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>",
            [
                'https://luxspace-html.netlify.app/images/content/showcase-1.front.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.back.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.rear.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.side.jpg',
                'https://luxspace-html.netlify.app/images/content/showcase-1.top.jpg',
            ],
            new Category(1, 'Living Room', 18309, 'image-catalog-1.png'),
            [
                new RelatedProducts(1, '1', 'Cangkir Mauttie', 89300000, 'https://luxspace-html.netlify.app/images/content/chair-1.png'),
                new RelatedProducts(2, '1', 'Saman Kakka', 14500399, 'https://luxspace-html.netlify.app/images/content/chair-2.png'),
                new RelatedProducts(3, '1', 'Lino Dino', 22000000, 'https://luxspace-html.netlify.app/images/content/chair-3.png'),
                new RelatedProducts(4, '1', 'Syail Ammeno', 6399999, 'https://luxspace-html.netlify.app/images/content/chair-4.png'),
            ]
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
