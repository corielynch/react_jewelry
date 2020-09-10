const axios = require('axios')

const shopifyGetReq = async () => {
    try {
        const resp = await axios.get('https://71fefa2983ef4e88737abc1a4067f916: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@mona-assemi.myshopify.com/admin/api/2020-07/products.json');
        console.log(resp.data.products);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
shopifyGetReq();