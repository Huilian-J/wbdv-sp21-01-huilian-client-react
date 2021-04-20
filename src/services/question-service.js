const QUIZZES_URL = 'https://wbdv-sp21-huilian-server-node.herokuapp.com/api/quizzes';

export const findQuestionsForQuiz = (qid) =>
    fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())

export default {
    findQuestionsForQuiz
}