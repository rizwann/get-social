
import "./profile.css";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

const Profile = () => {
  return (
    <>
   
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRight">
              <div className="profileCover">
              <img className='profileCoverImg' src="assets/post/3.jpeg" alt="" />
              <img className='profileUserImg' src="assets/post/7.jpeg" alt="" />
              </div>
              <div className="profileInfo">
                  <h4 className='profileInfoName'>Rizwan Kabir</h4>
                  <span className="profileInfoDesc">Hello My Friends</span>
                  
              </div>
              
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
