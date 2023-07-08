import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
