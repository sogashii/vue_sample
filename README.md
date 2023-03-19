# vue_sample

## 注意事項

#### npm ではなく`yarn`を使用。

- 依存関係が壊れてプロジェクトがまともに Build できない現象になる

#### プロジェクトの node_modules の再構築方法

- (前提) yarn が global にインストールしてあること。

  ```shell
  > yarn -v
  > yarn install
  ```

- yarn が global に入っていない場合

  ```shell
  > npm install -g yarn
  > yarn -v
  > yarn install
  ```

## 使用ライブラリ

- axios
- core-js
- moment
- vee-validate
- vue-axios
- vue-router
- vuex
- yup
- Bootstrap

## 実行

- local 実行

  ```shell
  > cd vue_sample/src
  > yarn run local-serve
  ```

  VSCode であれば下記操作で実行

  ターミナル > タスクの実行 > yarn local-serve

- Build

  ```shell
  > cd vue_sample/src
  > yarn run local-build
  ```

  VSCode であれば下記操作で Build

  ターミナル > タスクの実行 > yarn local-build

## VSCode の拡張機能

#### ほとんど必須

- Vue Language Features (Volar)
  - Vetur 禁止
- Vue VSCode Snippets
- Prettier
- ESLint

#### あったら便利

- Auto Close Tag
- Auto Rename Tag
- HTML CSS Support
- IntelliCode
- Markdown Preview Enhanced
- Material Icon Theme
- Path Intellisense
