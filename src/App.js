import { Route, Routes } from "react-router-dom";
import AdminHome from "./component/pages/AdminHome";
import UserPage from "./component/pages/UserPage";
import MoviesDetails from "./component/pages/MoviesDetails";
import Navbar from "./component/Navbar/Navbar";



function App() {
  let role = "user";

  if (role == "user") {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/:id" element={<MoviesDetails />} />
        </Routes>
      </>
    )
  }

  if (role == "admin") {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<AdminHome />} />
        </Routes>
      </>
    );
  }
}

export default App;
