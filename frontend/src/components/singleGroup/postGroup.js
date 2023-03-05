import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import axios from 'axios';
import { useState , useEffect , useParams } from 'react'
import { useNavigate } from "react-router-dom";
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';




const PostGroup = (props) => {


  const current_ID = JSON.parse(localStorage.getItem('id'));
  const group_id = props.group_id;
  const admin_group = props.admin_group;
  const ImageUser = localStorage.getItem('image');

  const current_Email = localStorage.getItem('email');

  const [inputs , setInputs] = useState("")
  const [posts , setPosts] = useState([]);
  const [comments , setComments] = useState([]);
  const [likes , setLikes] = useState([]);

  const [file, setFile] = useState(null);

 
  useEffect(()=>{
    getPosts();
    getComments();
    getLikes();

    console.log(props);
    console.log(props.admin_group);

  } , [])
 // Posts



 function getPosts(){
  axios.get(`http://localhost:80/405found/backend/postsGroup.php/${group_id}`)
  .then(response => {
    console.log(response.data);
      setPosts(response.data);
  })
}

const handleImagePost = async (e) => {
e.preventDefault();

const formData = new FormData();

formData.append("post", inputs);
formData.append("user_id", current_ID);
formData.append("file", file);
formData.append("group_id", group_id);

try {
  const response = await axios.post(
    "http://localhost:80/405found/backend/postsGroup.php", formData
  );
  console.log(response.data);
  getPosts();

} catch (error) {
  console.error(error);
}
};

const handlePost = (e) => {
  const value = e.target.value;
  setInputs(value)
}

const handleChange = (e) => {
  const value = e.target.value;
  const post_id = e.target.id;
  const user_id = e.target.name;
  setInputs({'comment_content': value , 'post_id': post_id , 'user_id' : user_id})
}








const editPost = (id) => {
document.getElementById(`post${id}`).style.display = 'none';
document.getElementById(`editPostForm${id}`).style.display = 'block';
document.getElementById(`editPostBTN${id}`).style.display = 'none';
}

const handleEditPost = (id) => {
const post_id = id;
const value = document.getElementById(`editPostInput${id}`).value;
setInputs({'post_content': value , 'post_id' : post_id})
}

const handleEditPostSubmit  = async (e) => {
e.preventDefault();

const formEditData = new FormData();

formEditData.append("post_content", inputs['post_content']);
formEditData.append("post_id", inputs['post_id']);
formEditData.append("file", file);

console.log(formEditData);

try {
  const response = await axios.post(
    "http://localhost:80/405found/backend/postEditGroup.php", formEditData
  );
  console.log(response.data);
  getPosts();
  // window.location.assign('/');
} catch (error) {
  console.error(error);
}
};









const deletePost = (id) => {
axios.delete(`http://localhost:80/405found/backend/postsGroup.php/${id}`).then(function(response){
  getPosts();
  window.location.assign(`/groups/singleGroup/${group_id}/show`);})
}


const canclePostEdit = (id) => {
  document.getElementById(`post${id}`).style.display = 'block';
  document.getElementById(`editPostForm${id}`).style.display = 'none';
  document.getElementById(`editPostBTN${id}`).style.display = 'inline-block';
  document.getElementById(`imgPost${id}`).style.display = 'block';
}

   // Comments




   function getComments(){
    axios.get(`http://localhost:80/405found/backend/commentsGroup.php/`)
    .then(response => {
      console.log(response.data);
        setComments(response.data);
    })
}

  const handleCreateComment = (e) => {
      e.preventDefault();
      axios.post('http://localhost:80/405found/backend/commentsGroup.php/' , inputs).then((res)=> {
        console.log(res);
        getComments();

      }
      )
  }

  const deleteComment = (id) => {
    // console.log(id);
    axios.delete(`http://localhost:80/405found/backend/commentsGroup.php/${id}`).then(function(response){
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
    setInputs({'comment_content': value , 'comment_id' : comment_id})
  }

  const handleEditCommentSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:80/405found/backend/commentsGroup.php/' , inputs).then(()=>{

      getComments();
    }

      // window.location.assign('/')
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
    setInputs({'user_id': user_id , 'post_id' : post_id})
  }

  const likePost = async (e) => {
    e.preventDefault();
    console.log(inputs)
      await axios.post('http://localhost:80/405found/backend/likes.php/' , inputs).then(
        // window.location.assign('/')
        )
        getPosts();
        getComments();
        getLikes();
  }
  const removeLikePost = async (e) => {
    e.preventDefault();
    console.log(inputs)
      await axios.post('http://localhost:80/405found/backend/likeDelete.php/' , inputs).then(
        // window.location.assign('/')
        )
        getPosts();
        getComments();
        getLikes();
  }

  var flagLike = false;
  var like_count = 0;


    return (

    
        <div className="central-meta item">
        <div className="user-post">
          <div className="friend-info">
            <figure>
               {<img style={{height:'40px',width:'40px',borderRadius:'45%'}}  src={require(`../../image/${props.post.image}`)} alt="" />} 
            </figure>
            <div className="friend-name">
              <ins>{props.post.name}</ins> 
              <span>{props.post.created_at}</span> 
            </div>
                      
            {(props.post.user_id === current_ID) || (admin_group===current_ID) ?
                    
                    <span>    <MdDeleteForever onClick={() => {deletePost(props.post.post_id)}} className='icons' style={{color:'red'}}/></span>

                    
                    : null }
              {/* ___________like_______________ */}
            
       <div className="post-meta">

       <div className="description">
       <p className='sideLink' style={{fontSize:'20px'}}>
         {props.post.content}
       </p>
     </div>

              {/* <img src={require(`../../image/${props.post.post_image}`)}  alt="" /> */}
              <div className="we-video-info">
                <ul>
                  {/* <li>
                    <span className="views" data-toggle="tooltip" title="views">
                      <i className="fa fa-eye" />
                      <ins>1.2k</ins>
                    </span>
                  </li> */}



                  <li>
                    <span onClick={() =>ShowComments(props.post.post_id)} className="comment" data-toggle="tooltip" title="Comments">
                      <FaCommentAlt style={{ fontSize: '16px', color: 'white', marginLeft: '10px' }} />
                    </span>
                  </li>







                  {likes.map((count)=>{
              if(count.post_id == props.post.post_id){
                like_count++;
              }
            })}

                  {
                    likes.map((like , index_like) => {
                      if (like.user_id == current_ID && like.post_id == props.post.post_id){
                        return ( flagLike = true )
                      }})}
              {( flagLike == true ) ?
              <form action="" onSubmit={removeLikePost} style={{ display: 'inline' }}>

                  <li>
                    <button style={{background : 'none' , border : 'none' , color : '#0d6efd' , textDecoration : 'underLine' }} type='submit'  onClick={()=>handleLikePost(props.post.post_id)} className="dislike" data-toggle="tooltip" title="dislike">
                      <FcLike style={{ fontSize: '20px' }}/>
                      <ins>{like_count}</ins>
                    </button>
                  </li>

                </form>

                  :


                  <form action="" onSubmit={likePost} style={{ display: 'inline' }}>

                  <li>
                    <button style={{background : 'none' , border : 'none' , color : '#0d6efd' , textDecoration : 'underLine' }} type='submit' onClick={()=>handleLikePost(props.post.post_id)}  className="like" data-toggle="tooltip" title="like">
                      <FcLikePlaceholder style={{ fontSize: '20px' }} />
                      <ins>{like_count}</ins>
                    </button>
                  </li>
                  </form>

}





                </ul>
              </div>
              
            </div>
              {/* ___________like_______________ */}
          </div>
          <div className="coment-area" style={{display:"none" }} id={`commentsForPost${props.post.post_id}`}>
            <ul className="we-comet">
          {/*  COMMENT*/ }
          {comments.map((comment, index) => {
                    if (comment.post_id === props.post.post_id) {
                      return (
              <li key={index}>
                <div className="comet-avatar">
                  {/* <img src={require(`../../image/${comment.image}`)} alt="" /> */}
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



          {/*END COMMENT*/ }

           {/* INPUT COMMENT*/ }
              <li className="post-comment">
                <div className="comet-avatar">
                  <img style={{height:'40px',width:'40px',borderRadius:'45%'}} src={require(`../../image/${ImageUser}`)} alt="" />
                </div>
                <div className="post-comt-box">
                  <form method="post" onSubmit={handleCreateComment}>
                    <textarea placeholder="Post your comment" defaultValue={""} id={props.post.post_id} name={current_ID} onChange={handleChange}/>
                    {/* <div className="add-smiles">
                      <span className="em em-expressionless" title="add icon" />
                    </div>
                    <div className="smiles-bunch">
                      <i className="em em---1" />
                      <i className="em em-smiley" />
                      <i className="em em-anguished" />
                      <i className="em em-laughing" />
                      <i className="em em-angry" />
                      <i className="em em-astonished" />
                      <i className="em em-blush" />
                      <i className="em em-disappointed" />
                      <i className="em em-worried" />
                      <i className="em em-kissing_heart" />
                      <i className="em em-rage" />
                      <i className="em em-stuck_out_tongue" />
                    </div> */}
                    <button type="submit" style={{color:'red'}}>
                      post
                    </button>
                  </form>	
                </div>
              </li>
          {/* END INPUT COMMENT*/ }
            </ul>
          </div>
        </div>
      </div>
      // <>
      // <div className='post'>
      //   <div className="postWrapper">
      //     <div className="postTop">
      //         <div className="postTopLeft flex">
      //           <div>
      //             <img className='postProfileImg'
      //              src={require(`../../image/${props.post.image}`)} 
      //             alt="" />
      //             <span className="postUsername">
      //                  {props.post.name}
      //               </span>
      //             <span className="postDate">{props.post.created_at}</span>
      //           </div>
      //           <div>
      //           {(props.post.user_id === current_ID) || (admin_group===current_ID) ?
      //                 <div>
      //                   <button onClick={() => {deletePost(props.post.post_id)}}>Delete Your Post</button>
      //                   <button id={`editPostBTN${props.post.post_id}`} onClick={() => {editPost(props.post.post_id)}}>edit</button>
      //                 </div>
      //                 : null }
      //               </div>
  
                    
      //               {(props.post.post_image != 'a') ? 
  
      //               <div>
      //                   <form id={`editPostForm${props.post.post_id}`} action="" style={{display : 'none'}} onSubmit={handleEditPostSubmit}>
      //                       <textarea 
      //                       style={{width: '50vw'}} 
      //                       type="text" 
      //                       defaultValue={props.post.content} 
      //                       id={`editPostInput${props.post.post_id}`} onChange={() => handleEditPost(props.post.post_id)}/>
  
      //                       <br />
  
      //                       <input 
      //                       type="file"
      //                       id="file"
      //                       onChange={(e) => setFile(e.target.files[0])}/>
  
      //                       <button type='submit'>Update</button>
      //                       <button style={{background : 'red' , color : 'white'}} onClick={()=>{canclePostEdit(props.post.post_id)}} type='button'>Cancle</button>
      //                   </form>
      //               </div>
  
      //               : 
                    
      //               <div>
                  
      //             <form id={`editPostForm${props.post.post_id}`} action="" style={{display : 'none'}} onSubmit={handleEditPostSubmit}>
  
      //                 <textarea 
      //                   style={{width: '50vw'}} 
      //                   type="text" 
      //                   defaultValue={props.post.content} 
      //                   id={`editPostInput${props.post.post_id}`} 
      //                   onChange={() => handleEditPost(props.post.post_id)}/>
  
      //                 <input 
      //                   type="file"
      //                   id="file"
      //                   onChange={(e) => setFile(e.target.files[0])}/>
  
      //                 <br />
  
      //                 <button type='submit'>Update</button>
      //                 <button style={{background : 'red' , color : 'white'}} onClick={()=>{canclePostEdit(props.post.post_id)}}  type='button'>Cancle</button>
  
      //             </form>
      //             </div>
      //             }
      //           </div>
      //         </div>
      //         <div className="postTopRight">
      //         </div>
      //     </div>
      //     <div className="postCenter">
      //       <span id={`post${props.post.post_id}`} className="postText">{props.post.content}</span>
      //       {(props.post.post_image) != 'a' ? 
      //       <img className='postImg' src={require(`../../image/${props.post.post_image}`)} alt="" />
      //     : null 
      //     }
      //       </div>
      //     <div className="postBottom">
      //       <div className="postBottomLeft">
      //                 {
      //                 likes.map((like , index_like) => {
      //                   if (like.user_id == current_ID && like.post_id == props.post.post_id){
      //                     return ( flagLike = true )
      //                   }})}
  
      //                   {( flagLike == true ) ?
      //                           <form action="" onSubmit={removeLikePost}>
      //                             <button type='submit' style={{background : 'none' , border : 'none' , color : '#0d6efd' , textDecoration : 'underLine' }} onClick={()=>handleLikePost(props.post.post_id)}  href="#!" className="d-flex align-items-center me-3">
      //                               <i className="far fa-thumbs-up me-2" />
      //                               <p className="mb-0" style={{color : 'blue' , fontWeight : 'bold'}}>Liked</p>
      //                             </button>
      //                           </form>
      //                   :
      //                           <form action="" onSubmit={likePost}>
      //                               <button type='submit' style={{background : 'none' , border : 'none' , color : '#0d6efd' , textDecoration : 'underLine' }} onClick={()=>handleLikePost(props.post.post_id)}  href="#!" className="d-flex align-items-center me-3">
      //                                 <i className="far fa-thumbs-up me-2" />
      //                                 <p className="mb-0">Like</p>
      //                               </button>
      //                           </form>
      //                   }
      //         {likes.map((count)=>{
      //           if(count.post_id == props.post.post_id){
      //             like_count++;
      //           }
      //         })}
      //         <span className="postLikeCounter">{like_count} people like it</span>
      //       </div>
      //       <div className="postBottomRight">
      //       <a className="postCommentText" onClick={() =>ShowComments(props.post.post_id)}>comments</a>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="card-footer py-3 border-0 shadow-2-strong" style={{ backgroundColor: '#f8f9fa',display:"none" }} id={`commentsForPost${props.post.post_id}`}>
      //             <div className="w-100">
      //               {comments.map((comment, index) => {
      //                 if (comment.post_id === props.post.post_id) {
      //                   return (
      //                     <div key={index}>
      //                       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      //                         <div>
      //                           <img className="rounded-circle shadow-1-strong me-3" src={require(`../../image/${comment.image}`)} alt="avatar" width={40} height={40} />
      //                           <span>{comment.name}</span>
      //                         </div>
      //                         {(comment.user_id === current_ID) 
      //                         ?
      //                           <div>
      //                             <a style={{ marginLeft: "-15%", color: 'red', cursor: 'pointer' }} onClick={() => { deleteComment(comment.comment_id) }}>delete</a>
      //                             <a style={{ color: 'green', cursor: 'pointer' }} id={`editCommentBTN${comment.comment_id}`} onClick={() => { editComment(comment.comment_id) }}>edit</a>
      //                           </div> 
      //                           : 
      //                           (props.post.user_id === current_ID) ?
      //                             <div>
                                    
      //                               <button onClick={() => { deleteComment(comment.comment_id) }}>Remove comment</button>
      //                             </div>
      //                             : 
      //                             null
      //                             }
      //                       </div>
      //                       <br />
      //                       <div className="form-outline w-100" style={{ marginLeft: "2%" }}>
      //                         <p style={{ border: 'none', width: '90%' }}>
      //                           console.log(Card)
      //                           <p style={{ paddingLeft: "2%", paddingTop: "2%" }} id={`comment${comment.comment_id}`}>{comment.comment_content}</p>
      //                         </p>
      //                         <form id={`editCommentForm${comment.comment_id}`} action="" style={{ display: 'none' }} onSubmit={handleEditCommentSubmit}>
      //                           <textarea style={{ width: '90%' }} className="form-control" type="text" defaultValue={comment.comment_content} id={`editCommentInput${comment.comment_id}`} onChange={() => handleEditComment(comment.comment_id)} />
      //                           <div style={{ marginLeft: "2%", marginTop: "2%", display: "flex" }}>
      //                             <div>
      //                               <button variant="success" type='submit'>Confirm</button>
      //                             </div>
      //                             <div style={{ marginLeft: "1%" }}>
      //                               <button variant="danger" style={{ color: 'white' }} onClick={() => { cancleCommentEdit(comment.comment_id) }} type='button'>Cancle</button>
      //                             </div>
      //                           </div>
      //                         </form>
  
      //                         <p style={{ marginLeft: "2%", marginTop: "1%" }}>{comment.comment_created_at}</p>
      //                       </div>
      //                       <hr />
      //                     </div>
      //                   )
      //                 }
      //               })}
      //             </div>
                  
      //             <div className="card-footer py-3 border-0" style={{ backgroundColor: '#f8f9fa', marginLeft: "1%" }}>
                  
      //               <div className="d-flex flex-start w-100">
      //                 <img className="rounded-circle shadow-1-strong me-3" src={require(`../../image/${ImageUser}`)} alt="avatar" width={40} height={40} />
      //                 <form className="form-outline " onSubmit={handleCreateComment}>
      //                   <textarea className="form-control" id={props.post.post_id} name={current_ID} rows={4} style={{ background: '#fff', width: '28rem' }} onChange={handleChange} />
      //                   <button variant="success" style={{ marginTop: "2% " }} type="submit" className="btn btn-primary btn-sm">Comment</button>
      //                 </form>
      //               </div>
      //             </div>
  
      //           </div>
   
    );
}

export default PostGroup;
