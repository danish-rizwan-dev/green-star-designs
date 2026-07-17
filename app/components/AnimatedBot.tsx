"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import BotChat from "./BotChat";

export default function AnimatedBot() {
  const botRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const dirRef = useRef(1);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const startPosRef = useRef({ x: 0, y: 0 });
  const badgeRef = useRef<HTMLDivElement>(null);
  const dockedRef = useRef(false);
  const chatOpenRef = useRef(false);
  const thinkingTargetRef = useRef<{ x: number; y: number } | null>(null);
  const botThinkingRef = useRef(false);
  const [dragging, setDragging] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [botThinking, setBotThinking] = useState(false);
  const [activated, setActivated] = useState(false);
  const activatedRef = useRef(false);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const bot = botRef.current;
    if (!bot) return;
    movedRef.current = false;
    startPosRef.current = { x: e.clientX, y: e.clientY };
    draggingRef.current = true;
    setDragging(true);
    cursorRef.current = { x: e.clientX, y: e.clientY };
    posRef.current = { x: e.clientX, y: e.clientY };
    bot.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - startPosRef.current.x;
    const dy = e.clientY - startPosRef.current.y;
    if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
      movedRef.current = true;
    }
    cursorRef.current = { x: e.clientX, y: e.clientY };
    posRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    draggingRef.current = false;
    setDragging(false);
    const bot = botRef.current;
    if (bot) bot.releasePointerCapture(e.pointerId);

    if (movedRef.current) {
      const dx = posRef.current.x - (window.innerWidth - 90);
      const dy = posRef.current.y - (window.innerHeight - 90);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        setActivated(false);
        activatedRef.current = false;
      }
    } else {
      if (!activatedRef.current) {
        setActivated(true);
        activatedRef.current = true;
      }
      setChatOpen(true);
      chatOpenRef.current = true;
    }
  }, []);

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    posRef.current = { x: w - 80, y: h - 80 };
    const dockX = w - 90;
    const dockY = h - 90;
    const badgeX = w - 100;
    const badgeY = h - 60;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (draggingRef.current) return;
      if ("touches" in e) {
        const t = e.touches[0];
        if (t) cursorRef.current = { x: t.clientX, y: t.clientY };
      } else {
        cursorRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });

    const bot = botRef.current;

    const animate = () => {
      const p = posRef.current;
      const c = cursorRef.current;

      const cToBadge = Math.sqrt((c.x - badgeX) ** 2 + (c.y - badgeY) ** 2);
      dockedRef.current = cToBadge < 150;

      const dockDist = Math.sqrt((p.x - dockX) ** 2 + (p.y - dockY) ** 2);

      if (!draggingRef.current) {
        if (!activatedRef.current) {
          const speed = Math.min(1, dockDist / 100) * 10;
          if (dockDist > 5) {
            p.x += ((dockX - p.x) / dockDist) * speed;
            p.y += ((dockY - p.y) / dockDist) * speed;
          }
          dirRef.current = 1;
        } else {
          let moveX = 0;
          let moveY = 0;

          if (botThinkingRef.current) {
            if (!thinkingTargetRef.current) {
              const w = window.innerWidth;
              const h = window.innerHeight;
              thinkingTargetRef.current = { x: w / 2 + 140, y: h / 2 + 180 };
            }
            const target = thinkingTargetRef.current;
            const tdx = target.x - p.x;
            const tdy = target.y - p.y;
            const tDist = Math.sqrt(tdx * tdx + tdy * tdy);
            if (tDist > 10) {
              const speed = Math.min(1, tDist / 80) * 8;
              moveX = (tdx / tDist) * speed;
              moveY = (tdy / tDist) * speed;
            }
            dirRef.current = target.x - p.x > 0 ? 1 : -1;
          } else if (dockedRef.current) {
            thinkingTargetRef.current = null;
            if (dockDist > 15) {
              const speed = Math.min(1, dockDist / 100) * 10;
              moveX = ((dockX - p.x) / dockDist) * speed;
              moveY = ((dockY - p.y) / dockDist) * speed;
            }
            dirRef.current = dockX - p.x > 0 ? 1 : -1;
          } else {
            thinkingTargetRef.current = null;
            const dx = c.x - p.x;
            const dy = c.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const approachDist = 45;
            const minDist = 160;
            const maxDist = 300;

            if (dist < approachDist) {
              // freeze
            } else if (dist < minDist) {
              const force = (minDist - dist) / minDist;
              moveX = -(dx / dist) * force * 6;
              moveY = -(dy / dist) * force * 6;
              dirRef.current = dx > 0 ? -1 : 1;
            } else if (dist > maxDist) {
              const force = (dist - maxDist) / maxDist;
              moveX = (dx / dist) * force * 2;
              moveY = (dy / dist) * force * 2;
              dirRef.current = dx > 0 ? 1 : -1;
            } else {
              moveX += (Math.random() - 0.5) * 0.15;
              moveY += (Math.random() - 0.5) * 0.15;
            }
          }

          p.x += moveX;
          p.y += moveY;
        }
      }

      p.x = Math.max(60, Math.min(window.innerWidth - 60, p.x));
      p.y = Math.max(80, Math.min(window.innerHeight - 80, p.y));

      if (bot) {
        bot.style.left = `${p.x}px`;
        bot.style.top = `${p.y}px`;
        bot.style.transform = `translate(-50%, -50%)`;

        const robotVisual = bot.querySelector(".robot-visual") as HTMLElement;
        if (robotVisual) robotVisual.style.transform = `scaleX(${dirRef.current})`;

        const pupils = bot.querySelectorAll(".pupil");
        const eDX = ((c.x - p.x) / 25) * dirRef.current;
        const eDY = (c.y - p.y) / 25;
        const eX = Math.max(-5, Math.min(5, eDX));
        const eY = Math.max(-3, Math.min(3, eDY));
        pupils.forEach((el) => {
          (el as HTMLElement).style.transform = `translate(${eX}px, ${eY}px)`;
        });

        const badge = badgeRef.current;
        if (badge) {
          if (chatOpenRef.current) {
            badge.style.display = "none";
          } else {
            badge.style.display = "flex";
            if (dockedRef.current) {
              badge.style.left = `${p.x}px`;
              badge.style.top = `${p.y - 46}px`;
              badge.style.transform = "translate(-50%, 0)";
              badge.style.bottom = "auto";
              badge.style.right = "auto";
              badge.style.fontSize = "9px";
              badge.style.padding = "3px 8px";
              badge.style.gap = "3px";
            } else {
              badge.style.left = "auto";
              badge.style.top = "auto";
              badge.style.bottom = "20px";
              badge.style.right = "20px";
              badge.style.transform = "none";
              badge.style.fontSize = "12px";
              badge.style.padding = "8px 14px";
              badge.style.gap = "6px";
            }
          }
        }

        const thought = bot.querySelector(".thought-bubble") as HTMLElement;
        if (thought) {
          thought.style.display = dockedRef.current && !chatOpenRef.current ? "flex" : "none";
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);

    };
  }, []);

  return (
    <>
      <div
        ref={botRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="fixed z-[9996] select-none touch-none"
        style={{ left: -100, top: -100, cursor: dragging ? "grabbing" : "grab" }}
      >
        <div className="absolute -inset-8 rounded-full" />
        <div className={`relative ${botThinking ? "animate-bot-think" : "animate-bot-float"} ${dragging ? "scale-110" : ""} transition-transform duration-200`}>
          <div className="robot-visual relative w-14 h-[72px]">
            {/* Thinking dots — shows when chat is open */}
            {chatOpen && (
              <div className="absolute -right-5 top-0.5 flex items-end gap-0.5">
                <span className="w-1 h-1 rounded-full bg-gold-400 animate-bounce" style={{ animationDelay: "0ms", animationDuration: "0.8s" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-bounce" style={{ animationDelay: "200ms", animationDuration: "0.8s" }} />
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-bounce" style={{ animationDelay: "400ms", animationDuration: "0.8s" }} />
              </div>
            )}
            {/* Thought bubble */}
            <div className="thought-bubble absolute -right-7 top-0 flex items-end gap-0.5">
              <span className="w-1 h-1 rounded-full bg-gold-400/60 animate-bounce" style={{ animationDelay: "0ms", animationDuration: "1.2s" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400/70 animate-bounce" style={{ animationDelay: "200ms", animationDuration: "1.2s" }} />
              <span className="w-2 h-2 rounded-full bg-gold-500/80 animate-bounce" style={{ animationDelay: "400ms", animationDuration: "1.2s" }} />
            </div>

            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <div className="w-[3px] h-2.5 bg-gold-500 mx-auto rounded-full" />
              <div className={`w-2 h-2 rounded-full mx-auto -mt-[2px] ${dragging ? "bg-pink-400" : "bg-green-400"} animate-pulse shadow-lg shadow-gold-500/40`} />
            </div>

            <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-b from-navy-700 to-navy-800 border-2 border-gold-500/40 shadow-xl shadow-gold-500/10 flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
              <div className="flex gap-2.5">
                <div className="w-3 h-[14px] bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="pupil w-[7px] h-[7px] bg-navy-900 rounded-full" />
                </div>
                <div className="w-3 h-[14px] bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="pupil w-[7px] h-[7px] bg-navy-900 rounded-full" />
                </div>
              </div>
              <div className="absolute bottom-[6px] left-1 w-2 h-[5px] bg-pink-400/30 rounded-full" />
              <div className="absolute bottom-[6px] right-1 w-2 h-[5px] bg-pink-400/30 rounded-full" />
              <div className="absolute bottom-[7px] w-[9px] h-[5px] border-b-[2px] border-gold-500/60 rounded-full" />
            </div>

            <div className="w-[34px] h-5 mx-auto -mt-[3px] rounded-b-[10px] bg-gradient-to-b from-navy-700 to-navy-800 border-2 border-gold-500/30 border-t-0 flex items-center justify-center gap-[3px]">
              <div className="w-[3px] h-[3px] rounded-full bg-green-400 animate-pulse" />
              <div className="w-[3px] h-[3px] rounded-full bg-gold-500/50" />
              <div className="w-[3px] h-[3px] rounded-full bg-gold-500/50" />
            </div>

            <div className="absolute -left-[6px] top-[18px] w-[10px] h-[18px] rounded-full bg-gradient-to-b from-navy-600 to-navy-700 border border-gold-500/20 origin-top animate-bot-arm" />
            <div className="absolute -right-[6px] top-[18px] w-[10px] h-[18px] rounded-full bg-gradient-to-b from-navy-600 to-navy-700 border border-gold-500/20 origin-top animate-bot-arm-reverse" />
          </div>
        </div>
      </div>

      <div
        ref={badgeRef}
        onClick={() => {
          if (!activatedRef.current) {
            setActivated(true);
            activatedRef.current = true;
          }
          setChatOpen(true);
          chatOpenRef.current = true;
        }}
        className="fixed z-[9997] flex items-center gap-1.5 bg-gold-500/80 backdrop-blur-md text-navy-900 text-xs font-bold px-3.5 py-2 rounded-full shadow-lg shadow-gold-500/20 cursor-pointer hover:scale-105 transition-transform duration-200 select-none border border-white/20"
        style={{ bottom: "20px", right: "20px" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-navy-900 animate-pulse shadow" />
        <span>Chat with us</span>
      </div>

      <AnimatePresence>
        {chatOpen && <BotChat onClose={() => { setChatOpen(false); chatOpenRef.current = false; }} onTypingChange={(v) => { setBotThinking(v); botThinkingRef.current = v; }} />}
      </AnimatePresence>
    </>
  );
}
