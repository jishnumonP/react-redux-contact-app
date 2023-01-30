import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify'
const Home = () => {
    const navigate = useNavigate();
    const contacts = useSelector(state=>state);
    const dispatch = useDispatch()
    const deleteContact =(id)=>{
dispatch({type:"DELETE_CONTACT",payload:id})
toast.success(" Contact Deleted successfully!!")

    }
  return (
    <Container style={{margin:"10px"}}>
    <Row>
      <Col sm={6}><Table striped bordered hover>
      <thead>
        <tr>
          <th>Sl no.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {

          contacts.map((contact,id)=>{
            return <tr key={id }>
            <td>{id+1}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.number}</td>
            <td>
            <Button variant="primary" onClick={()=>navigate(`/edit/${contact.id}`)} style={{margin:'5px'}}>Edit</Button>
            <Button variant="danger" onClick={()=>deleteContact(contact.id)} >Delete</Button>
              </td>
          </tr>

          })
        }
       
       
        
      </tbody>
    </Table>
    </Col>
      <Col sm={6}>  <Button variant="dark" onClick={()=>navigate('/add')} >Add Contact</Button></Col>
    
    </Row>
    </Container>
    
  )
}

export default Home