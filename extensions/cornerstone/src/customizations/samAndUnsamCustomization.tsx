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
  onDownload: (filename: string, fileType: string, index?: number) => void;
  warningState: { enabled: boolean; value: string };
  samImageUrl?: string | string[]; // 支持多个结果
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
  const urls = Array.isArray(samImageUrl)
    ? samImageUrl
    : samImageUrl
    ? [samImageUrl]
    : [];
  const [currentIndex, setCurrentIndex] = useState(0);
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

            <ImageModal.ImageVisual>
              <div
                style={{
                  height: dimensions.height,
                  width: dimensions.width,
                  position: 'relative',
                  background: '#222',
                }}
              >
                {urls.length > 0 && (
                  <>
                    <img
                      src={urls[currentIndex]}
                      alt="SAM Result"
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    {urls.length > 1 && (
                      <>
                        <button
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            transform: 'translateY(-50%)',
                            background: 'rgba(0,0,0,0.5)',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px 8px',
                          }}
                          onClick={() =>
                            setCurrentIndex((currentIndex - 1 + urls.length) % urls.length)
                          }
                        >
                          {'<'}
                        </button>
                        <button
                          style={{
                            position: 'absolute',
                            top: '50%',
                            right: 0,
                            transform: 'translateY(-50%)',
                            background: 'rgba(0,0,0,0.5)',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px 8px',
                          }}
                          onClick={() =>
                            setCurrentIndex((currentIndex + 1) % urls.length)
                          }
                        >
                          {'>'}
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>
            </ImageModal.ImageVisual>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 16 }}>
            <FooterAction className="mt-2">
            <FooterAction.Right>
              <FooterAction.Secondary onClick={onClose}>Cancel</FooterAction.Secondary>
              <FooterAction.Primary
                onClick={() => {
                  onDownload(filename || DEFAULT_FILENAME, fileType, currentIndex);
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
