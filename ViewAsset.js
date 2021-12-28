import React, { useEffect, useState } from 'react'
import './ViewAsset.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import {MdAddBox} from 'react-icons/md';
import {RiDeleteBin5Fill} from 'react-icons/ri'
import MTable from '../components/MTable'
import {ImCross} from 'react-icons/im'
import { FaUserAlt} from 'react-icons/fa'
import {ImPlus} from 'react-icons/im'
import Tooltip  from '@mui/material/Tooltip'
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        maxWidth: '90vw'
    },
    tableHeader:{
        background: 'linear-gradient(to left, #5a3f37, #2c7744)'
    },
   
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        fontSize:'17px',
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light),
        marginRight:'10px'
    },
    name: {
        fontWeight: 'bold',
        color: 'black',
        fontSize:'17px'
    },
    paper:{
        borderRadius:15
    }
   
  }));

function ViewAsset() {

    const toogleState = useSelector(state => state.toogle.toogleState) 

    const columns = ['Asset id','Asset Name','Asset Code','Asset Type','Actions']
    const datas =[{id:'1',code:'smrt1',type:'app',name:'smartrepo',},{id:'1',code:'smrt1',type:'app',name:'smartrepo',},{id:'1',code:'smrt1',type:'app',name:'smartrepo',},{id:'1',code:'smrt1',type:'app',name:'smartrepo',},{id:'1',code:'smrt1',type:'app',name:'smartrepo',},{id:'1',code:'smrt1',type:'app',name:'smartrepo',},{id:'1',code:'smrt1',type:'app',name:'smartrepo',},{id:'1',code:'smrt1',type:'app',name:'smartrepo',},{id:'1',code:'smrt1',type:'app',name:'smartrepo',},{id:'1',code:'smrt1',type:'app',name:'smartrepo',},{id:'1',code:'smrt1',type:'app',name:'smartrepo',}]
    
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


    const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    return (
        <div className='view-asset'>
            <div className='asset-div'>
                <label className='asset-label'>Asset</label>
                <Link className='btn btn-success' to='/createasset'>Add
                </Link>
            </div>
            
            <Paper className={classes.paper}>
                <TableContainer className={classes.tableContainer}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className={classes.tableHeader}>
                    <TableRow>
                        {
                            columns.map((colData)=>(
                                <TableCell className={classes.tableHeaderCell}>{colData}</TableCell>
                            ))
                        }
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {datas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow key={row.id}>
                        <TableCell>
                            <Typography >{row.id}</Typography>
                        </TableCell>
                        <TableCell>
                            <Grid container>
                                <Grid item lg={2}>
                                    <Avatar alt={row.name} src='.' className={classes.avatar}/>
                                </Grid>
                                <Grid item lg={10} style={{display:'flex',alignItems:'center',}}>
                                    <Typography className={classes.name}>{row.name}</Typography>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell>
                            {row.code}
                        </TableCell>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>
                            <Tooltip title="View" arrow placement="top">
                                <span>
                                <FaUserAlt style={{color:'green',marginRight:'10px',fontSize:'18px',cursor:'pointer'}} />
                                </span>
                            </Tooltip>
                            <Tooltip title="Add Previleges" arrow placement='top'>
                                <span>
                                <ImPlus style={{color:'orange',marginRight:'10px',fontSize:'18px',cursor:'pointer'}} />
                                </span>
                            </Tooltip>
                            <Tooltip title="Delete" arrow placement="top">
                                <span>
                                <ImCross style={{color:"red",fontSize:'18px',cursor:'pointer'}} />
                                </span>
                            </Tooltip>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={datas.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        style={{}}
                    />
            </Paper>

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
