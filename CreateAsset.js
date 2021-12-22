import React from 'react'
import './CreateAsset.css'


function CreateAsset() {

    return (
        <div className='create-asset'>
            <form className='asset'>
                <h3>Create Asset</h3>
                <div className="form-group">
                    <label>Code</label>
                    <input type="email" className="form-control" id="encode" placeholder="Enter entity code"/>
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label>Entity Name</label>
                    <input type="text" className="form-control" id="enname" placeholder="Entity Name"/>
                </div>
                <div className="form-group">
                    <label>Entity Type</label>
                    <input type="text" className="form-control" id="entype" placeholder="Entity Type"/>
                </div>
                <div className='btns'>
                    <button type="submit" className="btn btn-success">Submit</button>
                    <button type="submit" className="btn btn-primary">Add previleges</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAsset
