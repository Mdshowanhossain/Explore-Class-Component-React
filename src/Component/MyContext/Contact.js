import React, { Component } from 'react';
import { OurConsumer } from './MyContext';

class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Hello!
                    <OurConsumer>
                        {
                            message => {
                                return message;
                            }
                        }

                    </OurConsumer>

                </h1>
            </div>
        );
    }
}

export default Contact;