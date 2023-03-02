import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Rightbar from '../components/rightbar';
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import FeedProfile from '../components/profile/feedProfile';
import Footer from '../components/footer';


const Profile = () => {


  const current_ID = JSON.parse(localStorage.getItem('id'));


  const [dataUsers,setDataUsers] = useState([]);
  


  
  useEffect(()=>{
    getDataUsers();



    
},[]);

  // لعرض  بيانات المستخدم في الموقع
  const getDataUsers = () => {

    axios.get(`http://localhost:80/405found/backend/user.php/users/${current_ID}`)
    .then((respone)=>{
      setDataUsers(respone.data)
        console.log(respone.data);
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
                             <div className="col-lg-10 col-sm-9" >
                               <div className="timeline-info" style={{background:'none'}}>
                               <ul style={{backgroundColor:'brown', borderRadius:'0 20px 20px 0'}}>
                                   <li className="admin-name">
                                     <h5 style={{color:'white'}}>{users.name}</h5>
                                     <span style={{fontSize:'12px',color:'gray'}}>@{users.name}</span>
                                   </li>
                                   <li>
                                     <Link className="active" style={{color:'black'}} to={"/profile"} title data-ripple>time line</Link>
                                     <Link className to={"/groups"} style={{color:'black'}} data-ripple>Groups</Link>
                                     <Link className="" to={"/requestFriends"} style={{color:'black'}} data-ripple>Request Friends</Link>
                                   </li>
                                 </ul>
                               </div>
                               <div className="mtr-btn red" style={{marginTop:'185px !important',width:'140px',marginLeft:'1150px'}}>
                           
                                  <Link to={`/profile/editProfile/${users.id}/edit`} className="sideLink"  data-ripple>Edit Profile</Link>
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
                          <FeedProfile user_id={current_ID}/>
                               <Rightbar/>
                             </div>	
                           </div>
                         </div>
                       </div>
                     </div>	
                   </section>
                    
                     
                   </div>
                   <Footer/>

                 </div>
                   })}
       </>
            
    )
                  }

export default Profile;
