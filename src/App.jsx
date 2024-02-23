import "./App.css";
import { Outlet, useNavigation } from "react-router";
import { Footer, Navbar, Spinner } from "./components";
import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { state } = useNavigation();
  const [counter, setCounter] = useState(0);
  return (
    <>
      <ToastContainer />
      <CartProvider>
        <Navbar />
        <main
          className="min-h-[78.2vh] w-full"
          style={{ gridTemplateRows: "1fr auto" }}
        >
          {state === "loading" && <Spinner />}
          <Outlet counter={counter} />
        </main>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
