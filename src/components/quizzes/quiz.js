import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import QuestionService from '../../services/question-service'

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        QuestionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
    }, [])
    return(
        <div>
            <h2>Quiz</h2>
            <ul>
                {
                    questions.map(question =>
                    <li>
                        <Question question={question}/>
                    </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Quiz