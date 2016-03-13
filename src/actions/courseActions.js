export function addCourse() {
    return { type: 'ADD_COURSE' };
}

export function editCourse(id, data) {
    return { type: 'EDIT_COURSE', id, data };
}

export function deleteCourse(id) {
    return { type: 'DELETE_COURSE', id }
}
