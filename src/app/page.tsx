import Structure from "@/components/Structure/Structure";
import Favorites from "@/components/Favorites/Favorites";

export default function Home() {
  return (
    <Structure>
      <main className="h-full w-full flex flex-col items-start justify-start px-10 py-12">
        <Favorites />
        <section className="p-24">
          <h4>Translate Free</h4>
        </section>
      </main>
    </Structure>
  );
}
