var httpHelp = function (verb, path, params) {
    var opt = {
        method: verb,
        url: path,
        data: params,
        params: params,
        headers: { 'Accept': 'application/json', 'content-type': 'application/json' },
    }
    return new Promise((resolve, reject) => {
        axios(opt).then(response => {
            resolve(response);
        },
            err => {
                handleError(reject, err)
            });
    })
}

/**
 * 处理请求异常
 * @param err
 */
function handleError(reject, err) {
    if (err.message.indexOf('Network Error') >= 0) {
        console.error('网络异常');
        location.reload();
    } else if (err.message.indexOf('timeout') >= 0) {
        console.error('请求超时,请重试');
        location.reload();
    }
    reject(err)
}