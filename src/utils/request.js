// 利用promise将wx.request封装
function request(url,method="get") {
    return new Promise((resolve,reject)=>{
        wx.request({
            url,
            method,
            success:(res)=>{
                resolve(res)
            }
        })
    })
}

export default request;