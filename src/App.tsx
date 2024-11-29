import React from "react";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  return (
    <>
      <div className="wrapper m-auto min-h-[100vh] max-w-[1100px] border-2 border-red-500 md:mt-7">
        <NavBar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          itemCount={itemCount}
          setItemCount={setItemCount}
        />
      </div>
    </>
  );
}

export default App;
