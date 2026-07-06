import React, { useEffect, useRef } from "react";

/*
 * Pixel-scatter reveal (ported from the ram-portfolio reference):
 * the image is sampled every STEP px into particles that start
 * scattered and converge into place, then the crisp image is drawn.
 *
 * The parent preloads nothing — this component loads `src` itself and
 * fires onReady once the image (and particle field) is prepared, so
 * the section can hold its entrance until the art is actually there.
 */

interface PixelScatterProps {
  src: string;
  play: boolean;
  onReady?: (ok: boolean) => void;
  className?: string;
  step?: number;
  scatter?: number;
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

const PixelScatter: React.FC<PixelScatterProps> = ({
  src,
  play,
  onReady,
  className,
  step = 3,
  scatter = 150,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const playedRef = useRef(false);
  const rafRef = useRef(0);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  /* preload the artwork */
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imgRef.current = img;
      onReadyRef.current?.(true);
    };
    img.onerror = () => onReadyRef.current?.(false); // fail open
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  /* run the scatter once the parent says go */
  useEffect(() => {
    if (!play || playedRef.current) return;
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;
    playedRef.current = true;

    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w <= 0 || h <= 0) return;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const scale = Math.min(w / img.width, h / img.height);
    const dw = img.width * scale;
    const dh = img.height * scale;
    const ox = (w - dw) / 2;
    const oy = h - dh;

    const drawCrisp = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, ox, oy, dw, dh);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      drawCrisp();
      return;
    }

    let data: Uint8ClampedArray;
    try {
      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;
      const octx = off.getContext("2d", { willReadFrequently: true })!;
      octx.drawImage(img, ox, oy, dw, dh);
      data = octx.getImageData(0, 0, w, h).data;
    } catch {
      drawCrisp();
      return;
    }

    interface P {
      tx: number;
      ty: number;
      x: number;
      y: number;
      r: number;
      g: number;
      b: number;
      a: number;
      d: number;
    }
    const parts: P[] = [];
    for (let y = 0; y < h; y += step) {
      for (let x = 0; x < w; x += step) {
        const i = (y * w + x) * 4;
        const a = data[i + 3];
        if (a < 30) continue;
        const ang = Math.random() * Math.PI * 2;
        const dist = Math.random() * scatter;
        parts.push({
          tx: x,
          ty: y,
          x: x + Math.cos(ang) * dist,
          y: y + Math.sin(ang) * dist,
          r: data[i],
          g: data[i + 1],
          b: data[i + 2],
          a: a / 255,
          d: Math.random(),
        });
      }
    }

    const size = step + 0.6;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    let t0 = 0;
    const frame = (now: number) => {
      if (!t0) t0 = now;
      const t = now - t0;
      ctx.clearRect(0, 0, w, h);
      let done = true;
      for (const p of parts) {
        const n = clamp01((t - 650 * p.d) / 1500);
        const e = easeOut(n);
        const px = p.x + (p.tx - p.x) * e;
        const py = p.y + (p.ty - p.y) * e;
        ctx.globalAlpha = p.a * n;
        ctx.fillStyle = `rgb(${p.r},${p.g},${p.b})`;
        ctx.fillRect(px, py, size, size);
        if (n < 1) done = false;
      }
      if (done) {
        drawCrisp();
      } else {
        rafRef.current = requestAnimationFrame(frame);
      }
    };
    rafRef.current = requestAnimationFrame(frame);

    /* safety net: if rAF is throttled (hidden tab), force the final image */
    const safety = window.setTimeout(() => {
      if (!t0) drawCrisp();
    }, 4500);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.clearTimeout(safety);
    };
  }, [play, step, scatter]);

  return <canvas ref={canvasRef} className={className} />;
};

export default PixelScatter;
