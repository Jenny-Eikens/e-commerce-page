import { useState } from "react";
import Header from "./components/Header";
import InfoAndBuy from "./components/InfoAndBuy";
import ImageSetion from "./components/ImageSection";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <div
        className="wrapper relative m-auto flex min-h-[100vh] max-w-[1100px] flex-col justify-start"
        onClick={() => setCartOpen(false)}
      >
        <Header
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          itemCount={itemCount}
          setItemCount={setItemCount}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
        <main className="grid w-full max-w-[1000px] grid-cols-1 gap-7 md:m-auto md:min-h-[80vh] md:grid-cols-2 md:px-2 lg:px-0">
          <ImageSetion />
          <InfoAndBuy itemCount={itemCount} setItemCount={setItemCount} />
        </main>
        <footer className="attribution relative bottom-0 mt-8 pb-1 text-center text-sm text-v-dark-blue md:mt-0">
          <div>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://github.com/Jenny-Eikens" target="_blank">
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
