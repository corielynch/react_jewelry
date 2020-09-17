const getProducts = async() =>{
    const res = await axios('/api/search-products');
    return (res.json());
}
export default getProducts;