const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/huilian/courses"

export const createModule = (courseId, module) =>
    fetch(`${COURSES_URL}/${courseId}/modules`,{
        method:"POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());


export const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
        .then(response => response.json());

const api = {
    createModule, findModulesForCourse
}

export default api
