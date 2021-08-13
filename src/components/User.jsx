import React from 'react';
import '../css/User.css';

export default class user extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let shortName = this.props.name.substring(0, 10);
        if (this.props.name.length > 10) {
            shortName += "..."
        }
        let shortDesc = this.props.desc.substring(0, 20);
        if (this.props.desc.length > 20) {
            shortDesc += "..."
        }
    
        return (
            <div className="user">
                <img className="userIcon" src={this.props.icon} alt="" />
                <div className="userText">
                    <div className="userName tooltip">{shortName}<span className="tooltiptext">{this.props.name}</span></div>
                    <div className="usreDesc tooltip">{shortDesc}<span className="tooltiptext">{this.props.desc}</span></div>
                </div>
            </div>
        );
    }
}