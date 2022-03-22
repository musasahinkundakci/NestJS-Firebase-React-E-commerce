import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActionCreators from "../../../redux/actions/categoryActions"
import axios from 'axios'
const AddCategory = ({ getCategories, ...props }) => {
    const clickHandler = async (e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const description = nameRef.current.value
        const res = await axios({
            url: 'http://localhost:5000/category/add',
            method: 'POST',
            data: { name, description },
            withCredentials: true,
            headers: {
                authorization: props.token,

            }

        });
        console.log(res)
        await props.actions.getCategories(props.token)
        await getCategories(props.token)
    }
    const descriptionRef = useRef("")
    const nameRef = useRef("")
    return (
        <div><div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Category Name</label>
            <input ref={nameRef} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Furniture etc." />
        </div><div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Description</label>
                <input ref={descriptionRef} type="text" class="form-control" id="exampleFormControlInput1" placeholder="The things usable for home..." />
            </div>
            <button className='btn btn-danger' onClick={clickHandler}>Category ekle</button></div>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoriesReducer,
        token: state.tokenReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActionCreators.getCategories, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCategory)