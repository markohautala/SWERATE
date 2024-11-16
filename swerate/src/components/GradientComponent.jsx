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
                color: '#f8f9fa',
                enabled: true,
            },
            {
                color: '#e9ecef',
                enabled: true,
            },
            {
                color: '#dee2e6',
                enabled: true,
            },
            {
                color: '#ced4da',
                enabled: true,
            },
            {
                color: '#adb5bd',
                enabled: true,
            },
            {
                color: '#6c757d',
                enabled: true,
            },
            {
                color: '#495057',
                enabled: true,
            },
            ],
            speed: 6,
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
            grainSparsity: 0,
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