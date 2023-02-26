import React from 'react';

const CreatePost = () => {
    return (
     
        <div className="central-meta">
        <div className="new-postbox">
          <figure>
            <img src="images/resources/admin2.jpg" alt="" />
          </figure>
          <div className="newpst-input">
            <form method="post">
              <textarea rows={2} placeholder="write something" defaultValue={""} />
              <div className="attachments">
                <ul>
                  <li>
                    <i className="fa fa-music" />
                    <label className="fileContainer">
                      <input type="file" />
                    </label>
                  </li>
                  <li>
                    <i className="fa fa-image" />
                    <label className="fileContainer">
                      <input type="file" />
                    </label>
                  </li>
                  <li>
                    <i className="fa fa-video-camera" />
                    <label className="fileContainer">
                      <input type="file" />
                    </label>
                  </li>
                  <li>
                    <i className="fa fa-camera" />
                    <label className="fileContainer">
                      <input type="file" />
                    </label>
                  </li>
                  <li>
                    <button type="submit">Post</button>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
       
    );
}

export default CreatePost;
