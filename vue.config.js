
//别名文件。执行时会做合并
module.exports = {
    configureWebpack: {//准备
        resolve: {
            alias: {
                //配置别名
                // 系统已经设置@为src
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'pluginunit':'@/pluginunit'
            }
        }
    },
    devServer: {
        host: 'localhost',  //本机电脑 ip 地址
        port: 8080,  //端口号
        hotOnly: true, //是否开启热更新
        proxy: {
          '/api': {
            target: 'https://music.163.com/api/', //API服务器的地址
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            },
            // 突破host和origin的限制
            headers: {
              referer: 'http://music.163.com',
              origin: 'http://music.163.com',
              host: 'music.163.com'
            }
          },
        },
      },
    }