import React, { Component } from 'react';

class Timer extends Component {
    state = { 
        eventDate:'' ,
        timerID:null
    }

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.setState({ eventDate: this.props.eventDate});
    }

    render() {
        const { eventDate} = this.state;
        this.TimerHandler(eventDate);
        return ( <div><div id="result"></div></div> );
    }

    TimerHandler(eventDate) {
        var id= setInterval(() => {
            let eventMilliseconds = new Date(eventDate).getTime();
            let currentMilliseconds = new Date().getTime();

            let millisecondDifference = eventMilliseconds - currentMilliseconds;

            let remainingDays= Math.floor( millisecondDifference/ (1000*60*60*24));
            let remainingHours =Math.floor( millisecondDifference % (1000*60*60 * 24)/(1000*60*60));
            let remainingMinutes =Math.floor( millisecondDifference % (1000*60*60 )/(1000*60));
            let remainingSeconds =Math.floor( millisecondDifference % (1000*60 )/(1000));

            let result = remainingDays + "d " + remainingHours + "h " + remainingMinutes+ "m " + remainingSeconds +"s";

            document.getElementById('result').innerHTML = result;

            if(millisecondDifference<0){
                clearInterval(id);
                document.getElementById('result').innerHTML="Event Reached";
            }
        }, 1000);

        return id;
    }
}
 
export default Timer ;