# OHIF Medical Imaging Viewer
OHIF 医学影像查看器

**The OHIF Viewer** is a zero-footprint medical image viewer provided by the [Open Health Imaging Foundation (OHIF)](https://ohif.org/). It is a configurable and extensible progressive web application with out-of-the-box support for image archives which support [DICOMweb](https://www.dicomstandard.org/using/dicomweb/).
**OHIF Viewer** 是由[开放健康影像基金会 (OHIF)](https://ohif.org/) 提供的零占用空间医学图像查看器。它是一个可配置、可扩展的渐进式 Web 应用程序，开箱即用，支持 [DICOMweb 的](https://www.dicomstandard.org/using/dicomweb/)图像存档。

[**Read The Docs
阅读文档**](https://docs.ohif.org/)

[Live Demo](https://viewer.ohif.org/) | [Component Library](https://ui.ohif.org/)
[现场演示](https://viewer.ohif.org/) | [组件库](https://ui.ohif.org/)

📰 [**Join OHIF Newsletter**](https://ohif.org/news/) 📰
📰 [**订阅 OHIF 新闻简报**](https://ohif.org/news/) 📰

📰 [**Join OHIF Newsletter**](https://ohif.org/news/) 📰
📰 [**订阅 OHIF 新闻简报**](https://ohif.org/news/) 📰

* * *

[![NPM version](https://img.shields.io/npm/v/@ohif/app.svg?style=flat-square)](https://npmjs.org/package/@ohif/app) [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE) [![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](percy-url)

|  |  |  |
| --- | --- | --- |
|  | Measurement Tracking测量跟踪 | Demo演示 |
|  | Labelmap Segmentations标签图分割 | Demo演示 |
|  | Fusion and Custom Hanging protocols融合和定制悬挂协议 | Demo演示 |
|  | Volume Rendering体积渲染 | Demo演示 |
|  | PDF | Demo演示 |
|  | RT STRUCTRT 结构 | Demo演示 |
|  | 4D | Demo演示 |
|  | Video视频 | Demo演示 |
|  | Slide Microscopy载玻片显微镜 | Demo演示 |

## About
关于

The OHIF Viewer can retrieve and load images from most sources and formats; render sets in 2D, 3D, and reconstructed representations; allows for the manipulation, annotation, and serialization of observations; supports internationalization, OpenID Connect, offline use, hotkeys, and many more features.
OHIF 查看器可以从大多数来源和格式检索和加载图像；以 2D、3D 和重建表示形式渲染集合；允许对观察结果进行操作、注释和序列化；支持国际化、OpenID Connect、离线使用、热键等更多功能。

Almost everything offers some degree of customization and configuration. If it doesn't support something you need, we accept pull requests and have an ever improving Extension System.
几乎所有功能都提供一定程度的自定义和配置。如果您需要的功能尚未支持，我们接受 Pull 请求，并不断改进扩展系统。

## Why Choose Us
为什么选择我们

### Community & Experience
社区与体验

The OHIF Viewer is a collaborative effort that has served as the basis for many active, production, and FDA Cleared medical imaging viewers. It benefits from our extensive community's collective experience, and from the sponsored contributions of individuals, research groups, and commercial organizations.
OHIF Viewer 是一项协作成果，它已成为众多活跃、生产和获得 FDA 批准的医学影像查看器的基础。它受益于我们社区丰富的集体经验，以及个人、研究团体和商业组织的赞助贡献。

### Built to Adapt
适应性强

After more than 8-years of integrating with many companies and organizations, The OHIF Viewer has been rebuilt from the ground up to better address the varying workflow and configuration needs of its many users. All of the Viewer's core features are built using it's own extension system. The same extensibility that allows us to offer:
经过八年多与众多公司和组织的整合，OHIF Viewer 已彻底重建，以更好地满足众多用户不同的工作流程和配置需求。Viewer 的所有核心功能均使用其自身的扩展系统构建。同样的可扩展性使我们能够提供：

*   2D and 3D medical image viewing
    2D 和 3D 医学图像查看
*   Multiplanar Reconstruction (MPR)
    多平面重建（MPR）
*   Maximum Intensity Project (MIP)
    最大强度项目（MIP）
*   Whole slide microscopy viewing
    全载玻片显微镜观察
*   PDF and Dicom Structured Report rendering
    PDF 和 Dicom 结构化报告渲染
*   Segmentation rendering as labelmaps and contours
    分割渲染为标签图和轮廓
*   User Access Control (UAC)
    用户访问控制 (UAC)
*   Context specific toolbar and side panel content
    上下文特定的工具栏和侧面板内容
*   and many others
    以及其他许多人

Can be leveraged by you to customize the viewer for your workflow, and to add any new functionality you may need (and wish to maintain privately without forking).
您可以利用它为您的工作流程定制查看器，并添加您可能需要的任何新功能（并且希望私下维护而不分叉）。

### Support
支持

*   [Report a Bug 🐛
    报告错误🐛](https://github.com/OHIF/Viewers/issues/new?assignees=&labels=Community%3A+Report+%3Abug%3A%2CAwaiting+Reproduction&projects=&template=bug-report.yml&title=%5BBug%5D+)
*   [Request a Feature 🚀
    请求功能🚀](https://github.com/OHIF/Viewers/issues/new?assignees=&labels=Community%3A+Request+%3Ahand%3A&projects=&template=feature-request.yml&title=%5BFeature+Request%5D+)
*   [Ask a Question 🤗
    提问🤗](community.ohif.org)
*   [Slack Channel
    Slack 频道](https://join.slack.com/t/cornerstonejs/shared_invite/zt-1r8xb2zau-dOxlD6jit3TN0Uwf928w9Q)

For commercial support, academic collaborations, and answers to common questions; please use [Get Support](https://ohif.org/get-support/) to contact us.
如需商业支持、学术合作和常见问题的解答，请使用 [“获取支持”](https://ohif.org/get-support/) 与我们联系。

## Developing
发展

### Branches
分支

#### `master` branch - The latest dev (beta) release
`master` 分支 - 最新的开发（测试版）版本

*   `master` - The latest dev release
    `master` - 最新的开发版本

This is typically where the latest development happens. Code that is in the master branch has passed code reviews and automated tests, but it may not be deemed ready for production. This branch usually contains the most recent changes and features being worked on by the development team. It's often the starting point for creating feature branches (where new features are developed) and hotfix branches (for urgent fixes).
这通常是最新开发工作发生的地方。主分支中的代码已通过代码审查和自动化测试，但可能尚未被视为已准备好投入生产。此分支通常包含开发团队正在开发的最新更改和功能。它通常是创建功能分支（用于开发新功能）和修补程序分支（用于紧急修复）的起点。

Each package is tagged with beta version numbers, and published to npm such as `@ohif/ui@3.6.0-beta.1`
每个包都标有 beta 版本号，并发布到 npm，例如 `@ohif/ui@3.6.0-beta.1`

### `release/*` branches - The latest stable releases
`release/*` 分支 - 最新稳定版本

Once the `master` branch code reaches a stable, release-ready state, we conduct a comprehensive code review and QA testing. Upon approval, we create a new release branch from `master`. These branches represent the latest stable version considered ready for production.
一旦 `master` 分支代码达到稳定、可发布的状态，我们就会进行全面的代码审查和 QA 测试。审核通过后，我们会从 `master` 创建一个新的发布分支。这些分支代表着被认为可以投入生产的最新稳定版本。

For example, `release/3.5` is the branch for version 3.5.0, and `release/3.6` is for version 3.6.0. After each release, we wait a few days to ensure no critical bugs. If any are found, we fix them in the release branch and create a new release with a minor version bump, e.g., 3.5.1 in the `release/3.5` branch.
例如， `release/3.5` 是版本 3.5.0 的分支， `release/3.6` 是版本 3.6.0 的分支。每次发布后，我们都会等待几天以确保没有严重错误。如果发现任何错误，我们会在 release 分支中修复它们，并创建一个小版本号的新版本，例如 `release/3.5` 分支中的 3.5.1。

Each package is tagged with version numbers and published to npm, such as `@ohif/ui@3.5.0`. Note that `master` is always ahead of the `release` branch. We publish docker builds for both beta and stable releases.
每个软件包都标有版本号并发布到 npm，例如 `@ohif/ui@3.5.0` 。请注意， `master` 始终位于 `release` 分支之前。我们同时发布 Beta 版和稳定版的 docker 构建版本。

Here is a schematic representation of our development workflow:
以下是我们的开发工作流程的示意图：

![alt text](platform/docs/docs/assets/img/github-readme-branches-Jun2024.png)

### Requirements
要求

*   [Yarn 1.20.0+](https://yarnpkg.com/en/docs/install)
*   [Node 18+
    节点 18+](https://nodejs.org/en/)
*   Yarn Workspaces should be enabled on your machine:
    您的机器上应该启用 Yarn Workspaces：
    *   `yarn config set workspaces-experimental true`

### Getting Started
入门

1.  [Fork this repository
    Fork 此存储库](https://help.github.com/en/articles/fork-a-repo)
2.  [Clone your forked repository
    克隆你的分支仓库](https://help.github.com/en/articles/fork-a-repo#step-2-create-a-local-clone-of-your-fork)
    *   `git clone https://github.com/YOUR-USERNAME/Viewers.git`
3.  Navigate to the cloned project's directory
    导航到克隆项目的目录
4.  Add this repo as a `remote` named `upstream`
    将此 repo 添加为名为 `upstream` 的 `remote`
    *   `git remote add upstream https://github.com/OHIF/Viewers.git`
5.  `yarn install` to restore dependencies and link projects
    `yarn install` 恢复依赖项并链接项目

#### To Develop
发展

*From this repository's root directory:
从该存储库的根目录：*

```bash
# Enable Yarn Workspaces
yarn config set workspaces-experimental true

# Restore dependencies
yarn install
```

## Commands
命令

These commands are available from the root directory. Each project directory also supports a number of commands that can be found in their respective `README.md` and `package.json` files.
这些命令可以从根目录使用。每个项目目录 还支持许多可以在其各自的 `README.md` 和 `package.json` 文件。

| Yarn CommandsYarn 命令 | Description描述 |
| --- | --- |
| Develop发展 |  |
| dev | Default development experience for ViewerViewer 的默认开发体验 |
| dev:fast | Our experimental fast dev mode that uses rsbuild instead of webpack我们的实验性快速开发模式使用 rsbuild 代替 webpack |
| test:unit | Jest multi-project test runner; overall coverageJest 多项目测试运行器；全面覆盖 |
| Deploy部署 |  |
| build\*build \* | Builds production output for our PWA Viewer为我们的 PWA Viewer 构建生产输出 |

\* - For more information on different builds, check out our [Deploy Docs](https://docs.ohif.org/deployment/)
\* - 有关不同版本的更多信息，请查看我们的[部署文档](https://docs.ohif.org/deployment/)

## Project
项目

The OHIF Medical Image Viewing Platform is maintained as a [`monorepo`](https://en.wikipedia.org/wiki/Monorepo). This means that this repository, instead of containing a single project, contains many projects. If you explore our project structure, you'll see the following:
OHIF 医学图像查看平台作为 [`monorepo`](https://en.wikipedia.org/wiki/Monorepo) 。这意味着这个仓库包含多个项目，而不是单个项目。如果您探索我们的项目结构，您将看到以下内容：

```bash
.
├── extensions               #
│   ├── _example             # Skeleton of example extension
│   ├── default              # basic set of useful functionalities (datasources, panels, etc)
│   ├── cornerstone       # image rendering and tools w/ Cornerstone3D
│   ├── cornerstone-dicom-sr # DICOM Structured Report rendering and export
│   ├── cornerstone-dicom-sr # DICOM Structured Report rendering and export
│   ├── cornerstone-dicom-seg # DICOM Segmentation rendering and export
│   ├── cornerstone-dicom-rt # DICOM RTSTRUCT rendering
│   ├── cornerstone-microscopy # Whole Slide Microscopy rendering
│   ├── dicom-pdf # PDF rendering
│   ├── dicom-video # DICOM RESTful Services
│   ├── measurement-tracking # Longitudinal measurement tracking
│   ├── tmtv # Total Metabolic Tumor Volume (TMTV) calculation
|

│
├── modes                    #
│   ├── _example             # Skeleton of example mode
│   ├── basic-dev-mode       # Basic development mode
│   ├── longitudinal         # Longitudinal mode (measurement tracking)
│   ├── tmtv       # Total Metabolic Tumor Volume (TMTV) calculation mode
│   └── microscopy          # Whole Slide Microscopy mode
│
├── platform                 #
│   ├── core                 # Business Logic
│   ├── i18n                 # Internationalization Support
│   ├── ui                   # React component library
│   ├── docs                 # Documentation
│   └── viewer               # Connects platform and extension projects
│
├── ...                      # misc. shared configuration
├── lerna.json               # MonoRepo (Lerna) settings
├── package.json             # Shared devDependencies and commands
└── README.md                # This file
```

## Acknowledgments
致谢

To acknowledge the OHIF Viewer in an academic publication, please cite
如需在学术出版物中提及 OHIF Viewer，请引用

> *Open Health Imaging Foundation Viewer: An Extensible Open-Source Framework for Building Web-Based Imaging Applications to Support Cancer Research
> 开放健康影像基金会查看器：一个可扩展的开源框架，用于构建基于 Web 的影像应用程序以支持癌症研究*
> 
> Erik Ziegler, Trinity Urban, Danny Brown, James Petts, Steve D. Pieper, Rob Lewis, Chris Hafey, and Gordon J. Harris
> 埃里克·齐格勒、崔妮蒂·厄本、丹尼·布朗、詹姆斯·佩茨、史蒂夫·D·皮珀、罗布·刘易斯、克里斯·哈菲和戈登·J·哈里斯
> 
> *JCO Clinical Cancer Informatics*, no. 4 (2020), 336-345, DOI: [10.1200/CCI.19.00131](https://www.doi.org/10.1200/CCI.19.00131)
> *JCO 临床癌症信息学* ，第 4 期 (2020)，336-345，DOI： [10.1200/CCI.19.00131](https://www.doi.org/10.1200/CCI.19.00131)
> 
> Open-Access on Pubmed Central: [https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7259879/](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7259879/)
> Pubmed Central 上的开放获取： [https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7259879/](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7259879/)

or, for v1, please cite:
或者，对于 v1，请引用：

> *LesionTracker: Extensible Open-Source Zero-Footprint Web Viewer for Cancer Imaging Research and Clinical Trials
> LesionTracker：可扩展的开源零占用空间 Web 查看器，用于癌症成像研究和临床试验*
> 
> Trinity Urban, Erik Ziegler, Rob Lewis, Chris Hafey, Cheryl Sadow, Annick D. Van den Abbeele and Gordon J. Harris
> Trinity Urban、Erik Ziegler、Rob Lewis、Chris Hafey、Cheryl Sadow、Annick D. Van den Abbeele 和 Gordon J. Harris
> 
> *Cancer Research*, November 1 2017 (77) (21) e119-e122 DOI: [10.1158/0008-5472.CAN-17-0334](https://www.doi.org/10.1158/0008-5472.CAN-17-0334)
> *Cancer Research* ，2017 年 11 月 1 日 (77) (21) e119-e122 DOI: [10.1158/0008-5472.CAN-17-0334](https://www.doi.org/10.1158/0008-5472.CAN-17-0334)

**Note:** If you use or find this repository helpful, please take the time to star this repository on GitHub. This is an easy way for us to assess adoption and it can help us obtain future funding for the project.
**注意：** 如果您使用过此仓库或觉得它有用，请花点时间在 GitHub 上为它点赞。这不仅方便我们评估其采用情况，还能帮助我们获得项目未来的资金支持。

This work is supported primarily by the National Institutes of Health, National Cancer Institute, Informatics Technology for Cancer Research (ITCR) program, under a [grant to Dr. Gordon Harris at Massachusetts General Hospital (U24 CA199460)](https://projectreporter.nih.gov/project_info_description.cfm?aid=8971104).
这项工作主要由美国国立卫生研究院、国家 癌症研究所，癌症研究信息技术（ITCR）项目， 在 [授予马萨诸塞州总医院的 Gordon Harris 博士（U24 CA199460）](https://projectreporter.nih.gov/project_info_description.cfm?aid=8971104) 。

[NCI Imaging Data Commons (IDC) project](https://imaging.datacommons.cancer.gov/) supported the development of new features and bug fixes marked with ["IDC:priority"](https://github.com/OHIF/Viewers/issues?q=is%3Aissue+is%3Aopen+label%3AIDC%3Apriority), ["IDC:candidate"](https://github.com/OHIF/Viewers/issues?q=is%3Aissue+is%3Aopen+label%3AIDC%3Acandidate) or ["IDC:collaboration"](https://github.com/OHIF/Viewers/issues?q=is%3Aissue+is%3Aopen+label%3AIDC%3Acollaboration). NCI Imaging Data Commons is supported by contract number 19X037Q from Leidos Biomedical Research under Task Order HHSN26100071 from NCI. [IDC Viewer](https://learn.canceridc.dev/portal/visualization) is a customized version of the OHIF Viewer.
[NCI 影像数据共享 (IDC) 项目](https://imaging.datacommons.cancer.gov/)支持开发标有 [“IDC:priority”](https://github.com/OHIF/Viewers/issues?q=is%3Aissue+is%3Aopen+label%3AIDC%3Apriority) 的新功能和错误修复， [“IDC:candidate”](https://github.com/OHIF/Viewers/issues?q=is%3Aissue+is%3Aopen+label%3AIDC%3Acandidate) 或 [“IDC:collaboration”](https://github.com/OHIF/Viewers/issues?q=is%3Aissue+is%3Aopen+label%3AIDC%3Acollaboration) 。NCI Imaging Data Commons 由 Leidos Biomedical Research 的合同号 19X037Q 支持，合同编号为 NCI 的任务订单 HHSN26100071。IDC [Viewer](https://learn.canceridc.dev/portal/visualization) 是 OHIF Viewer 的定制版本。

This project is tested with BrowserStack. Thank you for supporting open-source!
本项目已使用 BrowserStack 测试。感谢您对开源的支持！

## License
执照

MIT © [OHIF](https://github.com/OHIF)
麻省理工学院© [OHIF](https://github.com/OHIF)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FOHIF%2FViewers.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2FOHIF%2FViewers?ref=badge_large&issueType=license)