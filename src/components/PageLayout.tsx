import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fondo-terroso relative overflow-hidden min-h-screen">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
        {children}
      </main>
      <Footer className="mt-20" />
    </div>
  );
}
