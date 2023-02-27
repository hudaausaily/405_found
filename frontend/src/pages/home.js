import Rightbar from '../components/rightbar';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
//  __________create post_________________
      const current_ID = JSON.parse(localStorage.getItem('id'));
      // const ImageUser = JSON.parse(localStorage.getItem('image'));

      const [inputs , setInputs] = useState("")
      const [posts , setPosts] = useState([]);
      const [comments , setComments] = useState([]);
      const [file, setFile] = useState(null);
        useEffect(()=>{
      


      },[]);

  

      // create post
      const handleImagePost = async (e) => {
      e.preventDefault();

      const formData = new FormData();

      formData.append("post", inputs);
      formData.append("user_id", current_ID);
      formData.append("file", file);
      console.log(file);

      try {
        const response = await axios.post(
          "http://localhost:80/projectReact7/back_end/posts.php", formData
        );
        console.log(response.data);
        // window.location.assign('/home');
      } catch (error) {
        console.error(error);
      }
      };

      const handlePost = (e) => {
      const value = e.target.value;
      setInputs(value)
      }
//  _______end create post________________

// ___________post______________
useEffect(() => {
  getPosts();
  getComments();
}, [])
function getPosts() {
  axios.get(`http://localhost:80/projectReact7/back_end/posts.php/`)
    .then(response => {
      setPosts(response.data);
    })
}


 

const handleChange = (e) => {
  const value = e.target.value;
  const post_id = e.target.id;
  const user_id = e.target.name;
  setInputs({ 'comment_content': value, 'post_id': post_id, 'user_id': user_id })
}








const editPost = (id) => {
  document.getElementById(`post${id}`).style.display = 'none';
  document.getElementById(`editPostForm${id}`).style.display = 'block';
  document.getElementById(`editPostBTN${id}`).style.display = 'none';
}

const handleEditPost = (id) => {
  const post_id = id;
  const value = document.getElementById(`editPostInput${id}`).value;
  setInputs({ 'post_content': value, 'post_id': post_id })
}

const handleEditPostSubmit = async (e) => {
  e.preventDefault();

  const formEditData = new FormData();

  formEditData.append("post_content", inputs['post_content']);
  formEditData.append("post_id", inputs['post_id']);
  formEditData.append("file", file);

  console.log(formEditData);

  try {
    const response = await axios.post(
      "http://localhost:80/projectReact7/back_end/postEdit.php", formEditData
    );
    console.log(response.data);
    // window.location.assign('/');
  } catch (error) {
    console.error(error);
  }
};









const deletePost = (id) => {
  axios.delete(`http://localhost:80/projectReact7/back_end/posts.php/${id}`).then(function (response) {
    window.location.assign('/');
  })
}


const canclePostEdit = (id) => {
  document.getElementById(`post${id}`).style.display = 'block';
  document.getElementById(`editPostForm${id}`).style.display = 'none';
  document.getElementById(`editPostBTN${id}`).style.display = 'inline-block';
  document.getElementById(`imgPost${id}`).style.display = 'block';
}

// Comments




function getComments() {
  axios.get(`http://localhost:80/projectReact7/back_end/comments.php/`)
    .then(response => {
      console.log(response.data);
      setComments(response.data);
    })
}

const handleCreateComment = (e) => {
  e.preventDefault();
  axios.post('http://localhost:80/projectReact7/back_end/comments.php/', inputs).then((res) => {
    console.log(res);
    window.location.assign('/')
  }
  )
}

const deleteComment = (id) => {
  // console.log(id);
  axios.delete(`http://localhost:80/projectReact7/back_end/comments.php/${id}`).then(function (response) {
    console.log(response);
    getComments();
  })
}

const editComment = (id) => {
  document.getElementById(`comment${id}`).style.display = 'none';
  document.getElementById(`editCommentForm${id}`).style.display = 'block';
  document.getElementById(`editCommentBTN${id}`).style.display = 'none';
}

const handleEditComment = (id) => {
  const comment_id = id;
  const value = document.getElementById(`editCommentInput${id}`).value;
  setInputs({ 'comment_content': value, 'comment_id': comment_id })
}

const handleEditCommentSubmit = (e) => {
  e.preventDefault();
  axios.put('http://localhost:80/projectReact7/back_end/comments.php/', inputs).then(
    window.location.assign('/')
  )
}

const foucsOnComment = (id) => {
  document.getElementById(id).focus();
}


const cancleCommentEdit = (id) => {
  document.getElementById(`comment${id}`).style.display = 'block';
  document.getElementById(`editCommentForm${id}`).style.display = 'none';
  document.getElementById(`editCommentBTN${id}`).style.display = 'inline-block';

}


          return (
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
                                <div className="new-postbox">
                                  <figure>
                                  <img className="shareProfileImg" src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}  alt="" />
                                  {/* src={ ImageUser ? require(`../image/${ImageUser}`) : require(`../image/icon.png`)} */}
                                  </figure>
                                  <div className="newpst-input">
                                    {/* ____________share post_____________________ */}
                                    <form onSubmit={handleImagePost}>
                                      <textarea rows={2} placeholder="write something" defaultValue={""}   id={current_ID} onChange={handlePost}/>
                                      <div className="attachments">
                                        <ul>
                                      
                                          <li>
                                            <i className="fa fa-image" />
                                            <label className="fileContainer">
                                              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                                            </label>
                                          </li>
                                          
                                        
                                          <li>
                                            <button type="submit">Post</button>
                                          </li>
                                        </ul>
                                      </div>
                                    </form>
                                      {/* ______________end create post________________ */}
                                  </div>
                                </div>
                              </div> 
                            

                              {/* add post new box */}
                              <div className="loadMore">
                              {/*POST*/}
                              {posts.map((post, index) => {
                                return (
                                <div className="central-meta item" key={index}>
                                  <div className="user-post">
                                    <div className="friend-info">
                                      <figure>
                                        <img src={require(`../image/icon.png`)}alt="" />
                                      </figure>
                                      <div className="friend-name">
                                        <ins><a href="time-line.html" title>{post.name}</a></ins>
                                        <span>published: {post.created_at}</span>
                                      </div>
                                      <div className="post-meta">
                                        <img src={require(`../image/${post.post_image}`)} alt="" id={`imgPost${post.post_id}`} alt="" />
                                        <div className="we-video-info">
                                          <ul>
                                          
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
                                          </ul>
                                        </div>
                                        <div className="description">
                                          <p id={`post${post.post_id}`}>
                                          {post.content}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="coment-area">
                                      <ul className="we-comet">
                                    {/*  COMMENT*/ }
                                    {comments.map((comment, index) => {
                                    if (comment.post_id === post.post_id) {
                                    return (
                                        <li key={index}> 
                                          <div className="comet-avatar">
                                            <img src="images/resources/comet-1.jpg" alt="" />
                                          </div>
                                          <div className="we-comment">
                                            <div className="coment-head">
                                              <h5><a href="time-line.html" title>{comment.name}</a></h5>
                                              <span>1 week ago</span>
                                            </div>
                                            <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel
                                              <i className="em em-smiley" />
                                            </p>
                                          </div>
                                        </li>
                                      )}})}
                                    {/*END COMMENT*/ }

                                     {/* INPUT COMMENT*/ }
                                        <li className="post-comment">
                                          <div className="comet-avatar">
                                            <img src="images/resources/comet-1.jpg" alt="" />
                                          </div>
                                          <div className="post-comt-box">
                                            <form method="post" onSubmit={handleCreateComment}>
                                              <textarea  id={post.post_id} name={current_ID} onChange={handleChange} placeholder="Post your comment" defaultValue={""} />
                                              <button type="submit" />
                                            </form>	
                                          </div>
                                        </li>
                                      
                                    {/* END INPUT COMMENT*/ }
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              )})}
                              
                              </div>
                            </div>{/* centerl meta */}
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
              
             
          );
        
}

export default Home;
