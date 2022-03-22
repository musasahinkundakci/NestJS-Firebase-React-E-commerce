import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as userActionCreators from "../../../redux/actions/userActions"
import * as productActionCreators from "../../../redux/actions/productActions"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const AddProduct = ({ ...props }) => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [images, setImages] = useState(['default.png']);
    const [localImages, setLocalImages] = useState([]);
    const [body, setBody] = useState();
    const [categories, setCategories] = useState()
    const [selectedCategory, setSelectedCategory] = useState("")
    const clickButton = (e) => {
        document.getElementById('selectImage').click();
    };
    function getCategories() {
        axios({
            method: "GET",
            url: "http://localhost:5000/category",
            withCredentials: true,
            crossDomain: true,
            headers: {
                authorization: props.token
            }
        }).then(categoriesres => { console.log(categoriesres); setCategories(categoriesres.data) });
    }
    const addProduct = async (e) => {
        e.preventDefault()
        console.log(props.token)
        var formData = new FormData();
        for (const key of Object.keys(images)) {
            formData.append('files', images[key]);
            console.log(images[key]);
        }
        formData.append('name', name);
        formData.append('price_per_unit', price);
        formData.append('quantity', quantity);
        formData.append("category", selectedCategory)
        console.log(selectedCategory)
        try {
            const res = await axios({
                url: 'http://localhost:5000/product/add',
                method: 'POST',
                data: formData,
                withCredentials: true,
                headers: {
                    authorization: props.token,
                    'Content-Type': 'multipart/form-data',
                }

            });
            console.log(res)
            await props.actions.getProducts(props.token)
        } catch (error) {
            console.log(error)
        }
    }
    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }
    const priceChangeHandler = (e) => {
        setPrice(e.target.value)
    }
    const quantityChangeHandler = (e) => {
        setQuantity(e.target.value)
    }
    const onChangeImages = (files) => {
        let arr = [];
        let arrLoc = [];
        for (let i = 0; i < files.length; i++) {
            let a = URL.createObjectURL(files[i]);
            arrLoc.push(a);
            arr.push(files[i]);
            console.log(a);
        }

        setLocalImages(
            arrLoc
        );
        console.log(localImages);
        setImages(arr);
    };
    useEffect(() => {
        getCategories()
    }, [])
    return (
        <div className='my-5'>
            <div className="card">
                <div className="card-body">{localImages.length > 0 ? localImages.map((address) => {
                    return (
                        <>
                            <a target="_blank" href={address}> <img src={address}
                                className="newPostImage"
                                style={{ width: "5rem" }} /></a>
                        </>
                    );
                }) : <img style={{ width: "10rem" }} src="/default.png" />}  </div>
            </div>
            <br />
            <label for="formFile" class="form-label">
                Resim Yüklemek için
            </label>
            <br />
            {localImages.map((image) => {
            })}
            <input
                class="form-control mb-4"
                type="file"
                multiple
                id="selectImage"
                style={{ display: 'none' }}
                onChange={(e) => {
                    onChangeImages(e.target.files);
                }}
            />    <span
                class="badge mb-3"
                type="button"
                onClick={() => clickButton()}
                style={{ backgroundColor: "#00ADB5" }}
            >
                Resim Seç
            </span>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Product Name</label>
                <input onChange={nameChangeHandler} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Car etc." />
            </div><div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Price</label>
                <input onChange={priceChangeHandler} type="text" class="form-control" id="exampleFormControlInput1" placeholder="25TL" />
            </div><div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Quantity</label>
                <input onChange={quantityChangeHandler} type="text" class="form-control" id="exampleFormControlInput1" placeholder="3    " />
            </div>
            {categories ? (
                <div className='mb-3'> <select class="form-select" aria-label="Default select example">
                    <option selected disabled>Kategoriler</option>
                    {
                        categories.map((category, index) => {

                            return <option onChange={(e) => { setSelectedCategory(categories[index]); console.log(selectedCategory) }} value="1">{category.name}</option>
                        })
                    }

                </select></div>
            ) : ""}
            <button className='btn btn-danger' onClick={addProduct}>Product ekle</button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return {
        auth: state.authReducer,
        token: state.tokenReducer,
        userCred: state.usercredReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            changeAuth: bindActionCreators(userActionCreators.changeAuth, dispatch),
            changeToken: bindActionCreators(userActionCreators.changeToken, dispatch),
            changeUserCred: bindActionCreators(userActionCreators.changeUserCred, dispatch),
            getProducts: bindActionCreators(productActionCreators.getProducts, dispatch)
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)