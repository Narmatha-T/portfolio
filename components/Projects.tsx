"use client";

import { ChevronDown, ChevronUp, ExternalLink, LayoutGrid, LayoutList } from "lucide-react";
import { useState } from "react";
import { PROJECTS, type Project } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import { i18n } from "@/lib/i18n";

const ANIM_IDS = new Set(["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]);

// ── Animation content (fills its container absolutely) ───────────────────────
function ProjectAnimation({ id }: { id: string }) {
  if (id === "01") return (
    <div className="absolute inset-0 overflow-hidden flex items-center justify-center py-2 px-3"
      style={{ background: "rgba(245,245,247,0.04)" }}>
      <style>{`
        @keyframes zt_enter    { 0%{transform:translateY(24px);opacity:0;} 10%{transform:translateY(0);opacity:1;} 85%{transform:translateY(0);opacity:1;} 95%,100%{transform:translateY(-16px);opacity:0;} }
        @keyframes zt_thumb    { 0%,20%{transform:translateX(0px);} 22%{transform:translateX(3px);} 55%{transform:translateX(90px);} 85%{transform:translateX(90px);} 92%,100%{transform:translateX(90px);} }
        @keyframes zt_thumbcol { 0%,52%{background:#111111;} 58%,100%{background:#9ca3af;} }
        @keyframes zt_arrow    { 0%,20%{opacity:1;} 48%,100%{opacity:0;} }
        @keyframes zt_check    { 0%,54%{opacity:0;transform:scale(0.6);} 61%,85%{opacity:1;transform:scale(1);} 92%,100%{opacity:0;} }
        @keyframes zt_lbl      { 0%,20%{opacity:0.7;} 42%,100%{opacity:0;} }
        @keyframes zt_used_lbl { 0%,56%{opacity:0;} 64%,85%{opacity:1;} 92%,100%{opacity:0;} }
        @keyframes zt_track    { 0%,54%{background:rgb(229,231,235);} 60%,100%{background:rgb(243,244,246);} }
      `}</style>

      {/* Phone-like ticket card */}
      <div className="w-[148px] rounded-[10px] overflow-hidden shadow-2xl border border-zinc-200/60"
        style={{ background: "#ffffff", animation: "zt_enter 9s ease-in-out infinite" }}>

        {/* Event banner */}
        <div className="h-[18px] flex items-center justify-center relative overflow-hidden px-2"
          style={{ background: "linear-gradient(135deg,#2d0057 0%,#6b21a8 60%,#9333ea 100%)" }}>
          <span className="text-[5px] font-bold text-white text-center leading-tight font-mono">「TWICE ＜THIS IS FOR＞ WORLD TOUR IN JAPAN」POPUP STORE - 大阪 -</span>
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "4px 4px" }} />
        </div>

        {/* Event key visual */}
        <div className="relative h-[14px] overflow-hidden border-b border-zinc-200/60">
          <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,#ff4e8c 0%,#ff8fab 35%,#c084fc 65%,#818cf8 100%)" }} />
          <div className="absolute w-[24px] h-[24px] rounded-full opacity-30" style={{ background: "radial-gradient(circle,#fff 0%,transparent 70%)", top: "-8px", left: "12px" }} />
          <div className="absolute w-[18px] h-[18px] rounded-full opacity-20" style={{ background: "radial-gradient(circle,#fff 0%,transparent 70%)", top: "-4px", right: "24px" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[7px] font-black text-white tracking-[0.25em]" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.35)" }}>TWICE</span>
          </div>
          <span className="absolute text-white/50 text-[5px]" style={{ top: "1px", left: "8px" }}>✦</span>
          <span className="absolute text-white/40 text-[4px]" style={{ bottom: "1px", right: "10px" }}>✦</span>
        </div>

        {/* Ticket body */}
        <div className="px-3 pt-[3px] pb-[4px]" style={{ background: "#ffffff" }}>

          {/* ご案内時間 */}
          <p className="text-center text-[6px] text-zinc-400 tracking-wide leading-none mb-[2px]">ご案内時間</p>
          <p className="text-center text-[9px] font-bold text-zinc-800 leading-none mb-[3px]">14:00 ～ 15:15</p>

          {/* Divider */}
          <div className="border-t border-dashed border-zinc-200 mb-[3px]" />

          {/* 整理券番号 */}
          <p className="text-center text-[6px] text-zinc-400 tracking-wide leading-none mb-[1px]">整理券番号</p>
          <p className="text-center font-black text-zinc-900 leading-none mb-[4px]"
            style={{ fontSize: "20px", fontFamily: "monospace" }}>
            A-011
          </p>

          {/* ── Swipe track ── */}
          <div className="relative h-[22px] rounded-full overflow-hidden flex items-center px-[3px]"
            style={{ animation: "zt_track 9s ease-in-out infinite" }}>

            {/* Sliding thumb */}
            <div className="absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full flex items-center justify-center shadow-md z-10"
              style={{ animation: "zt_thumb 9s cubic-bezier(0.4,0,0.2,1) infinite, zt_thumbcol 9s ease-in-out infinite" }}>
              {/* Arrow (before swipe) */}
              <span className="absolute text-white text-[11px] font-bold leading-none select-none"
                style={{ animation: "zt_arrow 9s ease-in-out infinite" }}>→</span>
              {/* Check (after swipe) */}
              <span className="absolute text-white text-[10px] font-bold leading-none select-none opacity-0"
                style={{ animation: "zt_check 9s ease-in-out infinite" }}>✓</span>
            </div>

            {/* "利用する" label — fades as thumb moves */}
            <span className="absolute inset-0 flex items-center justify-center text-[8.5px] font-semibold text-zinc-500 pointer-events-none select-none"
              style={{ animation: "zt_lbl 9s ease-in-out infinite" }}>
              利用する
            </span>

            {/* "利用済みです" — left-aligned so it doesn't collide with thumb at right end */}
            <span className="absolute inset-0 flex items-center justify-center text-[7.5px] font-medium text-zinc-400 pointer-events-none select-none opacity-0 whitespace-nowrap"
              style={{ animation: "zt_used_lbl 9s ease-in-out infinite" }}>
              利用済みです
            </span>
          </div>

        </div>
      </div>
    </div>
  );

  if (id === "02") return (
    <div className="absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes plate_sweep {
          0%    { top: -4px; opacity: 0; }
          3%    { opacity: 1; }
          14%   { top: 100%; opacity: 0; }
          100%  { top: 100%; opacity: 0; }
        }
        @keyframes plate_detect {
          0%,1%   { border-color: rgba(74,222,128,0); }
          5%      { border-color: rgba(74,222,128,0.9); }
          9%      { border-color: rgba(74,222,128,0.4); }
          13%     { border-color: rgba(74,222,128,0.9); }
          18%,100%{ border-color: rgba(74,222,128,0); }
        }
        @keyframes bbox_1 {
          0%,12%  { border-color: rgba(74,222,128,0); }
          17%,25% { border-color: rgba(74,222,128,0.95); }
          30%,100%{ border-color: rgba(74,222,128,0); }
        }
        @keyframes bbox_2 {
          0%,25%  { border-color: rgba(74,222,128,0); }
          30%,38% { border-color: rgba(74,222,128,0.95); }
          43%,100%{ border-color: rgba(74,222,128,0); }
        }
        @keyframes bbox_3 {
          0%,38%  { border-color: rgba(74,222,128,0); }
          43%,51% { border-color: rgba(74,222,128,0.95); }
          56%,100%{ border-color: rgba(74,222,128,0); }
        }
        @keyframes bbox_4 {
          0%,51%  { border-color: rgba(74,222,128,0); }
          56%,62% { border-color: rgba(74,222,128,0.95); }
          67%,100%{ border-color: rgba(74,222,128,0); }
        }
        @keyframes ocr_1 {
          0%,11%  { opacity:0; transform:translateX(-5px); }
          18%,96% { opacity:1; transform:translateX(0); }
          100%    { opacity:0; }
        }
        @keyframes ocr_2 {
          0%,24%  { opacity:0; transform:translateX(-5px); }
          31%,96% { opacity:1; transform:translateX(0); }
          100%    { opacity:0; }
        }
        @keyframes ocr_3 {
          0%,37%  { opacity:0; transform:translateX(-5px); }
          44%,96% { opacity:1; transform:translateX(0); }
          100%    { opacity:0; }
        }
        @keyframes ocr_4 {
          0%,50%  { opacity:0; transform:translateX(-5px); }
          57%,96% { opacity:1; transform:translateX(0); }
          100%    { opacity:0; }
        }
        @keyframes verify_pop {
          0%,63%  { opacity:0; transform:scale(0.88); }
          68%,94% { opacity:1; transform:scale(1); }
          100%    { opacity:0; transform:scale(0.88); }
        }
      `}</style>

      <div className="absolute inset-0 flex items-center justify-center gap-8 px-8">

        {/* Plate */}
        <div className="relative flex-shrink-0">
          {/* Plate detection scan line — sweeps the whole plate first */}
          <div className="absolute inset-0 overflow-hidden rounded-[3px] pointer-events-none z-10">
            <div
              className="absolute left-0 right-0 h-[4px] bg-gradient-to-b from-green-400/0 via-green-400/70 to-green-400/0"
              style={{ animation: "plate_sweep 8s linear infinite" }}
            />
          </div>

          {/* Corner bracket detection markers */}
          <span className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-transparent z-10" style={{ animation: "plate_detect 8s linear infinite 0s" }} />
          <span className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-transparent z-10" style={{ animation: "plate_detect 8s linear infinite 0.15s" }} />
          <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-transparent z-10" style={{ animation: "plate_detect 8s linear infinite 0.3s" }} />
          <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-transparent z-10" style={{ animation: "plate_detect 8s linear infinite 0.45s" }} />

          {/* Realistic plate */}
          <div className="relative w-[160px] rounded-[3px] bg-white border-2 border-green-800/80 px-3 pt-2 pb-2.5 shadow-sm">
            <div className="absolute top-1.5 left-2.5 w-1.5 h-1.5 rounded-full border border-zinc-400/60 bg-zinc-200/60" />
            <div className="absolute top-1.5 right-2.5 w-1.5 h-1.5 rounded-full border border-zinc-400/60 bg-zinc-200/60" />

            {/* Top row */}
            <div className="flex items-center justify-center gap-2 mb-0.5">
              <span className="relative inline-flex text-[12px] font-bold text-green-800 tracking-tight">
                東京
                <span className="absolute -inset-x-0.5 -inset-y-0.5 border border-transparent rounded-[1px]" style={{ animation: "bbox_1 8s linear infinite" }} />
              </span>
              <span className="relative inline-flex text-[12px] font-bold text-green-800 tracking-tight">
                300
                <span className="absolute -inset-x-0.5 -inset-y-0.5 border border-transparent rounded-[1px]" style={{ animation: "bbox_2 8s linear infinite" }} />
              </span>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-center gap-2">
              <span className="relative inline-flex text-[11px] font-bold text-green-800">
                ほ
                <span className="absolute -inset-x-0.5 -inset-y-0.5 border border-transparent rounded-[1px]" style={{ animation: "bbox_3 8s linear infinite" }} />
              </span>
              <span className="relative inline-flex text-[20px] font-black text-green-800 leading-none tracking-widest">
                47-35
                <span className="absolute -inset-x-0.5 -inset-y-0.5 border border-transparent rounded-[1px]" style={{ animation: "bbox_4 8s linear infinite" }} />
              </span>
            </div>
          </div>
        </div>

        {/* OCR readout */}
        <div className="flex flex-col gap-1.5">
          {([
            { anim: "ocr_1", label: "東京" },
            { anim: "ocr_2", label: "300" },
            { anim: "ocr_3", label: "ほ" },
            { anim: "ocr_4", label: "47-35" },
          ] as const).map(({ anim, label }, i) => (
            <div key={i} className="flex items-center gap-2 opacity-0" style={{ animation: `${anim} 8s linear infinite` }}>
              <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-300 w-3">0{i + 1}</span>
              <span className="text-[13px] font-mono font-bold text-green-500 dark:text-green-200">{label}</span>
              <span className="text-[10px] text-green-400">✓</span>
            </div>
          ))}
        </div>
      </div>

      {/* Verified badge */}
      <div className="absolute bottom-2 right-5 flex items-center gap-1 bg-green-500/10 border border-green-500/40 px-2 py-0.5 rounded-sm"
        style={{ animation: "verify_pop 8s linear infinite" }}>
        <span className="text-[10px] font-mono font-bold text-green-500 dark:text-green-300 tracking-wider">✓ PLATE VERIFIED</span>
      </div>
    </div>
  );

  if (id === "03") return (
    <div className="absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes ws  { 0%{top:-4px;opacity:0;} 3%{opacity:1;} 14%{top:100%;opacity:0;} 100%{top:100%;opacity:0;} }
        @keyframes wd  { 0%,10%{border-color:rgba(234,179,8,0);} 15%,85%{border-color:rgba(234,179,8,0.85);} 90%,100%{border-color:rgba(234,179,8,0);} }
        @keyframes wc1 { 0%,18%{opacity:0;transform:translateX(-5px);} 25%,90%{opacity:1;transform:translateX(0);} 96%,100%{opacity:0;} }
        @keyframes wc2 { 0%,30%{opacity:0;transform:translateX(-5px);} 37%,90%{opacity:1;transform:translateX(0);} 96%,100%{opacity:0;} }
        @keyframes wc3 { 0%,42%{opacity:0;transform:translateX(-5px);} 49%,90%{opacity:1;transform:translateX(0);} 96%,100%{opacity:0;} }
        @keyframes wb  { 0%,68%{opacity:0;transform:scale(0.88);} 74%,93%{opacity:1;transform:scale(1);} 100%{opacity:0;transform:scale(0.88);} }
      `}</style>

      <div className="absolute inset-0 flex items-center justify-center gap-8 px-8">

        {/* Wall patch */}
        <div className="relative flex-shrink-0">
          <span className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-transparent z-10" style={{ animation: "wd 7s linear infinite 0s" }} />
          <span className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-transparent z-10" style={{ animation: "wd 7s linear infinite 0.15s" }} />
          <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-transparent z-10" style={{ animation: "wd 7s linear infinite 0.3s" }} />
          <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-transparent z-10" style={{ animation: "wd 7s linear infinite 0.45s" }} />

          <div className="relative w-[64px] h-[64px] rounded-sm overflow-hidden border border-zinc-300/40 dark:border-zinc-700/40"
            style={{ background: "repeating-linear-gradient(0deg,rgba(161,161,170,0.09) 0px,rgba(161,161,170,0.09) 2px,transparent 2px,transparent 8px),repeating-linear-gradient(90deg,rgba(161,161,170,0.05) 0px,rgba(161,161,170,0.05) 1px,transparent 1px,transparent 12px),rgba(161,161,170,0.04)" }}>
            {/* Simulated degradation marks */}
            <div className="absolute top-2 left-3 w-2 h-1 bg-zinc-400/25 dark:bg-zinc-500/25 rounded-sm" />
            <div className="absolute top-5 left-8 w-3 h-1 bg-zinc-400/18 dark:bg-zinc-500/18 rounded-sm rotate-12" />
            <div className="absolute top-8 left-2 w-1.5 h-2 bg-zinc-400/22 dark:bg-zinc-500/22 rounded-sm" />
            <div className="absolute bottom-4 right-3 w-2 h-1.5 bg-zinc-400/18 dark:bg-zinc-500/18 rounded-sm" />
            <div className="absolute bottom-2 left-5 w-3 h-0.5 bg-zinc-400/22 dark:bg-zinc-500/22" />
            {/* Scan line */}
            <div className="absolute inset-0 overflow-hidden rounded-sm pointer-events-none">
              <div className="absolute left-0 right-0 h-[3px] bg-gradient-to-b from-amber-400/0 via-amber-400/70 to-amber-400/0"
                style={{ animation: "ws 7s linear infinite" }} />
            </div>
          </div>
        </div>

        {/* Classification readout */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 opacity-0" style={{ animation: "wc1 7s linear infinite" }}>
            <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-300 w-9 uppercase">Type</span>
            <span className="text-[13px] font-mono font-bold text-amber-400 dark:text-amber-200">SPRAYED</span>
          </div>
          <div className="flex items-center gap-2 opacity-0" style={{ animation: "wc2 7s linear infinite" }}>
            <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-300 w-9 uppercase">Level</span>
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map(l => (
                <div key={l} className={`w-[7px] h-2.5 rounded-[1px] ${l <= 3 ? "bg-amber-500/80" : "border border-amber-500/35"}`} />
              ))}
              <span className="text-[12px] font-mono font-bold text-amber-400 dark:text-amber-200 ml-1.5">3/5</span>
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-0" style={{ animation: "wc3 7s linear infinite" }}>
            <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-300 w-9 uppercase">Conf</span>
            <span className="text-[13px] font-mono font-bold text-amber-400 dark:text-amber-200">94.2%</span>
            <span className="text-[10px] text-amber-400">✓</span>
          </div>
        </div>
      </div>

      {/* Classified badge */}
      <div className="absolute bottom-2 right-5 flex items-center gap-1 bg-amber-500/10 border border-amber-500/40 px-2 py-0.5 rounded-sm"
        style={{ animation: "wb 7s linear infinite" }}>
        <span className="text-[10px] font-mono font-bold text-amber-400 dark:text-amber-200 tracking-wider">✓ CLASSIFIED</span>
      </div>
    </div>
  );

  if (id === "07") return (
    <div className="absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes fa_sweep { 0%{top:-4px;opacity:0;} 3%{opacity:1;} 18%{top:100%;opacity:0;} 100%{top:100%;opacity:0;} }
        @keyframes fa_bbox  { 0%,5%{border-color:rgba(34,197,94,0);} 15%,88%{border-color:rgba(34,197,94,0.85);} 94%,100%{border-color:rgba(34,197,94,0);} }
        @keyframes fa_dot   { 0%,20%{opacity:0;transform:scale(0);} 28%,88%{opacity:1;transform:scale(1);} 94%,100%{opacity:0;transform:scale(0);} }
        @keyframes fa_info  { 0%,25%{opacity:0;} 35%,88%{opacity:1;} 94%,100%{opacity:0;} }
        @keyframes fa_bar   { 0%,30%{width:0%;} 58%,88%{width:99.47%;} 94%,100%{width:0%;} }
        @keyframes fa_badge { 0%,62%{opacity:0;transform:scale(0.88);} 70%,88%{opacity:1;transform:scale(1);} 94%,100%{opacity:0;transform:scale(0.88);} }
      `}</style>

      <div className="absolute inset-0 flex items-center justify-center gap-6 px-6">

        {/* Face detection viewport */}
        <div className="relative flex-shrink-0 w-[80px] h-[80px]">
          {/* Corner brackets */}
          <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-transparent z-10" style={{ animation: "fa_bbox 8s linear infinite 0s" }} />
          <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-transparent z-10" style={{ animation: "fa_bbox 8s linear infinite 0.1s" }} />
          <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-transparent z-10" style={{ animation: "fa_bbox 8s linear infinite 0.2s" }} />
          <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-transparent z-10" style={{ animation: "fa_bbox 8s linear infinite 0.3s" }} />
          {/* Scan line */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-0 right-0 h-[3px] bg-gradient-to-b from-green-400/0 via-green-400/65 to-green-400/0"
              style={{ animation: "fa_sweep 8s linear infinite" }} />
          </div>
          {/* Face silhouette — SVG */}
          <svg viewBox="0 0 80 80" className="absolute inset-0 w-full h-full text-zinc-400/40 dark:text-zinc-500/40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            {/* Head */}
            <ellipse cx="40" cy="43" rx="21" ry="27" strokeWidth="1.2" />
            {/* Ears */}
            <path d="M19 39 Q15.5 43.5 19 49" strokeWidth="1" />
            <path d="M61 39 Q64.5 43.5 61 49" strokeWidth="1" />
            {/* Left eyebrow */}
            <path d="M27 31 Q31.5 28 36 30" strokeWidth="1.2" />
            {/* Right eyebrow */}
            <path d="M44 30 Q48.5 28 53 31" strokeWidth="1.2" />
            {/* Left eye */}
            <ellipse cx="32" cy="37" rx="4.2" ry="2.8" strokeWidth="1" />
            <circle cx="32" cy="37" r="1.4" fill="currentColor" strokeWidth="0" />
            {/* Right eye */}
            <ellipse cx="48" cy="37" rx="4.2" ry="2.8" strokeWidth="1" />
            <circle cx="48" cy="37" r="1.4" fill="currentColor" strokeWidth="0" />
            {/* Nose */}
            <path d="M38 42 L36 48 Q40 49.5 44 48 L42 42" strokeWidth="1" />
            {/* Mouth */}
            <path d="M33 54 Q40 59.5 47 54" strokeWidth="1.2" />
          </svg>
          {/* Landmark dots */}
          <div className="absolute w-[3px] h-[3px] rounded-full bg-green-400/85" style={{ top:"44%", left:"37%", animation:"fa_dot 8s linear infinite 0.1s" }} />
          <div className="absolute w-[3px] h-[3px] rounded-full bg-green-400/85" style={{ top:"44%", left:"57%", animation:"fa_dot 8s linear infinite 0.2s" }} />
          <div className="absolute w-[3px] h-[3px] rounded-full bg-green-400/85" style={{ top:"62%", left:"50%", transform:"translateX(-50%)", animation:"fa_dot 8s linear infinite 0.3s" }} />
          <div className="absolute w-[3px] h-[3px] rounded-full bg-green-400/85" style={{ top:"67%", left:"41%", animation:"fa_dot 8s linear infinite 0.4s" }} />
          <div className="absolute w-[3px] h-[3px] rounded-full bg-green-400/85" style={{ top:"67%", left:"59%", animation:"fa_dot 8s linear infinite 0.5s" }} />
        </div>

        {/* Readout panel */}
        <div className="flex flex-col gap-2" style={{ animation: "fa_info 8s linear infinite" }}>
          <div className="flex flex-col gap-0.5">
            <span className="text-[8px] font-mono text-zinc-400 dark:text-zinc-300 tracking-wider uppercase">Staff ID</span>
            <span className="text-[12px] font-mono font-bold text-zinc-500 dark:text-zinc-200">STF-0042</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-mono text-zinc-400 dark:text-zinc-300 tracking-wider uppercase">Match Score</span>
            <div className="flex items-center gap-1.5">
              <div className="relative h-[4px] w-[68px] bg-zinc-200/40 dark:bg-zinc-700/40 rounded-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-green-500/80 rounded-full" style={{ animation: "fa_bar 8s linear infinite" }} />
              </div>
              <span className="text-[9px] font-mono text-green-400">99.47%</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1 bg-green-500/10 border border-green-500/40 px-1 py-[2px] rounded-sm self-start"
            style={{ animation: "fa_badge 8s linear infinite" }}>
            <span className="text-[9px] font-mono font-bold text-green-500 dark:text-green-300 tracking-wider whitespace-nowrap">✓ FACE MATCHED</span>
          </div>
        </div>

      </div>
    </div>
  );

  if (id === "04") return (
    <div className="absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes cm_sweep { 0%{top:-4px;opacity:0;} 3%{opacity:1;} 14%{top:100%;opacity:0;} 100%{top:100%;opacity:0;} }
        @keyframes cm_b1 { 0%,8%{border-color:rgba(34,197,94,0);} 13%,93%{border-color:rgba(34,197,94,0.9);} 98%,100%{border-color:rgba(34,197,94,0);} }
        @keyframes cm_b2 { 0%,11%{border-color:rgba(34,197,94,0);} 16%,93%{border-color:rgba(34,197,94,0.9);} 98%,100%{border-color:rgba(34,197,94,0);} }
        @keyframes cm_b3 { 0%,14%{border-color:rgba(34,197,94,0);} 19%,93%{border-color:rgba(34,197,94,0.9);} 98%,100%{border-color:rgba(34,197,94,0);} }
        @keyframes cm_b4 { 0%,17%{border-color:rgba(34,197,94,0);} 22%,93%{border-color:rgba(34,197,94,0.9);} 98%,100%{border-color:rgba(34,197,94,0);} }
        @keyframes cm_info { 0%,25%{opacity:0;} 32%,93%{opacity:1;} 98%,100%{opacity:0;} }
        @keyframes cm_bar { 0%,32%{width:0%;} 60%,93%{width:80%;} 98%,100%{width:0%;} }
        @keyframes cm_badge { 0%,65%{opacity:0;transform:scale(0.88);} 72%,92%{opacity:1;transform:scale(1);} 98%,100%{opacity:0;transform:scale(0.88);} }
      `}</style>

      <div className="absolute inset-0 flex items-center justify-center gap-6 px-6">
        {/* Camera viewport — red border matches real UI */}
        <div className="relative flex-shrink-0 w-[112px] h-[72px] border-2 border-red-500/70 rounded-[2px] overflow-hidden bg-zinc-300/10 dark:bg-zinc-700/20">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-400/10 via-transparent to-zinc-500/15" />
          {/* 調査中 badge — top-right like real UI */}
          <span className="absolute top-1 right-1 text-[8px] font-bold text-red-400 dark:text-red-300 tracking-wider bg-red-500/10 px-1 py-[1px] rounded-[2px]">調査中</span>
          {/* Scan line */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-0 right-0 h-[3px] bg-gradient-to-b from-green-400/0 via-green-400/55 to-green-400/0"
              style={{ animation: "cm_sweep 7s linear infinite" }} />
          </div>
          {/* Person 1 */}
          <div className="absolute" style={{ left: "6px", top: "26px" }}>
            <div className="w-[14px] h-[30px] flex flex-col items-center gap-[2px]">
              <div className="w-[7px] h-[7px] rounded-full bg-zinc-400/40 dark:bg-zinc-500/40" />
              <div className="w-[11px] h-[12px] bg-zinc-400/30 dark:bg-zinc-500/30 rounded-[2px]" />
              <div className="flex gap-[2px]">
                <div className="w-[4px] h-[7px] bg-zinc-400/30 dark:bg-zinc-500/30 rounded-[1px]" />
                <div className="w-[4px] h-[7px] bg-zinc-400/30 dark:bg-zinc-500/30 rounded-[1px]" />
              </div>
            </div>
            <span className="absolute -inset-[4px] border border-transparent" style={{ animation: "cm_b1 7s linear infinite" }} />
          </div>
          {/* Person 2 */}
          <div className="absolute" style={{ left: "32px", top: "24px" }}>
            <div className="w-[14px] h-[30px] flex flex-col items-center gap-[2px]">
              <div className="w-[7px] h-[7px] rounded-full bg-zinc-400/40 dark:bg-zinc-500/40" />
              <div className="w-[11px] h-[12px] bg-zinc-400/30 dark:bg-zinc-500/30 rounded-[2px]" />
              <div className="flex gap-[2px]">
                <div className="w-[4px] h-[7px] bg-zinc-400/30 dark:bg-zinc-500/30 rounded-[1px]" />
                <div className="w-[4px] h-[7px] bg-zinc-400/30 dark:bg-zinc-500/30 rounded-[1px]" />
              </div>
            </div>
            <span className="absolute -inset-[4px] border border-transparent" style={{ animation: "cm_b2 7s linear infinite" }} />
          </div>
          {/* Person 3 */}
          <div className="absolute" style={{ left: "58px", top: "26px" }}>
            <div className="w-[14px] h-[30px] flex flex-col items-center gap-[2px]">
              <div className="w-[7px] h-[7px] rounded-full bg-zinc-400/40 dark:bg-zinc-500/40" />
              <div className="w-[11px] h-[12px] bg-zinc-400/30 dark:bg-zinc-500/30 rounded-[2px]" />
              <div className="flex gap-[2px]">
                <div className="w-[4px] h-[7px] bg-zinc-400/30 dark:bg-zinc-500/30 rounded-[1px]" />
                <div className="w-[4px] h-[7px] bg-zinc-400/30 dark:bg-zinc-500/30 rounded-[1px]" />
              </div>
            </div>
            <span className="absolute -inset-[4px] border border-transparent" style={{ animation: "cm_b3 7s linear infinite" }} />
          </div>
          {/* Person 4 */}
          <div className="absolute" style={{ left: "84px", top: "24px" }}>
            <div className="w-[14px] h-[30px] flex flex-col items-center gap-[2px]">
              <div className="w-[7px] h-[7px] rounded-full bg-zinc-400/40 dark:bg-zinc-500/40" />
              <div className="w-[11px] h-[12px] bg-zinc-400/30 dark:bg-zinc-500/30 rounded-[2px]" />
              <div className="flex gap-[2px]">
                <div className="w-[4px] h-[7px] bg-zinc-400/30 dark:bg-zinc-500/30 rounded-[1px]" />
                <div className="w-[4px] h-[7px] bg-zinc-400/30 dark:bg-zinc-500/30 rounded-[1px]" />
              </div>
            </div>
            <span className="absolute -inset-[4px] border border-transparent" style={{ animation: "cm_b4 7s linear infinite" }} />
          </div>
        </div>

        {/* Readout — mirrors real UI panel */}
        <div className="flex flex-col gap-2 opacity-0" style={{ animation: "cm_info 7s linear infinite" }}>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-300 w-12">検出人数</span>
            <span className="text-[13px] font-mono font-bold text-green-500 dark:text-green-300">4 / 5人</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-300 w-12">混雑度</span>
            <div className="flex items-center gap-1.5">
              <div className="w-[40px] h-[5px] rounded-full bg-zinc-200/60 dark:bg-zinc-700/60 overflow-hidden">
                <div className="h-full rounded-full bg-green-500/80" style={{ animation: "cm_bar 7s linear infinite" }} />
              </div>
              <span className="text-[12px] font-mono font-bold text-red-400 dark:text-red-300">80%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Badge */}
      <div className="absolute bottom-2 right-5 flex items-center gap-1 bg-red-500/10 border border-red-500/40 px-2 py-0.5 rounded-sm"
        style={{ animation: "cm_badge 7s linear infinite" }}>
        <span className="text-[10px] font-mono font-bold text-red-400 dark:text-red-300 tracking-wider">⚠ HIGH CONGESTION</span>
      </div>
    </div>
  );

  if (id === "05") return (
    <div className="absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes bv_belt   { 0%{background-position:0 0;} 100%{background-position:-24px 0;} }
        @keyframes bv_scroll { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
      `}</style>

      <div className="absolute inset-0">
        {/* Belt */}
        <div className="absolute bottom-0 left-0 right-0 h-[10px] border-t border-zinc-300/35 dark:border-zinc-600/30"
          style={{ background: "repeating-linear-gradient(90deg,rgba(113,113,122,0.18) 0px,rgba(113,113,122,0.18) 10px,transparent 10px,transparent 18px)", animation: "bv_belt 1s linear infinite" }} />


        <span className="absolute top-2 left-3 text-[9px] font-mono text-zinc-400 dark:text-zinc-300 tracking-wider">USB CAM</span>

        {/* Marquee — each copy wider than card (~1330px) so loop reset is always off-screen left */}
        <div className="absolute bottom-[10px] left-0 flex items-end gap-[3px]" style={{ animation: "bv_scroll 10s linear infinite" }}>
          {[0, 1].map(copy =>
            (["can","pet","can","can","pet","clear","can","pet","can","brown","can","pet","can","can",
              "pet","can","pet","can","can","brown","can","pet","can","can","pet","clear","can","pet","can","can",
              "pet","can","brown","pet","can","can","pet","can","pet","clear","can","can","pet","can","pet",
              "can","brown","can","pet","can","can","pet","can","pet","can","clear","can","can","pet","can",
              "brown","can","pet","can","can","pet","can","pet","brown","can"] as string[]).map((t, i) => (
              <div key={`${copy}-${i}`} className="flex flex-col items-center flex-shrink-0">
                {t === "can" && <>
                  <div className="w-[10px] h-[3px] bg-zinc-400/55 rounded-t-sm" />
                  <div className="w-[14px] h-[22px] rounded-[2px] border border-zinc-400/35 dark:border-zinc-500/35"
                    style={{ background: "repeating-linear-gradient(0deg,rgba(148,163,184,0.15) 0px,rgba(148,163,184,0.15) 3px,rgba(148,163,184,0.06) 3px,rgba(148,163,184,0.06) 6px)" }} />
                </>}
                {t === "pet" && <>
                  <div className="w-[7px] h-[5px] rounded-t-full border border-sky-300/35 bg-sky-100/20 dark:bg-sky-400/10" />
                  <div className="w-[16px] h-[20px] rounded-[3px] border border-sky-300/30 bg-sky-100/10 dark:bg-sky-400/5" />
                </>}
                {(t === "clear" || t === "brown") && (
                  <div className="relative flex flex-col items-center">
                    <span className="absolute -inset-x-[5px] -inset-y-[5px] border border-green-500/90 rounded-[2px]" />
                    {t === "clear" ? <>
                      <div className="w-[5px] h-[6px] rounded-t-full border border-zinc-300/55 bg-zinc-200/40 dark:bg-zinc-300/10" />
                      <div className="w-[11px] h-[22px] rounded-[2px] border border-zinc-300/45 bg-zinc-100/25 dark:bg-zinc-300/5" />
                    </> : <>
                      <div className="w-[5px] h-[6px] rounded-t-full border border-amber-700/55 bg-amber-800/55" />
                      <div className="w-[11px] h-[22px] rounded-[2px] border border-amber-700/45 bg-amber-800/30" />
                    </>}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );

  if (id === "06") return (
    <div className="absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes rm_sweep { 0%{top:-3px;opacity:0;} 4%{opacity:0.7;} 15%{top:100%;opacity:0;} 100%{top:100%;opacity:0;} }
        @keyframes rm_pulse { 0%,100%{border-color:rgba(239,68,68,0.45);} 50%{border-color:rgba(239,68,68,0.95);} }
        @keyframes rm_tick  { 0%,100%{opacity:1;} 50%{opacity:0.25;} }
        @keyframes rm_alert { 0%,55%{opacity:0;transform:scale(0.9);} 62%,90%{opacity:1;transform:scale(1);} 96%,100%{opacity:0;transform:scale(0.9);} }
      `}</style>

      <div className="absolute inset-0 flex items-center justify-center gap-10">

        {/* C-01 — within threshold */}
        <div className="flex flex-col items-center gap-[4px]">
          <div className="w-[20px] h-[20px] p-[1px] border border-zinc-300/30 dark:border-zinc-700/30 grid grid-cols-5 gap-[0.5px]">
            {[1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1].map((c,i) => (
              <div key={i} className={c ? "bg-zinc-500/60 dark:bg-zinc-400/60" : ""} />
            ))}
          </div>
          <div className="relative w-[44px] h-[46px] border-2 border-zinc-300/35 dark:border-zinc-500/45 rounded-[2px] flex flex-col items-center justify-between p-1">
            <span className="text-[8px] font-mono text-zinc-400 dark:text-zinc-300 tracking-wider">C-01</span>
            <div className="space-y-[2px] w-full px-0.5">
              <div className="h-[2px] bg-zinc-300/25 dark:bg-zinc-500/30 rounded-full" />
              <div className="h-[2px] bg-zinc-300/20 dark:bg-zinc-500/25 rounded-full w-3/4" />
            </div>
            <span className="text-[8px] font-mono text-blue-400">■ OK</span>
            <div className="absolute inset-0 overflow-hidden rounded-[1px] pointer-events-none">
              <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-b from-blue-400/0 via-blue-400/50 to-blue-400/0"
                style={{ animation: "rm_sweep 5s linear infinite" }} />
            </div>
          </div>
          <span className="text-[11px] font-mono font-bold text-zinc-400 dark:text-zinc-300">28:45</span>
        </div>

        {/* C-02 — threshold exceeded */}
        <div className="flex flex-col items-center gap-[4px]">
          <div className="w-[20px] h-[20px] p-[1px] border border-red-500/40 grid grid-cols-5 gap-[0.5px]">
            {[1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1].map((c,i) => (
              <div key={i} className={c ? "bg-red-500/65" : ""} />
            ))}
          </div>
          <div className="relative w-[44px] h-[46px] border-2 rounded-[2px] flex flex-col items-center justify-between p-1"
            style={{ animation: "rm_pulse 1.2s ease-in-out infinite" }}>
            <span className="text-[8px] font-mono text-red-400 tracking-wider">C-02</span>
            <div className="space-y-[2px] w-full px-0.5">
              <div className="h-[2px] bg-red-400/20 rounded-full" />
              <div className="h-[2px] bg-red-400/15 rounded-full w-3/4" />
            </div>
            <span className="text-[6px] font-mono text-red-400/80">⚠ WARN</span>
          </div>
          <span className="text-[11px] font-mono font-bold text-red-400" style={{ animation: "rm_tick 1s ease-in-out infinite" }}>67:12</span>
        </div>

      </div>

      {/* Alert badge */}
      <div className="absolute bottom-2 right-4 flex items-center gap-1 bg-red-500/10 border border-red-500/40 px-2 py-0.5 rounded-sm"
        style={{ animation: "rm_alert 5s ease-in-out infinite" }}>
        <span className="text-[10px] font-mono font-bold text-red-400 dark:text-red-300 tracking-wider whitespace-nowrap">⚠ C-02 THRESHOLD EXCEEDED</span>
      </div>

    </div>
  );

  if (id === "08") return (
    <div className="absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes fs_mask { 0%,18%{opacity:0;} 28%,88%{opacity:1;} 94%,100%{opacity:0;} }
        @keyframes fs_box  { 0%,22%{opacity:0;} 32%,88%{opacity:1;} 94%,100%{opacity:0;} }
        @keyframes fs_line { 0%,42%{width:0%;} 56%,88%{width:100%;} 94%,100%{width:0%;} }
        @keyframes fs_len  { 0%,55%{opacity:0;} 63%,88%{opacity:1;} 94%,100%{opacity:0;} }
      `}</style>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-start">

          {/* Species label — sits above bbox in normal flow */}
          <div className="bg-white/75 dark:bg-zinc-900/80 px-1.5 py-[1px] z-30"
            style={{ animation: "fs_box 8s linear infinite" }}>
            <span className="text-[10px] font-mono text-zinc-700 dark:text-zinc-100 whitespace-nowrap">マアジ　91.43%</span>
          </div>

        <div className="relative w-[150px] h-[54px] mb-3">

          {/* Fish SVG — viewBox cropped to fish bounds so inset-0 bbox hugs exactly */}
          <svg viewBox="8 2 82 52" className="absolute inset-0 w-full h-full text-zinc-500/30 dark:text-zinc-400/55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path d="M72 28 L88 12 L88 44 Z" strokeWidth="1.2" />
            <ellipse cx="42" cy="28" rx="32" ry="20" strokeWidth="1.2" />
            <path d="M28 9 Q38 4 50 9" strokeWidth="1" />
            <path d="M38 46 Q42 52 48 47" strokeWidth="1" />
            <circle cx="18" cy="25" r="3.5" strokeWidth="1" />
            <circle cx="18" cy="25" r="1.5" fill="currentColor" strokeWidth="0" />
            <path d="M28 13 Q26 28 28 43" strokeWidth="1" />
            <path d="M42 11 Q47 19 44 28" strokeWidth="0.7" opacity="0.5" />
            <path d="M54 12 Q59 20 56 29" strokeWidth="0.7" opacity="0.5" />
          </svg>

          {/* Segmentation mask — same cropped viewBox */}
          <svg viewBox="8 2 82 52" className="absolute inset-0 w-full h-full" fill="none"
            style={{ animation: "fs_mask 8s linear infinite" }}>
            <ellipse cx="42" cy="28" rx="32" ry="20" fill="rgba(34,197,94,0.38)" />
            <path d="M72 28 L88 12 L88 44 Z" fill="rgba(34,197,94,0.28)" />
          </svg>

          {/* Bbox + line + label — inset-0 now matches fish edges exactly */}
          <div className="absolute inset-0" style={{ animation: "fs_box 8s linear infinite" }}>
            <div className="absolute inset-0 border-2 border-green-500/80" />
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] overflow-hidden z-20">
              <div className="h-full bg-blue-500/80" style={{ animation: "fs_line 8s linear infinite" }} />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 dark:bg-zinc-900/80 px-2 py-[1px] z-30"
              style={{ animation: "fs_len 8s linear infinite" }}>
              <span className="text-[10px] font-mono text-zinc-700 dark:text-zinc-100 whitespace-nowrap">長さ：24.83 cm</span>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );

  if (id === "09") return (
    <div className="absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes sm_in    { 0%,5%{opacity:0;} 15%,92%{opacity:1;} 97%,100%{opacity:0;} }
        @keyframes sm_bar1  { 0%,10%{width:0%;} 40%,92%{width:58%;} 97%,100%{width:0%;} }
        @keyframes sm_bar2  { 0%,14%{width:0%;} 44%,92%{width:41%;} 97%,100%{width:0%;} }
        @keyframes sm_bar3  { 0%,18%{width:0%;} 50%,92%{width:91%;} 97%,100%{width:0%;} }
        @keyframes sm_warn  { 0%,48%{color:rgba(251,191,36,0.9);} 54%,92%{color:rgba(239,68,68,0.95);} 97%,100%{color:rgba(251,191,36,0.9);} }
        @keyframes sm_badge { 0%,58%{opacity:0;transform:scale(0.9);} 66%,90%{opacity:1;transform:scale(1);} 96%,100%{opacity:0;transform:scale(0.9);} }
      `}</style>

      <div className="absolute inset-0 flex flex-col justify-center gap-[6px] px-5 pt-2 pb-7" style={{ animation: "sm_in 7s linear infinite" }}>

        {/* Device row 1 */}
        <div className="flex items-center gap-2">
          <div className="w-[5px] h-[5px] rounded-full bg-green-500/70 flex-shrink-0" />
          <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-300 w-[52px]">DEV-001</span>
          <div className="flex-1 h-[5px] bg-zinc-200/30 dark:bg-zinc-700/30 rounded-full overflow-hidden">
            <div className="h-full bg-blue-400/60 rounded-full" style={{ animation: "sm_bar1 7s linear infinite" }} />
          </div>
          <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-300 w-[28px] text-right">100 MB</span>
        </div>

        {/* Device row 2 */}
        <div className="flex items-center gap-2">
          <div className="w-[5px] h-[5px] rounded-full bg-green-500/70 flex-shrink-0" />
          <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-300 w-[52px]">DEV-002</span>
          <div className="flex-1 h-[5px] bg-zinc-200/30 dark:bg-zinc-700/30 rounded-full overflow-hidden">
            <div className="h-full bg-blue-400/60 rounded-full" style={{ animation: "sm_bar2 7s linear infinite" }} />
          </div>
          <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-300 w-[28px] text-right">100 MB</span>
        </div>

        {/* Device row 3 — approaching limit */}
        <div className="flex items-center gap-2">
          <div className="w-[5px] h-[5px] rounded-full bg-red-500/70 flex-shrink-0" />
          <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-300 w-[52px]">DEV-003</span>
          <div className="flex-1 h-[5px] bg-zinc-200/30 dark:bg-zinc-700/30 rounded-full overflow-hidden">
            <div className="h-full bg-red-500/70 rounded-full" style={{ animation: "sm_bar3 7s linear infinite" }} />
          </div>
          <span className="text-[7px] font-mono font-bold w-[28px] text-right" style={{ animation: "sm_warn 7s linear infinite" }}>91%</span>
        </div>

      </div>

      {/* Auto-upgrade badge */}
      <div className="absolute bottom-2 right-4 flex items-center gap-1 bg-amber-500/10 border border-amber-500/40 px-2 py-0.5 rounded-sm"
        style={{ animation: "sm_badge 7s linear infinite" }}>
        <span className="text-[10px] font-mono font-bold text-amber-400 dark:text-amber-200 tracking-wider whitespace-nowrap">⬆ DEV-003 · 100MB → 1GB</span>
      </div>

    </div>
  );

  if (id === "10") return (
    <div className="absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes ki_in    { 0%,3%{opacity:0;} 13%,92%{opacity:1;} 97%,100%{opacity:0;} }
        @keyframes ki_scan  { 0%{top:-4px;opacity:0;} 2%{opacity:1;} 20%{top:100%;opacity:0;} 100%{top:100%;opacity:0;} }
        @keyframes ki_pat   { 0%,15%{opacity:0;} 25%,92%{opacity:1;} 97%,100%{opacity:0;} }
        @keyframes ki_pA    { 0%{transform:translate(0px,-6px) rotate(0deg);opacity:0;} 5%{opacity:0.9;} 80%{transform:translate(-12px,100px) rotate(270deg);opacity:0.5;} 94%{transform:translate(-14px,118px) rotate(310deg);opacity:0;} 100%{opacity:0;} }
        @keyframes ki_pB    { 0%,12%{transform:translate(0px,-5px) rotate(30deg);opacity:0;} 18%{opacity:0.85;} 82%{transform:translate(8px,96px) rotate(-200deg);opacity:0.4;} 95%{transform:translate(10px,114px) rotate(-240deg);opacity:0;} 100%{opacity:0;} }
        @keyframes ki_pC    { 0%,6%{transform:translate(0px,-7px) rotate(-20deg);opacity:0;} 12%{opacity:0.9;} 76%{transform:translate(14px,92px) rotate(230deg);opacity:0.45;} 92%{transform:translate(16px,110px) rotate(270deg);opacity:0;} 100%{opacity:0;} }
        @keyframes ki_pD    { 0%,22%{transform:translate(0px,-5px) rotate(15deg);opacity:0;} 28%{opacity:0.8;} 86%{transform:translate(-9px,90px) rotate(-180deg);opacity:0.35;} 96%{transform:translate(-11px,108px) rotate(-220deg);opacity:0;} 100%{opacity:0;} }
        @keyframes ki_pE    { 0%,4%{transform:translate(0px,-4px) rotate(-30deg);opacity:0;} 10%{opacity:0.75;} 72%{transform:translate(5px,94px) rotate(200deg);opacity:0.4;} 88%{transform:translate(6px,112px) rotate(240deg);opacity:0;} 100%{opacity:0;} }
        @keyframes ki_pF    { 0%,28%{transform:translate(0px,-6px) rotate(10deg);opacity:0;} 34%{opacity:0.8;} 88%{transform:translate(-6px,87px) rotate(-150deg);opacity:0.3;} 97%{transform:translate(-7px,105px) rotate(-190deg);opacity:0;} 100%{opacity:0;} }
        @keyframes ki_badge { 0%,68%{opacity:0;transform:scale(0.88);} 76%,90%{opacity:1;transform:scale(1);} 96%,100%{opacity:0;transform:scale(0.88);} }
      `}</style>

      {/* Falling sakura petals */}
      {([
        { left:"20%", top:"0%",  anim:"ki_pA", size:10 },
        { left:"62%", top:"2%",  anim:"ki_pB", size:12 },
        { left:"78%", top:"4%",  anim:"ki_pC", size:9  },
        { left:"8%",  top:"7%",  anim:"ki_pD", size:11 },
        { left:"44%", top:"-1%", anim:"ki_pE", size:8  },
        { left:"36%", top:"3%",  anim:"ki_pF", size:10 },
      ] as const).map(({ left, top, anim, size }, i) => (
        <div key={i} className="absolute pointer-events-none" style={{ left, top, animation: `${anim} 9s linear infinite` }}>
          <svg viewBox="0 0 14 16" width={size} height={size + 1}>
            <path d="M7 15 C4 12 1 9 1 5.5 C1 2 4 0 7 1.5 C10 0 13 2 13 5.5 C13 9 10 12 7 15 Z" fill="rgba(253,182,206,0.82)" />
            <path d="M7 3.5 L7 14" stroke="rgba(244,114,182,0.3)" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      ))}

      {/* Kimono dress */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ animation: "ki_in 9s linear infinite" }}>
        <div className="relative">
          <svg viewBox="0 0 70 90" width="64" height="82" fill="none">
            {/* Left hanging sleeve */}
            <rect x="0" y="8" width="21" height="40" rx="1" fill="rgba(244,114,182,0.12)" stroke="rgba(244,114,182,0.6)" strokeWidth="1.1" />
            {/* Right hanging sleeve */}
            <rect x="49" y="8" width="21" height="40" rx="1" fill="rgba(244,114,182,0.12)" stroke="rgba(244,114,182,0.6)" strokeWidth="1.1" />
            {/* Main body */}
            <path d="M20 8 L50 8 L52 90 L18 90 Z" fill="rgba(244,114,182,0.12)" stroke="rgba(244,114,182,0.6)" strokeWidth="1.1" />
            {/* Left collar */}
            <line x1="20" y1="8" x2="35" y2="30" stroke="rgba(244,114,182,0.85)" strokeWidth="1.4" strokeLinecap="round" />
            {/* Right collar */}
            <line x1="50" y1="8" x2="35" y2="30" stroke="rgba(244,114,182,0.85)" strokeWidth="1.4" strokeLinecap="round" />
            {/* Obi sash */}
            <rect x="20" y="44" width="30" height="7" rx="0.5" fill="rgba(251,191,36,0.22)" stroke="rgba(251,191,36,0.72)" strokeWidth="0.9" />
            {/* Obi knot */}
            <ellipse cx="35" cy="47.5" rx="5" ry="3.5" fill="rgba(251,191,36,0.16)" stroke="rgba(251,191,36,0.6)" strokeWidth="0.8" />
            {/* Sakura blossom pattern revealed by scan */}
            <g style={{ animation: "ki_pat 9s linear infinite" }}>
              <circle cx="7"  cy="18" r="3"   fill="rgba(253,164,175,0.55)" />
              <circle cx="14" cy="30" r="2.5" fill="rgba(253,164,175,0.5)"  />
              <circle cx="6"  cy="42" r="2"   fill="rgba(253,164,175,0.45)" />
              <circle cx="63" cy="16" r="2.8" fill="rgba(253,164,175,0.55)" />
              <circle cx="56" cy="28" r="3"   fill="rgba(253,164,175,0.5)"  />
              <circle cx="64" cy="40" r="2.2" fill="rgba(253,164,175,0.45)" />
              <circle cx="28" cy="36" r="2.5" fill="rgba(253,164,175,0.5)"  />
              <circle cx="42" cy="58" r="2.2" fill="rgba(253,164,175,0.45)" />
              <circle cx="29" cy="72" r="2"   fill="rgba(253,164,175,0.4)"  />
              <circle cx="43" cy="76" r="1.8" fill="rgba(253,164,175,0.38)" />
            </g>
          </svg>
          {/* Scan line */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-[-4px] right-[-4px] h-[3px] bg-gradient-to-b from-pink-300/0 via-pink-400/70 to-pink-300/0"
              style={{ animation: "ki_scan 9s linear infinite" }} />
          </div>
        </div>
      </div>

      {/* Badge */}
      <div className="absolute bottom-2 right-4 flex items-center gap-1 bg-pink-500/10 border border-pink-500/40 px-2 py-0.5 rounded-sm"
        style={{ animation: "ki_badge 9s linear infinite" }}>
        <span className="text-[10px] font-mono font-bold text-pink-400 dark:text-pink-300 tracking-wider whitespace-nowrap">✓ TEXTURE SYNTHESIZED</span>
      </div>

    </div>
  );

  return null;
}

// ── Shared project text content ───────────────────────────────────────────────
function ProjectContent({ project }: { project: Project }) {
  const Icon = project.icon;
  const { lang } = useLang();
  const jp = i18n.jp.projectsData[project.id];
  const tagline = lang === "jp" && jp ? jp.tagline : project.tagline;
  const description = lang === "jp" && jp ? jp.description : project.description;
  const category = lang === "jp" && jp ? jp.category : project.category;
  return (
    <>
      <div className="flex-shrink-0 pt-0.5">
        <div className="w-9 h-9 rounded-sm bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
          <Icon size={16} className="text-zinc-500 dark:text-zinc-400" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <p className="text-xs text-zinc-400 dark:text-zinc-400 tracking-widest mb-0.5">
              {category}
            </p>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{project.name}</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{tagline}</p>
          </div>
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-sm border border-zinc-300 dark:border-zinc-700 text-zinc-400 dark:text-zinc-500 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-all"
              aria-label={`View ${project.name} demo`}>
              <ExternalLink size={13} />
            </a>
          ) : project.client ? (
            <a href={project.client.url} target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-sm border border-zinc-300 dark:border-zinc-700 text-zinc-400 dark:text-zinc-500 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-all"
              aria-label={`View ${project.client.name}`}>
              <ExternalLink size={13} />
            </a>
          ) : null}
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3 mt-3 pt-3 border-t border-zinc-200/70 dark:border-zinc-800/70">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="text-xs px-2 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800/60 text-zinc-500 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

// ── Category filter tabs ──────────────────────────────────────────────────────
const CATEGORIES: { en: string; jp: string }[] = [
  { en: "Computer Vision",        jp: "コンピュータービジョン" },
  { en: "Full Stack SaaS",        jp: "フルスタックSaaS" },
  { en: "AIoT",                   jp: "AIoT" },
  { en: "Generative AI",          jp: "生成AI" },
  { en: "Infrastructure Automation", jp: "インフラ自動化" },
];

// ── Card view ────────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLang();
  const jp = i18n.jp.projectsData[project.id];
  const tagline = lang === "jp" && jp ? jp.tagline : project.tagline;
  const category = lang === "jp" && jp ? jp.category : project.category;
  const Icon = project.icon;
  const link = project.demo ?? project.client?.url ?? null;

  return (
    <div className="glass rounded-sm p-5 flex flex-col gap-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 h-full">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-8 h-8 rounded-sm bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
            <Icon size={14} className="text-zinc-500 dark:text-zinc-400" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] text-zinc-400 tracking-widest uppercase mb-0.5">{category}</p>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-tight">{project.name}</h3>
          </div>
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-sm border border-zinc-200 dark:border-zinc-700 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:border-zinc-400 transition-all"
            aria-label={`View ${project.name}`}>
            <ExternalLink size={11} />
          </a>
        )}
      </div>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">{tagline}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span key={tech} className="text-[10px] px-1.5 py-0.5 rounded-sm bg-zinc-100 dark:bg-zinc-800/60 text-zinc-500 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────
export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"list" | "card">("card");
  const { lang } = useLang();
  const t = i18n[lang].projects;

  const featured = PROJECTS.filter((p) => p.featured);
  const additional = PROJECTS.filter((p) => !p.featured);
  const visible = activeCategory === "All"
    ? (viewMode === "card" ? PROJECTS : showAll ? PROJECTS : featured)
    : PROJECTS.filter((p) => p.category === activeCategory);

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    if (cat !== "All") setShowAll(false);
  };

  return (
    <section id="projects" className="section-padding border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-zinc-500 mb-4">
          {t.label}
        </p>

        {/* Heading + view-toggle — outside ScrollReveal so clicks are never intercepted */}
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            {t.heading}
          </h2>
          <div className="flex flex-col items-end gap-2">
            <span className="hidden sm:block text-xs text-zinc-400 dark:text-zinc-500 tracking-widest uppercase">
              {t.countLabel(PROJECTS.length)}
            </span>
            <div className="flex items-center rounded-sm border border-zinc-200 dark:border-zinc-700 overflow-hidden">
              <button
                id="view-card"
                type="button"
                onClick={() => setViewMode("card")}
                aria-label="Card view"
                className={`cursor-pointer w-9 h-9 flex items-center justify-center transition-colors duration-150 ${viewMode === "card" ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900" : "bg-white dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-700 dark:hover:text-zinc-300"}`}
              >
                <LayoutGrid size={15} />
              </button>
              <span className="w-px h-5 bg-zinc-200 dark:bg-zinc-700 flex-shrink-0" />
              <button
                id="view-list"
                type="button"
                onClick={() => setViewMode("list")}
                aria-label="List view"
                className={`cursor-pointer w-9 h-9 flex items-center justify-center transition-colors duration-150 ${viewMode === "list" ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900" : "bg-white dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-700 dark:hover:text-zinc-300"}`}
              >
                <LayoutList size={15} />
              </button>
            </div>
            {viewMode === "list" && (
              <>
                <span className="hidden sm:flex items-center gap-1.5 text-[10px] text-zinc-400 dark:text-zinc-500">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 8v4l3 3"/></svg>
                  Hover to see a quick preview
                </span>
                <span className="flex sm:hidden items-center gap-1.5 text-[10px] text-zinc-400 dark:text-zinc-500">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M6 14a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-2.5"/></svg>
                  Tap to see a quick preview
                </span>
              </>
            )}
          </div>
        </div>

        {/* Category filter tabs — outside ScrollReveal so clicks always register */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {/* "All" tab */}
          <button
            onClick={() => handleCategoryClick("All")}
            className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-sm border tracking-wide transition-all duration-200 ${
              activeCategory === "All"
                ? "border-zinc-800 dark:border-zinc-300 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium"
                : "border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-500 dark:hover:border-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
            }`}
          >
            {t.filterAll}
          </button>
          {CATEGORIES.map(({ en, jp }) => (
            <button
              key={en}
              onClick={() => handleCategoryClick(en)}
              className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-sm border tracking-wide transition-all duration-200 ${
                activeCategory === en
                  ? "border-zinc-800 dark:border-zinc-300 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium"
                  : "border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-500 dark:hover:border-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              {lang === "jp" ? jp : en}
            </button>
          ))}
        </div>

        {/* Proprietary note */}
        <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mb-2">
          * {t.proprietaryNote}
        </p>

        {viewMode === "card" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3 mt-8">
            {visible.map((project) => (
              <div key={project.id} className="group glass rounded-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 overflow-hidden">
                <div className="flex gap-5 p-5">
                  <ProjectContent project={project} />
                </div>
                {ANIM_IDS.has(project.id) && (
                  <div className="grid transition-all duration-500 ease-in-out grid-rows-[0fr] group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <div className="h-36 border-t border-zinc-200/60 dark:border-zinc-800/60 relative opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <ProjectAnimation id={project.id} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* See more / collapse toggle — only shown in list view "All" */}
        {viewMode === "list" && activeCategory === "All" && additional.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="group inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs font-medium tracking-widest uppercase rounded-sm hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all duration-200"
            >
              {showAll ? (
                <>
                  <ChevronUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
                  {t.showLess}
                </>
              ) : (
                <>
                  <ChevronDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
                  {t.moreProjects(additional.length)}
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
