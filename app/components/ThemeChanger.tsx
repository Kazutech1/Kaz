"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  { id: "VOID",   label: "VOID",    color: "#ff4d00" },
  { id: "MATRIX", label: "MATRIX",  color: "#00ff41" },
  { id: "CRYO",   label: "CRYO",    color: "#00cfff" },
  { id: "PULSE",  label: "PULSE",   color: "#bf00ff" },
  { id: "BREACH", label: "BREACH",  color: "#ff0055" },
  { id: "SOLAR",  label: "SOLAR",   color: "#ffd600" },
];

export default function ThemeChanger() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(themes[0]);

  useEffect(() => {
    const saved = localStorage.getItem("kazuto-theme");
    if (saved) {
      const t = themes.find(t => t.id === saved);
      if (t) applyTheme(t, false);
    }
  }, []);

  function applyTheme(theme: typeof themes[0], save = true) {
    document.documentElement.style.setProperty("--color-accent", theme.color);
    setActive(theme);
    if (save) localStorage.setItem("kazuto-theme", theme.id);
  }

  return (
    <div className="fixed right-4 bottom-6 md:right-8 md:top-1/2 md:bottom-auto md:-translate-y-1/2 z-[9998] flex flex-col items-end gap-2">
      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="flex flex-col items-center gap-1 border border-carbon-700 bg-carbon-900/90 backdrop-blur-sm p-3 hover:border-accent transition-colors group"
        title="Change theme"
      >
        <div
          className="w-4 h-4 border border-oxy-100/30 transition-colors duration-300"
          style={{ background: active.color }}
        />
        <span className="text-[8px] font-black tracking-widest text-carbon-700 group-hover:text-accent transition-colors">
          THEME
        </span>
      </button>

      {/* Palette */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-1 border border-carbon-700 bg-carbon-900/95 backdrop-blur-sm p-3"
          >
            {themes.map(theme => (
              <button
                key={theme.id}
                onClick={() => { applyTheme(theme); setOpen(false); }}
                className="flex items-center gap-3 px-2 py-1.5 hover:bg-carbon-800 transition-colors group/item text-left"
              >
                <motion.div
                  className="w-3 h-3 shrink-0 border border-transparent"
                  style={{ background: theme.color }}
                  animate={active.id === theme.id ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
                <span
                  className="text-[10px] font-black tracking-widest transition-colors"
                  style={{ color: active.id === theme.id ? theme.color : undefined }}
                >
                  {theme.label}
                </span>
                {active.id === theme.id && (
                  <span className="text-[8px] font-black ml-auto" style={{ color: theme.color }}>
                    ●
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
