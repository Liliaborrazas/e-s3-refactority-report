import React, { Component } from 'react';

class Rrss extends Component {
    render() {
        return (
            <React.Fragment>
                <label for="email">Email</label>
                    <input className="input-container" placeholder="Ej: PaquitaR@gmail.com"
                        id="email" type="email" name="email" />
                    <label for="phone">Teléfono</label>
                    <input className="input-container" placeholder="Ej: 666-55-44-33"
                        id="phone" type="number" name="phone" />
                    <label for="linkedin">Linkedin</label>
                    <input className="input-container" placeholder="Ej: linkedin.com/in/paqui.ram"
                        id="linkedin" type="text" name="linkedin" />
                    <label for="github">Github</label>
                    <input className="input-container" placeholder="Ej: @paqui-ram"
                        id="github" type="text" name="github" />
            </React.Fragment>
        );
    }
}

export default Rrss;