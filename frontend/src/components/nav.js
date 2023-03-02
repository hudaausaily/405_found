import { BsBellFill } from 'react-icons/bs'
import { AiOutlineLogout } from 'react-icons/ai'
import axios from "axios";
import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";


const Nav = () => {

    const id = JSON.parse(localStorage.getItem('id'));
    const ImageUser = localStorage.getItem('image');
    const NameUser = localStorage.getItem('name');
  
    const [requestFriends,setRequestFriends] = useState([]);  
    const [requestFriend,setrequestFriend] = useState([]);
  
    useEffect(()=>{
      getFriendsRequest();
  
  },[]);
  
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
        <div className="topbar stick">
            <div className="logo">
                <a  href="newsfeed.html"><img src="/images/tag2.png" alt="" style={{marginTop:'-10px'}}/></a>
            </div>

            <div className="top-area">


                
                <ul className="setting-area">

                <li  className="nav-item dropdown" style={{marginTop:'8px'}}>

                <Link className="nav-link dropdown-toggle" to={"/requestFriends"} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                   <img src="/images/resources/bell1.png"  alt=""  style={{height:"35px" , borderRadius: '50%', display: 'inline-block', transform: 'scale(0.7)',verticalAlign: 'inherit'}}/>
                   {requestFriends.length}
                </Link>
              
               
            </li>
                  

                   
            <li className="nav-item dropdown">
            <div className="user-img">

                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <img src={require(`../image/${ImageUser}`)} alt="" style={{height:"50px" , width:"50px", borderRadius: '50%', display: 'inline-block', transform: 'scale(0.7)',verticalAlign: 'inherit' , marginBottom:'-7px'}}/>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href={'/profile'}> Profile</a>
                    <Link className="dropdown-item" to={`/profile/editProfile/${id}/edit`}>EditProfile</Link>
                    <a className="dropdown-item"  href="/" >Logout</a>
                </div>
                </div>
            </li>


                </ul>
              
            </div>


        </div>

    );
}

export default Nav;
