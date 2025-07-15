import React, { useState, useEffect } from 'react';
import { ImageModal, FooterAction } from '@ohif/ui-next';

const MAX_TEXTURE_SIZE = 10000;
const DEFAULT_FILENAME = 'image';

interface ViewportDownloadFormNewProps {
  onClose: () => void;
  defaultSize: number;
  fileTypeOptions: Array<{ value: string; label: string }>;
  viewportId: string;
  showAnnotations: boolean;
  onAnnotationsChange: (show: boolean) => void;
  dimensions: { width: number; height: number };
  onDimensionsChange: (dimensions: { width: number; height: number }) => void;
  onEnableViewport: (element: HTMLElement) => void;
  onDisableViewport: () => void;
  onDownload: (filename: string, fileType: string) => void;
  warningState: { enabled: boolean; value: string };
  samImageUrl?: string; // 新增
}

function ViewportSamAndUnsamForm({
  onClose,
  defaultSize,
  fileTypeOptions,
  viewportId,
  showAnnotations,
  onAnnotationsChange,
  dimensions,
  warningState,
  onDimensionsChange,
  onEnableViewport,
  onDisableViewport,
  onDownload,
  samImageUrl,
}: ViewportDownloadFormNewProps) {
  const [viewportElement, setViewportElement] = useState<HTMLElement | null>(null);
  const [showWarningMessage, setShowWarningMessage] = useState(true);
  const [filename, setFilename] = useState(DEFAULT_FILENAME);
  const [fileType, setFileType] = useState('jpg');

  useEffect(() => {
    if (!viewportElement) {
      return;
    }

    onEnableViewport(viewportElement);

    return () => {
      onDisableViewport();
    };
  }, [onDisableViewport, onEnableViewport, viewportElement]);

  return (
    <ImageModal>
      <ImageModal.Body>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          {/* 图片区域：左右并排 */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
            {/* 左侧：原始图片 */}
            <ImageModal.ImageVisual>
              <div
                style={{
                  height: dimensions.height,
                  width: dimensions.width,
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#222',
                }}
                data-viewport-uid={viewportId}
                ref={setViewportElement}
              >
                {/* {warningState.enabled && showWarningMessage && (
                  <div
                    className="text-foreground absolute left-1/2 bottom-[5px] z-[1000] -translate-x-1/2 whitespace-nowrap rounded bg-black p-3 text-xs font-bold"
                    style={{
                      fontSize: '12px',
                    }}
                  >
                    {warningState.value}
                  </div>
                )} */}
              </div>
            </ImageModal.ImageVisual>

            {/* 右侧：SAM处理后图片 */}
            <ImageModal.ImageVisual>
              <img
                src={samImageUrl} // 你需要在组件props或state中传入samImageUrl
                alt="SAM Result"
                style={{
                  height: dimensions.height,
                  width: dimensions.width,
                  objectFit: 'cover',
                  background: '#222',
                  display: 'block',
                }}
              />
            </ImageModal.ImageVisual>
          </div>

          {/* 按钮区域，居中放在图片下方 */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 16 }}>
            <FooterAction className="mt-2">
              <FooterAction.Right>
                <FooterAction.Secondary onClick={onClose}>Cancel</FooterAction.Secondary>
                <FooterAction.Primary
                  onClick={() => {
                    onDownload(filename || DEFAULT_FILENAME, fileType);
                    onClose();
                  }}
                >
                  Save
                </FooterAction.Primary>
              </FooterAction.Right>
            </FooterAction>
          </div>
        </div>
      </ImageModal.Body>
    </ImageModal>
  );
}

export default {
  'ohif.samAndUnsamModal': ViewportSamAndUnsamForm,
};
