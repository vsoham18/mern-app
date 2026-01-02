import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import AuthModel from "./components/AuthModel.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>

      <AuthModel/>
    </>
  );
};

export default App;
