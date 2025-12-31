'use client';

import { OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url);

  // Manual rotation removed to prevent conflicts with Stage/OrbitControls
  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={scene} />;
}

function LoadingSpinner() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-accent" />
    </div>
  );
}

interface Model3DViewerProps {
  modelUrl: string;
  className?: string;
}

export function Model3DViewer({ modelUrl, className = '' }: Model3DViewerProps) {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          className="touch-none"
          shadows
          style={{ background: 'transparent' }}
        >
          <Stage adjustCamera={0.6} environment="city" intensity={0.6}>
            <Model url={modelUrl} />
          </Stage>

          <OrbitControls
            autoRotate
            autoRotateSpeed={4}
            enableDamping
            enablePan={false}
            enableZoom
            makeDefault
            maxDistance={20}
            minDistance={0.1}
          />
        </Canvas>
      </Suspense>

      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-2 text-xs text-white/70 backdrop-blur-sm">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
}
