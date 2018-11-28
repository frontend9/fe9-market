# 九部前端工具库

## 项目介绍
九部前端工具库是九部旗下的一款前端工具汇聚的产品。汇聚社区开发的前端工具，方便前端开发者快速寻找到合适的开发工具，获得良好的工具使用体验。

## 构建方式

本项目使用 [Create React App](https://github.com/facebook/create-react-app) 构建，具体构建方式请参考该脚手架。

本地运行，使用 npm install 命令安装依赖，再运行 npm start 命令以开发模式启动应用。打开浏览器访问 [http://localhost:3000](http://localhost:3000) 以访问具体应用页面。

## Issue 反馈

遇到工具的 bug，或者对网站有什么合理的改善建议，可以通过 issue 的方式提出。

## 贡献方式

九部前端工具库主要分为两个部分：
* 主站点
* 工具库（libs 目录）

### 主站点

目前整个项目本身是以单一网站的形式进行的架构，主站点即当前项目。如果你觉得主站点不够美观，或者希望增加新功能，可以通过 Fork 本项目，本地修改，提交 PR 的方式进行。

### 工具库

由于工具库还处于初期开发中，目前使用 libs 目录进行承载。即 libs 目录下为开发者贡献的可用的工具。

#### Base64 工具开发示例

以开发 Base64 工具为例，在 libs 新建文件夹 Base64，增加 Base64.js 文件，该文件是一个 React 组件，提供了 UI 和编解码逻辑。样式文件通过 css modules 方式存在同目录下的 Base64.module.less 文件中。

在 libs 下新建 index.js文件，导入刚刚写好的 Base64 工具组件，并且以元信息的方式导出工具。

```javascript
export default {
  name: 'Base64 插件',
  author: 'fkysly',
  description: '提供对 Base64 编解码的支持',
  component: Base64
}
```

* 字段不可缺省
* component 字段必须要对应工具组件

最后在 libs/index.js 文件中，新增刚刚写好的插件，形成一个工具数组，网站将会自动按照数组的顺序排列工具。

```javascript
export default [
  Base64
]
```

## 支持的工具列表

* Base64 编解码 [ 完成 ]
* JSON 格式化 [ 待完成 ]

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright © 2018 frontend9