import React from 'react'

export default function Home() {
    return (
        
        <div>
            <div id className="title">
                <h1>Frequently Asked Questions</h1>
            </div>
            <div id className="questions">
                <ul>
                <li className="whatisit">What is Neflix?</li>
                <li className="cost">How much does netflix cost?</li>
                <li className="where">Where can I watch?</li>
                <li className="cancel">How do I cancel?</li>
                <li className="whattowatch">What can I watch on Netflix?</li>
                </ul>
                <div id className="tryNow">
                    <input id="email" type="email" placeholder="Email address"></input>
                    <p id="tryItNow">TRY IT NOW ></p>
                </div>
                <div id className="footer">
                <p>Ready to watch? Enter your email to create or access your account.</p>
                </div>
            </div>



        </div>

    )
}
