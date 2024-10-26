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
                color: '#7C6DFF',
                enabled: true,
            },
            {
                color: '#FFCEE0',
                enabled: true,
            },
            {
                color: '#8084F1',
                enabled: true,
            },
            {
                color: '#A698EA',
                enabled: true,
            },
            {
                color: '#a2d2ff',
                enabled: false,
            },
            ],
            speed: 4,
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