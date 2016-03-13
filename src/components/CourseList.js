import React from 'react';
import { connect } from 'react-redux';

class CourseList extends React.Component {
    render() {
        const courses = this.props.courses.map( course => (<div>{course}</div>));
        return (
            <div className="courseList">
                { courses }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses.array.map(id => state.entities[id])
    }
}

export default connect(mapStateToProps)(CourseList);
