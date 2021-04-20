const QUIZZES_URL = 'https://wbdv-sp21-huilian-server-node.herokuapp.com/api/quizzes';

export const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}

export const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

export default {
    findAllQuizzes, findQuizById
}