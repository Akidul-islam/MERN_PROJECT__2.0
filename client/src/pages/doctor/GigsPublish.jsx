import React from "react";
import { useGigs } from "../../hook/useGigs";
import Layout from "../../shareUi/Layout";
const GigsPublish = () => {
    const { inputValue, changeHandler, gigCreate } = useGigs({
        Image: '',
        title: '',
        category: '',
        price: '',
        details: '',
    }, 'gigs')
    const { Image, title, category, price, details } = inputValue
    return <Layout>
        <form className="" onSubmit={gigCreate} style={{ width: "80%", margin: "0, auto" }}>
            <div className="file-upload">
                <div className="image-upload-wrap">
                    <input className="file-upload-input" onChange={changeHandler} name="Image" type='file' value={Image} />
                    <div className="drag-text">
                        <h3>upload image </h3>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">title</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="title" value={title} onChange={changeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="category">category</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="category" value={category} onChange={changeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="price">price</label>
                <input type="text" className="form-control" name="price" value={price} onChange={changeHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Gigs Details</label>
                <textarea className="form-control" id="exampleFormControlTextarea3" name="details" value={details} onResize={(e) => { }} rows="3" onChange={changeHandler} />
            </div>
            <button className="" type="submit">Submit</button>
        </form>
    </Layout>

}

export default GigsPublish;