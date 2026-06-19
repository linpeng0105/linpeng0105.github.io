# Peng Lin (林鹏) · 个人学术主页

本仓库是 [linpeng0105.github.io](https://linpeng0105.github.io) 的源码，
基于 [AcademicPages](https://academicpages.github.io/) 模板，使用 Jekyll 构建、由 GitHub Pages 自动部署。

## 目录结构

**内容（日常维护这里）**

| 目录 | 说明 |
| --- | --- |
| `_pages/` | 站点页面。核心是 `about.zh.md` / `about.en.md`（中英文主页，所有版块内容均内联于此） |
| `images/` `files/` | 图片、PDF、幻灯片等资源 |

**配置**

| 文件 | 说明 |
| --- | --- |
| `_config.yml` | 站点配置：姓名、社交链接、作者信息等 |
| `_data/navigation.yml` | 顶部导航栏的顺序与锚点 |

**模板引擎（一般无需改动）**

`_includes/` `_layouts/` `_sass/` `assets/` —— 页面组件、布局、样式与脚本。

## 本地预览

需要 Ruby 与 Bundler：

```bash
bundle install
bundle exec jekyll serve -l -H localhost
# 打开 http://localhost:4000
```

## 致谢与许可

本站点 fork 自 [AcademicPages](https://github.com/academicpages/academicpages.github.io)，
后者衍生自 [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)（© Michael Rose, MIT License）。
详见 [LICENSE](LICENSE)。
