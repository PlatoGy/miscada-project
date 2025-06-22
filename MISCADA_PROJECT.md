# Orthanc & OHIF Viewer Project
## 一、项目初始化
1. docker 运行 orthanc
```bash
cd orthanc
docker-compose up -d

```

2. yarn 运行 ohif

```bash
cd Viewers
yarn config set workspaces-experimental true
yarn install
yarn run dev:orthanc

```

3. 浏览器打开链接

[OHIF]("http://localhost:3000")

[Orthanc]("http://localhost:8042")

[Dicom接口]("http://localhost:4242")


## 二、项目目标
1. 找一篇论文做参考

2. 找到该论文的瑕疵缺陷，针对缺陷进行攻克，创新

3. 对于达到的优化给出数据支撑，涉及到随机的，用统计的方法去做对比，多次取均值

4. 主要还是做系统，系统做出来才是unsam



![image-20250604055501795](C:\Users\10319\AppData\Roaming\Typora\typora-user-images\image-20250604055501795.png)


## 三、项目添加功能方式

### 1.在主页添加功能按钮

### 2.在mode和extension中分别进行修改

### 3.在extensions/cornerstone/src/panels中添加新UI

### 4.在platform/app/package.json 和 platform/app/plugincofig.json中注册mode

## 四、基础查看器使用方式
https://docs.ohif.org/user-guide/viewer/