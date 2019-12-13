import axios from "axios";
import Toast from "@redbuck/toast";
import "@redbuck/toast/lib/toast.css";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
const dftConfig = {
  method: "POST",
  params: {},
  timeout: 5000,
  headers: {
    bid: "e02cbb7b-a9e7-e311-a603-90b11c47e695"
  }
};

const dftOptions = {
  toast: true,
  loading: true,
  loadingMessage: "加载中...",
  isSuccess: res => res.data.success || res.data.resultCode === 200,
  errMessage: res => res.data.msg || "业务异常"
};

export default function request(url, config = {}, options = {}) {
  return new Promise(resolve => {
    options = { ...dftOptions, ...options };
    let loading;
    if (options.loading) {
      loading = Toast.loading(options.loadingMessage);
    }
    return axios({
      url,
      ...dftConfig,
      ...config
    })
      .then(res => {
        console.log(res);
        const success = options.isSuccess(res);
        loading.clear();
        if (!success && options.toast) {
          Toast.error(options.errMessage(res));
        }
        resolve({
          success,
          data: res.data.data,
          message: res.data.msg
        });
      })
      .catch(err => {
        loading.clear();
        Toast.error("网路故障!");
        resolve({
          success: false,
          data: err,
          message: err.message || "网路故障!"
        });
      });
  });
}
