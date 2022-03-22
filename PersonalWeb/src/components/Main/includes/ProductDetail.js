import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetail = ({ ...props }) => {
    const loc = useLocation()
    const { product } = loc.state
    console.log(product)
    return (

        <div className='container my-5 mx-5 px-5 py-5'>    <h3>Detaylı Bilgi</h3>   <div class="card mb-3" style={{ maxWidth: "50rem" }}>

            <div class="row g-0">
                <div class="col-md-4">
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
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <p class="card-text">{product.price}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default ProductDetail