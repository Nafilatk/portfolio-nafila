"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

interface Spark {
    id: number;
    x: number;
    y: number;
}

const SparkBurst = ({ x, y, onComplete }: { x: number; y: number; onComplete: () => void }) => {
    const burstRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const lines = burstRef.current?.querySelectorAll("line");

            if (lines) {
                gsap.to(lines, {
                    strokeDashoffset: 0,
                    duration: 0.2,
                    ease: "power2.out",
                });

                gsap.to(lines, {
                    attr: {
                        x2: (i, t) => {
                            // Calculate end position based on rotation
                            const angle = (parseInt(t.getAttribute("data-angle") || "0")) * (Math.PI / 180);
                            const length = 50 + Math.random() * 30; // Random length
                            return 50 + Math.cos(angle) * length;
                        }, y2: (i, t) => {
                            const angle = (parseInt(t.getAttribute("data-angle") || "0")) * (Math.PI / 180);
                            const length = 50 + Math.random() * 30;
                            return 50 + Math.sin(angle) * length;
                        }
                    },
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    onComplete: onComplete
                });
            }
        }, burstRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <svg
            ref={burstRef}
            className="pointer-events-none fixed z-[9999]"
            style={{ left: x - 50, top: y - 50, width: 100, height: 100, overflow: "visible" }}
            viewBox="0 0 100 100"
        >
            {[...Array(8)].map((_, i) => {
                const angle = i * 45;
                // Start from center
                const x1 = 50;
                const y1 = 50;
                // Initial end point (same as start, will animate out)
                const x2 = 50;
                const y2 = 50;
                const color = i % 2 === 0 ? "#E22D35" : "#ffffff"; // Alternating Deadpool colors

                return (
                    <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        data-angle={angle}
                        stroke={color}
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                );
            })}
        </svg>
    );
};

export default function ClickSpark() {
    const [sparks, setSparks] = useState<Spark[]>([]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const newSpark = { id: Date.now(), x: e.clientX, y: e.clientY };
            setSparks((prev) => [...prev, newSpark]);
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    const removeSpark = (id: number) => {
        setSparks((prev) => prev.filter((spark) => spark.id !== id));
    };

    return (
        <>
            {sparks.map((spark) => (
                <SparkBurst
                    key={spark.id}
                    x={spark.x}
                    y={spark.y}
                    onComplete={() => removeSpark(spark.id)}
                />
            ))}
        </>
    );
}
