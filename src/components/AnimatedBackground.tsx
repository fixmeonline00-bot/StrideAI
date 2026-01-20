import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;

    const drawRipple = (radius: number, opacity: number, lineWidth: number) => {
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      time += 0.008;

      for (let i = 0; i < 8; i++) {
        const offset = i * 80;
        const radius = ((time * 100 + offset) % 600);
        const progress = radius / 600;

        const fadeStart = 0.7;
        let opacity;
        if (progress < fadeStart) {
          opacity = 0.15 * (1 - progress / fadeStart) * 0.8;
        } else {
          opacity = 0.15 * (1 - (progress - fadeStart) / (1 - fadeStart)) * 0.8;
        }

        const lineWidth = 2 * (1 - progress * 0.5);

        if (opacity > 0.01) {
          drawRipple(radius, opacity, lineWidth);
        }
      }

      for (let i = 0; i < 5; i++) {
        const offset = i * 120 + 300;
        const radius = ((time * 100 + offset) % 600);
        const progress = radius / 600;

        const fadeStart = 0.7;
        let opacity;
        if (progress < fadeStart) {
          opacity = 0.08 * (1 - progress / fadeStart);
        } else {
          opacity = 0.08 * (1 - (progress - fadeStart) / (1 - fadeStart));
        }

        const lineWidth = 1.5 * (1 - progress * 0.5);

        if (opacity > 0.01) {
          drawRipple(radius, opacity, lineWidth);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}
