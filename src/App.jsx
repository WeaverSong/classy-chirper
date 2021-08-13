import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import User from './components/User';
import MessageBox from './components/MessageInput'
import MessageList from './components/MessageList';
import { DateTime } from 'luxon';
import Loader from './components/Loading';

export default class App extends React.Component {
    constructor (props) {
        super (props);

        this.props = props;

        this.otherPlayers = [
            { name: "Elite archer", desc: "A dangerous archer!", icon: "./assets/elite archer.png" },
            { name: "Bandit", desc: "...", icon: "./assets/bandit warrior.png" },
            { name: "...", desc: "", icon: "./assets/blade singer.png" },
            { name: "Khazad Soldier", desc: "You shall all fall before our legions!", icon: "./assets/Khazad_soldier.png" },
        ];
        this.state = {
            ready: false,
            icon: './assets/icon.png',
            name: 'Lily',
            desc: 'A simple, short description',
            messages: [
                {
                    owner: {icon: './assets/icon.png', name: 'Lily', desc: 'A simple, short description'},
                    message: "Lily, signing out",
                    timeStamp: DateTime.now().minus({minutes: 10})
                },
                {
                    owner: this.otherPlayers[1],
                    message: "And why shouldn't we?",
                    timeStamp: DateTime.now().minus({minutes: 3})
                },
                {
                    owner: this.otherPlayers[0],
                    message: "Because I said so. We must wait until the time is ripe.",
                    timeStamp: DateTime.now().minus({minutes: 3})
                },
                {
                    owner: this.otherPlayers[0],
                    message: "Move too soon and we lose them.",
                    timeStamp: DateTime.now().minus({minutes: 2})
                },
                {
                    owner: this.otherPlayers[2],
                    message: "Someone just logged in.",
                    timeStamp: DateTime.now()
                }
            ]
        };


    };

    render () {
        if (!this.state.ready) return (
            < Loader setReady={i => this.setState({ready: i})} setUserIcon={i => this.setState({icon: i})} setUserName={i => this.setState({name: i})} setUserDesc={i => this.setState({desc: i})} />
        );
        return (
            <div className="flex-right full-size">
                <div className="flex-down players">
                    < User icon={this.state.icon} name={this.state.name} desc={this.state.desc} />
                    < PlayerList Players={this.otherPlayers} />
                </div>
                <div className="flex-up messages">
                    < MessageBox Messages={this.state.messages} setMessages={i => this.setState({messages: i})} me={{name: this.state.name, icon: this.state.icon, desc: this.state.desc}} />
                    < MessageList messages={this.state.messages} />
                </div>
            </div>
        );
    }
};