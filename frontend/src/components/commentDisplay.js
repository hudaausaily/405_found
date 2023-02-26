import React from 'react';

const CommentDisplay = () => {
    return (
        <li>
        <div className="comet-avatar">
          <img src="images/resources/comet-1.jpg" alt="" />
        </div>
        <div className="we-comment">
          <div className="coment-head">
            <h5><a href="time-line.html" title>Donald Trump</a></h5>
            <span>1 week ago</span>
            <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply" /></a>
          </div>
          <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel
            <i className="em em-smiley" />
          </p>
        </div>
      </li>
    );
}

export default CommentDisplay;
