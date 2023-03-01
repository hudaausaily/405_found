
import Rightbar from '../components/rightbar';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import { useEffect, useState } from "react";
import axios from "axios";
import SweetAlert from 'react-bootstrap-sweetalert';
import Post1 from '../components/post1';



const Home = () => {
//  __________share post_________________
      const current_ID = JSON.parse(localStorage.getItem('id'));
      // const ImageUser = JSON.parse(localStorage.getItem('image'));
      const [users,setUsers] = useState([]);
      const [inputs , setInputs] = useState("")
      const [posts , setPosts] = useState([]);
      const [comments , setComments] = useState([]);
      const [file, setFile] = useState(null);
        useEffect(()=>{
        getUsers();


      },[]);

        const getUsers = async () => {

        await axios.get(`http://localhost:80/405found/backend/user.php/${current_ID}`)
        .then((respone)=>{
            setUsers(respone.data[0])
          
        })
      }

      // create post
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

        window.location.assign('/home');
      } catch (error) {
        console.error(error);
      }
      };

      const handlePost = (e) => {
      const value = e.target.value;
      setInputs(value)
      }
//  _______end shere post________________
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
                                  <img className="shareProfileImg"  alt="" />
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
                                          {/* <li>
                                            <i className="fa fa-video-camera" />
                                            <label className="fileContainer">
                                              <input type="file" />
                                            </label>
                                          </li> */}
                                        
                                          <li>
                                            <button type="submit" className='red'>Post</button>
                                          </li>
                                        </ul>
                                      </div>
                                    </form>
                                      {/* ______________end share post________________ */}
                                  </div>
                                </div>
                              </div> 
                            

                              {/* add post new box */}
                              <div className="loadMore">
                              {/*POST*/}
                             <Post1/>
                                
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