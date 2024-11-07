const writeModule = require('./tool/wirteFile.js');

console.log(writeModule);

writeModule.writeFileTool('./fs/record.md',  `writeFile是异步写1入文件`, {
    encoding: 'utf8',
}, (err) => {
    if (err) {
        throw err
    }
    console.log('写入成功')
})

module.exports = {
    writeModule
}