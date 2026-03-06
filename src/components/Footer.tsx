export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={`py-10 border-t border-[#B8593A]/12 dark:border-[#B8593A]/20 text-center transition-colors${className ? ` ${className}` : ""}`}>
      <p className="text-xs uppercase tracking-widest text-black/60 dark:text-[#777777] transition-colors">De Raíz al Alma • 2026</p>
    </footer>
  );
}
