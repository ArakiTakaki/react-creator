# react-creator

Reactにおけるコンポーネントや、アクションを追加する際にCLI上で動作するユーティリティツールです。

アトミックデザインに準拠しております。

## install

YARN : `yarn add --dev ArakiTakaki/react-creator.git`

NPM : `npm install -save--dev ArakiTakaki/react-creator.git`

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

## babel

- @babel/core
- @babel/preset-react
- @babel/preset-env
- @babel/plugin-proposal-decorators
  - legacyモード
- @babel/plugin-transform-runtime
