/* eslint-disable no-unused-vars */
import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Row,Col,Image,ListGroup,Button,Card,Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails } from '../actions/productActions'

function ProductScreen({ match, history }) {
  const [qty,setQty] = useState(1)
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const {loading,error,product} = productDetails

  useEffect(() =>{
    dispatch(listProductDetails(match.params.id))
    
  }, [dispatch, match.params, match.params.id])
  
  const addToCartHandler = () => {
     history.push(`/cart/${match.params.id}?qty=${qty}`)
  }
  
  return (
    <div>
        <a href='/' className='btn btn-light my-3'  style={{textDecoration: "none"}}> Go Back </a>
        {
          loading ?
            <Loader />
            : error
                ? <Message variant='danger'>{error}</Message>
            :(
              <Row>
              <Col md={6}>
                 <Image src={product.image} alt={product.name} fluid/>
              </Col>
    
              <Col md={3}>
                <listGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>
              
                  <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                  </ListGroup.Item>
                  
                  <ListGroup.Item>
                    Price: Rs {product.price}
                  </ListGroup.Item>
                     
                  <ListGroup.Item>
                    Description: {product.description}
                  </ListGroup.Item>
                  </listGroup>
              </Col>
              <Col nd={3}>
                <Card>
                  <ListGroup variant='flush'>
                     <ListGroup.Item>
                       <Row>
                         <Col>Price:</Col>
                         <Col>
                           <strong>Rs {product.price}</strong>
                         </Col>
                       </Row>
                     </ListGroup.Item>
    
                     <ListGroup.Item>
                       <Row>
                         <Col>Status:</Col>
                         <Col>
                            {product.countInStock > 0 ? 'Available✅': 'Not Available ❌' }
                         </Col>
                       </Row>
                     </ListGroup.Item>

                      {product.countInStock>0 &&(
                        <ListGroup.Item>
                          <Row>
                            <Col>Qty</Col>
                            <Col>
                               <Form.Control
                                   as="select"
                                   value={qty}
                                   onChange={(e)=>setQty(e.target.value)}
                                   >
                                      {

                                        [...Array(product.countInStock).keys()].map((x)=> (
                                          <option key={x+1} value={x+1}>
                                               {x+1}
                                          </option>
                                        ))
                                      }
                                     
                               </Form.Control>
                            </Col>

                          </Row>
                        </ListGroup.Item>
                      ) }
                     
                     <ListGroup.Item>

                       <Button 
                       onClick={addToCartHandler}
                       className='btn-block' disabled={product.countInStock===0} typr='button'>Book Now</Button>
                     </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            )
        }

       
    </div>
  )
}

export default ProductScreen