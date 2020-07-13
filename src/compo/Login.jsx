import React from 'react'
import './Login.css'

export default function Login(){
return(
    <div>
        <nav className="login-nav">
            <h1 className="adoreit-name">Adoreit</h1>
            <a className="join-now-btn" href="">Join now</a>
            <a className="sign-in-btn"  href="">Sign in</a>
        </nav>
        <div className="main-window">
            <div className="login-window-left">
                <div className="tagline-container">
                    <p className="tagline">
                        Where <span>people</span>  come <br/> for a <spa>reason.</spa>
                    </p>
                </div>
                <div className="adoreit-features-container">
                    <p className="why-adoreit">Why Adoreit?</p>
                    <ul>
                        <li className="why-adoreit">Find Mentorship and excel your goodly.</li>
                        <li className="why-adoreit">Find like minded people in campus.</li>
                        <li className="why-adoreit">Find a perfect date matching your desires.</li>
                    </ul>
                    <p className="why-adoreit">It is much more than a social network.</p>
                </div>
            </div>
            <div className="login-window-right">
            <div className="login-form-container">
                    <form action="#">
                        <input type="email" name="user-email" id="user-email" placeholder="Email" required spellCheck="false"/><br/>
                        <input type="password" name="user-password" id="user-password" placeholder="Password" required spellCheck="false"/><br/>
                        <input type="submit" value="Sign In" className="submit"/><br/><br/>
                        <a href="" className="">Forgot Password?</a><br/><br/>
                    </form>
                    <p className="upper-line">New to Adoreit? <a href="/Signup">Join now</a></p>
                </div>
            </div>
        </div>
        <div className="bottom">MK Production.<br/>
                visit <a href="https://mayank-genesis.github.io/MyPortfolio/" rel = "noopener noreferrer">Mayank Meena</a>
        </div>
    </div>
);
} 