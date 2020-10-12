# 混合开发

* 网页 -> 网站 -> 应用Application

* 分类
    * webApp       web应用
        * 开发语言：html+css+js
        * 后缀：html
    * nativeApp    原生应用
        * iOS
            * 开发语言：OC/swift + xml
            * 后缀：ipa
        * android
            * 开发语言：java + xml
            * 后缀：apk
        * winPhone
        * 塞班
        * 黑莓
    * HybridApp 混合应用
        * 核心技术： 在native中利用webview中嵌入H5页面形成半Native半web开发模式
            * webview: 类似与浏览器的功能
        * 实现原理：底层功能API均由原生容器通过某种方式提供,然后业务逻辑由H5页面完成,最终原生容器加载H5页面,完成整个App（看图）
        * 开发模式
            * Native主导（主流）：做好h5页面交给native工程师打包
                * h5页面需要调用native接口
                * native工程师需要提供硬件接口
                ```js
                    btn.onclick = ()=>{
                        // 调用摄像头
                        const picurl = window.moxiu.paizhao();
                    }
                    btn.onclick = ()=>{
                        moxiu.exit();
                        moxiu.showToast('退出成功')
                    }

                ```
            * H5主导：团队内部没有native工程师，所有工作需要h5工程师来实现
                > 利用第三方平台接口来实现
                * dcloud的h5+runtime
                    ```js
                        btn.onclick = ()=>{
                            const cmr = window.plus.camera;
                            cmr.captureImage((capturedFile)=>{
                                // capturedFile: 拍照照片的地址
                            })
                        }
                    ```
