# Orthanc & OHIF Viewer Project
## 1. Project Initialization
1. Run Orthanc with Docker
```bash
cd orthanc
docker-compose up -d

```

2. Run OHIF Viewer with Yarn

```bash
cd Viewers
yarn config set workspaces-experimental true
yarn install
yarn run dev:orthanc

```

3. Open the links in your browser

[OHIF]("http://localhost:3000")

[Orthanc]("http://localhost:8042") 

[Dicom Interface]("http://localhost:4242")

You can upload datasets with Orthanc system.

## 2. Adding Features to the Project
1. Add feature buttons to the homepage
2. Modify in the mode and extension
3. Add new UI in extensions/cornerstone/src/panels
4. Register the mode in platform/app/package.json and platform/app/pluginconfig.json
5. Add callback functions in extensions/cornerstone/src/commandsModule.ts

## 3. Basic Viewer Usage
https://docs.ohif.org/user-guide/viewer/