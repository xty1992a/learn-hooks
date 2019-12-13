import request from "./request";

export const getGoodsList = params =>
  request("/api/Shop/GetCategoryAndGoodsItem", {
    params,
    data: { params: { searchStr: "" } }
  });
