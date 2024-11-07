var fs = require('fs');

/**
 * 作用：向目标文件写入内容，会覆盖原有内容
 * 机制：异步
 * @desc writeFile(file, data[, option], callback)
 * @param file 需要写入的具体文件(路径加文件名)
 * @param data 需要写入文件中的数据
 * @param option 可选配置
 * @param callback 回调函数 参数为err err存在则说明写入失败
 * @return undefined
 */
var writeFileTool = (path, data, option, callback) => {
    fs.writeFile(path,  data, option, callback)
}

module.exports = {
    writeFileTool
}