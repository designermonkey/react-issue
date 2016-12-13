import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Something extends React.Component {
    render() {
        return (
            <CSSTransitionGroup
                transitionName="navigation"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                <p>Hello World</p>
            </CSSTransitionGroup>
        )
    }
}
