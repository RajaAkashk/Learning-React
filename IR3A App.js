import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-4 fw-normal">Featured Products</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://placehold.co/400x300?text"
                className="card-img-top"
                alt="Product Image"
              />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">
                  Description of Product 1. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <NavLink to="product/1" className="btn btn-primary">
                  View Product
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://placehold.co/400x300?text"
                className="card-img-top"
                alt="Product Image"
              />
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">
                  Description of Product 2. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <NavLink to="product/2" className="btn btn-primary">
                  View Product
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://placehold.co/400x300?text"
                className="card-img-top"
                alt="Product Image"
              />
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">
                  Description of Product 3. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <NavLink to="product/3" className="btn btn-primary">
                  View Product
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
