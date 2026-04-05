import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";

const ErrorPage = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  // ── Particle canvas ──────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const TOTAL = 120;
    const particles = Array.from({ length: TOTAL }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.7 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      // draw faint connection lines
      for (let i = 0; i < TOTAL; i++) {
        for (let j = i + 1; j < TOTAL; j++) {
          const dist = Math.hypot(
            particles[i].x - particles[j].x,
            particles[i].y - particles[j].y,
          );
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(168,85,247,${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] flex items-center justify-center">
      {/* ── Particle canvas ── */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* ── Radial glow blobs ── */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-[120px] z-0" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-indigo-600/20 blur-[120px] z-0" />
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-violet-500/10 blur-[100px] z-0" />

      {/* ── Main card ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 py-16 mx-4"
        style={{ maxWidth: "680px", width: "100%" }}
      >
        {/* floating books row */}
        <div className="flex gap-4 mb-8 select-none" aria-hidden="true">
          {["📖", "📚", "📕"].map((emoji, i) => (
            <span
              key={i}
              className="text-3xl"
              style={{
                animation: `floatBook 3s ease-in-out ${i * 0.6}s infinite`,
                display: "inline-block",
                filter: "drop-shadow(0 0 8px rgba(168,85,247,0.8))",
              }}
            >
              {emoji}
            </span>
          ))}
        </div>

        {/* ── Giant 404 ── */}
        <div className="relative mb-2 leading-none select-none">
          {/* glow layer */}
          <span
            className="absolute inset-0 text-[clamp(120px,20vw,200px)] font-black text-center w-full"
            style={{
              background: "linear-gradient(135deg,#a855f7,#6366f1,#a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "blur(28px)",
              opacity: 0.5,
            }}
          >
            404
          </span>
          {/* sharp layer */}
          <span
            className="relative text-[clamp(120px,20vw,200px)] font-black"
            style={{
              background:
                "linear-gradient(135deg,#e879f9 0%,#a855f7 40%,#818cf8 70%,#6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-4px",
            }}
          >
            404
          </span>
        </div>

        {/* ── Thin divider line ── */}
        <div
          className="w-40 h-px mb-8"
          style={{
            background:
              "linear-gradient(90deg,transparent,#a855f7,transparent)",
          }}
        />

        {/* ── Headline ── */}
        <h1
          className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
          style={{
            background: "linear-gradient(135deg,#f0abfc,#c4b5fd,#a5b4fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Page Not Found
        </h1>

        {/* ── Subtext ── */}
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
          Looks like this page took an unexpected detour. The chapter
          you&apos;re looking for doesn&apos;t exist — but there are plenty of
          great stories waiting for you.
        </p>

        {/* ── Buttons ── */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          {/* primary */}
          <button
            onClick={() => navigate("/")}
            className="relative group overflow-hidden px-8 py-3.5 rounded-xl font-semibold text-white text-sm tracking-wide cursor-pointer"
            style={{
              background: "linear-gradient(135deg,#a855f7,#6366f1)",
              boxShadow: "0 0 24px rgba(168,85,247,0.45)",
            }}
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg,#c026d3,#7c3aed)",
              }}
            />
            <span className="relative flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7m-9 5v6m0 0H7m4 0h2"
                />
              </svg>
              Back to Home
            </span>
          </button>

          {/* secondary */}
          <button
            onClick={() => navigate(-1)}
            className="relative px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide cursor-pointer transition-all duration-300 text-slate-300 hover:text-white"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(168,85,247,0.35)",
              boxShadow: "inset 0 0 16px rgba(168,85,247,0.06)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(168,85,247,0.7)";
              e.currentTarget.style.boxShadow =
                "0 0 18px rgba(168,85,247,0.25), inset 0 0 16px rgba(168,85,247,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(168,85,247,0.35)";
              e.currentTarget.style.boxShadow =
                "inset 0 0 16px rgba(168,85,247,0.06)";
            }}
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Go Back
            </span>
          </button>
        </div>

        {/* ── Bottom label ── */}
        <p className="mt-12 text-xs text-slate-600 tracking-widest uppercase">
          Book Vibe &mdash; Error 404
        </p>
      </div>

      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes floatBook {
          0%, 100% { transform: translateY(0px) rotate(-4deg); }
          50%       { transform: translateY(-18px) rotate(4deg); }
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;
