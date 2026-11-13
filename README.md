# 个人博客（静态站点）

一份单页个人博客，包含 **工作经历**、**项目模块**、**考公复习模块** 和 **博客文章** 四个板块，纯 HTML/CSS/JS 实现，无需构建工具，双击 `index.html` 即可在浏览器中打开。

## 文件结构

```
personal-blog/
├── index.html        # 页面结构
├── css/
│   └── style.css     # 样式（含深色模式、响应式）
├── js/
│   └── main.js       # 交互（导航、筛选、进度条动画等）
└── README.md
```

## 如何自定义

当前内容全部是示例数据，请按需替换为你的真实信息。主要修改集中在 `index.html`：

- **姓名与简介**：搜索 `张三`，替换 Hero、导航栏 logo 和页脚里的姓名与一句话介绍。
- **工作经历**：在 `id="experience"` 的时间线里，把公司名、职位、时间和职责改成你自己的经历，可增删 `.timeline-item`。
- **项目模块**：在 `id="projects"` 里替换每个 `.project-card` 的标题、描述和技术标签。
- **考公复习**：在 `id="exam"` 里修改报考方向、目标分数；`data-progress` 的数字就是各科目进度百分比；每日计划与复习资料也在此处。
- **博客文章**：在 `id="blog"` 里替换或新增 `.post-card`。

## 常用调整

- **主题色**：打开 `css/style.css`，修改 `:root` 里的 `--accent` 和 `--accent-gradient`。
- **头像**：当前用文字占位。若要用照片，把 `index.html` 中 `.avatar-circle` 里的 `<span class="avatar-initial">张</span>` 换成 `<img src="你的头像地址" alt="头像">`，并可在 CSS 中调整 `.avatar-circle img` 的圆角与尺寸。
- **项目封面图标**：每个卡片顶部是 emoji 图标，直接替换即可；如需换成截图，可在 `.project-cover` 内放入 `<img>`。

## 部署

直接把整个 `personal-blog` 文件夹上传到 GitHub Pages、Vercel、Netlify 等任意静态托管平台即可，也可以本地双击打开。
