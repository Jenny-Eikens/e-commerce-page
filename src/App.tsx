import React from "react";
import NavBar from "./components/NavBar";
import ImageGallery from "./components/ImageGallery";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  return (
    <>
      <div className="wrapper m-auto flex min-h-[100vh] max-w-[1100px] flex-col justify-start border-2 border-red-500">
        <NavBar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          itemCount={itemCount}
          setItemCount={setItemCount}
        />
        <div className="main-content-wrapper grid w-full max-w-[1000px] grid-cols-1 gap-6 border-2 border-blue-700 md:m-auto md:min-h-[70vh] md:grid-cols-2 md:px-2">
          <ImageGallery />
          <div className="border-2 border-green-500">Shopping section</div>
        </div>
      </div>
    </>
  );
}

export default App;
