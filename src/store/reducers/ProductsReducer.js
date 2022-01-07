const initState = {
    products: [],
    allProducts:[],
    product: {},
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT":                  //for accessing a specified product
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}  


        case "SET_PRODUCTS":
                    return {...state,products:action.payload};  //for accessing all products

        default: return state;
                    
    }
}
export default ProductsReducer;