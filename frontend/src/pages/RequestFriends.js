import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Rightbar from '../components/rightbar';
import { MdDeleteForever } from 'react-icons/md';
import { MdOutlineGroups } from 'react-icons/md';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeedProfile from '../components/profile/feedProfile';


const RequestFriends = () => {


  const current_ID = JSON.parse(localStorage.getItem('id'));
  const id = JSON.parse(localStorage.getItem('id'));
  const ImageUser = localStorage.getItem('image');
  const NameUser = localStorage.getItem('name');

  const [requestFriends,setRequestFriends] = useState([]);  
  const [requestFriend,setrequestFriend] = useState([]);


  const [dataUsers,setDataUsers] = useState([]);
  


  
  useEffect(()=>{
  

    getDataUsers();
      getFriendsRequest();

},[]);

  // لعرض  بيانات المستخدم في الموقع
  const getDataUsers = () => {

    axios.get(`http://localhost:80/405found/backend/user.php/users/${current_ID}`)
    .then((respone)=>{
      setDataUsers(respone.data)
        console.log(respone.data);
    })
}

const getFriendsRequest = () => {

  axios.get(`http://localhost:80/405found/backend/friendRequests.php/${id}`)
  .then((respone)=>{
      console.log(respone.data);
      let requestFriend = respone.data.map((ele)=>{
          return ele.user_id
      })
      console.log(requestFriend);
      setrequestFriend(requestFriend);
      setRequestFriends(respone.data)
  })
}

  // status الموافقة على طلب الصداقة وتغيير ال 
  const AcceptFriend = (friendId) => {
    let inputs = {user_id:id , friend_id:friendId};
    axios.put(`http://localhost:80/405found/backend/friends.php/edit`,inputs)
    .then((respone)=>{
        getFriendsRequest();
    })
  }

      // الغاء  طلب الصداقة
      const removeRequest = (friendId) => {
        let inputs = {user_id:friendId , friend_id:id};
        axios.put(`http://localhost:80/405found/backend/removeRequest.php/edit`,inputs)
        .then((respone)=>{
            console.log(respone.data);
            getFriendsRequest();
        })


        
    }


    return (
       <>
            {dataUsers.map((users,index)=>{

return <div  key={index}>
                   <div className="theme-layout">
                   <Navbar/>
                     <section>
                       <div className="feature-photo">
                         <figure><img src="images/resources/timeline-1.jpg" alt="" /></figure>
                         <div className="add-btn">
                           <span>1205 friends</span>
                           
                           <Link to={`/profile/editProfile/${users.id}/edit`} title data-ripple>Edit Profile</Link>
                         </div>
                        
                         <div className="container-fluid" style={{backgroundColor:'#212529'}}>
                           <div className="row merged">
                             <div className="col-lg-2 col-sm-3">
                               <div className="user-avatar">
                                 <figure>
                                   <img src={require(`../image/${users.image}`)} alt="" />
                                   <form className="edit-phto">
                                     <i className="fa fa-camera-retro" />
                                     <Link to={`/profile/editProfile/${users.id}/edit`} title data-ripple>Edit Profile</Link>
                                   </form>
                                 </figure>
                               </div>
                             </div>
                             <div className="col-lg-10 col-sm-9">
                               <div className="timeline-info"  style={{background:'none'}}>
                                 <ul style={{backgroundColor:'brown', borderRadius:'0 20px 20px 0'}}>
                                   <li className="admin-name">
                                     <h5 style={{color:'white'}}>{users.name}</h5>
                                     <span style={{fontSize:'12px',color:'gray'}}>@{users.name}</span>
                                   </li>
                                   <li>
                                     <Link className="" to={"/profile"} style={{color:'black'}} data-ripple>time line</Link>
                                     <Link className to={"/groups"} style={{color:'black'}} data-ripple>Groups</Link>
                                     <Link className="active" to={"/requestFriends"}  style={{color:'black'}} data-ripple>Request Friends</Link>
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
                             <div className="col-lg-6">
                               {/* ____________________________________start_____________________________________________ */}
                             <div className="central-meta">
                        <div className="groups">
                          <span style={{color:'white'}}><MdOutlineGroups className='sideIcons' style={{fontSize:'50px'}}/>Request Friends</span>
                        </div>


                        <ul className="nearby-contct">

{requestFriends.map((ele,index)=>{
return(

                          <li style={{backgroundColor:'#212529',border:'none'}}>
                            <div className="nearly-pepls" style={{backgroundColor:'#212529'}}>
                              <figure>
                                <Link to={`/Friendprofile/${ele.user_id}`} title><img style={{height:'60px',width:'60px'}} src={require(`../image/${ele.image}`)}alt="" /></Link>
                              </figure>
                              <div className="pepl-info">
                                <h4 style={{fontSize:'20px'}}>  <Link to={`/Friendprofile/${ele.user_id} `}> 
                                    {ele.name}
                                  </Link>  </h4>
                              <div> 
                                <button  className="mtr-btn primary" data-ripple onClick={()=>AcceptFriend(ele.user_id)} style={{marginRight:'20px', backgroundColor:'white',color:'#212529',fontWeight:'500'}}>Confirm</button>
                                
                                <button title className="mtr-btn " data-ripple onClick={()=>removeRequest(ele.user_id)} style={{color:'#212529',backgroundColor:'brown',fontWeight:'500'}}>Delete</button>

                                </div>
                              </div>
                            </div>
                          </li>
                        )})}
            
                        </ul>


                      </div>
                             </div>	



                             {/* _____________________________________end____________________________________________ */}
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
                   })}
       </>
            
    )
                  }

export default RequestFriends;
