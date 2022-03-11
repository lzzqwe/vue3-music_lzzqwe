import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
axios.interceptors.request.use(
    function(config) {
        // 对发送请求之前做些什么事情
        return config;
    },
    function(err) {
        // 对请求错误做些什么事情
        return Promise.reject(err);
    }
);
axios.interceptors.use(
    function(response) {
        // 对响应数据做些什么事情
        return response;
    },
    function(err) {
        if (err.response.status == 401 || err.response.status == 400) {
            router.push("/login");
        } else {
            console.log(
                err.response.data.msg ?
                err.response.data.mag :
                "系统内部错误,请联系管理员"
            );
        }
        // 对响应错误做点事情
        return Promise.reject(err);
    }
);
export default axios;