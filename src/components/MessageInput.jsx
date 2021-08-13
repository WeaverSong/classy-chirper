import React from 'react';
import '../css/Messages.css';
import swal from 'sweetalert';
import { DateTime } from 'luxon';

export default class MessageBox extends React.Component {
    constructor(props) {
        super (props);
        
        this.state = {
            message: ''
        };
    }

    HandleMessageInputText(e) {
        if (e.target.value.length < 200)
        {
            this.setState({message: e.target.value});
        } else
        {
            swal("Message limit is 200 characters");
            this.setState({message: e.target.value.substring(0, 200)});
        }
    }

    HandleMessageInputKeyUp(e) {
        if (e.key !== "Enter") return;
        if (e.target.value.length <= 1 || e.shiftKey === true) return;
        
        this.props.setMessages([...this.props.Messages, { owner: this.props.me, message: e.target.value, timeStamp: DateTime.now() }]);
        this.setState({message: ''});
    }

    render() {
        return (
            <div className="messageBox">
                    <textarea className="messageInput" rows="2" value={this.state.message} onChange={e => this.HandleMessageInputText(e)} onKeyUp={e => this.HandleMessageInputKeyUp(e)}></textarea>
            </div>
        );
    }
};