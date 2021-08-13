import React from 'react';
import User from './User';
import '../css/PlayerList.css';
import { v4 as uuid } from 'uuid';

export default class PlayerList extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="PlayerList">
                {
                    this.props.Players.map(u => {
                        return < User name={u.name} desc={u.desc} icon={u.icon} key={uuid()} />
                    })
                }
            </div>
        );
    }
}