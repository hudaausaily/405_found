import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Rightbar from '../components/rightbar';
import axios from 'axios'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';
import NavEdit from '../components/navEdit';


import'../css/style.css';
import '../css/color.css';
import '../css/main.min.css';
import '../css/responsive.css';
import '../css/addedStyle.css';

const EditProfile = () => {

  const [like, setLike] = useState('')


  const {profile_id} = useParams();
  const {postID} = useParams();


  const current_Fname = localStorage.getItem('name');
  const current_ID = JSON.parse(localStorage.getItem('id'));
  const current_Email = localStorage.getItem('email');

  const [inputs , setInputs] = useState("")
  const [posts , setPosts] = useState([]);
  const [comments , setComments] = useState([]);
  const [likes , setLikes] = useState([]);
  const [file, setFile] = useState(null);
  const [user , setUser] = useState([]);





  useEffect(()=>{
    getUser();
} , [])


function getUser(){
    axios.get(`http://localhost:80/405found/backend/userProfile.php/${current_ID}`)
    .then(response => {
        setUser(response.data);
    })
}


const handleEditUser = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setInputs( {...inputs , [name]: value})
}

const handleEditUserSubmit  = async (e) => {
  e.preventDefault();

  const formEditData = new FormData();

  formEditData.append("name", inputs['name']);
  formEditData.append("first_name", inputs['first_name']);
  formEditData.append("last_name", inputs['last_name']);
  formEditData.append("phone", inputs['phone']);
  formEditData.append("password", inputs['password']);
  formEditData.append("file", file);
  

  try {
    const response = await axios.post(
      `http://localhost:80/405found/backend/editUserProfile.php/${current_ID}`, formEditData
    );
    console.log(response.data);
    window.localStorage.setItem('image',file.name)

    window.location.assign(`/profile`);
  } catch (error) {
    console.error(error);
  }
};



    return (

    <div>

        <div className="theme-layout">
        <NavEdit/>
        {user.map((Oneuser)=>{
                                return( 
        <div>
            <section>
              <div className="feature-photo">
                <figure><img src="/images/resources/timeline-1.jpg" alt="" /></figure>
                <div className="add-btn">
                  
                </div>
                
                <div className="container-fluid" style={{backgroundColor:'#212529'}}>
                  <div className="row merged">
                    <div className="col-lg-2 col-sm-3">
                      <div className="user-avatar">
                        <figure>
                          <img src={require(`../image/${Oneuser.image}`)} alt="" />
                          <form className="edit-phto">
                            <i className="fa fa-camera-retro" />
                            <label className="fileContainer">
                              Edit Display Photo
                              <input type="file" />
                            </label>
                          </form>
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-10 col-sm-9">
                      <div className="timeline-info" style={{background:'none'}} >
                        <ul style={{backgroundColor:'brown', borderRadius:'0 20px 20px 0'}}>
                          <li className="admin-name">
                            <h5 style={{color:'white'}}>{Oneuser.name}</h5>
                            <span style={{fontSize:'12px',color:'gray'}}>@{Oneuser.name}</span>
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          
            
          
            <section>
            <div className="gap gray-bg">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row" id="page-contents">
                    <Sidebar/>
                    <div className="col-lg-6">
                    <div className="central-meta">
                      <div className="editing-info">
                        <h5 className="f-title sideLink"><i className="ti-alt" /> Edit Basic Information</h5>
                        
                  
                        
                        <form id={`editUserForm${Oneuser.id}`} onSubmit={handleEditUserSubmit}>
                          <div className="form-group half">	
                            <input name="name" type="text" defaultValue={Oneuser.name} onChange={handleEditUser} />
                            <label className="control-label" htmlFor="">Name</label><i className="mtrl-select" />
                          </div>
                          <div className="form-group half">	
                            <input name="password" type="password" defaultValue={Oneuser.password} onChange={handleEditUser} />
                            <label className="control-label" htmlFor="">Password</label><i className="mtrl-select" />
                          </div>
                          <div className="form-group half">	
                            <input name="phone" type="number" defaultValue={Oneuser.phone} onChange={handleEditUser} />
                            <label className="control-label" htmlFor="">Phone</label><i className="mtrl-select" />
                          </div>
                          <div className="form-group half">	
                            <input type="file" name="file" id="file"onChange={(e) => setFile(e.target.files[0])} />
                            <label className="control-label" htmlFor="">Image</label><i className="mtrl-select" />
                          </div>
                        
                          <div className="submit-btns">
                            <button className="mtr-btn red"><span>Update</span></button>
                          </div>
                        </form>
                      </div>
                    </div>	
                  </div>
                      <Rightbar/>
                    </div>	
                  </div>
                </div>
              </div>
            </div>	
          </section>
        </div>
           )
                        })}
          
        </div>
    </div>
    );
}

export default EditProfile;
