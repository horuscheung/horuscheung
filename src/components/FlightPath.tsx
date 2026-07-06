import React, { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import gsap from "gsap";
import emberMapUrl from "../assets/space/planet-ember.webp";
import glacierMapUrl from "../assets/space/planet-glacier.webp";
import violetMapUrl from "../assets/space/planet-violet.webp";
import oceanMapUrl from "../assets/space/planet-ocean.webp";
import nebulaMapUrl from "../assets/space/nebula.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
 * The space flight: a full-screen Three.js universe pinned for 400%
 * of scroll. A glowing gradient line draws itself past planets,
 * nebulae and asteroid fields while the camera flies behind its
 * head; a portfolio-mockup card fades in at each waypoint.
 */

export interface FlightChapter {
  id: string;
  num: string;
  kicker: string;
  title: string;
  accent: string;
  copy: string;
  chips: string[];
  url: string;
  fig: string;
  mock: "trade" | "chat" | "flow" | "shelf";
  side: "left" | "right";
}

export const FLIGHT_CHAPTERS: FlightChapter[] = [
  {
    id: "tradepulse",
    num: "01",
    kicker: "FINTECH / REAL-TIME",
    title: "TRADEPULSE",
    accent: "#fb7185",
    copy: "Real-time trading platform concept — live order flow, streaming market data and disciplined execution, straight from my fintech background.",
    chips: ["WEBSOCKETS", "ORDER FLOW", "MARKET DATA"],
    url: "tradepulse.app",
    fig: "FIG. 01 — LIVE EXECUTION",
    mock: "trade",
    side: "left",
  },
  {
    id: "ragdesk",
    num: "02",
    kicker: "AI / SUPPORT",
    title: "RAGDESK",
    accent: "#2dd4bf",
    copy: "Customer-support copilot — RAG over a vector knowledge base for fast, context-aware answers with sources attached and humans in the loop.",
    chips: ["RAG", "VECTOR DB", "LLM"],
    url: "ragdesk.ai",
    fig: "FIG. 02 — CONTEXT-AWARE ANSWERS",
    mock: "chat",
    side: "right",
  },
  {
    id: "flowops",
    num: "03",
    kicker: "AGENTS / AUTOMATION",
    title: "FLOWOPS",
    accent: "#a78bfa",
    copy: "Agent pipeline builder — chain LLM agents, queues and guardrails into automations that actually ship work, not demos.",
    chips: ["LLM AGENTS", "PIPELINES", "GUARDRAILS"],
    url: "flowops.dev",
    fig: "FIG. 03 — AGENT PIPELINE",
    mock: "flow",
    side: "left",
  },
  {
    id: "mindshelf",
    num: "04",
    kicker: "KNOWLEDGE / AI",
    title: "MINDSHELF",
    accent: "#4f6df5",
    copy: "AI reading companion — capture notes from every book, and let the model connect ideas across psychology, history and investing into one living library.",
    chips: ["HIGHLIGHTS", "EMBEDDINGS", "IDEA GRAPH"],
    url: "mindshelf.app",
    fig: "FIG. 04 — IDEAS, CONNECTED",
    mock: "shelf",
    side: "right",
  },
];

/* progress along the route where each chapter card lives */
const CHECKPOINTS = [0.16, 0.4, 0.64, 0.88];
const CARD_WINDOW = 0.085;

/* shared with the nav so links can jump into the pinned timeline */
export const flightStore: {
  st: ScrollTrigger | null;
  checkpoints: number[];
} = { st: null, checkpoints: CHECKPOINTS };

const BG = 0x0b0d12;

/* ---------- canvas texture helpers ---------- */

const makeGlowTexture = (inner = "255,255,255", outer = "160,190,255") => {
  const c = document.createElement("canvas");
  c.width = 128;
  c.height = 128;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, `rgba(${inner},1)`);
  g.addColorStop(0.25, `rgba(${inner},0.55)`);
  g.addColorStop(0.6, `rgba(${outer},0.14)`);
  g.addColorStop(1, `rgba(${outer},0)`);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
};

/* ---------- CSS site mockups shown inside the cards ---------- */

const CANDLES: [number, number][] = [
  [62, 1], [38, 0], [74, 1], [55, 0], [81, 1], [47, 0],
  [68, 1], [90, 1], [36, 0], [58, 1], [44, 0], [76, 1],
];
const BIDS = [82, 64, 51, 38, 26, 15];
const ASKS = [76, 60, 44, 33, 22, 12];

const MOCK_BODIES: Record<FlightChapter["mock"], React.ReactNode> = {
  trade: (
    <div className="mock-body mock-trade">
      <div className="mt-ticker">
        <span className="up">BTC 64,120 ▲</span>
        <span className="up">ETH 3,410 ▲</span>
        <span className="down">HSI 18,020 ▼</span>
      </div>
      <div className="mt-main">
        <div className="mt-candles">
          {CANDLES.map(([h, up], i) => (
            <i
              key={i}
              className={up ? "up" : "down"}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-book">
          {BIDS.map((w, i) => (
            <div className="row" key={`b${i}`}>
              <i className="bid" style={{ width: `${w}%` }} />
            </div>
          ))}
          {ASKS.map((w, i) => (
            <div className="row" key={`a${i}`}>
              <i className="ask" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  chat: (
    <div className="mock-body mock-chat">
      <div className="mc-row bot">
        <span className="mc-avatar">◆</span>
        <p>Hi! How can I help with your order?</p>
      </div>
      <div className="mc-row user">
        <p>Where is shipment #8842?</p>
      </div>
      <div className="mc-row bot">
        <span className="mc-avatar">◆</span>
        <p>
          Cleared HK customs 2h ago — ETA tomorrow 10:00.
          <em className="mc-src">▣ kb://shipping-policy</em>
        </p>
      </div>
      <div className="mc-row bot typing">
        <span className="mc-avatar">◆</span>
        <p>
          <i />
          <i />
          <i />
        </p>
      </div>
    </div>
  ),
  flow: (
    <div className="mock-body mock-flow">
      <div className="mf-lane">
        <div className="mf-node ok">
          <b>TRIGGER</b>
          <span>webhook</span>
        </div>
        <i className="mf-link" />
        <div className="mf-node ok">
          <b>AGENT</b>
          <span>llm-runner</span>
        </div>
        <i className="mf-link" />
        <div className="mf-node run">
          <b>GUARD</b>
          <span>schema check</span>
        </div>
        <i className="mf-link" />
        <div className="mf-node idle">
          <b>DEPLOY</b>
          <span>queue</span>
        </div>
      </div>
      <div className="mf-log">▸ run #4021 — 3/4 stages passed, guard validating…</div>
    </div>
  ),
  shelf: (
    <div className="mock-body mock-shelf">
      <div className="ms-note">
        <span className="ms-book">ATOMIC HABITS · NOTE 12</span>
        <p>Systems beat goals — design the environment, not the outcome.</p>
      </div>
      <div className="ms-note">
        <span className="ms-book">POOR CHARLIE'S ALMANACK · NOTE 4</span>
        <p>Invert the problem — avoid stupidity before chasing brilliance.</p>
      </div>
      <div className="ms-ai">◆ AI — 2 ideas linked: mental models × habit design</div>
    </div>
  ),
};

interface FlightPathProps {
  onActiveChapter?: (id: string) => void;
}

const FlightPath: React.FC<FlightPathProps> = ({ onActiveChapter }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const hudLegRef = useRef<HTMLSpanElement>(null);
  const hudBarRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const [fallback, setFallback] = useState(false);

  useLayoutEffect(() => {
    const wrap = wrapRef.current!;
    const canvas = canvasRef.current!;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      setFallback(true);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(BG, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(BG, 34, 170);

    const camera = new THREE.PerspectiveCamera(
      window.innerWidth < 768 ? 72 : 60,
      1,
      0.1,
      500
    );

    /* hi-res photographic textures (generated via Higgsfield) */
    const texLoader = new THREE.TextureLoader();
    const loadedTextures: THREE.Texture[] = [];
    const loadMap = (url: string) => {
      const t = texLoader.load(url);
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      loadedTextures.push(t);
      return t;
    };
    const PLANET_MAPS = {
      ember: loadMap(emberMapUrl),
      glacier: loadMap(glacierMapUrl),
      violet: loadMap(violetMapUrl),
      ocean: loadMap(oceanMapUrl),
    };
    const nebulaMap = loadMap(nebulaMapUrl);

    /* post-processing: bloom + filmic output */
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.42, // strength
      0.5, // radius
      0.7 // threshold
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    /* space lighting */
    scene.add(new THREE.AmbientLight(0x8090b0, 0.38));
    const sunLight = new THREE.DirectionalLight(0xfff2df, 2.5);
    sunLight.position.set(40, 30, 20);
    scene.add(sunLight);

    /* ---------- the route ---------- */
    const route = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 1.4, 10),
        new THREE.Vector3(5, 1.2, -12),
        new THREE.Vector3(-8, 3.2, -34),
        new THREE.Vector3(4, 0.4, -58),
        new THREE.Vector3(-5, 4.2, -82),
        new THREE.Vector3(6, 1.4, -104),
        new THREE.Vector3(-3, 3.4, -128),
        new THREE.Vector3(2, 1.6, -148),
      ],
      false,
      "catmullrom",
      0.6
    );

    const N = 700;
    const routePts = route.getSpacedPoints(N);
    const positions: number[] = [];
    const colors: number[] = [];
    const accentStops: [number, THREE.Color][] = [
      [0.0, new THREE.Color("#fb7185")],
      [0.4, new THREE.Color("#2dd4bf")],
      [0.64, new THREE.Color("#a78bfa")],
      [0.88, new THREE.Color("#4f6df5")],
      [1.0, new THREE.Color("#8fb4ff")],
    ];
    const colorAt = (t: number) => {
      for (let i = 0; i < accentStops.length - 1; i++) {
        const [t0, c0] = accentStops[i];
        const [t1, c1] = accentStops[i + 1];
        if (t >= t0 && t <= t1) {
          return c0.clone().lerp(c1, (t - t0) / (t1 - t0));
        }
      }
      return accentStops[accentStops.length - 1][1];
    };
    routePts.forEach((p, i) => {
      positions.push(p.x, p.y, p.z);
      const c = colorAt(i / N);
      colors.push(c.r, c.g, c.b);
    });

    const res = new THREE.Vector2(window.innerWidth, window.innerHeight);

    const coreGeom = new LineGeometry();
    coreGeom.setPositions(positions);
    coreGeom.setColors(colors);
    const coreMat = new LineMaterial({
      vertexColors: true,
      linewidth: window.innerWidth < 768 ? 2.6 : 3.4,
      transparent: true,
      opacity: 1,
    });
    coreMat.resolution.copy(res);
    scene.add(new Line2(coreGeom, coreMat));

    const glowGeom = new LineGeometry();
    glowGeom.setPositions(positions);
    glowGeom.setColors(colors);
    const glowMat = new LineMaterial({
      vertexColors: true,
      linewidth: window.innerWidth < 768 ? 9 : 12,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    glowMat.resolution.copy(res);
    scene.add(new Line2(glowGeom, glowMat));

    const setDraw = (t: number) => {
      const count = Math.max(2, Math.floor(t * N));
      (coreGeom as THREE.InstancedBufferGeometry).instanceCount = count;
      (glowGeom as THREE.InstancedBufferGeometry).instanceCount = count;
    };
    setDraw(0.001);

    /* faint full route hint */
    const hintGeom = new THREE.BufferGeometry().setFromPoints(routePts);
    const hintMat = new THREE.LineDashedMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.13,
      dashSize: 0.6,
      gapSize: 2.4,
    });
    const hintLine = new THREE.Line(hintGeom, hintMat);
    hintLine.computeLineDistances();
    scene.add(hintLine);

    /* ---------- planets ---------- */
    const spinners: { obj: THREE.Object3D; speed: number }[] = [];
    const place = (t: number, dx: number, dy: number, dz: number) =>
      route.getPointAt(t).add(new THREE.Vector3(dx, dy, dz));

    const mkPlanet = (
      radius: number,
      map: THREE.Texture,
      pos: THREE.Vector3,
      opts: { ring?: string; tilt?: number; spin?: number; tint?: string } = {}
    ) => {
      const group = new THREE.Group();
      group.position.copy(pos);
      group.rotation.z = opts.tilt ?? 0.25;

      const planet = new THREE.Mesh(
        new THREE.SphereGeometry(radius, 64, 48),
        new THREE.MeshStandardMaterial({
          map,
          color: opts.tint ? new THREE.Color(opts.tint) : 0xffffff,
          roughness: 1,
          metalness: 0,
        })
      );
      group.add(planet);
      spinners.push({ obj: planet, speed: opts.spin ?? 0.05 });

      if (opts.ring) {
        const mkRing = (inner: number, outer: number, opacity: number) => {
          const ring = new THREE.Mesh(
            new THREE.RingGeometry(radius * inner, radius * outer, 64),
            new THREE.MeshBasicMaterial({
              color: new THREE.Color(opts.ring),
              side: THREE.DoubleSide,
              transparent: true,
              opacity,
              depthWrite: false,
            })
          );
          ring.rotation.x = Math.PI / 2.25;
          group.add(ring);
        };
        mkRing(1.4, 1.72, 0.3);
        mkRing(1.78, 2.0, 0.16);
      }
      scene.add(group);
    };

    mkPlanet(4.4, PLANET_MAPS.ember, place(0.2, 18, 7, -14), {
      ring: "#ffb347",
      tilt: 0.35,
      spin: 0.05,
    });
    mkPlanet(3.2, PLANET_MAPS.glacier, place(0.44, -14, 7, -10), {
      tilt: -0.2,
      spin: 0.08,
    });
    mkPlanet(7, PLANET_MAPS.violet, place(0.68, 16, -3, -13), {
      ring: "#c4b0ff",
      tilt: 0.5,
      spin: 0.035,
    });
    mkPlanet(2.6, PLANET_MAPS.ocean, place(0.9, -12, 6, -10), {
      spin: 0.1,
    });
    /* tiny background worlds — reuse maps with a shifted tint */
    mkPlanet(1.4, PLANET_MAPS.ember, new THREE.Vector3(-34, 18, -70), {
      spin: 0.12,
      tint: "#ff9d9d",
    });
    mkPlanet(1.8, PLANET_MAPS.glacier, new THREE.Vector3(38, 14, -120), {
      spin: 0.09,
      tint: "#9dffcb",
    });

    /* ---------- nebulae (photographic sprite, varied rotation/tint) ---------- */
    const nebulaSprites: THREE.Sprite[] = [];
    const NEBULAE: [number, number, number, number, number, string][] = [
      // x, y, z, scale, rotation, tint — localized clouds, black sky between
      [-72, 30, -80, 52, 0.4, "#b9a4ff"],
      [64, 22, -60, 42, 2.1, "#9fb2ff"],
      [82, 34, -120, 62, 4.4, "#8ff2e4"],
      [-80, 16, -140, 56, 1.2, "#ffb08c"],
      [-52, 44, -175, 68, 3.3, "#c7b3ff"],
      [55, 30, -180, 58, 5.2, "#9fb2ff"],
      [8, 62, -150, 70, 0.9, "#a8fff0"],
    ];
    NEBULAE.forEach(([x, y, z, s, rot, tint]) => {
      const sp = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: nebulaMap,
          color: new THREE.Color(tint),
          rotation: rot,
          transparent: true,
          opacity: 0.3,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          fog: false,
        })
      );
      sp.position.set(x, y, z);
      sp.scale.setScalar(s);
      scene.add(sp);
      nebulaSprites.push(sp);
    });

    /* ---------- stars ---------- */
    const starGeom = new THREE.BufferGeometry();
    const starPos: number[] = [];
    for (let i = 0; i < 1200; i++) {
      starPos.push(
        (Math.random() - 0.5) * 240,
        (Math.random() - 0.5) * 120 + 20,
        -Math.random() * 260 + 40
      );
    }
    starGeom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starPos, 3)
    );
    const starMat = new THREE.PointsMaterial({
      color: 0xbdc9e6,
      size: 0.16,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
      fog: false,
    });
    scene.add(new THREE.Points(starGeom, starMat));

    /* ---------- asteroid field ---------- */
    const rockMat = new THREE.MeshStandardMaterial({
      color: 0x8a8f9e,
      roughness: 1,
      metalness: 0.1,
    });
    const rocks: { mesh: THREE.Mesh; ax: number; ay: number }[] = [];
    for (let i = 0; i < 34; i++) {
      const t = 0.08 + Math.random() * 0.86;
      const side = Math.random() > 0.5 ? 1 : -1;
      const off = new THREE.Vector3(
        side * (5 + Math.random() * 12),
        (Math.random() - 0.4) * 10,
        (Math.random() - 0.5) * 8
      );
      const rock = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.14 + Math.random() * 0.4, 0),
        rockMat
      );
      rock.position.copy(route.getPointAt(t).add(off));
      rock.rotation.set(Math.random() * 3, Math.random() * 3, 0);
      scene.add(rock);
      rocks.push({
        mesh: rock,
        ax: (Math.random() - 0.5) * 0.8,
        ay: (Math.random() - 0.5) * 0.8,
      });
    }

    /* ---------- destination star ---------- */
    const warmGlowTex = makeGlowTexture("255,244,214", "255,180,90");
    const destGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: warmGlowTex,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: false,
      })
    );
    destGlow.position.set(4, 4, -170);
    destGlow.scale.setScalar(34);
    scene.add(destGlow);

    /* checkpoint gates */
    const rings: THREE.Mesh[] = [];
    FLIGHT_CHAPTERS.forEach((ch, i) => {
      const t = CHECKPOINTS[i];
      const pos = route.getPointAt(t);
      const tan = route.getTangentAt(t);
      const mk = (r: number, opacity: number, scale = 1) => {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(r, 0.045, 10, 72),
          new THREE.MeshBasicMaterial({
            color: new THREE.Color(ch.accent),
            transparent: true,
            opacity,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          })
        );
        ring.position.copy(pos);
        ring.lookAt(pos.clone().add(tan));
        ring.scale.setScalar(scale);
        scene.add(ring);
        rings.push(ring);
      };
      mk(2.4, 0.85);
      mk(2.4, 0.2, 1.35);
    });

    /* comet streaks */
    const streaks: { mat: LineMaterial; phase: number }[] = [];
    const streakColors = [0xe63946, 0x4f6df5, 0xa78bfa];
    for (let s = 0; s < 3; s++) {
      const off = new THREE.Vector3(
        (Math.random() - 0.5) * 30,
        Math.random() * 9 + 4,
        0
      );
      const pts: number[] = [];
      const a = Math.random() * 0.5;
      for (let i = 0; i <= 60; i++) {
        const t = a + (i / 60) * 0.35;
        const p = route.getPointAt(Math.min(1, t));
        pts.push(p.x + off.x, p.y + off.y, p.z + off.z);
      }
      const g = new LineGeometry();
      g.setPositions(pts);
      const m = new LineMaterial({
        color: streakColors[s],
        linewidth: 1.6,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      m.resolution.copy(res);
      scene.add(new Line2(g, m));
      streaks.push({ mat: m, phase: Math.random() * Math.PI * 2 });
    }

    /* glowing ship head */
    const glowTex = makeGlowTexture();
    const head = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTex,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: 0.9,
      })
    );
    head.scale.setScalar(1.9);
    scene.add(head);

    /* ---------- scroll + render loop ---------- */
    let target = 0;
    let sp = -1; // force first render
    let active = true;
    let elapsed = 0;
    const pointer = { x: 0, y: 0 };

    const onPointer = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointer);

    const size = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      composer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      res.set(w, h);
      coreMat.resolution.copy(res);
      glowMat.resolution.copy(res);
      streaks.forEach((s) => s.mat.resolution.copy(res));
    };
    size();
    window.addEventListener("resize", size);

    const headPos = new THREE.Vector3();
    const camPos = new THREE.Vector3();
    const lookPos = new THREE.Vector3();
    const tan = new THREE.Vector3();

    const st = ScrollTrigger.create({
      trigger: wrap,
      start: "top top",
      end: "+=400%",
      pin: true,
      anticipatePin: 1,
      refreshPriority: 1, // pin must refresh before the sections below it
      onUpdate: (self) => {
        target = self.progress;
      },
      onToggle: (self) => {
        active = self.isActive;
      },
    });
    flightStore.st = st;

    let lastActiveChapter = "";

    const tick = (_t: number, deltaMS: number) => {
      if (!active && sp >= 0 && Math.abs(target - sp) < 0.0005) return;
      const dt = Math.min(deltaMS / 1000, 0.05);
      elapsed += dt;

      if (sp < 0) sp = target;
      sp += (target - sp) * (1 - Math.exp(-dt * 7));
      const p = THREE.MathUtils.clamp(sp, 0.0005, 1);

      setDraw(p);

      route.getPointAt(p, headPos);
      head.position.copy(headPos);
      head.material.opacity = 0.5 + Math.sin(elapsed * 6) * 0.15;

      route.getTangentAt(p, tan);
      camPos
        .copy(headPos)
        .addScaledVector(tan, -7.5)
        .add(new THREE.Vector3(pointer.x * 0.9, 2.3 - pointer.y * 0.6, 0));
      camera.position.lerp(camPos, prefersReduced ? 1 : 0.3);
      lookPos.copy(headPos).addScaledVector(tan, 4);
      lookPos.y += 0.6;
      camera.lookAt(lookPos);

      rings.forEach((r, i) => {
        r.rotation.z += dt * (i % 2 ? 0.5 : -0.35);
      });
      spinners.forEach((s) => {
        s.obj.rotation.y += dt * s.speed;
      });
      rocks.forEach((r) => {
        r.mesh.rotation.x += dt * r.ax;
        r.mesh.rotation.y += dt * r.ay;
      });
      streaks.forEach((s, i) => {
        s.mat.opacity =
          0.12 +
          0.18 * (0.5 + 0.5 * Math.sin(elapsed * (0.9 + i * 0.3) + s.phase));
      });
      destGlow.material.opacity = 0.85 + Math.sin(elapsed * 1.6) * 0.1;

      /* overlay cards + HUD */
      let nearest = -1;
      let nearestD = 1;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = Math.abs(sp - CHECKPOINTS[i]);
        if (d < nearestD) {
          nearestD = d;
          nearest = i;
        }
        const a = THREE.MathUtils.clamp(1 - d / CARD_WINDOW, 0, 1);
        const eased = a * a * (3 - 2 * a);
        el.style.opacity = String(eased);
        el.style.setProperty("--fc-shift", `${(1 - eased) * 34}px`);
        el.style.pointerEvents = eased > 0.5 ? "auto" : "none";
      });

      if (hudBarRef.current) {
        hudBarRef.current.style.transform = `scaleX(${sp})`;
      }

      /* touchdown: fade the world out into the page background so
         un-pinning into the next section is seamless */
      const land = THREE.MathUtils.clamp((sp - 0.92) / 0.08, 0, 1);
      const landEased = land * land * (3 - 2 * land);
      if (landingRef.current) {
        landingRef.current.style.opacity = String(landEased);
      }
      if (hudRef.current) {
        hudRef.current.style.opacity = String(1 - landEased);
      }
      if (nearest >= 0 && hudLegRef.current) {
        const ch = FLIGHT_CHAPTERS[nearest];
        const label = `LEG ${ch.num}/04 — ${ch.title}`;
        if (hudLegRef.current.textContent !== label) {
          hudLegRef.current.textContent = label;
        }
        if (active && nearestD < 0.12 && lastActiveChapter !== ch.id) {
          lastActiveChapter = ch.id;
          onActiveChapter?.(ch.id);
        }
      }

      composer.render();
    };

    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("resize", size);
      window.removeEventListener("pointermove", onPointer);
      st.kill();
      flightStore.st = null;
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const mat = mesh.material as THREE.Material & {
          map?: THREE.Texture | null;
        };
        if (mat) {
          mat.map?.dispose();
          mat.dispose();
        }
      });
      glowTex.dispose();
      warmGlowTex.dispose();
      loadedTextures.forEach((t) => t.dispose());
      composer.dispose();
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`flight ${fallback ? "flight-fallback" : ""}`}
      id="journey"
      ref={wrapRef}
    >
      <canvas className="flight-canvas" ref={canvasRef} />

      {FLIGHT_CHAPTERS.map((ch, i) => (
        <article
          className={`flight-card side-${ch.side}`}
          key={ch.id}
          id={ch.id}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          style={{ "--accent": ch.accent } as React.CSSProperties}
        >
          <header className="fc-head">
            <span className="fc-num">{ch.num}</span>
            <div>
              <span className="fc-kicker">
                <span className="dot">◆</span> {ch.kicker}
              </span>
              <h2 className="fc-title">{ch.title}</h2>
            </div>
          </header>

          <figure className="fc-mock">
            <div className="mock-bar">
              <i />
              <i />
              <i />
              <span className="mock-url">{ch.url}</span>
            </div>
            {MOCK_BODIES[ch.mock]}
            <figcaption>{ch.fig}</figcaption>
          </figure>

          <p className="fc-copy">{ch.copy}</p>
          <ul className="fc-chips">
            {ch.chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </article>
      ))}

      <div className="flight-landing" ref={landingRef} aria-hidden="true" />

      <div className="flight-hud" ref={hudRef} aria-hidden="true">
        <span className="hud-leg" ref={hudLegRef}>
          LEG 01/04 — TRADEPULSE
        </span>
        <div className="hud-bar">
          <div className="hud-bar-fill" ref={hudBarRef} />
        </div>
        <span className="hud-hint">KEEP SCROLLING — FOLLOW THE LINE</span>
      </div>
    </div>
  );
};

export default FlightPath;
