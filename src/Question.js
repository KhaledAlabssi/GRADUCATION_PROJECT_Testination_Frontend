import React from 'react'

export default function Question({test_id, submitTest, currentQuestion, test, nextQuestion, score, result}) {
    return (
        <div>
            {test.length === currentQuestion ? (
                <>
                {submitTest()}
                <h3>Your score is: {result} out of {score}.</h3>
                
                </>

            ) : (
                <>
                <h3>{test[currentQuestion].body} :</h3>
            <button className='answer-button' onClick={nextQuestion}>{test[currentQuestion].option_1}</button>
            <br />
            <button className='answer-button' onClick={nextQuestion}>{test[currentQuestion].option_2}</button>
            <br />
            <button className='answer-button' onClick={nextQuestion}>{test[currentQuestion].option_3}</button>
            <br />
            <button className='answer-button' onClick={nextQuestion}>{test[currentQuestion].option_4}</button>

                </>
            )}
            
            
        </div>
    )
}
