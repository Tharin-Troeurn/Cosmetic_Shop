// heroImageList
import HeroImg1 from '../assets/heroImg/girls-cosmetic.png'
import HeroImg2 from '../assets/heroImg/perfume_product.png'
import HeroImg3 from '../assets/heroImg/special-promotion.png'

// categoryList
import categoryImg1 from '../assets/categoryImage/hair-cream.png'
import categoryImg2 from '../assets/categoryImage/brushes.png'
import categoryImg3 from '../assets/categoryImage/perfume.png'
import categoryImg4 from '../assets/categoryImage/skincare-cream.png'
import categoryImg5 from '../assets/categoryImage/lipstick.png'
import categoryImg6 from '../assets/categoryImage/face-cream.png'

// bannerList
import bannerImg1 from '../assets/heroImg/bba.png'
import bannerImg2 from '../assets/heroImg/bobbi-brown.png'

// products
import productImg1 from '../assets/productsImg/product-1.jpg'
import productImg2 from '../assets/productsImg/product-2.jpg'
import productImg3 from '../assets/productsImg/product-3.jpg'
import productImg4 from '../assets/productsImg/product-4.jpg'
import productImg5 from '../assets/productsImg/product-5.jpg'

const menus = [
  {
    id: 1,
    name: "Home",
    link: "/"
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop"
  },
  {
    id: 3,
    name: "Makeup Product",
    link: "/#"
  },
  {
    id: 4,
    name: "Perfume",
    link: "/#"
  },
  {
    id: 5,
    name: "Makeup Lipstick",
    link: "/#"
  },
  {
    id: 6,
    name: "Feedback",
    link: "/#"
  },
];


const heroImageList = [
  {
    id: 1,
    image: HeroImg1,
    title_discount: 'Upto 30% off on our Face Product',
    title: 'Aloe Vera Natural Cosmetic',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quis fuga illo eius animi. Molestias. Lorem, ipsum dolor sit amet consectetur adipisicing elit.Nobis necessitatibus a deserunt repudiandae'
  },
  {
    id: 2,
    image: HeroImg2,
    title_discount: 'Upto 50% off on our Perfume',
    title: 'The Best Premium Parfume',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quis fuga illo eius animi. Molestias. Lorem, ipsum dolor sit amet consectetur adipisicing elit.Nobis necessitatibus a deserunt repudiandae'
  },
  {
    id: 3,
    image: HeroImg3,
    title_discount: '60% off on all Products Sale',
    title: 'Discover the Secret Of Natural Beauty',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quis fuga illo eius animi. Molestias. Lorem, ipsum dolor sit amet consectetur adipisicing elit.Nobis necessitatibus a deserunt repudiandae'
  }
]

const bannerList = [
  {
    id: 1,
    image: bannerImg1,
    title_discount: ' 25% discount',
    title: 'Cosmetic Skin Perfectly',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quis fuga illo eius animi. Molestias. Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 2,
    image: bannerImg2,
    title_discount: ' 30% discount',
    title: 'Hydrated Skin Perfectly',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quis fuga illo eius animi. Molestias. Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
  },
]

const categoryList=[
  {
    id : 1,
    name : 'Hair Cream',
    image : categoryImg1
  },
  {
    id : 2,
    name : 'Makeup Brushes',
    image : categoryImg2
  },
  {
    id : 3,
    name : 'Perfume',
    image : categoryImg3
  },
  {
    id : 4,
    name : 'Skincare Cream',
    image : categoryImg4
  },
  {
    id : 5,
    name : 'Makeup Lipstick',
    image : categoryImg5
  },
  {
    id : 6,
    name : 'Face Cream',
    image : categoryImg6
  },
]

const products = [
  {
    id: 1,
    name: "Galib Touch Up Combo",
    image: productImg1,
    discount: null,
    price: 240.00,
    oldPrice: null,
    rating: 5,
  },
  {
    id: 2,
    name: "Swiss Beauty Blusher",
    image: productImg2,
    discount: "-10%",
    price: 17.00,
    oldPrice: 19.00,
    rating: 0,
  },
  {
    id: 3,
    name: "MensXP Mud Concealer Stick",
    image: productImg3,
    discount: "-8%",
    price: 100.00,
    oldPrice: 120.00,
    rating: 0,
  },
  {
    id: 4,
    name: "NutriGlow Gold Kesar",
    image: productImg4,
    discount: "-25%",
    price: 9.00,
    oldPrice: 12.00,
    rating: 4,
  },
  {
    id: 5,
    name: "Macplus Makeup Brushes",
    image: productImg5,
    discount: "-7%",
    price: 90.00,
    oldPrice: 97.00,
    rating: 0,
  },
  {
    id: 6,
    name: "Beauty Ultimate Eye Shadow",
    image: "https://i.pinimg.com/564x/4a/89/fb/4a89fb7260da5fbfe8028b0704511d2c.jpg",
    discount: "-4%",
    price: 70.00,
    oldPrice: 75.00,
    rating: 5,
  },
  {
    id: 7,
    name: "Hello Kitty Brush Set",
    image: "https://i.pinimg.com/564x/63/2d/f8/632df82391192e5584daa2ac2ac28845.jpg",
    discount: null,
    price: 180.00,
    oldPrice: null,
    rating: 0,
  },
  {
    id: 8,
    name: "Renew Skin Prep Combo",
    image: "https://i.pinimg.com/564x/73/8f/5f/738f5f088f59d381f695008e6bb14705.jpg",
    discount: "-12%",
    price: 85.00,
    oldPrice: 97.00,
    rating: 0,
  },
  {
    id: 9,
    name: "Fab Renew Glow Combo",
    image: "https://i.pinimg.com/564x/df/33/3f/df333febccf1630b9e88d39044821d42.jpg",
    discount: "-23%",
    price: 300.00,
    oldPrice: 390.00,
    rating: 0,
  },
  {
    id: 10,
    name: "Makeup Sponges Kits",
    image: "https://i.pinimg.com/564x/29/d2/b2/29d2b2ebdcc4c899a2749b3f369655e8.jpg",
    discount: "-47%",
    price: 120.00,
    oldPrice: 220.00,
    rating: 5,
  },
];


export { 
  menus, 
  heroImageList ,
  categoryList,
  products,
  bannerList
};

