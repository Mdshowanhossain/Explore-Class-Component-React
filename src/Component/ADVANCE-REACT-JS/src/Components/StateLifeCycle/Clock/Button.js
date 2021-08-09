import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { handleClick, locale } = this.props;
        return (
            <div>
                <button onClick={() => handleClick(locale)}>{locale === "bn-BD" ? "Change The Time" : "ঘড়ী পরির্বতন"}</button>
            </div>
        );
    }
}
export default Button;