import { Col, Container, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Contact.css'
import { useState } from 'react'
import contactImg from '../assets/img/contact-img.svg'
import emailjs from '@emailjs/browser';

export const Contact=()=>{

    
    const [buttonText,setButtonText]=useState('send');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();

      setButtonText('sending...');
  
      // Your EmailJS service ID, template ID, and Public Key
      const serviceId = 'service_qw3usst';
      const templateId = 'template_sxyqqgx';
      const publicKey = 'lSxsax6ksdbar3BE1';
  
      // Create a new object that contains dynamic template params
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Bouighamdane Hassan',
        message: message,
      };
  
      // Send the email using EmailJS
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('Email sent successfully!', response);
          toast.success('Message sent successfully');
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          toast.error('Error sending email');
        });
        setButtonText('send');
    }

   
      
    return(
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                    <img src={contactImg} alt='contact us'/>
                    </Col>
                    <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-1 '>
                                <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                            </Col>
                            
                            <Col sm={6} className='px-1 '>
                            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </Col>
                           
                            <Col>
                            <textarea rows={6}  placeholder='Message'  value={message} onChange={(e) => setMessage(e.target.value)}/>   
                            <button type='submit'><span>{buttonText}</span></button>      
                            </Col>
                        </Row>
                    </form>
                    <ToastContainer />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}