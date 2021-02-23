const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses"

export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())
const createCourse = (course) => {}
const deleteCourse = (courseId) => {}
const updateCourse = (courseId, course) => {}