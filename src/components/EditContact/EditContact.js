import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate,useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const EditContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [name, setName] = useState('')

  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  
    const {id}=useParams();

    const contacts = useSelector(state=>state)
    const currentContact = contacts.find(contact => contact.id === parseInt(id))

    useEffect(() => {

      if(currentContact){
        setName(currentContact.name)
        setEmail(currentContact.email)
        setNumber(currentContact.number)
      }
    
    }, [currentContact])

    const handleSubmit=(e)=>{
      e.preventDefault();
    
      const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email && email)
      const checkNumber = contacts.find(contact =>contact.id !== parseInt(id) && contact.number === parseInt(number) )
      if(checkEmail){
        toast.error("Email alredy exist! Try new one")
      }
      if(checkNumber){
        toast.error("Number alredy exist! Try new one")
      }
    
      const data ={
        id :parseInt(id),
        name:name,
        email:email,
        number:number
      }
      dispatch({type:"UPDATE_CONTACT",payload:data})
      setTimeout(() => {
        navigate('/')
      }, 1000);
    }

  return (
    <Container style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',padding:"30px"}}>
  {

    currentContact ? <Row>
    <h1>EDIT CONTACT {id}
     </h1> 
       <Col sm={12} style={{display:"flex",justifyContent:'center',alignItems:'center',padding:'10px'}}> 
       <Card style={{ width: '30rem',padding:'10px' }} className="shadow p-3 mb-5 bg-white rounded">
       <Form onSubmit={handleSubmit}>
       <Form.Group className="mb-3" >
        
         <Form.Control type="text" placeholder="Enter your name" value={name} onChange={e=>setName(e.target.value)}/>
       </Form.Group>
 
       <Form.Group className="mb-3" >
       
         <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} />
       </Form.Group>
       <Form.Group className="mb-3" >
        
         <Form.Control type="text" placeholder="Enter number" value={number} onChange={e=>setNumber(e.target.value)} />
       </Form.Group>
 
       <Button variant="primary" type="submit" style={{margin:'5px'}}>
       UPDATE
       </Button>
      <Link to='/'>
      <Button variant="danger" type="submit">
       CANCEL
       </Button>
      </Link> 
     </Form>
  
     </Card>
       </Col>
    </Row>:(
       <h1>EDIT CONTACT {id} not exist
       </h1> 
    )
  } 
  
     
   
     </Container>
  )
}

export default EditContact