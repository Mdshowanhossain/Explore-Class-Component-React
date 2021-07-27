import React, { Component } from 'react'
import InlineCss from './InlineCss'
import ModuleCss from './ModuleCss'
import ObjectCss from './ObjectCss'

export default class CssParent extends Component {
    render() {
        return (
            <div>
                <InlineCss />
                <ObjectCss />
                <ModuleCss />
            </div>
        )
    }
}
