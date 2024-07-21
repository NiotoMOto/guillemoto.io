import Link from "next/link";

export const Header = () => {
  return (
    <header className="backdrop-blur-xl sticky top-0 text-white py-6 z-10">
      <div className="container mx-auto  px-10">
        <Link href="/">
          <h1 className="text-3xl">Guillemoto.io</h1>
        </Link>
      </div>
    </header>
  );
};
