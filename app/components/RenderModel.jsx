"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

function RenderModel({ children }) {
  return (
    <Canvas>
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}

export default RenderModel;
