import React from 'react'

const MultipleChoiceQuestion = ({question}) => {
    return(
        <div>
            <h4>{question.question}</h4>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className="list-group-item">
                                <label>
                                    <input type="radio" name={question._id} className="mr-1"/>
                                    {choice}
                                </label>
                            </li>
                        )

                    })
                }
            </ul>
            <h6 className="mt-2">Your answer: {question.correct}</h6>
            <button className="btn btn-success mb-3">Grade</button>
        </div>
    )
}

export default MultipleChoiceQuestion