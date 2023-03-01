import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import axios from 'axios';
import { useState, useEffect, useParams } from 'react'
import { useNavigate } from "react-router-dom";
import { FaCommentAlt } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';


const PostHome = (props) => {

  const current_ID = JSON.parse(localStorage.getItem('id'));
  const ImageUser = localStorage.getItem('image');

  const [inputs, setInputs] = useState("")
  // const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [file, setFile] = useState(null);
  const [showCommentsForm, setCommentsForm] = useState(false);


  useEffect(() => {
    // getPosts();
    getComments();
    getLikes();

  }, [])
  // Posts

  const handleChange = (e) => {
    const value = e.target.value;
    const post_id = e.target.id;
    const user_id = e.target.name;
    setInputs({ 'comment_content': value, 'post_id': post_id, 'user_id': user_id })
  }

  const handleImagePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("post", inputs);
    formData.append("user_id", current_ID);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:80/405found/backend/posts.php", formData
      );
      console.log(response.data);

      // getPosts();
      // window.location.assign('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handlePost = (e) => {
    const value = e.target.value;
    setInputs(value)
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
        "http://localhost:80/405found/backend/postEdit.php", formEditData
      );
      console.log(response.data);
      // window.location.assign('/');
    } catch (error) {
      console.error(error);
    }
  };


  const deletePost = async (id) => {
    await axios.delete(`http://localhost:80/405found/backend/posts.php/${id}`).then(function (response) {
      // window.location.assign('/');
      // getPosts();
      getComments();
    })
  }


  const canclePostEdit = (id) => {
    document.getElementById(`post${id}`).style.display = 'block';
    document.getElementById(`editPostForm${id}`).style.display = 'none';
    document.getElementById(`editPostBTN${id}`).style.display = 'inline-block';
    document.getElementById(`imgPost${id}`).style.display = 'block';
  }

  // Comments


  async function getComments() {
    await axios.get(`http://localhost:80/405found/backend/comments.php/`)
      .then(response => {
        console.log(response.data);
        setComments(response.data);
      })
  }

  const handleCreateComment = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:80/405found/backend/comments.php/', inputs).then((res) => {
      console.log(res);
      // getPosts();
      // window.location.assign('/')
    }
    )
    // getPostyyyys();
    getComments();
  }

  const deleteComment = (id) => {
    // console.log(id);
    axios.delete(`http://localhost:80/405found/backend/comments.php/${id}`).then(function (response) {
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

  const handleEditCommentSubmit = async (e) => {
    e.preventDefault();
    await axios.put('http://localhost:80/405found/backend/comments.php/', inputs).then(() => {

      getComments();
      // getPosts();
    }
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

  const ShowComments = (id) => {
    document.getElementById(`commentsForPost${id}`).style.display = 'block';

    // { showCommentsForm ? setCommentsForm(false) : setCommentsForm(true) }


  }


  // like


  const getLikes = () => {
    axios.get(`http://localhost:80/405found/backend/likes.php/`)
      .then(response => {
        console.log(response.data);
        setLikes(response.data);
      })
  }

  const handleLikePost = (id) => {
    const post_id = id;
    const user_id = current_ID;
    setInputs({ 'user_id': user_id, 'post_id': post_id })
  }

  const likePost = async (e) => {
    e.preventDefault();
    console.log(inputs)
    await axios.post('http://localhost:80/405found/backend/likes.php/', inputs).then(() => {

      // getPosts();
      getComments();
      getLikes();
    }

    )
  }
  const removeLikePost = async (e) => {
    e.preventDefault();
    console.log(inputs)
    await axios.post('http://localhost:80/405found/backend/likeDelete.php/', inputs).then(() => {

      // getPosts();
      getComments();
      getLikes();
    }
      // window.location.assign('/')
    )
  }



  console.log(props);
  var flagLike = false;
  var like_count = 0;
  // 
  return (


    <div className="central-meta item">
      <div className="user-post">
        <div className="friend-info">
          <figure>
            <img src={require(`../../image/${props.post.image}`)} alt="" />
          </figure>
          <div className="friend-name">
            <ins>{props.post.name}</ins>
            <span>{props.post.created_at}</span>
          </div>

          {(props.post.user_id === current_ID) ?

            <span>    <MdDeleteForever onClick={() => { deletePost(props.post.post_id) }} className='icons' style={{ color: 'red' }} /></span>


            : null}
          {/* ___________like_______________ */}

          <div className="post-meta">

            <img src={require(`../../image/${props.post.post_image}`)} alt="" />
            <div className="we-video-info">
              <ul>
                {/* <li>
                    <span className="views" data-toggle="tooltip" title="views">
                      <i className="fa fa-eye" />
                      <ins>1.2k</ins>
                    </span>
                  </li> */}







                {likes.map((count) => {
                  if (count.post_id == props.post.post_id) {
                    like_count++;
                  }
                })}

                {
                  likes.map((like, index_like) => {
                    if (like.user_id == current_ID && like.post_id == props.post.post_id) {
                      return (flagLike = true)
                    }
                  })}
                {(flagLike == true) ?
                  <form action="" onSubmit={removeLikePost} style={{ display: 'inline' }}>

                    <li>
                      <button style={{ background: 'none', border: 'none', color: '#0d6efd', textDecoration: 'underLine' }} type='submit' onClick={() => handleLikePost(props.post.post_id)} className="dislike" data-toggle="tooltip" title="dislike">
                        <FcLike style={{ fontSize: '20px' }} />
                        <ins>{like_count}</ins>
                      </button>
                    </li>

                  </form>

                  :


                  <form action="" onSubmit={likePost} style={{ display: 'inline' }}>

                    <li>
                      <button style={{ background: 'none', border: 'none', color: '#0d6efd', textDecoration: 'underLine' }} type='submit' onClick={() => handleLikePost(props.post.post_id)} className="like" data-toggle="tooltip" title="like">
                        <FcLikePlaceholder style={{ fontSize: '20px' }} />
                        <ins>{like_count}</ins>
                      </button>
                    </li>
                  </form>

                }
                <li>
                  <span onClick={() => ShowComments(props.post.post_id)} className="comment" data-toggle="tooltip" title="Comments">
                    <FaCommentAlt style={{ fontSize: '16px', color: 'white', marginLeft: '-10px' }} />
                  </span>
                </li>



              </ul>
            </div>
            <div className="description">
              <p>
                {props.post.content}
              </p>
            </div>
          </div>
          {/* ___________like_______________ */}
        </div>
        <div className="coment-area" style={{ display: "none" }} id={`commentsForPost${props.post.post_id}`}>
          <ul className="we-comet">
            {/*  COMMENT*/}
            {comments.map((comment, index) => {
              if (comment.post_id === props.post.post_id) {
                return (
                  <li key={index}>
                    <div className="comet-avatar">
                      <img src={require(`../../image/${comment.image}`)} alt="" />
                    </div>
                    <div className="we-comment">
                      <div className="coment-head">
                        <h5><a href="time-line.html" title>{comment.name}</a></h5>
                        <span>{comment.comment_created_at}</span>
                        <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply" /></a>
                      </div>
                      <p>{comment.comment_content}
                        <i className="em em-smiley" />
                      </p>
                    </div>
                  </li>

                )
              }
            })}



            {/*END COMMENT*/}

            {/* INPUT COMMENT*/}
            <li className="post-comment">
              <div className="comet-avatar">
                <img src={require(`../../image/${ImageUser}`)} alt="" />
              </div>
              <div className="post-comt-box">
                <form method="post" onSubmit={handleCreateComment}>
                  <textarea placeholder="Post your comment" defaultValue={""} id={props.post.post_id} name={current_ID} onChange={handleChange} />

                  <button type="submit" style={{ color: 'red' }}>
                    send
                  </button>
                </form>
              </div>
            </li>
            {/* END INPUT COMMENT*/}
          </ul>
        </div>
      </div>
    </div>


  );
}

export default PostHome;
