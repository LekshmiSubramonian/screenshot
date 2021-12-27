import React, { useEffect, useState } from 'react'
import './ViewAsset.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import {MdAddBox} from 'react-icons/md';
import {RiDeleteBin5Fill} from 'react-icons/ri'

function ViewAsset() {


    const toogleState = useSelector(state => state.toogleState)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) =>{
    setShow(true);
  }


    useEffect(() => {
        let cls = document.getElementsByClassName('view-asset')[0];
        if (toogleState) {
            cls.style.left = "260px";
            cls.style.transition = "all 0.5s ease";
            cls.style.width = "calc(100% - 260px)";
        }
        if (!toogleState) {
            cls.style.left = "68px"
            cls.style.width = "calc(100% - 68px)";
        }
    }, [toogleState])

    return (
        <div className='view-asset'>
            <label className='asset-label'>Asset</label>
            <Link className='btn btn-success' to='/createasset'>Add
            </Link>
            <table className='table table-bordered'>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Code</th>
                        <th scope="col">Entity Type</th>
                        <th scope="col">Entity Name</th>
                        <th scope="col">Add Previleges</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <MdAddBox className='asset-icon' onClick={handleShow}/>
                        </td>
                        <td>
                            <RiDeleteBin5Fill className='asset-icon'/>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose} centered >
                <Modal.Header closeButton>
                <Modal.Title>Add Previleges</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                    <div class="form-row">
                        <div class="col">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                            <label class="form-check-label" for="inlineCheckbox1">Upload</label>
                        </div>
                        <div class="col">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                            <label class="form-check-label" for="inlineCheckbox2">Scheduler</label>
                        </div>
                        <div class="col">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                            <label class="form-check-label" for="inlineCheckbox3">Report</label>
                        </div>
                        <div class="col">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4"/>
                            <label class="form-check-label" for="inlineCheckbox4">Create User</label>
                        </div>
                    </div>
                </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary">
                    Save
                  </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ViewAsset
