import { getEnabledElementByViewportId } from '@cornerstonejs/core';
import {
  LabelmapBaseTool,
  ToolGroupManager,
  annotation,
  ProbeTool,
  addTool,
} from '@cornerstonejs/tools';

class SimpleMarkerTool extends LabelmapBaseTool {
  static toolName = 'SimpleMarker';

  private _toolsAdded = false;
  private _initialized = false;

  constructor(
    toolProps = {},
    defaultToolProps = {
      supportedInteractionTypes: ['Mouse', 'Touch'],
      configuration: {
        sourceViewportId: '',
        enabled: false,
      },
    }
  ) {
    super(toolProps, defaultToolProps);
  }

  private _getToolGroup() {
    return ToolGroupManager.getToolGroupForViewport(this.configuration.sourceViewportId);
  }

  private _addToolInstances() {
    const toolGroup = this._getToolGroup();
    if (!toolGroup) {
      console.debug(`[SimpleMarkerTool] Tool group not found`);
      return;
    }

    // 确保 ProbeTool 注册
    addTool(ProbeTool);

    const includeToolName = 'SimpleMarkerInclude';
    const excludeToolName = 'SimpleMarkerExclude';

    // 添加 Tool 实例
    toolGroup.addToolInstance(includeToolName, ProbeTool.toolName, {
      getTextLines: () => null,
    });
    toolGroup.addToolInstance(excludeToolName, ProbeTool.toolName, {
      getTextLines: () => null,
    });

    // 设置样式
    annotation.config.style.setToolGroupToolStyles(toolGroup.id, {
      [includeToolName]: {
        color: 'rgb(0, 255, 0)',
        colorHighlighted: 'rgb(0, 255, 0)',
        colorSelected: 'rgb(0, 255, 0)',
      },
      [excludeToolName]: {
        color: 'rgb(255, 0, 0)',
        colorHighlighted: 'rgb(255, 0, 0)',
        colorSelected: 'rgb(255, 0, 0)',
      },
    });

    // 默认激活 include
    toolGroup.setToolActive(includeToolName, {
      bindings: [{ mouseButton: 1 }],
    });

    this._toolsAdded = true;
  }

  private _init() {
    if (!this.configuration.enabled || !this.configuration.sourceViewportId) return;
    if (!this._toolsAdded) this._addToolInstances();
    this._initialized = true;
  }

  public onSetToolConfiguration = () => {
    this._init();
  };

  public onSetToolEnabled = async () => {
    this.configuration.enabled = true;
    if (!this._initialized) this._init();
  };

  public onSetToolActive = () => {
    this.configuration.enabled = true;
    if (!this._initialized) this._init();
  };

  public onSetToolDisabled = () => {
    this.configuration.enabled = false;
  };

  public clearMarkers = () => {
    const { sourceViewportId } = this.configuration;
    const enabledElement = getEnabledElementByViewportId(sourceViewportId);
    if (!enabledElement) return;

    const element = enabledElement.viewport.element;

    // 安全地获取当前 group 下的注解
    const includeAnnotations = annotation.state.getAnnotations('SimpleMarkerInclude', element);
    const excludeAnnotations = annotation.state.getAnnotations('SimpleMarkerExclude', element);

    if (Array.isArray(includeAnnotations)) {
      annotation.state.removeAnnotations('SimpleMarkerInclude', element);
    }

    if (Array.isArray(excludeAnnotations)) {
      annotation.state.removeAnnotations('SimpleMarkerExclude', element);
    }

    enabledElement.viewport.render();
  };

}

export default SimpleMarkerTool;
