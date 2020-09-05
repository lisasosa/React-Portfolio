import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Header from '../components/Header'
import Content from '../components/Content'

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                name: '',
                email: '',
                message: '',
                disabled: false,
                emailSent: null,
            }
        }

        render() {
            return(
                <div>
                  <Header title={this.props.title} />
                  
                  <Content>
                  <p>phone number: 832-275-4532</p>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                      <Form.Label htmlFor="full-name">Name</Form.Label>
                      <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group action="mailto:Sosa.elizabeth@ymail.com">
                      <Form.Label htmlFor="message">Message</Form.Label>
                      <Form.Control id="message" name="message" as="textarea" rows="5" value={this.state.message} onChange={this.handleChange} />
                    </Form.Group>
                    <button className="d-inline-block btn btn-primary" variant="primary" type="submit" disabled={this.state.disabled}>Send</button>
                  
                    {this.state.emailSent === true && <p className="d-inline sucess-msg">Email Sent</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                  </Content>
                </div>
            )
        }
        
    }


export default ContactPage;