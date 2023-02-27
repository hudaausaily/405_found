import { useState , useEffect } from 'react';
import axios from 'axios';

const Sidebar = () => {

  const current_ID = JSON.parse(localStorage.getItem('id'));
  const [groups , setGroups] = useState([]);

  const [myAcceptrdGroups , setMyAcceptrdGroups] = useState([]);


  useEffect(()=>{
    getGroups();
    getMyAcceptrdGroups();
} , [])

function getGroups(){
  axios.get(`http://localhost:80/frontend/projectReact7/groups.php/`)
  .then(response => {
      console.log(response.data)
      setGroups(response.data);
  })
}

const getMyAcceptrdGroups = () => {

  axios.get(`http://localhost:80/frontend/projectReact7/getMyGroupAcceptedStatus.php/${current_ID}`)
  .then(response => {
      console.log(response.data)
      setMyAcceptrdGroups(response.data);
  })

}


    return (
   
        <div className="col-lg-3">
        <aside className="sidebar static">
          <div className="widget">
            <h4 className="widget-title">Shortcuts</h4>
            <ul className="naves">
              <li>
                <i className="ti-clipboard" />
                <a href="/home" title>Home</a>
              </li>
              <li>
                <i className="ti-user" />
                <a href="profile" title>Profile</a>
              </li>
              <li>
                <i className="ti-mouse-alt" />
                <a href="Allgroups" title>Groups</a>
              </li>
              <li>
                <i className="ti-mouse-alt" />
                <a href="inbox.html" title>Friends</a>
              </li>
              <li>
                <i className="ti-files" />
                <a href="/Allusers" title>All Users</a>
              </li>
            
              <li>
                <i className="ti-power-off" />
                <a href="landing.html" title>Logout</a>
              </li>
            </ul>
          </div>{/* Shortcuts */}



          <div className="widget stick-widget">
          <h4 className="widget-title">Joined Groups</h4>
          <ul className="followers" id="scrollbar" style={{overflowY:'scroll'}} >
          { myAcceptrdGroups.filter(function(ele) {
                    if (ele.user_id === current_ID) {
                        return true; // skip
                    }
                    return false;
                    }).map((element,index) => {
                    return (
            <li key={index}>
              <figure><img src={require(`../image/${element.group_image}`)} alt="" /></figure>
              <div className="friend-meta">
                <h4><a  href={`/singleGroup/${element.group_id}/show`} title>{element.group_name}</a></h4>
                {/* <a href="#" title className="underline">Add Friend</a> */}
              </div>
            </li>
 )})}
          </ul>
        </div>{/* recent activites */}



          <div className="widget stick-widget">
            <h4 className="widget-title">My Groups</h4>
            <ul className="followers" id="scrollbar" style={{overflowY:'scroll'}} >
              
            { groups.filter(function(ele) {
                    if (ele.user_id === current_ID) {
                        return true; // skip
                    }
                    return false;
                    }).map((element,index) => {
                    return (

              <li  key={index}>
                <figure><img src={require(`../image/${element.group_image}`)} alt="" /></figure>
                <div className="friend-meta">
                  <h4><a href={`/singleGroup/${element.group_id}/show`} title>{element.group_name}</a></h4>
                  {/* <a href="#" title className="underline">Add Friend</a> */}
                </div>
              </li>
           )})}
            </ul>
          </div>{/* who's following */}
        </aside>
      </div>
      
    );
}

export default Sidebar;
