import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeMultidataAction = createAsyncThunk(
  "fetchHomeMultidata",
  async (extraInfo, { getState, dispatch }) => {
    // console.log(extraInfo, getState(), "daffdsgsdgsegfadad");
    // 1. 发送网络请求 获取数据
    const res = await axios.get("http://123.207.32.32:8000/home/multidata");
    // 2. 取出数据 在此处直接dispatch
    const banners = res.data.data.banner.list;
    const recommends = res.data.data.recommend.list;
    dispatch(changeBanners(banners));
    dispatch(changeRecommends(recommends));
    return res.data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: []
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload;
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload;
    }
  }
  // 方法一：监听createAsyncThunk的三种状态
  // extraReducers: {
  //   [fetchHomeMultidataAction.pending](state, action) {
  //     console.log("fetchHomeMultidataAction pendding");
  //   },
  //   [fetchHomeMultidataAction.fulfilled](state, { payload }) {
  //     console.log("fetchHomeMultidataAction fulfilled");
  //     state.banners = payload.data.banner.list;
  //     state.recommends = payload.data.recommend.list;
  //   },
  //   [fetchHomeMultidataAction.rejected](state, action) {
  //     console.log("fetchHomeMultidataAction rejected");
  //   }
  // }
  // 向builder函数中添加 case 来监听结果
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchHomeMultidataAction.pending, (state, action) => {
  //       console.log("fetchHomeMultidataAction pending");
  //     })
  //     .addCase(fetchHomeMultidataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload.data.banner.list;
  //       state.recommends = payload.data.recommend.list;
  //     });
  // }
});

export const { changeBanners, changeRecommends } = homeSlice.actions;
export default homeSlice.reducer;
