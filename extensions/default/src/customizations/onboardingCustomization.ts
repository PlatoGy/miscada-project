function waitForElement(selector, maxAttempts = 20, interval = 25) {
  return new Promise(resolve => {
    let attempts = 0;

    const checkForElement = setInterval(() => {
      const element = document.querySelector(selector);

      if (element || attempts >= maxAttempts) {
        clearInterval(checkForElement);
        resolve();
      }

      attempts++;
    }, interval);
  });
}

export default {
  'ohif.tours': [
    {
      id: 'basicViewerTour',
      route: '/viewer',
      steps: [
        {
          id: 'scroll',
          title: 'Scrolling Through Images',
          text: 'You can scroll through the images using the mouse wheel or scrollbar.',
          attachTo: {
            element: '.viewport-element',
            on: 'top',
          },
          advanceOn: {
            selector: '.cornerstone-viewport-element',
            event: 'CORNERSTONE_TOOLS_MOUSE_WHEEL',
          },
          beforeShowPromise: () => waitForElement('.viewport-element'),
        },
        {
          id: 'zoom',
          title: 'Zooming In and Out',
          text: 'You can zoom the images using the right click.',
          attachTo: {
            element: '.viewport-element',
            on: 'left',
          },
          advanceOn: {
            selector: '.cornerstone-viewport-element',
            event: 'CORNERSTONE_TOOLS_MOUSE_UP',
          },
          beforeShowPromise: () => waitForElement('.viewport-element'),
        },
        {
          id: 'pan',
          title: 'Panning the Image',
          text: 'You can pan the images using the middle click.',
          attachTo: {
            element: '.viewport-element',
            on: 'top',
          },
          advanceOn: {
            selector: '.cornerstone-viewport-element',
            event: 'CORNERSTONE_TOOLS_MOUSE_UP',
          },
          beforeShowPromise: () => waitForElement('.viewport-element'),
        },
        {
          id: 'windowing',
          title: 'Adjusting Window Level',
          text: 'You can modify the window level using the left click.',
          attachTo: {
            element: '.viewport-element',
            on: 'left',
          },
          advanceOn: {
            selector: '.cornerstone-viewport-element',
            event: 'CORNERSTONE_TOOLS_MOUSE_UP',
          },
          beforeShowPromise: () => waitForElement('.viewport-element'),
        },
        {
          id: 'length',
          title: 'Using the Measurement Tools',
          text: 'You can measure the length of a region using the Length tool.',
          attachTo: {
            element: '[data-cy="MeasurementTools-split-button-primary"]',
            on: 'bottom',
          },
          advanceOn: {
            selector: '[data-cy="MeasurementTools-split-button-primary"]',
            event: 'click',
          },
          beforeShowPromise: () =>
            waitForElement('[data-cy="MeasurementTools-split-button-primary]'),
        },
        {
          id: 'drawAnnotation',
          title: 'Drawing Length Annotations',
          text: 'Use the length tool on the viewport to measure the length of a region.',
          attachTo: {
            element: '.viewport-element',
            on: 'right',
          },
          advanceOn: {
            selector: 'body',
            event: 'event::measurement_added',
          },
          beforeShowPromise: () => waitForElement('.viewport-element'),
        },
        {
          id: 'trackMeasurement',
          title: 'Tracking Measurements in the Panel',
          text: 'Click yes to track the measurements in the measurement panel.',
          attachTo: {
            element: '[data-cy="prompt-begin-tracking-yes-btn"]',
            on: 'bottom',
          },
          advanceOn: {
            selector: '[data-cy="prompt-begin-tracking-yes-btn"]',
            event: 'click',
          },
          beforeShowPromise: () => waitForElement('[data-cy="prompt-begin-tracking-yes-btn"]'),
        },
        {
          id: 'openMeasurementPanel',
          title: 'Opening the Measurements Panel',
          text: 'Click the measurements button to open the measurements panel.',
          attachTo: {
            element: '#trackedMeasurements-btn',
            on: 'left-start',
          },
          advanceOn: {
            selector: '#trackedMeasurements-btn',
            event: 'click',
          },
          beforeShowPromise: () => waitForElement('#trackedMeasurements-btn'),
        },
        {
          id: 'scrollAwayFromMeasurement',
          title: 'Scrolling Away from a Measurement',
          text: 'Scroll the images using the mouse wheel away from the measurement.',
          attachTo: {
            element: '.viewport-element',
            on: 'left',
          },
          advanceOn: {
            selector: '.cornerstone-viewport-element',
            event: 'CORNERSTONE_TOOLS_MOUSE_WHEEL',
          },
          beforeShowPromise: () => waitForElement('.viewport-element'),
        },
        {
          id: 'jumpToMeasurement',
          title: 'Jumping to Measurements in the Panel',
          text: 'Click the measurement in the measurement panel to jump to it.',
          attachTo: {
            element: '[data-cy="data-row"]',
            on: 'left-start',
          },
          advanceOn: {
            selector: '[data-cy="data-row"]',
            event: 'click',
          },
          beforeShowPromise: () => waitForElement('[data-cy="data-row"]'),
        },
        {
          id: 'changeLayout',
          title: 'Changing Layout',
          text: 'You can change the layout of the viewer using the layout button.',
          attachTo: {
            element: '[data-cy="Layout"]',
            on: 'bottom',
          },
          advanceOn: {
            selector: '[data-cy="Layout"]',
            event: 'click',
          },
          beforeShowPromise: () => waitForElement('[data-cy="Layout"]'),
        },
        {
          id: 'selectLayout',
          title: 'Selecting the MPR Layout',
          text: 'Select the MPR layout to view the images in MPR mode.',
          attachTo: {
            element: '[data-cy="MPR"]',
            on: 'left-start',
          },
          advanceOn: {
            selector: '[data-cy="MPR"]',
            event: 'click',
          },
          beforeShowPromise: () => waitForElement('[data-cy="MPR"]'),
        },
      ],
      tourOptions: {
        useModalOverlay: true,
        defaultStepOptions: {
          buttons: [
            {
              text: 'Skip all',
              action() {
                this.complete();
              },
              secondary: true,
            },
          ],
        },
      },
    },
    {
      id: 'unsamTour',
      route: '/unsam',
      steps: [
        {
          id: 'addSegment',
          title: '1. Add Segmentation',
          text: 'First, add a segmentation.',
          attachTo: {
            element: '[data-cy="add-segmentation"]',
            on: 'left',
          },
          beforeShowPromise: () => waitForElement('[data-cy="add-segmentation"]'),
        },
        {
          id: 'unsamWholeImage',
          title: '2. UnSAM Whole Image Segmentation',
          text: 'Apply slice to UnSAM whole-image segmentation.',
          attachTo: {
            element: '[data-cy="UnSAMApply"]',
            on: 'left',
          },
          beforeShowPromise: () => waitForElement('[data-cy="UnSAMApply"]'),
        },
        {
          id: 'unsamPrompt',
          title: '3. UnSAM Promptable Segmentation',
          text: 'Apply slice to UnSAM promptable segmentation.',
          attachTo: {
            element: '[data-cy="PointUnSAMApply"]',
            on: 'left',
          },
          beforeShowPromise: () => waitForElement('[data-cy="PointUnSAMApply"]'),
        },
      ],
      tourOptions: {
        useModalOverlay: true,
        defaultStepOptions: {
          advanceOn: {
            selector: 'body',
            event: 'click',
          },
          buttons: [
            {
              text: 'Skip all',
              action() {
                this.complete();
              },
              secondary: true,
            },
          ],
        },
      },
    },
    {
      id: 'samTour',
      route: '/sam',
      steps: [
        {
          id: 'samAddSegment',
          title: '1. Add Segmentation',
          text: 'First, add a segmentation.',
          attachTo: {
            element: '[data-cy="add-segmentation"]',
            on: 'left',
          },
          beforeShowPromise: () => waitForElement('[data-cy="add-segmentation"]'),
        },
        {
          id: 'autoSegment',
          title: '2. Auto Segmentation',
          text: 'You can choose an organ to apply the SAM model and automatically segment it.',
          attachTo: {
            element: '[data-cy="AutoSegmentLiver"]',
            on: 'left',
          },
          beforeShowPromise: () => waitForElement('[data-cy="AutoSegmentLiver"]'),
        },
        {
          id: 'storeOriginalSlice',
          title: '3. Store Original Slice',
          text: 'If you want to Use SAM model on the slice with any annotations, you need to store the original slice first.',
          attachTo: {
            element: '[data-cy="StoreOriginSlice"]',
            on: 'left',
          },
          beforeShowPromise: () => waitForElement('[data-cy="StoreOriginSlice"]'),
        },
        {
          id: 'annotate',
          title: '4. Annotate',
          text: 'These are the annotation tools. Use them to add annotations.',
          attachTo: {
            element: '[data-cy="RectangleScissor"]',
            on: 'left',
          },
          beforeShowPromise: () => waitForElement('[data-cy="RectangleScissor"]'),
        },
        {
          id: 'applySam',
          title: '5. SAM Segmentation',
          text: 'Apply the SAM model to the annotations you have made.',
          attachTo: {
            element: '[data-cy="SAMApply"]',
            on: 'left',
          },
          beforeShowPromise: () => waitForElement('[data-cy="SAMApply"]'),
        },
      ],
      tourOptions: {
        useModalOverlay: true,
        defaultStepOptions: {
          advanceOn: {
            selector: 'body',
            event: 'click',
          },
          buttons: [
            {
              text: 'Skip all',
              action() {
                this.complete();
              },
              secondary: true,
            },
          ],
        },
      },
    }

  ],
};
