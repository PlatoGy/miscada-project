const toolbarButtons = [
  {
    id: 'Zoom',
    type: 'ohif.radioGroup',
    props: {
      type: 'tool',
      icon: 'tool-zoom',
      label: 'Zoom',
      commands: [
        {
          commandName: 'setToolActive',
          commandOptions: {
            toolName: 'Zoom',
          },
        },
      ],
    },
  },
  {
    id: 'Pan',
    type: 'ohif.radioGroup',
    props: {
      type: 'tool',
      icon: 'tool-move',
      label: 'Pan',
      commands: [
        {
          commandName: 'setToolActive',
          commandOptions: {
            toolName: 'Pan',
          },
        },
      ],
    },
  },
  {
    id: 'WindowLevel',
    type: 'ohif.radioGroup',
    props: {
      type: 'tool',
      icon: 'tool-window-level',
      label: 'Window Level',
      commands: [
        {
          commandName: 'setToolActive',
          commandOptions: {
            toolName: 'WindowLevel',
          },
        },
      ],
    },
  },
  {
    id: 'Layout',
    type: 'ohif.layoutSelector',
    props: {
      rows: 3,
      columns: 3,
    },
  },
];

export default toolbarButtons; 