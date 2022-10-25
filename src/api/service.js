import axios from "axios"

const service = axios.create({
    timeout: 8000,
});


service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么

    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service