# lib.d.ts?

![](https://i.gyazo.com/97998788f73776fc1a93f4d3fbab06d6.png)

# lib.d.ts?

* すごいたくさんのブラウザがデフォで持つ型定義
* 開くとAtomは固まるがvscodeは問題ない(媚び1つ目)

# WebGL勢には辛かった...

* もうちょっとどうにかなるだろう...
![](https://i.gyazo.com/7e9ff73313e93579e60a23e0bd283e9b.png)

# getExtensionだってanyじゃない

* WebGLにはデバイス毎に使えるかどうかわからない拡張なるものがいくつもある

![](https://i.gyazo.com/6d9fc217579cf3c94cddd59a2aadca69.png)

# Typescriptを治してやる(媚び2つ目)

* TypescriptにIssueを投げてみる

![](https://i.gyazo.com/b96c53d36f1ae8a38029cfa55a6d004d.png)


# Typescriptを治してやる(媚び2つ目)

* 直しといて。君が指摘したよりもっとExtensionあるぞ(意訳)

![](https://i.gyazo.com/51302ee70406b8f4ff57299487e734d7.png)

# Typescriptのlib.d.tsの直し方

* Typescriptをクローンする
* lib内のlib.d.tsを直そうとする
* どうやらsrc/lib内のdom.generated.d.tsから自動生成されていると気がつく

# Typescriptのlib.d.tsの直し方

* Typescriptをクローンする
* lib内のlib.d.tsを直そうとする
* どうやらsrc/lib内のdom.generated.d.tsから自動生成されていると気がつく

# Typescriptのlib.d.tsの直し方

これ別レポジトリから生成されてるやんけ!

![](https://i.gyazo.com/b21743f888143c14a1161ee09a101c93.png)

# Typescriptのlib.d.tsの直し方

ほぼJSONしかないレポジトリ

![](https://i.gyazo.com/03af580c7a3df267df78210b951fbdfa.png)


# Typescriptのlib.d.tsの直し方

* EdgeのIDLから基本的な型定義を生成しているっぽい
* 追加部分と変更部分だけjsonを**手動**で書いて修正する

