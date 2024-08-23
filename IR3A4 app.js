import "./styles.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="container text-center py-5">
        <img
          src="https://plus.unsplash.com/premium_vector-1682306104192-17f97a2cadbb?q=80&w=500&450=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Todo app image"
        />
        <h6 className="display-6 pt-2 fw-medium">Todos</h6>
        <p className="fs-6 fw-normal">Welcome to Todo application!</p>
        <NavLink className="btn btn-primary" to="/todosPage">
          View Todos
        </NavLink>
      </main>
      <Footer />
    </>
  );
}
