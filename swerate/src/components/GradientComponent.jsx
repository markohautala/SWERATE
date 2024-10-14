// GradientComponent.jsx

import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

const GradientComponent = () => {
    const canvasRef = useRef(null);
    const gradientRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const config = {
          colors: [
              {
                  "color": "#FFFFFF",
                  "enabled": true
              },
              {
                  "color": "#D4D4D4",
                  "enabled": true
              },
              {
                  "color": "#D8D8D8",
                  "enabled": true
              },
              {
                  "color": "#DEDEDE",
                  "enabled": true
              },
              {
                  "color": "#EAEAEA",
                  "enabled": true
              }
          ],
          horizontalPressure: 4,
          verticalPressure: 6,
          waveFrequencyX: 2,
          waveFrequencyY: 4,
          waveAmplitude: 6,
          shadows: 0,
          highlights: 4,
          colorBrightness: 1,
          colorSaturation: 3,
          wireframe: false,
          colorBlending: 5,
          backgroundColor: '#003FFF',
          backgroundAlpha: 1,
          grainScale: 0,
          grainIntensity: 0,
          grainSpeed: 0,
          resolution: 1,
      }

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
            ...config,
        });

        return () => {
            if (gradientRef.current) {
                gradientRef.current.destroy();
            }
        };
    }, []);

    return (
        <canvas
        id="gradientCanvas"
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}
        ref={canvasRef}
    />
    );
};

export default GradientComponent;