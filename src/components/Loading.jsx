import React from 'react';
import '../css/Loading.css';
import swal from 'sweetalert';

export default class Loader extends React.Component {
    constructor (props) {
        super (props);
        this.setReady = props.setReady;
        this.setUserIcon = props.setUserIcon;
        this.setUserName = props.setUserName;
        this.setUserDesc = props.setUserDesc;

        this.state = {
            name: '',
            desc: ''
        }
    };

    HandleSignIn() {
        if (this.state.name === '' || document.getElementById('bIcon').value === "")
        {
            swal('You must have a name and icon!');
            return;
        }

        let reader = new FileReader();
        reader.readAsDataURL(document.getElementById('bIcon').files[0]);
        reader.onload = e =>
        {
            let image = new Image();
            image.src = e.target.result;
            image.onload = () =>
            {
                this.setReady(true);
                this.setUserIcon(image.src);
                this.setUserName(this.state.name);
                this.setUserDesc(this.state.desc);
            };
        }
    };

    render() {
        return (
            <div className="LoaderBackground">
                <div className="signIn">
                    <h2>Sign in:</h2>
                    <div className="infoSet">
                        <label htmlFor="Name">Name: </label>
                        <input type="text" name="Name" id="Name" value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
                    </div>
                    <br />
                    <div className="infoSet">
                        <label htmlFor="Description">Description: </label>
                        <input type="text" name="Description" id="Description" value={this.state.desc} onChange={e => this.setState({desc: e.target.value})} />
                    </div>
                    <div className="infoSet">
                        <label htmlFor="bIcon">Icon: </label>
                        <input type="file" className="bIcon" id="bIcon" accept="image/png" title="a" />
                    </div>
                    <button className="signInButton" onClick={() => this.HandleSignIn()}>Sign in</button>
                </div>
            </div >
        );
    }
}