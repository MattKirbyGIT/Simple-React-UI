import React, { Component } from 'react';
import Fade from 'react-bootstrap/Fade';

import Icon from './Icon';
import '../../styles/global/Toast.css';


class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeout: props.timeout,
            timer: 0,
            display: false,
            hover: false,
            type: props.type,
            icon: undefined,
            text: props.text,
        }
    }

    startTimer = () => {
        if (this.state.timer === 0 && this.state.timeout) {
            this.setState({ timer: setInterval(this.tick, 1000) });
        }
    }

    tick = () => {
        if (this.state.timeout > 0) {
            let remaining = this.state.timeout - 1;
            this.setState({
                timeout: remaining
            });

            if (remaining === 0) {
                clearInterval(this.state.timer);
               this.setState({display: false})
            }
        }
    }

    componentDidMount() {
        if (this.state.type === 'danger') {
            this.setState({
                icon: <Icon display={true} icon={'exclam'} iconColor={'lightcoral'} size={'2em'} />
            })
        }

        if(this.state.timeout){
            this.startTimer();
        }

        this.setState({display: true})

    }

  

    handleHover = () => {
        this.setState({ hover: !this.state.hover });
    }

   



    render() {
        return (<React.Fragment>
            <Fade appear={true} in={this.state.display} unmountOnExit={true}>
                <div className='TN-box shadow py-2 px-3 m-2' onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} style={{maxWidth: !this.state.display ? '0' : '1000px', transition: 'all 200ms'}}>

                    <div className={'TN-content-box'}>
                        {this.state.icon}                            
                        <div className={'TN-content'} >
                            <p className='lead TN-text my-0 mx-4 text-muted'>{this.props.text}</p>
                            <small className='TN-text-small lead my-0 mx-3'>{this.props.smallText}</small>
                        </div>

                    </div>


                </div>
            </Fade>
        </React.Fragment>);
    }
}

export default Toast;