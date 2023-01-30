import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AddContact = () => {
  const contacts = useSelector((state)=>state)
  const dispatch = useDispatch();
const navigate = useNavigate()
const [name, setName] = useState('')

const [email, setEmail] = useState('')
const [number, setNumber] = useState('')

const handleSubmit=(e)=>{
  e.preventDefault();

  const checkEmail = contacts.find(contact => contact.email === email && email)
  const checkNumber = contacts.find(contact => contact.number === parseInt(number) )
  if(checkEmail){
    toast.error("Email alredy exist! Try new one")
  }
  if(checkNumber){
    toast.error("Number alredy exist! Try new one")
  }

  const data ={
    id :contacts[contacts.length - 1].id+1,
    name:name,
    email:email,
    number:number
  }
  dispatch({type:"ADD_CONTACT",payload:data})
  setTimeout(() => {
    navigate('/')
  }, 1000);
}
  return (
    <Container style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',padding:"30px"}}>
   <Row>
   <h1>WELCOME TO  ADD CONTACT
    </h1> 
      <Col sm={12} style={{display:"flex",justifyContent:'center',alignItems:'center',padding:'10px'}}> 
      <Card style={{ width: '30rem',padding:'10px' }} className="shadow p-3 mb-5 bg-white rounded">
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={e=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control type="text" placeholder="Enter number" value={number} onChange={e=>setNumber(e.target.value)}  />
      </Form.Group>

      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
 
    </Card>
      </Col>
   </Row>
 
    
  
    </Container>
  )
}

export default AddContact