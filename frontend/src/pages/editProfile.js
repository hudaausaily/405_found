import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Rightbar from '../components/rightbar';

const EditProfile = () => {
    return (
       
                <div>
                  <div className="theme-layout">
                  <Navbar/>
                    <section>
                      <div className="feature-photo">
                        <figure><img src="images/resources/timeline-1.jpg" alt="" /></figure>
                        <div className="add-btn">
                          <span>1205 friends</span>
                          
                          <a href="#" title data-ripple>Edit Profile</a>
                        </div>
                        <form className="edit-phto">
                          <i className="fa fa-camera-retro" />
                          <label className="fileContainer">
                            Edit Cover Photo
                            <input type="file" />
                          </label>
                        </form>
                        <div className="container-fluid">
                          <div className="row merged">
                            <div className="col-lg-2 col-sm-3">
                              <div className="user-avatar">
                                <figure>
                                  <img src="images/resources/user-avatar.jpg" alt="" />
                                  <form className="edit-phto">
                                    <i className="fa fa-camera-retro" />
                                    <label className="fileContainer">
                                      Edit Display Photo
                                      <input type="file" />
                                    </label>
                                  </form>
                                </figure>
                              </div>
                            </div>
                            <div className="col-lg-10 col-sm-9">
                              <div className="timeline-info">
                                <ul>
                                  <li className="admin-name">
                                    <h5>Janice Griffith</h5>
                                    <span>Group Admin</span>
                                  </li>
                                  <li>
                                    <a className="active" href="time-line.html" title data-ripple>time line</a>
                                    <a className href="timeline-photos.html" title data-ripple>Photos</a>
                                    <a className href="timeline-videos.html" title data-ripple>Videos</a>
                                    <a className href="timeline-friends.html" title data-ripple>Friends</a>
                                    <a className href="timeline-groups.html" title data-ripple>Groups</a>
                                    <a className href="about.html" title data-ripple>about</a>
                                    <a className href="#" title data-ripple>more</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>{/* top area */}
                    <section>
                    <div className="gap gray-bg">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="row" id="page-contents">
                            <Sidebar/>
                           
                              <Rightbar/>
                            </div>	
                          </div>
                        </div>
                      </div>
                    </div>	
                  </section>
                   
                    <div className="bottombar">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <span className="copyright"><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span>
                            <i><img src="images/credit-cards.png" alt="" /></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
            
    );
}

export default EditProfile;
