import React from 'react';

type PanelUnSAMProps = {
  commandsManager: any;
  servicesManager: any;
  extensionManager: any;
  configuration?: any;
};

function PanelUnSAM({
  commandsManager,
  servicesManager,
  extensionManager,
  configuration = {},
}: PanelUnSAMProps): React.ReactElement {
  return (
    <div className="flex flex-col">
      <div className="p-4">
        <h3 className="text-base font-bold">UnSAM工具</h3>
        {/* 在这里添加UnSAM相关的UI组件 */}
      </div>
    </div>
  );
}

export default PanelUnSAM; 