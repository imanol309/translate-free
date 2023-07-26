import { ClerkProvider } from "@clerk/nextjs";
import Structure from "@/components/Structure/Structure";

export default function Home() {
  return (
    <Structure>
      <main className="flex flex-col items-center justify-between p-24">
        <h4>Translate Free</h4>
      </main>
    </Structure>
  );
}
