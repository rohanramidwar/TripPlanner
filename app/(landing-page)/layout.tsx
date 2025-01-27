import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-40 h-full bg-slate-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
