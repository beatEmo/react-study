import * as actionTypes from "./constants";
import axios from "axios";

export const changeBannersAction = (banners) => ({
  type: actionTypes.CHNAGE_BANNERS,
  banners
});

export const changeRecommendsAction = (recommends) => ({
  type: actionTypes.CHNAGE_RECOMMENDS,
  recommends
});

export const fetchHomeMultidataAction = () => {
  function foo(dispatch, getState) {
    // 异步操作：网络请求
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      dispatch(changeBannersAction(banners));
      dispatch(changeRecommendsAction(recommends));
    });
  }

  return foo;
};
