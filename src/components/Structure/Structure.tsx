import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";

function Structure({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col justify-center w-full h-full">
      <Header />
      <section className="relative w-full h-full flex justify-center items-center">
        <NavBar />
        <section className="w-[83%] h-full">{children}</section>
      </section>
    </section>
  );
}

export default Structure;
