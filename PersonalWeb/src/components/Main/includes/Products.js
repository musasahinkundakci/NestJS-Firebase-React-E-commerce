import React, { useState } from 'react'
import AddProduct from './AddProduct'
import { Link } from "react-router-dom"
const Products = ({ products, ...props }) => {
    const [clicked, setClicked] = useState(false)
    console.log("products")
    return (
        <div>
            {console.log(products)}
            <div className='my-3'><button onClick={() => setClicked(!clicked)} className={clicked ? 'btn btn-danger' : 'btn btn-primary'}>{clicked ? "Formu kapat" : "Ürün ekle "} {clicked ? <i class="fa-solid fa-minus ms-2"></i> : <i class="fa-solid fa-plus ms-2"></i>}</button></div >
            {clicked ? <AddProduct /> : ""}
            <div>{products && products.length > 0 && typeof products == "object" ? products.map((product) => {
                return (
                    <div class="card mx-3 my-5  " style={{ width: "18rem", display: "inline-block" }} key={product.quantity}>


                        {product.images && product.images.length > 0 ? (
                            <div id={"#carouselExampleControls" + product.price} class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={"http://localhost:5000/" + product.images[0]} class="card-img-top" alt="..." />
                                    </div>
                                    {product.images.map((image) => {
                                        return (<div class="carousel-item">
                                            <img src={"http://localhost:5000/" + product.images[0]} class="d-block w-100" alt="..." />
                                        </div>)
                                    })}

                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target={"#carouselExampleControls" + product.price} data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target={"#carouselExampleControls" + product.price} data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        ) : ""}

                        <div class="card-body">
                            <h5 class="card-title"> <p>{product.name}</p>
                            </h5>
                            <p class="card-text"> {product.price_per_unit} TL</p>

                            <Link to="product-detail" class="btn btn-primary" state={{ product }} >Daha fazla bilgi için.</Link>
                        </div>
                    </div>

                )
            }) : ""}</div>

        </div >
    )
}

export default Products