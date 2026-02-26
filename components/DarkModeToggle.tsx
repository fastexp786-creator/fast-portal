"use client";

export default function DarkModeToggle() {
  const toggle = () => {
    if (typeof document !== "undefined") {
      document.body.classList.toggle("dark-mode");
    }
  };

  return (
    <button className="mode-toggle" onClick={toggle} type="button" aria-label="Toggle dark mode">
      <i className="fas fa-moon" />
    </button>
  );
}
