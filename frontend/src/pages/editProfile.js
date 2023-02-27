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
                    <div className="gap gray-bg">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="row" id="page-contents">
                            <Sidebar/>
                            <div className="col-lg-6">
                            <div className="central-meta">
                              <div className="editing-info">
                                <h5 className="f-title"><i className="ti-info-alt" /> Create new group</h5>
                                <form method="post">
                                  <div className="form-group half">	
                                    <input type="file" id="input" required="required" />
                                    
                                  </div>
                                  <div className="form-group half">	
                                    <input type="text" required="required" />
                                    <label className="control-label" htmlFor="input">Group Name</label><i className="mtrl-select" />
                                  </div>
                                  
                                  <div className="submit-btns">
                                    <button type="button" className="mtr-btn"><span>Create</span></button>
                                  </div>
                                </form>
                              </div>
                            </div>	
                          </div>
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
