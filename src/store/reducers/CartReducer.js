const initState = {
    products: [],             //initialy setting the products as a empty array
    totalPrice: 0,
    totalQuantities: 0
}

const CartReducer = (state = initState, action) => {
    let findPro;
    let index;
    switch(action.type){               //using switch case to check different cases
        case 'ADD_TO_CART':
        const {product,quantity} = action.payload;
        const check = state.products.find(pr => pr.id === product.id);
        if(check){
            return state;
        } else {
            const Tprice = state.totalPrice + (+product.price) * quantity;    //calculating the total price of a product
            const Tquantities = state.totalQuantities + quantity;
            product.quantity = quantity;
            return {
                ...state, products: [...state.products, product],totalPrice: Tprice, totalQuantities: Tquantities 
            }

        }
        case 'INC':
          findPro = state.products.find(product => product.id === action.payload);        //code for incrementing the product price and totalQuantity based on the quantity user specified
          index = state.products.findIndex(product => product.id === action.payload);
          findPro.quantity += 1;
          state.products[index] = findPro;
          return {
              ...state,
              totalPrice: state.totalPrice + (+findPro.price), totalQuantities: state.totalQuantities+1  
          }
        case "DEC":
        findPro = state.products.find(product => product.id === action.payload);            //code for decrementing the product price and totalQuantity based on the quantity user specified
        index = state.products.findIndex(product => product.id === action.payload);
        if(findPro.quantity > 1){
           findPro.quantity -= 1;
           state.products[index] = findPro;
           return {
               ...state,
               totalPrice: state.totalPrice - (+findPro.price), totalQuantities: state.totalQuantities - 1
           }
        } else {
            return state;
        }
        case 'REMOVE':
        findPro = state.products.find(product => product.id === action.payload);            //code for deleting the product from cart
        const filtered = state.products.filter(product => product.id !== action.payload);
        return {
            ...state,
            products: filtered,
            totalPrice: state.totalPrice - (+findPro.price) * findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
        }

       case 'CLEAR_CART':
           return{
                   ...state, products:[],totalQuantities:0           //code for clearing the cart data
           }
        default: 
        return state;
    }

}
export default CartReducer;