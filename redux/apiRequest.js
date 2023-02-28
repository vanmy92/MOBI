import axios from 'axios'
import { addBillStart, addBillSuccess, getAllBillFail, getAllBillStart, getAllBillSuccess, GetBillUserFail, GetBillUserStart, GetBillUserSuccess, resetProduct, updateStatusFail, updateStatusStart, updateStatusSuccess } from './billSlice'
import { getAllProductFail, getAllProductStart, getAllProductSuccess } from './productSlice'
import { getAllUserFail, getAllUserStart, getAllUserSuccess, loginFail, loginStart, loginSuccess, logOutFail, logOutStart, logOutSuccess, registerFail, registerStart, registerSuccess } from './userSlice'

// o nha 
// const host = 'http://192.168.1.4:9000'

// wifi cong ty 
const host  = 'http://192.168.1.9:9000'

// wifi nhan
// const host = 'http://192.168.1.26:9000'

// wifi huy 
// const host = 'http://192.168.1.110:9000'

export const loginUser = async(user,dispatch) =>{
    dispatch(loginStart())
    try {
        console.log("aasdasdasd: ");
        const res = await axios.post(`${host}/v1/user/login`,user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFail())
    }
}

export const registerUser = async(user,dispatch) =>{
    dispatch(registerStart())
    try {
        await axios.post(`${host}/v1/user/register`,user)
        dispatch(registerSuccess())
    } catch (error) {
        dispatch(registerFail())
    }
}

export const logoutUser = async(accessToken,user,dispatch)=>{
    dispatch(logOutStart())
    try {
        await axios.post(`${host}/v1/user/logout`,user,{
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(logOutSuccess())
    } catch (error) {
        dispatch(logOutFail())
    }
}

export const getAllProduct = async (dispatch,type) =>{
    dispatch(getAllProductStart())
    try {
        const res = await axios.get(`${host}/v2/product/f/${type}`);
        dispatch(getAllProductSuccess(res.data));
    } catch (error) {
        dispatch(getAllProductFail())
    }
}

export const addBill = async (accessToken,bill,dispatch) =>{
    dispatch(addBillStart())
    try {
        await axios.post(`${host}/v3/bill`,bill,{
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(addBillSuccess()) 
        dispatch(resetProduct())
    } catch (error) {
        dispatch(addBillFail())
    }
}

export const getAllBillWithUser = async (accessToken,dispatch,payload)=>{
    dispatch(GetBillUserStart())
    try {
        const res = await axios.post(`${host}/v3/bill/success`,payload,{
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(GetBillUserSuccess(res.data))
    } catch (error) {
        dispatch(GetBillUserFail())
    }
}


export const getAllBill = async (accessToken,dispatch,role,user)=>{
    dispatch(getAllBillStart())
    try {
        const res = await axios.post(`${host}/v3/bill/g/${role}`,user,{
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(getAllBillSuccess(res.data))
    } catch (error) {
        dispatch(getAllBillFail())
    }
}

export const getAllUser = async (accessToken,dispatch)=>{
    dispatch(getAllUserStart())
    
    try {
        const res = await axios.get(`${host}/v1/user`,{
            headers: {token: `Bearer ${accessToken}`}
        })
        dispatch(getAllUserSuccess(res.data))
    } catch (error) {
      dispatch(getAllUserFail())
    }
}


export const acceptBill = async (accessToken,dispatch,payload) =>{
    dispatch(updateStatusStart())
    try {
        await axios.post(`${host}/v3/bill/accept-bill`,payload,{
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(updateStatusSuccess())
    } catch (error) {
        dispatch(updateStatusFail())
    }
}

export const acceptChefBill = async (accessToken,dispatch,payload)=>{
    dispatch(updateStatusStart())
    try {
        await axios.post(`${host}/v3/bill/accept-chef`,payload,{
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(updateStatusSuccess())
    } catch (error) {
        dispatch(updateStatusFail())
        
    }
}

export const acceptDishout = async (accessToken,dispatch,payload)=>{
    dispatch(updateStatusStart())
    try {
        await axios.post(`${host}/v3/bill/accept-dishout`,payload,{
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(updateStatusSuccess())
    } catch (error) {
        dispatch(updateStatusFail())
        
    }
}

export const rejectBill = async (accessToken,dispatch,payload)=>{
    console.log("dzo");
    dispatch(updateStatusStart())
    try {
        await axios.post(`${host}/v3/bill/reject-bill`,payload,{
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(updateStatusSuccess())
    } catch (error) {
        dispatch(updateStatusFail())
    }
}


export const failBill = async (accessToken,dispatch,payload)=>{
    dispatch(updateStatusStart())
    try {
        await axios.post(`${host}/v3/bill/fail-bill`,payload,{
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(updateStatusSuccess())
    } catch (error) {
        dispatch(updateStatusFail())
    }
}


export const takeMoney = async (accessToken,dispatch,payload)=>{
    dispatch(updateStatusStart())
    try {
        await axios.post(`${host}/v3/bill/take-money`,payload,{
            headers:{token: `Bearer ${accessToken}`}
        })
        dispatch(updateStatusSuccess())
    } catch (error) {
        dispatch(updateStatusFail())
    }
}

