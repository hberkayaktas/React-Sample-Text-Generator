// https://baconipsum.com/api/?type=all-meat&paras=2&format=html
// https://baconipsum.com/api/?type=all-meat&paras=2&format=text

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getTextAsync = createAsyncThunk('textG/getTextAsync', async (data) => {
      console.log(data);
      let number =await Number(data.textQuantity);
      const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${number}&format=${data.includeHtml}`);
      return await res.data;
})

export const textSlice = createSlice({
      name:"textG",
      initialState:{
            items:null,
            textQuantity:4,
            includeHtml:"text",
            isLoading:false,
            error:null,
      },
      reducers:{
            setFilter:(state,action) => {
                  
                  state.textQuantity = action.payload.textQ ;
                  state.includeHtml = action.payload.includeH ;
                  
            }
      },
      extraReducers:{
            [getTextAsync.pending]: (state,action) =>{
                  state.isLoading = true;
            },
            [getTextAsync.fulfilled]:(state,action) => {
                  state.items = action.payload;
                  state.isLoading = false;
            },
            [getTextAsync.rejected]:(state,action) => {
                  state.error =action.error.message;
                  state.isLoading = false;
            },
      }
});
export const selectText = (state) => state.textG.items;


export const { setFilter } = textSlice.actions;
export default textSlice.reducer;