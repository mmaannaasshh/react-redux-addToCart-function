import React from 'react'
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react';


const CartDetails = () => {
    const [data, setData] = useState([])
    const { id } = useParams();
    const getdata = useSelector((state) => state.cartreducer.carts);
    const compare = () => {
        let compareData = getdata.filter((e) => {
            return e.id == id
        });
        setData(compareData)
    }
    useEffect(() => {
        compare();
    }, [id])
    return (
        <>
            <div className="container mt-2">
                <h2 className='text-center'>Items Detais page</h2>
                <hr />
                <section className='container mt-3'>
                    <div className="iteamsdetails">
                        {
                            data.map((e, i) => {
                                return <div key={i}>
                                    <div className="items_img">
                                        <img src={e.imgdata} alt="" />
                                    </div>
                                    <div className="details">
                                        <Table>
                                            <tr>
                                                <td>
                                                    <p> <strong>Resturent</strong>  : {e.rname} </p>
                                                    <p> <strong>Price</strong>  : ₹ {e.price} </p>
                                                    <p> <strong>Dishess</strong>  : {e.adderss} </p>
                                                    <p> <strong>Total</strong>  : ₹ 300 </p>
                                                </td>
                                                <td>
                                                    <p> <strong>Rating : </strong> <span style={{ background: 'green', color: '#fff', padding: '2px 5px', borderRadius: '5px' }}>{e.rating} ★</span> </p>
                                                    <p> <strong>Order Review : </strong> <span >{e.somedata} </span> </p>
                                                    <p> <strong>Rmove : </strong> <span > <i className='fas fa-trash' style={{ color: 'red', fontSize: '20px', cursior: 'pointer' }} ></i> </span> </p>
                                                </td>
                                            </tr>
                                        </Table>
                                    </div>
                                </div>
                            })
                        }



                    </div>
                </section>
            </div>
        </>
    )
}

export default CartDetails
