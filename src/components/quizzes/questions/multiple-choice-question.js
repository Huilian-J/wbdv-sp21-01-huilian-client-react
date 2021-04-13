import React, {useState} from 'react'

const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState("")
    const [grade, setGrade] =useState(false)
    return(
        <div>
            <div className="row">
                <h4 className="ml-3">{question.question}</h4>
                {
                    grade &&
                    <div className="ml-2 mt-1">
                        {
                            question.correct === answer &&
                            <i className="fas fa-check"></i>
                        }
                        {
                            question.correct !== answer &&
                            <i className="fas fa-times"></i>
                        }
                    </div>
                }
            </div>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li
                                className={`list-group-item 
                                ${grade && question.correct === choice? "list-group-item-success" : ""}
                                ${grade && 
                                    question.correct !== choice && 
                                    answer !== question.correct &&
                                    answer === choice?
                                    "list-group-item-danger" : ""}`}>
                                <label>
                                    <input
                                        onClick={() => setAnswer(choice)}
                                        type="radio" name={question._id} className="mr-1"/>
                                    {choice}
                                </label>
                            </li>
                        )

                    })
                }
            </ul>
            <h6 className="mt-2">Your answer: {answer}</h6>
            <button
                onClick={() => setGrade(true)}
                className="btn btn-success mb-3">
                Grade
            </button>
        </div>
    )
}

export default MultipleChoiceQuestion