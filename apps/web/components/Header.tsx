export const Header = () => {
  return (
    <header className="backdrop-blur-xl sticky top-0 text-white py-6 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl">Guillemoto.io</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-deep-sea-300">
                Parcour
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-deep-sea-300 transition-all duration-300 hover:border-b-2 hover:border-deep-sea-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
