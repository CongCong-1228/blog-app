import Footer from "@/components/footer";
import Header from "@/components/header";
import MainLayout from "@/layouts/mainLayout";

export default function Home() {
  return (
    <main className="relative w-full h-auto">
      <Header />
      <MainLayout />
      <Footer />
    </main>
  );
}
