import React from 'react';

class Assignment extends React.Component {
    render() {
        const { text } = this.props.assignment;
        return (
            <div className="assignment">
                <span className="assignmentText">{ text }</span>
            </div> 
        );
    }
}

export default Assignment;
