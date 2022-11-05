import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';

import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';


const Header = () => {
    const getdata = useSelector((state) => state.cartreducer.carts);
    console.log(getdata);




    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Navbar className='py-3' bg="dark" variant="dark">
                <Container>
                    <NavLink className='text-decoration-none text-light mx-3' to="/">Add To Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink className='text-decoration-none text-light' to="/cart">Home</NavLink>

                    </Nav>
                    <Badge badgeContent={getdata.length} color="primary" id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <i className="fa-sharp fa-solid fa-cart-shopping text-light" style={{ fontSize: '25px', cursor: 'pointer' }} ></i>
                    </Badge>
                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getdata.length ?
                            <div className='cart_details' style={{ width: '24rem', padding: '10px' }} >
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Resturent name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e,i)=>{
                                                return <tr key={i}>
                                                    <td>
                                                     <NavLink to={`/cart/${e.id}`}> <img src={e.imgdata} style={{width:'5rem',height:'5rem'}} alt="" /></NavLink>  
                                                    </td>
                                                    <td>
                                                        <p>{e.rname} </p>
                                                        <p> Price :₹ {e.price} </p>
                                                        <p> Quentity : {e.qnty} </p>
                                                        <p style={{color:'red',fontSize:'20px',cursion:'pointer'}}> <i className='fas fa-trash small-trash' ></i> </p>
                                                    </td>
                                                    <td className='mt-5' style={{color:'red',fontSize:'20px',cursion:'pointer'}}>
                                                    <i className='fas fa-trash large-trash' ></i>

                                                    </td>
                                                </tr>
                                            })
                                        }
                                        <p className='text-center'>Total : ₹ 300</p>
                                    </tbody>
                                </Table>
                            </div> : <div className='cart_details d-flex justify-content-center align-items-center' style={{ width: '22rem', padding: '10', position: 'relative' }} >
                                <i className='fas fa-close smallclose' style={{ position: 'absolute', top: '2px', right: '12px', fontSize: '23px', cursor: 'pointer' }} onClick={handleClose} ></i>
                                <p style={{ fontSize: '22px' }} >Your cart is empty</p>
                                <img src="/images/cart.gif" alt="" className='emptycart_img' style={{ width: '5rem', padding: '10' }} />
                            </div>
                    }


                </Menu>
            </Navbar>
        </>
    )
}

export default Header
