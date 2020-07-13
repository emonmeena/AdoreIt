import React, { Component } from "react";
import './home.css'
// import Navigation from './Navigation'
// import { Route, Switch, BrowserRouter } from "react-router-dom";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {bool: true};
    }

    handleClick(){
        this.state.bool = !this.state.bool;
        if(this.state.bool){
        document.getElementById("user-profile").style.display = "none";
        document.getElementById("chat-section").style.display = "block";
        }
        else {
        document.getElementById("chat-section").style.display = "none";
        document.getElementById("user-profile").style.display = "block";
        }
    }

    viewProfile(){
        document.getElementById("user-personal").innerHTML= "cool";
    }

    render(){
        return (
            <div>
                <nav className="top">
                    <div className="name-logo-search-container">
                    <h1 className="adoreit-name">Adoreit</h1>
                    <input className="search_for all" type="text" name="search_for-user-in-all" id="search_for-user-in-all" placeholder=" Search Adoreit" spellCheck="false"/>
                    </div>
                    <div className="navigation-container">
                    {/* navigation icons */}
                    </div>
                    <div className="user-menu-container">
                        <img className="thumbnail-image tp" id="thumbnail-image" onClick={()=> this.handleClick()} src={require('./res/profile-picture.jpg')} alt="" srcset=""/>
                        <div className="user-name-top" id="user-name-top">Maksai</div>
                        
                    </div>
                </nav>
                <div className="main-window">
                    <div id="peers">
                        <div className="adore-with">
                            <p className="adore-with-head">Quickly Find</p>
                            <input className="adore-with-btn mentor" type="button" value="🔥 Mentor"/>
                            <input className="adore-with-btn lm" type="button" value="🎈 Like minded"/>
                            <input className="adore-with-btn date" type="button" value="❤ Date"/>
                        </div>
                        <div className="suggested-for-you-heading">Suggested for you :</div>
                        <div className="all-suggested-users" id="all-suggested-users">
                            <div className="suggested-user hover-scale">
                                <img className="suggested-user-profile-pic" id="" onClick={()=> this.handleClick()} src={require('./res/7.jpg')} alt="" srcset=""/>
                                <div className="suggested-user-info">
                                    <div className="suggested-user-name">Alex Frenklin</div>
                                    <div className="suggested-user-details">IIT Roorkee | MDG | PAG</div>
                                    <div className="suggested-user-request-container">
                                        <input className="add-friend-btn hover-scale" onClick={()=> this.viewProfile()} type="button" value="View"/>
                                        <input className="send-cupid-btn hover-scale" type="button" value="Delete"/>
                                    </div>
                                </div>
                            </div><div className="suggested-user hover-scale">
                                <img className="suggested-user-profile-pic" id="" onClick={()=> this.handleClick()} src={require('./res/8.jpg')} alt="" srcset=""/>
                                <div className="suggested-user-info">
                                    <div className="suggested-user-name">Alex Frenklin</div>
                                    <div className="suggested-user-details">IIT Roorkee | MDG | PAG</div>
                                    <div className="suggested-user-request-container">
                                        <input className="add-friend-btn hover-scale" type="button" value="View"/>
                                        <input className="send-cupid-btn hover-scale" type="button" value="Delete"/>
                                    </div>
                                </div>
                            </div><div className="suggested-user hover-scale">
                                <img className="suggested-user-profile-pic" id="" onClick={()=> this.handleClick()} src={require('./res/10.jpg')} alt="" srcset=""/>
                                <div className="suggested-user-info">
                                    <div className="suggested-user-name">Alex Frenklin</div>
                                    <div className="suggested-user-details">IIT Roorkee | MDG | PAG</div>
                                    <div className="suggested-user-request-container">
                                        <input className="add-friend-btn hover-scale" type="button" value="View"/>
                                        <input className="send-cupid-btn hover-scale" type="button" value="Delete"/>
                                    </div>
                                </div>
                            </div><div className="suggested-user hover-scale">
                                <img className="suggested-user-profile-pic" id="" onClick={()=> this.handleClick()} src={require('./res/11.jpg')} alt="" srcset=""/>
                                <div className="suggested-user-info">
                                    <div className="suggested-user-name">Alex Frenklin</div>
                                    <div className="suggested-user-details">IIT Roorkee | MDG | PAG</div>
                                    <div className="suggested-user-request-container">
                                        <input className="add-friend-btn hover-scale" type="button" value="View"/>
                                        <input className="send-cupid-btn hover-scale" type="button" value="Delete"/>
                                    </div>
                                </div>
                            </div><div className="suggested-user hover-scale">
                                <img className="suggested-user-profile-pic" id="" onClick={()=> this.handleClick()} src={require('./res/4.jpg')} alt="" srcset=""/>
                                <div className="suggested-user-info">
                                    <div className="suggested-user-name">Alex Frenklin</div>
                                    <div className="suggested-user-details">IIT Roorkee | MDG | PAG</div>
                                    <div className="suggested-user-request-container">
                                        <input className="add-friend-btn hover-scale" type="button" value="View"/>
                                        <input className="send-cupid-btn hover-scale" type="button" value="Delete"/>
                                    </div>
                                </div>
                            </div><div className="suggested-user hover-scale">
                                <img className="suggested-user-profile-pic" id="" onClick={()=> this.handleClick()} src={require('./res/9.jpg')} alt="" srcset=""/>
                                <div className="suggested-user-info">
                                    <div className="suggested-user-name">Alex Frenklin</div>
                                    <div className="suggested-user-details">IIT Roorkee | MDG | PAG</div>
                                    <div className="suggested-user-request-container">
                                        <input className="add-friend-btn hover-scale" type="button" value="View"/>
                                        <input className="send-cupid-btn hover-scale" type="button" value="Delete"/>
                                    </div>
                                </div>
                            </div><div className="suggested-user hover-scale">
                                <img className="suggested-user-profile-pic" id="" onClick={()=> this.handleClick()} src={require('./res/5.jpg')} alt="" srcset=""/>
                                <div className="suggested-user-info">
                                    <div className="suggested-user-name">Alex Frenklin</div>
                                    <div className="suggested-user-details">IIT Roorkee | MDG | PAG</div>
                                    <div className="suggested-user-request-container">
                                        <input className="add-friend-btn hover-scale" type="button" value="View"/>
                                        <input className="send-cupid-btn hover-scale" type="button" value="Delete"/>
                                    </div>
                                </div>
                            </div><div className="suggested-user hover-scale">
                                <img className="suggested-user-profile-pic" id="" onClick={()=> this.handleClick()} src={require('./res/2.jpg')} alt="" srcset=""/>
                                <div className="suggested-user-info">
                                    <div className="suggested-user-name">Alex Frenklin</div>
                                    <div className="suggested-user-details">IIT Roorkee | MDG | PAG</div>
                                    <div className="suggested-user-request-container">
                                        <input className="add-friend-btn hover-scale" type="button" value="View"/>
                                        <input className="send-cupid-btn hover-scale" type="button" value="Delete"/>
                                    </div>
                                </div>
                            </div><div className="suggested-user hover-scale">
                                <img className="suggested-user-profile-pic" id="" onClick={()=> this.handleClick()} src={require('./res/6.jpg')} alt="" srcset=""/>
                                <div className="suggested-user-info">
                                    <div className="suggested-user-name">Alex Frenklin</div>
                                    <div className="suggested-user-details">IIT Roorkee | MDG | PAG</div>
                                    <div className="suggested-user-request-container">
                                        <input className="add-friend-btn hover-scale" type="button" value="View"/>
                                        <input className="send-cupid-btn hover-scale" type="button" value="Delete"/>
                                    </div>
                                </div>
                            </div><div className="suggested-user hover-scale">
                                <img className="suggested-user-profile-pic" id="" onClick={()=> this.handleClick()} src={require('./res/1.jpg')} alt="" srcset=""/>
                                <div className="suggested-user-info">
                                    <div className="suggested-user-name">Alex Frenklin</div>
                                    <div className="suggested-user-details">IIT Roorkee | MDG | PAG</div>
                                    <div className="suggested-user-request-container">
                                        <input className="add-friend-btn hover-scale" type="button" value="View"/>
                                        <input className="send-cupid-btn hover-scale" type="button" value="Delete"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-personal" id="user-personal">
                      <div className="chat-section" id="chat-section">
                        <nav className="chat-nav">
                            {/* <input className="profile-btn" type="button" onClick={()=> this.handleClick()} value="Your profile"/> */}
                            <div className="">
                            <img className="thumbnail-image" id="thumbnail-image" onClick={()=> this.handleClick()} src={require('./res/profile-picture.jpg')} alt="" srcset=""/>
                            </div>
                            <input className="search_for" type="text" name="search_for" id="search_for" placeholder=" Search Chat" spellCheck="false" />
                            <input className="group-btn" type="button" onClick={()=> this.handleClick()} value="Group chat"/>
                        </nav>
                        <div className="all-chats">
                            <div className="single-chat hover-scale">
                                <img className="chat-thumbnail" id="thumbnail-image" onClick={()=> this.handleClick()} src={require('./res/d.png')} alt="" srcset=""/>
                                <div className="last-mssg-container">
                                   <div className="user-name-last-message-container">Pooja</div>
                                   <div className="last-mssg">Sure 😀</div>
                                </div>   
                            </div><div className="single-chat hover-scale">
                                <img className="chat-thumbnail" id="thumbnail-image" onClick={()=> this.handleClick()} src={require('./res/d.png')} alt="" srcset=""/>
                                <div className="last-mssg-container">
                                   <div className="user-name-last-message-container">Riya federation Group</div>
                                   <div className="last-mssg">Priya: Okay 👍👍</div>
                                </div>   
                            </div><div className="single-chat hover-scale">
                                <img className="chat-thumbnail" id="thumbnail-image" onClick={()=> this.handleClick()} src={require('./res/d.png')} alt="" srcset=""/>
                                <div className="last-mssg-container">
                                   <div className="user-name-last-message-container">Arjav</div>
                                   <div className="last-mssg">Nice.</div>
                                </div>   
                            </div><div className="single-chat hover-scale">
                                <img className="chat-thumbnail" id="thumbnail-image" onClick={()=> this.handleClick()} src={require('./res/d.png')} alt="" srcset=""/>
                                <div className="last-mssg-container">
                                   <div className="user-name-last-message-container">Elon</div>
                                   <div className="last-mssg">Phoenix Forever 💖</div>
                                </div>   
                            </div><div className="single-chat hover-scale">
                                <img className="chat-thumbnail" id="thumbnail-image" onClick={()=> this.handleClick()} src={require('./res/d.png')} alt="" srcset=""/>
                                <div className="last-mssg-container">
                                   <div className="user-name-last-message-container">Miyo</div>
                                   <div className="last-mssg">Hii there I am using Your webapp and its simple.</div>
                                </div>   
                            </div>
                        </div>
                     </div>
                     <div className="user-profile" id="user-profile">
                        <nav className="user-profile-nav">
                        <img className="thumbnail-image-back" id="thumbnail-image-back" onClick={()=> this.handleClick()} src={require('./res/back.png')} alt="" srcset=""/>

                        </nav>
                        <div className="user-details">
                            <img className="profile-picture" src={require('./res/profile-picture.jpg')} alt="Profile Picture" srcset=""/>
                            <div className="user-name">Mayank Meena</div>
                            <div className="bio">Phoenix Forever <br/> <a href=""> Edit</a> </div>
                            <div className="persona">
                                <b className="box">💖<span id="persona-romantic">33%</span></b>
                                <b className="box">😂<span id="persona-romantic">33%</span></b>
                                <b className="box">😎<span id="persona-romantic">33%</span></b>
                            </div>
                            <div className="user-details-section">
                            <div className="intro">
                                <h1>Intro</h1>
                                <div className="college info" id="college">🏛   IIT Roorkee</div>
                                <div className="branch-year info" id="branch-year">🎓   CSE | Freshie</div>
                                <div className="hostel info" id="hostel">🏨  Rajendra Bhawan</div>
                               <div className="relationship-status info" id="relationship-status">🤍    Single</div>
                                <div className="info">🏠    Kota, Rajasthan</div>
                            </div>  
                            <div className="send-request">
                                <input type="button" className="adore-with-btn request-btn" value="Add Friend"/>
                                <input type="button" className="adore-with-btn request-btn" value="🤍 Send Cupid"/>
                            </div>
                            </div>
                         </div>
                     </div>
                    </div>
                </div>
            </div>
        );
    }
}