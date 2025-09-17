# MISCADA Project Code Instruction

## 1. Introduction

This project is developed based on OHIF There are four folders in this project：

1. OHIF(Front-end)

2. Orthanc(Data)

3. SAM (Hosted by FastAPI)

4. UnSAM (Hosted by FastAPI)

To run the code, you can find an additional README file in these folders named '**MISCADA_PROJECT.md**'.

**Resources:**

The weights files can be download by the links below: 
1. [MedSAM/work_dir/MedSAM/medsam_vit_b.pth](https://drive.google.com/drive/folders/1ETWmi4AiniJeWOt6HAsYgTjYv_fkgzoN)
2. [UnSAM/checkpoints/unsam_sa1b_4perc_ckpt_200k.pth](https://drive.google.com/file/d/12DvjnXIQsOtBSAAEicd9uhW0TCpnMFyZ/view)
3. [UnSAMcheckpoints/unsam_plus_promptable_sa1b_1perc_ckpt_100k.pth](https://drive.google.com/file/d/1M3lOnSOutQRK4IqBkc3e4vGZ-u2oTkeW/view
)

The **Data Set** can be download by the link below:
https://zenodo.org/api/records/3431873/files-archive



## 2. Environment Setup

The environment you needed are listed: 

1. Docker version 27.3.1
2. Nodejs v20.19.1
3. Python 3.9.21 (Suggestion: Create an isolated environment using conda)



## 3. How to Start

### a. Orthanc

Orthanc is an easy-to-deploy medical image management tool.

1. You can easily run the scripts below to start Orthanc: 

```bash
cd Orthanc
docker-compose up -d
```

2. Then, you can access the Orthanc Web by  http://localhost:8042

3. You can upload the CT slices of the [Data Set](https://zenodo.org/api/records/3431873/files-archive).

![](https://ygstorage-1307169253.cos.ap-beijing.myqcloud.com/Obsidian/20250909150158003.png)

### b. OHIF

1. Firstly, If you don't setup **yarn**, please run: `npm install -g yarn@1.22.22`
2. You can start OHIF project by:

```bash
yarn config set workspaces-experimental true
yarn install
yarn run dev:orthanc # run OHIF with data source Orthanc

```

3. To learn how to use the SAM/UnSAM, you can watch the tutorial video under this directory

4. If you want to build static assets to host a PWA:

   ```bash
   yarn run build
   ```

   

### c. SAM (MedSAM)

1. Create a virtual environment `conda create -n medsam python=3.9.21 -y` and activate it `conda activate medsam`
2. Install [Pytorch 2.0](https://pytorch.org/get-started/locally/)
3. `git clone https://github.com/bowang-lab/MedSAM`
4. Enter the MedSAM folder `cd MedSAM` and run `pip install -e .`

5. Start the service:

`uvicorn medsam_service:app --reload --host 0.0.0.0 --port 8000`

### d. UnSAM

1. Enter the UnSAM folder and run: 

```bash
conda create --name UnSAM python=3.9.21 -y

conda activate UnSAM

pip install torch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2

python -m pip install 'git+https://github.com/MaureenZOU/detectron2-xyz.git'

pip install git+https://github.com/cocodataset/panopticapi.git

python -m pip install 'git+https://github.com/UX-Decoder/Semantic-SAM.git'

git clone git@github.com:frank-xwang/UnSAM.git

cd promptable_segmentation/model/body/encoder/ops

sh make.sh

cd whole_image_segmentation/mask2former/modeling/pixel_decoder/ops

sh make.sh

python -m pip install -r requirements.txt
```



2. Install dependencie

```bash
pip install -r requirements.txt
pip install -e segment_anything
pip install -e detectron2
```



3. Start the service

`uvicorn unsam_service:app --host 0.0.0.0 --port 8008 --reload`



## 4. Add Mode to OHIF

You can also find some tutorials on https://docs.ohif.org/development/ohif-cli

1. Create mode

```bash
yarn run cli create-mode
```

2. Link mode module to OHIF

```
yarn run cli link-mode <modeDir>  # If you get permission denied, use sudo
```

3. Then, you can run dev to find the new mode on the website

![](https://ygstorage-1307169253.cos.ap-beijing.myqcloud.com/Obsidian/20250910143428021.png)

4. If you want to change the layout inside:

<img src="https://ygstorage-1307169253.cos.ap-beijing.myqcloud.com/Obsidian/20250910143754704.png" style="zoom: 33%;" />

You can modify the code in `./modes/<my-mode>/src/index.tsx`:

```tsx
routes: [
      {
        path: 'template',
        layoutTemplate: ({ location, servicesManager }) => {
          return {
            id: ohif.layout,
            props: {
              leftPanels: [ohif.leftPanel],
              rightPanels: [ohif.rightPanel],
              viewports: [
                {
                  namespace: cornerstone.viewport,
                  displaySetsToDisplay: [ohif.sopClassHandler],
                },
              ],
            },
          };
        },
      },
    ],
```

For more information, you can learn from:

- `./modes/sam/src`

- `./modes/segmentation/src`



## 5. Add buttons to right panel

1. You can find  in the file`./modes/sam/src/toolbarButtons.ts`, Create the button you need by imitating the **existing buttons**, such as:

   ```ts
   {
       id: 'StoreOriginSlice', // Name
       uiType: 'ohif.toolBoxButton',
       props: {
         icon: 'store-origin-slice', // Icon
         label: 'Store Original Slice',
         tooltip: 'Save the original slice for uploading to the MedSAM Model', // Message showed when hovering
         commands: 'storeOriginSlice', // Callback function
         evaluate: [
           'evaluate.action',
           {
             name: 'evaluate.viewport.supported',
             unsupportedViewportTypes: ['video', 'wholeSlide'],
           },
           { name: 'evaluate.cornerstone.segmentation'},
         ],
       },
     },
   ```

2. Then, register it into the `./modes/sam/src/index.tsx`:

```tsx
toolbarService.updateSection('SegmentationUtilities', [
        'StoreOriginSlice',
]);
```

3. About the callback function, you can define in the `./extensions/cornerstone/src/commandsModule.ts`， for example:

```ts
storeOriginSlice: async () => {
      const { activeViewportId } = viewportGridService.getState();
      const divForUpload = document.querySelector(`div[data-viewport-uid="${activeViewportId}"]`);
      if (!divForUpload) {
        originSliceBlob = null;
        return;
      }
      const canvas = await html2canvas(divForUpload as HTMLElement);
      originSliceBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png', 1.0));

      uiNotificationService.show({
        title: 'The screenshot was successful.',
        message: 'The screenshot of the original image has been saved and can be used for subsequent uploads.',
        type: 'success',
      });
},
```



For more information, please read the [docs of OHIF](https://docs.ohif.org/)



## Acknowledgements

- OHIF Viewer Documentation: [https://docs.ohif.org/](https://docs.ohif.org/)
- S. Jodogne et al., *Orthanc – A lightweight, RESTful DICOM server for healthcare and medical research*, Proc. IEEE ISBI, 2013.  
- Z. Ma et al., *Segment Anything in Medical Images (MedSAM)*, arXiv:2304.12306, 2023. [GitHub](https://github.com/bowang-lab/MedSAM)  
- A. Kirillov et al., *Segment Anything*, arXiv:2304.02643, 2023. [Project page](https://segment-anything.com/)  
- X. Wang et al., *Unsupervised Segment Anything Model (UnSAM)*, GitHub, 2024. [https://github.com/frank-xwang/UnSAM](https://github.com/frank-xwang/UnSAM)  
- Y. Zhang et al., *Semantic-SAM: Segment Anything in Medical Images via Promptable Foundation Model*, GitHub, 2023. [https://github.com/UX-Decoder/Semantic-SAM](https://github.com/UX-Decoder/Semantic-SAM)  
- Y. Wu et al., *Detectron2*, Facebook AI Research, 2019. [https://github.com/facebookresearch/detectron2](https://github.com/facebookresearch/detectron2)  
- CHAOS Challenge Dataset: K. Kavur et al., *Combined (CT-MR) Healthy Abdominal Organ Segmentation*, Zenodo, 2019. [https://doi.org/10.5281/zenodo.3431873](https://doi.org/10.5281/zenodo.3431873)  
