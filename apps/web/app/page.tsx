import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Timeline } from "../components/timeline/Timeline";

export default function Home() {
  return (
    <main className="container mx-auto px-10">
      <h2 className="mb-2 flex items-center">
        <Image
          src="/antoine-guillemoto.jpg"
          width={400}
          height={400}
          alt="Antoine Guillemoto"
          className="rounded-full w-16 h-16 mb-4"
        />
        <div className="text-xl ml-4 text-center">Antoine Guillemoto</div>
      </h2>

      <h3 className="text-xl">
        Développeur web freelance expérimenté, je me spécialise en{" "}
        <span className="code javascript">JavaScript</span>,{" "}
        <span className="code typescript">TypeScript</span>,{" "}
        <span className="code react">React</span>,{" "}
        <span className="code nodejs">Node.js</span> et{" "}
        <span className="code nextjs">Next.js</span> pour créer des applications
        web performantes et évolutives.
      </h3>
      <Timeline />
    </main>
  );
}
