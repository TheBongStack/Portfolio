import { lazy, Suspense, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import About from "./components/About";

const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <>
        <Header />
        <main>
          <Home />
          <About/>
        </main>
        <Footer />
      </>
    </Suspense>
  );
}

export default App;
