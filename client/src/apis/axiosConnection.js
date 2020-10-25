import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3000'
})


// import axios from 'axios'

// const getProducts = async() =>{
//     const res = await axios('/search-products');
//     return res;
// }
// export default getProducts;
