import React from 'react';
import '../css/MessageList.css';
import { DateTime } from 'luxon';
import {v4 as uuid} from 'uuid';

class Message extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        let height = 70;
        let newLines = (this.props.message.match(/\n/g) || []).length;
        if (newLines > 4)
        {
            height = newLines * 20 - 10;
        }
        return (
            <div className="message" key={this.props.owner.name + " : " + this.props.timeStamp.toMillis()} style={{ minHeight: height }}>
                <div className="messageIcon tooltip"><img alt="" src={this.props.owner.icon} /><span className="tooltiptext">{this.props.owner.name}</span></div>
                <p className="messageText">{this.props.message}</p>
                <div className="messageTime">{this.props.timeStamp.toLocaleString(DateTime.DATETIME_FULL)}</div>
            </div>
        );
    }
}


export default class MessageList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const endRef = React.createRef();

        this.scrollToBottom = () =>
        {
            endRef.current?.scrollIntoView()
        }
    
        return (
            <div className="messageList">
                {
                    this.props.messages.map(m => < Message owner={m.owner} message={m.message} timeStamp={m.timeStamp} key={uuid()} />)
                }
                <div ref={endRef} />
            </div>
        );
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }
}