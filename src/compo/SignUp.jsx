import React from 'react'
import './Signup.css'
export default function SignUp(){
    return(
        // <div className="main-signup">
        //     <form action="#">
        //                 <input type="email" name="user-email" id="user-email" placeholder="Email" required spellCheck="false"/><br/>
        //                 <input type="password" name="user-password" id="user-password" placeholder="Password" required spellCheck="false"/><br/>
        //                 <input type="submit" value="Sign In" className="submit"/><br/><br/>
        //                 <a href="" className="">Forgot Password?</a><br/><br/>
        //             </form>

        // </div>
        <div className="outer-signup">
            <div className="inner-signup">
                <h1>Adoreit</h1>
                <form action="#" method="POST">
                    <input type="text" name="username" id="username" placeholder="Your Name" required="true"/><br/>
                    <input type="text" name="college" id="college" placeholder="Your Campus eg. IIT Roorkee"required="true"/><br/>
                    <input type="text" name="branch" id="branch" placeholder="Majors"required="true"/><br/>
                    <input type="text" name="year" id="year" placeholder="Year of Study"required="true"/><br/>
                    <input type="text" name="hostel" id="hostel" placeholder="Hostel"required="true"/><br/>
                    <input type="email" name="email" id="email" placeholder="Campus Email"required="true"/><br/>
                    <input type="password" name="password" id="password" placeholder="Password"required="true"/><br/>
                    <input className="signup-btn" type="submit" value="Sign Up"/><br/>
                    <p>Already have an Account? <a href="#Login">Sign In</a></p>
                </form>

            </div>
            
        </div>
    );
}