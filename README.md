# React + Material UI 中大型后台管理系统

## 项目使用的依赖

react react-dom react-router-dom typescript vite axios tailwindcss dayjs

- [**Material UI**](https://mui.com/material-ui/getting-started/) 谷歌系 UI 框架
- [**zustand**](https://mui.com/material-ui/getting-started/) 状态管理工具
- [**react-query**](https://swr.bootcss.com/docs/getting-started) 用于数据请求的 React Hooks 库
- [**react-use**](https://streamich.github.io/react-use/?path=/story/components-usekey--demo) react hooks 库
- [**react-hook-form**](https://react-hook-form.com/get-started) 表单验证库

eslint prettier stylelint lint-staged husky 用于规范代码，和代码提交检验

## 开发任务 （一定要适配手机端）

- [x] vite 配置项
- [x] mock
- [x] 路由组件 (包含权限/按钮权限，登录，退出登录)
- [x] axios 封装
- [x] storage 封装
- [x] console.log 封装
- [x] 整体颜色搭配
- [x] is 封装
- [x] Layout
- [x] Memu
- [ ] 路由搜索组件（通过搜索跳转页面）
- [ ] Header
- [ ] Container （将滚动条缓存到 zustand，用于返回时直接跳到上次访问位置）
- [ ] Form（包含表单数据缓存，提交后清空表单数据）
- [ ] 历史记录
- [ ] chat
- [ ] 文件系统（各文件预览）
- [ ] ...

<!-- 页面适配方案 -->

xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
