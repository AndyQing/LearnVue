// 不生效 参考P97视频
module.exports = {
    pages: {
        index: {
            entry: 'src/main2.js'
        }
    },
    // 方式一
    // devServer:{
    //     proxy:'https://wap.jiaogelangzhong.com'
    // }
    // 方式二
    // devServer: {
    //     proxy: {
    //         '/JglzServer': {
    //             url: "https://wap.jiaogelangzhong.com",
    //             // pathRewrite:{'^/JglzServer':''},

    //         }
    //     }

    // }
}