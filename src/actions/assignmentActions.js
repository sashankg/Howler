export function addAssignment(course) {
    return { type: 'ADD_ASSIGNMENT', id: new Date().getTime(), course };
}

export function editAssignment(id, data) {
    return { type: 'EDIT_ASSIGNMENT', id, data };
}

export function deleteAssignment(id) {
    return { type: 'DELETE_ASSIGNMENT', id };
}

export function editAssignmentText(id, text) {
    return (dispatch, getState) => {
        const assignment = getState().assignments.entities[id];
        dispatch(editAssignment(id, Object.assign({}, assignment, { text } ))) 
    }
}
