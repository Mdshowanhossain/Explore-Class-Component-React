import React, { Component } from 'react';

class FormHandle extends Component {
    state = ({
        title: '',
        textArea: '',
        option: '',
        isChecked: '',
    })


    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            })
        } else if (e.target.type === 'textarea') {
            this.setState({
                textArea: e.target.value,
            })
        }
        else if (e.target.type === 'select-one') {
            this.setState({
                option: e.target.value,
            })
        }
        else if (e.target.type === 'checkbox') {
            this.setState({
                isChecked: e.target.value,
            })
        }
        else {
            console.log('Nothing Here');
        }
    }


    handleSubmit = (e) => {
        const { title, textArea, option, isChecked } = this.state;
        e.preventDefault();
        console.log(title, textArea, option, isChecked);
    }

    render() {
        const { title, textArea, option, isChecked } = this.state;
        return (
            <div>
                <form>
                    <input type="text" placeholder="Enter Your Title" value={title} onChange={this.handleChange} /><br /><br />
                    <textArea name="text" value={textArea} onChange={this.handleChange} /><br /><br />
                    <select value={option} onChange={this.handleChange}>
                        <option value="SOHAN">SOHAN</option>
                        <option value="OSMAN">OSMAN</option>
                    </select><br /><br />
                    <input type="checkbox" value={isChecked} onChange={this.handleChange} name="checkBox" /><br /><br />
                    <input type="submit" value="submit" onClick={this.handleSubmit} />
                </form>
            </div >
        );
    }
}
export default FormHandle;