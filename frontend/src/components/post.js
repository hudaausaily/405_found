import React from 'react';
import CommentDisplay from './commentDisplay';
import CommentInput from './commentInput';

const Post = () => {
    return (
        <div className="central-meta item">
        <div className="user-post">
          <div className="friend-info">
            <figure>
              <img src="images/resources/friend-avatar10.jpg" alt="" />
            </figure>
            <div className="friend-name">
              <ins><a href="time-line.html" title>Janice Griffith</a></ins>
              <span>published: june,2 2018 19:PM</span>
            </div>
            <div className="post-meta">
              <img src="images/resources/user-post.jpg" alt="" />
              <div className="we-video-info">
                <ul>
                  <li>
                    <span className="views" data-toggle="tooltip" title="views">
                      <i className="fa fa-eye" />
                      <ins>1.2k</ins>
                    </span>
                  </li>
                  <li>
                    <span className="comment" data-toggle="tooltip" title="Comments">
                      <i className="fa fa-comments-o" />
                      <ins>52</ins>
                    </span>
                  </li>
                  <li>
                    <span className="like" data-toggle="tooltip" title="like">
                      <i className="ti-heart" />
                      <ins>2.2k</ins>
                    </span>
                  </li>
                  <li>
                    <span className="dislike" data-toggle="tooltip" title="dislike">
                      <i className="ti-heart-broken" />
                      <ins>200</ins>
                    </span>
                  </li>
                  <li className="social-media">
                    <div className="menu">
                      <div className="btn trigger"><i className="fa fa-share-alt" /></div>
                      <div className="rotater">
                        <div className="btn btn-icon"><a href="#" title><i className="fa fa-html5" /></a></div>
                      </div>
                      <div className="rotater">
                        <div className="btn btn-icon"><a href="#" title><i className="fa fa-facebook" /></a></div>
                      </div>
                      <div className="rotater">
                        <div className="btn btn-icon"><a href="#" title><i className="fa fa-google-plus" /></a></div>
                      </div>
                      <div className="rotater">
                        <div className="btn btn-icon"><a href="#" title><i className="fa fa-twitter" /></a></div>
                      </div>
                      <div className="rotater">
                        <div className="btn btn-icon"><a href="#" title><i className="fa fa-css3" /></a></div>
                      </div>
                      <div className="rotater">
                        <div className="btn btn-icon"><a href="#" title><i className="fa fa-instagram" /></a>
                        </div>
                      </div>
                      <div className="rotater">
                        <div className="btn btn-icon"><a href="#" title><i className="fa fa-dribbble" /></a>
                        </div>
                      </div>
                      <div className="rotater">
                        <div className="btn btn-icon"><a href="#" title><i className="fa fa-pinterest" /></a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="description">
                <p>
                  World's most beautiful car in Curabitur <a href="#" title>#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
                </p>
              </div>
            </div>
          </div>
          <div className="coment-area">
            <ul className="we-comet">
         

              <CommentDisplay/>  

         

           
              <CommentInput/>
          
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Post;
