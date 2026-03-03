export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={`py-10 border-t border-[#B8593A]/12 text-center${className ? ` ${className}` : ""}`}>
      <p className="text-xs uppercase tracking-widest text-[#8A7A6E]/60">De Raíz al Alma • 2026</p>
    </footer>
  );
}
