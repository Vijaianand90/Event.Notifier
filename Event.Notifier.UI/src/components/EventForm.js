import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class EventForm extends Component {
    state = { 
        eventName:'',
        eventDate:'',
        eventTime:'',
        errors:{
            eventName:'',
            eventDate:'',
            eventTime:''
        }
     }

    validate=()=>{
        let eventNameError= '';
        let eventDateError= '';

        if(this.state.eventName===''){
            eventNameError="Event Name is required";
        }
        else if(this.state.eventName.length>50){
            eventNameError="Event Name length Exceeded";
        }

        if(this.state.eventDate===''){
            eventDateError="Event Date is required";
        }

        if(eventNameError !==''){
            this.setState({ errors :{ 'eventName' : eventNameError} });
            return false;
        }

        if(eventDateError !==''){
            this.setState({ errors :{ 'eventDate' : eventDateError} });
            return false;
        }

        return true;
       
    }

    submitHandler=(e)=>{
        e.preventDefault();
        const isValid= this.validate();
        if( isValid===true){
            console.log(this.state);
        }
        else
        {
            console.log('invalid');
        }
    }

    changeHandler=(e)=>{
        let name= e.target.name;
        let value= e.target.value;

        this.setState( { [name] :value });
     }

    render() { 
        const {eventName, eventDate, eventTime} = this.state;

        return ( <div>
            <Container>
                <Row>
                    <div></div>
                    <br/>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={this.submitHandler}>
                            <Row>
                                <Col>
                                    <Form.Control  name="eventName" placeholder="Event Name" onChange={this.changeHandler} />
                                </Col>
                                <Col>
                                    <Form.Control  name="eventDate" placeholder="Event Date" type="date" onChange={this.changeHandler} />
                                </Col>
                                <Col>
                                    <Form.Control name="eventTime" placeholder="Event Time" type="time"  onChange={this.changeHandler} />
                                </Col>
                                <Col>
                                    <Button type="submit">Add Event</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div style={{ color:'red'}}>{this.state.errors.eventName}</div>
                                </Col>
                                <Col>
                                    <div style={{ color:'red'}}>{this.state.errors.eventDate}</div>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div> );
    }
}
 
export default EventForm;