import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";

const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        //TODO: implement this in a separate service file
        fetch("http://localhost:3000/api/quizzes")
            .then(response => response.json())
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div>
            <h2>Quizzes</h2>
            <ul className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <div className="list-group-item">
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </Link>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    <button className="btn btn-primary float-right">
                                        Start
                                    </button>
                                </Link>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default QuizzesList