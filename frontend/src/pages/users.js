import React from 'react';
import Navbar from '../components/navbar';
import Rightbar from '../components/rightbar';
import Sidebar from '../components/sidebar';

import axios from 'axios';
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import { MdOutlineGroups } from 'react-icons/md';
const Users = () => {


  const id = JSON.parse(localStorage.getItem('id'));

  const [users,setUsers] = useState([]);
  const [pendingFriends,setpendingFriends] = useState([]);
  const [acceptrdFriends,setAcceptedFriends] = useState([]);
  const [requestFriends,setRequestFriends] = useState([]);  
  const [pendingRequest,setpendingRequest] = useState([]);
  const [friends,setfriends] = useState([]);
  const [requestFriend,setrequestFriend] = useState([]);

  useEffect(()=>{
      getUsers();
      getFriendsPending();
      getFriendsAccepted();
      getFriendsRequest();

  },[]);

      // لعرض جميع المستخدمين في الموقع
      const getUsers = () => {

          axios.get("http://localhost:80/405found/backend/user.php/users")
          .then((respone)=>{
              setUsers(respone.data)
              console.log(respone.data);
          })
      }
      
      
  // اللي بعثهم المستخدم pending عرض جميع طلبات الصداقة في حالة 
  const getFriendsPending = () => {

      axios.get(`http://localhost:80/405found/backend/acceptFriend.php/${id}`)
      .then((respone)=>{
          console.log(respone.data);
          let pendingRequest = respone.data.map((ele)=>{
              return ele.friend_id
          })
          setpendingRequest(pendingRequest);
          console.log(pendingRequest);
          setpendingFriends(respone.data)
      })
  }
  //   عرض جميع طلبات الصداقة الذين تمت الموافقة عليهم

  
  const getFriendsAccepted = () => {

      axios.get(`http://localhost:80/405found/backend/friends.php/${id}`)
      .then((respone)=>{
          console.log(respone.data);
          let friends = respone.data.map((ele)=>{
              return ele.friend_id
          })
          console.log(friends);
          setfriends(friends);
          setAcceptedFriends(respone.data)
      })
  }

      // عرض طلبات الصداقة الخاصة بالمستخدم واللي لسا ما وافق عليهم

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

      
  //  pending وحالته بتكون friends  اضافة صديق جديد في جدول ال 
  const AddFriends = (friendId) => {
      let inputs = {user_id:id , friend_id:friendId};
      axios.post(`http://localhost:80/405found/backend/friends.php/save`,inputs)
      .then((respone)=>{
          console.log(respone.data);
          getUsers();
          getFriendsPending();
          getFriendsRequest();
      })


      
  }

  
  // status الموافقة على طلب الصداقة وتغيير ال 
  const AcceptFriend = (friendId) => {
      let inputs = {user_id:id , friend_id:friendId};
      axios.put(`http://localhost:80/405found/backend/friends.php/edit`,inputs)
      .then((respone)=>{
          console.log(respone.data);
          getFriendsPending();
          getFriendsAccepted();
          getFriendsRequest();
      })


      
  }

     
  // الغاء ارسال طلب الصداقة
  const removeRequest = (friendId) => {
      let inputs = {user_id:id , friend_id:friendId};
      axios.put(`http://localhost:80/405found/backend/removeRequest.php/edit`,inputs)
      .then((respone)=>{
          console.log(respone.data);
          getFriendsPending();
          getFriendsAccepted();
      })


      
  }
  
  // حذف الصداقة
  const removeFriend = (friendId) => {
      let inputs = {user_id:id , friend_id:friendId};
      axios.put(`http://localhost:80/405found/backend/removeFriends.php`,inputs)
      .then((respone)=>{
          console.log(respone.data);
          getFriendsPending();
          getFriendsAccepted();
          
      })


      
  }




    return (
        <div className="theme-layout">
        <Navbar/>
       
       	
        <section>
        
        
          <div className="gap gray-bg">
            <div className="container-fluid" style={{backgroundColor:'#212529'}} >
            
              <div className="row">
                <div className="col-lg-12">
                  <div className="row" id="page-contents">
                  
              <Sidebar/>
                    <div className="col-lg-6">
                      <div className="central-meta">
                        <div className="groups">
                          <span style={{color:'white'}}><MdOutlineGroups className='sideIcons' style={{fontSize:'50px'}}/>All Users</span>
                        </div>
                        <ul className="nearby-contct">
                          {/* ____________________ */}
                          {users.filter(function(ele) {
                    // لحتى ما اطبع المستخد اللي عامل تسجيل دخول
                    if (ele.id === id) {
                        return false; // skip
                    }
                    return true;
                    }).map((ele,index)=>{
                        return(


                          <li style={{backgroundColor:'#212529',border:'none'}} key={index}>
                            <div className="nearly-pepls" style={{backgroundColor:'#212529'}}>
                            <figure>
                                <Link to={`/Friendprofile/${ele.id}`} title><img style={{height:'60px',width:'60px'}} src={require(`../image/${ele.image}`)}alt="" /></Link>
                              </figure>


                              <div className="pepl-info">
                                <h4 style={{fontSize:'20px'}}><Link to={`/Friendprofile/${ele.id} `}> 
                                    {ele.name}
                                  </Link> </h4>
                                <h6 ><a style={{fontSize:'13px'}} href="#" title>  {ele.email}  </a></h6>
                                {/* ____________________ */}
                                {/* <a href="#" title className="add-butn" data-ripple>add friend</a> */}
                                {(() => {
                            if (pendingRequest.includes(ele.id) || friends.includes(ele.id) || requestFriend.includes(ele.id)){
                                if(pendingRequest.includes(ele.id)){
                                    return (

                                          
                                                  
                                                    <button  className="mtr-btn " data-ripple onClick={()=>removeRequest(ele.id)} style={{color:'#212529',backgroundColor:'brown',fontWeight:'500'}}>remove request</button>
                                            
                                    )

                                }
                                if(friends.includes(ele.id)){
                                    return (
                                        
                                      

                                        <button  className="mtr-btn " data-ripple onClick={()=>removeFriend(ele.id)} style={{color:'#212529',backgroundColor:'brown',fontWeight:'500'}}>remove friends</button>

                              
                                        )

                                }
                                if(requestFriend.includes(ele.id)){
                                    return (
                                        
                                        

                                        <button  className="mtr-btn primary" data-ripple onClick={()=>AcceptFriend(ele.id)} style={{marginRight:'20px', backgroundColor:'white',color:'#212529',fontWeight:'500'}}>Accept</button>

                              
                                    )

                                }
                             
                            }else{
                                return ( 
                                    
                                  

                                        <button  className="mtr-btn primary" data-ripple onClick={()=>AddFriends(ele.id)} style={{marginRight:'20px', backgroundColor:'white',color:'#212529',fontWeight:'500'}}>Add</button>


                                  
                               
                                )
                            }
              
                      })()}

                                {/* ____________________ */}
                                
                                
                              </div>
                            </div>
                          
                          

                          </li>
                          
                          
                          )})}
                        
                        </ul>
                      </div>{/* photos */}
                    </div>{/* centerl meta */}
                
                    <Rightbar/>    {/* sidebar */}
                  </div>	
                </div>
              </div>
            </div>
          </div>	
        </section>
      
        
      </div>
    );
}

export default Users;