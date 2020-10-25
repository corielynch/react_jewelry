import rootURL from '../apis/axiosConnection'


    // Using redux-thunk to receive the variable dispatch and getState in a callback function. We don't need getState so far but dispatch is used to change anything in redux state and getState shows you the current state.//
     
export const fetchProducts =  () => async  dispatch  => {
        const response = await rootURL.get('/search-products')
        dispatch({ type: 'FETCH_PRODUCTS', payload: response.data })
    }
