# react-creator

Reactにおけるコンポーネントや、アクションを追加する際にCLI上で動作するユーティリティツールです。

アトミックデザインに準拠しております。

[ご意見ご要望はこちら](https://github.com/ArakiTakaki/react-creator/issues)

## install

yarn : `yarn add --dev ArakiTakaki/react-creator.git`

npm : `npm install -save--dev ArakiTakaki/react-creator.git`

## DEMO

1. 初期化を行う
    - `yarn react-creator -i`
2. 各種必要な設定を追記する。
    - `yarn react-creator --component atoms SampleComponent`
    - `yarn react-creator --action SampleAction --comment サンプルアクションです`

## ディレクトリ解説

```txt
src/
├── js
│   ├── component
│   │   ├── atoms
│   │   ├── molecules
│   │   ├── organisms
│   │   └── templates
│   ├── container
│   │   └── Root.jsx
│   ├── index.jsx
│   ├── pages
│   └── store
│       ├── actions.js
│       ├── configreStore.js
│       ├── reducers.js
│       └── state.js
└── sass
    ├── _aggregation.sass
    ├── _mixin.sass
    ├── _valiables.sass
    └── base.sass
```

## 導入推奨パッケージ

- react
- redux
- react-redux
- redux-logger
- react-hot-loader
- sass
- webpack
- reset-css
- react
- テスト系ライブラリ
    - jest
    - enzyme
    - enzyme-adapter-react-16
    - react-test-renderer

## babel

- @babel/core
- @babel/preset-react
- @babel/preset-env
- @babel/plugin-proposal-decorators
  - legacyモード
- @babel/plugin-transform-runtime

## 作成理由

- component定義の手間を削減
    - コマンド一つで`sass`+`react.Component`を作成できる。
    - functionにも対応
- actionsの手間を削減
    - こちらもコマンド一つで`actions`に追記が可能
