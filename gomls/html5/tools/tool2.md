# Progressive Web App

* 単純なゲームならWebでプレイさせて、**必要ならアプリ**として入れられる
* 無駄にアプリを作らなくて良い需要とリッチ表現の両立
* LocalStorageなどでモデルデータをキャッシュ?

# WebVR

* Chrome for android / Firefox nightly / **Edge** がサポート
* HMDだけでなくルームスケールなものやコントローラーも対応可能
* VRコンテンツが**URL一つでシェア**できる

# WebGPU / NXT

* 次期WebGLとされる仕様。WebGLより低レイヤかつ高速
* WebGLより難解。**ライブラリ**レイヤーで対応すべき
* gpuwebのレポジトリの議事録を読むと面白い
    * **CG表現目的より汎用GPU目的**
    * MozillaはServo上で実験中の様子
    * SPIR-Vを中間言語としたシェーディング言語を設計する予定
    * ChromeはVulkanベース、SafariはMetalベース、EdgeはD3D12ベースか

# WebGPU / NXT

* Safari Technology PreviewではWebGPUはすでに使える
* 使用例として**WebDNN**がサポートしている(make.girls.moeなどが使っている)
* 機械学習目的での利用はアツい。学習したモデルを計算するのはクライアント側でもできる。