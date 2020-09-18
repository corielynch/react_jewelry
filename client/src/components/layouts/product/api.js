import axios from 'axios'

const getProducts = async() =>{
    const res = await axios('/api/search-products');
    return res;
}
export default getProducts;
