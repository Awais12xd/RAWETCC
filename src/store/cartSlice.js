import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: [],
    totalPrize: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product, quantity } = action.payload;
            const existingProduct = state.cartProducts.find(item => item.id === product.id);

            if (existingProduct) {
                const updatedQuantity = existingProduct.quantity + quantity;
                existingProduct.quantity = updatedQuantity;
                existingProduct.unitPrice = product.discountPrice; // Store the unit price
                existingProduct.discountPrice = parseFloat((existingProduct.unitPrice * updatedQuantity).toFixed(2));
                state.totalPrize = parseFloat((state.totalPrize + product.discountPrice * quantity).toFixed(2));
            } else {
                const productWithQuantity = { 
                    ...product, 
                    quantity, 
                    unitPrice: product.discountPrice, // Store the unit price
                    discountPrice: parseFloat((product.discountPrice * quantity).toFixed(2))
                };
                state.cartProducts.push(productWithQuantity);
                state.totalPrize = parseFloat((state.totalPrize + product.discountPrice * quantity).toFixed(2));
            }

            state.totalQuantity += quantity;
        },
        INC: (state, action) => {
            const findPro = state.cartProducts.find(product => product.id === action.payload);
            if (findPro) {
                state.totalPrize = parseFloat((state.totalPrize + findPro.unitPrice).toFixed(2));
                findPro.quantity += 1;
                findPro.discountPrice = parseFloat((findPro.unitPrice * findPro.quantity).toFixed(2));
                state.totalQuantity += 1;
            }
        },
        DEC: (state, action) => {
            const findPro = state.cartProducts.find(product => product.id === action.payload);
            if (findPro && findPro.quantity > 1) {
                state.totalPrize = parseFloat((state.totalPrize - findPro.unitPrice).toFixed(2));
                findPro.quantity -= 1;
                findPro.discountPrice = parseFloat((findPro.unitPrice * findPro.quantity).toFixed(2));
                state.totalQuantity -= 1;
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            const removedProduct = state.cartProducts.find(product => product.id === productId);
            if (removedProduct) {
                state.totalPrize = parseFloat((state.totalPrize - removedProduct.discountPrice).toFixed(2));
                state.totalQuantity -= removedProduct.quantity;
                state.cartProducts = state.cartProducts.filter(product => product.id !== productId);
            }
        }
    }
});

export const { addToCart, INC, DEC, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
