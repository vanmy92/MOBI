import { createSlice } from "@reduxjs/toolkit";

const billSlice = createSlice({
  name: "bill",
  initialState: {
    productCart: {
        listProduct:[],
        price:0,
    },
    productSelectId:[],
    billProduct: {
      allBill: null,
      isFetching: false,
      error: false,
      success:false,
    },
    updateStatusBill: {
      isFetching:false,
      error:false,
      success: false,
    },
    billUser: {
      isFetching:false,
      billSuccess:null,
      error:false
    }
  },
  reducers: {
    GetBillUserStart:(state)=>{
      state.billUser.isFetching = true;
    },
    GetBillUserSuccess:(state,action)=>{
      state.billUser.isFetching = false;
      state.billUser.billSuccess = action.payload;
    },
    GetBillUserFail:(state)=>{
      state.billUser.error = true;
    },
    updateStatusStart:(state)=>{
      state.updateStatusBill.isFetching = true;
      state.updateStatusBill.success = false;
    },
    updateStatusSuccess:(state)=>{
      state.updateStatusBill.isFetching = false;
      state.updateStatusBill.success = true;
    },
    updateStatusFail:(state)=>{
      state.updateStatusBill.isFetching = false;
      state.updateStatusBill.error = true;
    },
    addProduct: (state, action) => {
      state.productCart.listProduct.push(action.payload.product);
      state.productCart.price = state.productCart.price +  action.payload.price;
    },
    removeProduct: (state, action) => {
      state.productCart.listProduct.splice(action.payload.position,1)
      state.productCart.price = state.productCart.price -action.payload.price
    },
    resetProduct:(state)=>{
      state.productCart.listProduct = []
      state.productSelectId = []
      state.productCart.price = 0
    },
    addProductSelectId:(state,action)=>{
        state.productSelectId.push(action.payload.product);
    },
    removeProductSelectId: (state,action) => {
        state.productSelectId.splice(action.payload.position,1)
    },
    
    addBillStart:(state)=>{
      state.billProduct.isFetching = true
    },
    addBillSuccess:(state)=>{
      state.billProduct.isFetching = false
      state.billProduct.success = true
    },
    addBillFail:(state)=>{
      state.billProduct.success=false
      state.billProduct.isFetching = false
      state.billProduct.error = true
    },
    getAllBillStart:(state)=>{
      state.billProduct.isFetching=true
    },
    getAllBillSuccess:(state,action)=>{
      state.billProduct.isFetching=false
      state.billProduct.allBill = action.payload
    },
    getAllBillFail:(state)=>{
      state.billProduct.error=true
    },

  },
});

export const {GetBillUserFail,GetBillUserStart,GetBillUserSuccess,updateStatusFail,updateStatusStart,updateStatusSuccess, addProduct,resetProduct, removeProduct,addProductSelectId,removeProductSelectId,addBillFail,addBillStart,addBillSuccess,getAllBillFail,getAllBillStart,getAllBillSuccess } = billSlice.actions;
export default billSlice.reducer;
