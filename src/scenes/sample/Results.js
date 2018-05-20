import React, { PureComponent } from 'react'
import './Results.css'

class Results extends PureComponent {
    render () {
        return (
                <div>
                <div className="scene-sample">
                <h1>Learning Journey</h1>
                <hr/>
                <form>
                <input type="text" width="100%" class="bar" value="python"/>
                </form>
                <hr/>
                </div>
                <div className="card-container">
                <a href="/path/4">
                <img src="/featured.png" class="ribbon"/>
                <div className="search-card">
                <h2>Learning Python Without Any Programming Experience</h2>
                <p>This is my first time trying any programming language, so I will be doing a lot of searching and experimenting for this.</p>
                <p>I found some nice lessons online at <a href="https://www.learnpythonthehardway.org/"><u>Learn Python the Hard Way</u></a> which sounds a little daunting, but I am very excited to start working on it. I will also be looking at other resources such as reddit and stackoverflow if I get stuck. Wish me luck!</p>
                </div>
                </a>
                </div>
                <div className="card-container">
                <img src="/sos.png" class="ribbon"/>
                <div className="search-card">
                <h2>Making a Twitter Bot With Python</h2>
                <p>If there’s one thing this budding computational linguist finds delightful, it’s computers that talk to us. From SmarterChild to horse_ebooks to Beetlejuice, I love the weirdness of machines that seem to have a voice, especially when it’s a Twitter bot that adds its murmur to a tweetstream of accounts mostly run by other humans.</p>
                </div>
                </div>
                <div className="card-container">
                <div className="search-card">
                <h2>Using Matplotlib in Python</h2>
                <p>Matplotlib is a Python 2D plotting library which produces publication quality figures in a variety of hardcopy formats and interactive environments across platforms.</p>
                <p>I needed to draw some graphs in my data science course, so this is my attempt at using Matplotlib to do my homework.</p>
                </div>
                </div>
                <div className="card-container">
                <div className="search-card">
                <h2>Building a website with python using the Django framework</h2>
                <p>I've been told that Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. So I'm very excited to try it out for the first time.</p>
                <p>Follow me to see how it goes, and hopefully I'll have a website to show you by the end of this journey!</p>
                </div>
                </div>
                </div>
        )
    }
}

export default Results
