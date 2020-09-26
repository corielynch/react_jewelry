import axios from 'axios';

export default axios.create({
    productsAllPath: '/search-products'
})


// import axios from 'axios'

// const getProducts = async() =>{
//     const res = await axios('/search-products');
//     return res;
// }
// export default getProducts;
