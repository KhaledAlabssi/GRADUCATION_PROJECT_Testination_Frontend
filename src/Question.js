import React from 'react'

export default function Question({currentQuestion, test, nextQuestion, score, result}) {
    return (
        <div>
            {test.length === currentQuestion ? (
                <>
                <h3>Result is: {result}</h3>
                <h3>Score is: {score}</h3>
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
