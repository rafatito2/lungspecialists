'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { createPortal } from 'react-dom';

interface LungViewerContextType {
  registerPlaceholder: (el: HTMLElement | null) => void;
}

const LungViewerContext = createContext<LungViewerContextType>({
  registerPlaceholder: () => {},
});

export function useLungViewer() {
  return useContext(LungViewerContext);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function runSketchfab(iframe: HTMLIFrameElement, SF: any) {
  const client = new SF(iframe);
  client.init('bb3e70596ec24289b355fb075222a354', {
    autospin: 1, autostart: 1, transparent: 1,
    ui_hint: 0, ui_watermark: 0, ui_watermark_link: 0,
    ui_infos: 0, ui_stop: 0, ui_controls: 0, ui_ar: 0,
    ui_vr: 0, ui_help: 0, ui_settings: 0, ui_fullscreen: 0,
    ui_annotations: 0, ui_inspector: 0,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    success: (api: any) => {
      api.start();
      api.addEventListener('viewerready', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        api.getCameraLookAt((err: any, camera: any) => {
          if (err) return;
          const { position, target } = camera;
          const factor = 0.33;
          api.setCameraLookAt(
            [
              target[0] + (position[0] - target[0]) * factor,
              target[1] + (position[1] - target[1]) * factor,
              target[2] + (position[2] - target[2]) * factor,
            ],
            target,
            0.8
          );
        });
      });
    },
    error: () => console.error('Sketchfab viewer failed to initialise'),
  });
}

function loadAndInit(iframe: HTMLIFrameElement) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SF = (window as any).Sketchfab;
  if (SF) {
    runSketchfab(iframe, SF);
  } else {
    const script = document.createElement('script');
    script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
    script.async = true;
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SF2 = (window as any).Sketchfab;
      if (SF2) runSketchfab(iframe, SF2);
    };
    document.head.appendChild(script);
  }
}

export function LungViewerProvider({ children }: { children: ReactNode }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const placeholderRef = useRef<HTMLElement | null>(null);
  const initializedRef = useRef(false);
  // Set to true when a placeholder registers before the portal has rendered
  const pendingInitRef = useRef(false);
  const [mounted, setMounted] = useState(false);
  const [rect, setRect] = useState<{
    top: number; left: number; width: number; height: number;
  } | null>(null);

  // Step 1: render the portal after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Step 2: once the portal has rendered (iframe is in the DOM), run any
  // pending init that was requested before the portal existed.
  // Refs are updated before effects fire, so iframeRef.current is set here.
  useEffect(() => {
    if (!mounted) return;
    if (pendingInitRef.current && !initializedRef.current) {
      const iframe = iframeRef.current;
      if (iframe) {
        initializedRef.current = true;
        pendingInitRef.current = false;
        loadAndInit(iframe);
      }
    }
  }, [mounted]);

  const updateRect = useCallback(() => {
    const el = placeholderRef.current;
    if (!el) { setRect(null); return; }
    const r = el.getBoundingClientRect();
    setRect({
      top: r.top + window.scrollY,
      left: r.left + window.scrollX,
      width: r.width,
      height: r.height,
    });
  }, []);

  const registerPlaceholder = useCallback((el: HTMLElement | null) => {
    placeholderRef.current = el;

    if (el) {
      if (!initializedRef.current) {
        const iframe = iframeRef.current;
        if (iframe) {
          // Portal already rendered (user navigated back to home page)
          initializedRef.current = true;
          loadAndInit(iframe);
        } else {
          // Portal not rendered yet (initial page load on home page).
          // The mounted effect above will pick this up and init after render.
          pendingInitRef.current = true;
        }
      }
      updateRect();
      window.addEventListener('resize', updateRect);
    } else {
      setRect(null);
      window.removeEventListener('resize', updateRect);
    }
  }, [updateRect]);

  const isVisible = rect !== null;

  const portal = (
    <div
      style={{
        position: 'absolute',
        top: isVisible ? rect.top : -2000,
        left: isVisible ? rect.left : -2000,
        width: isVisible ? rect.width : 500,
        height: isVisible ? rect.height : 500,
        overflow: 'hidden',
        pointerEvents: isVisible ? 'auto' : 'none',
        visibility: isVisible ? 'visible' : 'hidden',
        zIndex: 1,
      }}
      aria-hidden="true"
    >
      <iframe
        ref={iframeRef}
        title="LUNGS"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        style={{
          position: 'absolute',
          width: 'calc(120% + 60px)',
          left: '-45px',
          height: 'calc(85% + 90px)',
          top: '-50px',
          border: 'none',
        }}
      />
    </div>
  );

  return (
    <LungViewerContext.Provider value={{ registerPlaceholder }}>
      {mounted && createPortal(portal, document.body)}
      {children}
    </LungViewerContext.Provider>
  );
}
