import NavBar from "./components/NavBar";
import ImageGallery from "./components/ImageGallery";
import { useState } from "react";
import InfoAndBuy from "./components/InfoAndBuy";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  return (
    <>
      <div className="wrapper relative m-auto flex min-h-[100vh] max-w-[1100px] flex-col justify-start border-2 border-red-500">
        <NavBar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          itemCount={itemCount}
          setItemCount={setItemCount}
        />
        <main className="main-content-wrapper grid w-full max-w-[1000px] grid-cols-1 gap-6 border-2 border-blue-700 md:m-auto md:min-h-[70vh] md:grid-cols-2 md:px-2">
          <ImageGallery />
          <InfoAndBuy itemCount={itemCount} setItemCount={setItemCount} />
        </main>
        <footer className="attribution relative bottom-0 mt-8 border border-blue-500 pb-1 text-center text-sm md:mt-0">
          <div>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="#" target="_blank">
              Jennifer Eikens
            </a>
            .
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
