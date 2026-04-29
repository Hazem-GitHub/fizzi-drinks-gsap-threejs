"use client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
// import { PerfMonitor } from "r3f-monitor";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("@react-three/drei").then((mod) => mod.Loader), {
    ssr: false,
});

type ViewCanvasProps = {};

const ViewCanvas = (props: ViewCanvasProps) => {
    return (
        <>
            <Canvas
                style={{
                    position: 'fixed',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    zIndex: 30
                }}
                shadows
                dpr={[1, 1.5]}
                gl={{ antialias: true }}
                camera={{
                    fov: 30,
                    near: 0.1,
                    far: 1000,
                }}
            >
                {/* View Port */}
                <Suspense fallback={null}>
                    <View.Port />
                </Suspense>
                {/* Performance Monitor */}
                {/* <PerfMonitor /> */}
            </Canvas>
            <Loader />
        </>
    );
};

export default ViewCanvas;
