import quizCompleteImg from '../assets/quiz-complete.png'
import questions from '../questions.js';

export default function Summary({userAnswers}){
    const skippedAnswer = userAnswers.filter((answer) => answer === null);
    const correctAnswer = userAnswers.filter(
        (answer, index) => answer === questions[index].answers[0]
    );
    const skippedAnswersShare = Math.round((skippedAnswer.length / userAnswers.length)* 100);
    const correctAnswersShare = Math.round((correctAnswer.length / userAnswers.length)* 100);
    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

    return (
        <div id="summary"> 
            <img src={quizCompleteImg} alt="Trophy Image"/>
            <h2>Quiz Complete</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedAnswersShare}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAnswersShare}%</span>
                    <span className='text'>anwered correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswersShare}%</span>
                    <span className='text'>anwered incorrect</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) =>{
      
                    let cssClass = 'user-answer';
                                  
                    if(answer === null){
                        cssClass += ' skipped';
                    }else if(answer === questions[index].answers[0]){
                        cssClass += ' correct';
                    }
                    else {
                        cssClass += ' wrong';
                    }
                    return (
                       <li key={index}>
                          <h3>{index + 1}</h3>
                          <p className='question'>{questions[index].text}</p>
                          <p className={cssClass} >{answer ?? 'Skipped'}</p>
                       </li>
                    );
                })}
            </ol>
        </div>
    );
}