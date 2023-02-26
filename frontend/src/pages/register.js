import React from 'react';

const Register = () => {
    return (
        <div className="theme-layout">
        <div className="container-fluid pdng0">
          <div className="row merged">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="land-featurearea">
                <div className="land-meta">
                  <h1>Winku</h1>
                  <p>
                    Winku is free to use for as long as you want with two active projects.
                  </p>
                  <div className="friend-logo">
                    <span><img src="images/wink.png" alt="" /></span>
                  </div>
                  <a href="#" title className="folow-me">Follow Us on</a>
                </div>	
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="login-reg-bg">
                <div className="log-reg-area sign">
                  <h2 className="log-title">Register</h2>
                  
                  <form method="post">
                    <div className="form-group">	
                      <input type="text" id="input" required="required" />
                      <label className="control-label" htmlFor="input">Full name</label><i className="mtrl-select" />
                    </div>
                    <div className="form-group">	
                    <input type="email" id="input" required="required" />
                    <label className="control-label" htmlFor="input">Email</label><i className="mtrl-select" />
                  </div>
                    <div className="form-group">	
                    <input type="text" id="input" required="required" />
                    <label className="control-label" htmlFor="input">Phone</label><i className="mtrl-select" />
                  </div>
                    <div className="form-group">	
                      <input type="password" required="required" />
                      <label className="control-label" htmlFor="input">Password</label><i className="mtrl-select" />
                    </div>
                    <div className="form-group">	
                      <input type="password" required="required" />
                      <label className="control-label" htmlFor="input">Confirm Password</label><i className="mtrl-select" />
                    </div>
                   
                    
                    <div className="submit-btns">
                      <button className="mtr-btn signup" type="button"><span>Register</span></button>
                     
                    </div>
                    <p>Already have an account? <a type="button"><span>Login Now!</span></a></p>
                  </form>
                </div>
                <div className="log-reg-area reg">
                  <h2 className="log-title">Register</h2>
                  <p>
                    Don’t use Winku Yet? <a href="#" title>Take the tour</a> or <a href="#" title>Join now</a>
                  </p>
                  <form method="post">
                    <div className="form-group">	
                      <input type="text" required="required" />
                      <label className="control-label" htmlFor="input">First &amp; Last Name</label><i className="mtrl-select" />
                    </div>
                    <div className="form-group">	
                      <input type="text" required="required" />
                      <label className="control-label" htmlFor="input">User Name</label><i className="mtrl-select" />
                    </div>
                    <div className="form-group">	
                      <input type="password" required="required" />
                      <label className="control-label" htmlFor="input">Password</label><i className="mtrl-select" />
                    </div>
                    <div className="form-radio">
                      <div className="radio">
                        <label>
                          <input type="radio" name="radio" defaultChecked="checked" /><i className="check-box" />Male
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" name="radio" /><i className="check-box" />Female
                        </label>
                      </div>
                    </div>
                    <div className="form-group">	
                      <input type="text" required="required" />
                      <label className="control-label" htmlFor="input"><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6c29010d05002c">[email&nbsp;protected]</a></label><i className="mtrl-select" />
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultChecked="checked" /><i className="check-box" />Accept Terms &amp; Conditions ?
                      </label>
                    </div>
                    <a href="#" title className="already-have">Already have an account</a>
                    <div className="submit-btns">
                      <button className="mtr-btn signup" type="button"><span>Register</span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Register;
