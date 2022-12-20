import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import "../scss/itemDetail.scss";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };

  return (
    <div className="card mb-3 container-fluid container-demostracion">
      <div className="row g-0">
        <div
          className="col-md-6 card-img-col"
          style={{ backgroundImage: `url(${data.image})` }}
        >
          {/*  Button trigger modal */}
          <button
            type="button"
            className="btn btn-secondary m-3 lupa"
            data-bs-toggle="modal"
            data-bs-target="#verImagen"
          >
            <i className="bi bi-search"></i>
          </button>

          {/* Modal */}
          <div
            className="modal fade"
            id="verImagen"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Modal */}
        </div>
        <div className="card-body col-md-6 detail-info">
          <h4 className="card-title">{data.title}</h4>
          <p className="card-text">
            <strong>$: </strong>
            {data.price}
          </p>
          <p>Stock: {data.stock}</p>
          <p>Stock: {data.descripcion}</p>

          {goToCart ? (
            <Link to="/carrito" className="btn btn-info">
              Terminar compra
            </Link>
          ) : (
            <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
