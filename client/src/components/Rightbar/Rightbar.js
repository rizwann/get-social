import './rightbar.css'
import {Users} from "../../dummyData"
import Online from '../Online/Online.js'

const Rightbar = ({profile}) => {
    const HomeRightbar = () =>{
        return(
            <>
             <div className="birthdayContainer">
                <img src="assets/gift.png" className='birthdayImg' alt="" />
     <span className="birthdayText"><b>Balsal</b> and <b>5 others </b>have birthday today</span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
               {Users.map((u)=>(
                   <Online key={u.id} User={u}/>
               ))}
                </ul>
            </>
        )
    }
    const ProfileRightbar = () =>{
        return (
        <>
        <h4 className='rightbarTitle'>User Information</h4>
<div className="rightbarInfo">
    <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">Essen</span>
    </div>
    <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Cumilla</span>
    </div>
    <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Married</span>
    </div>
</div>
<h4 className='rightbarTitle'>User Friends</h4>
<div className="rightbarFollowings">
<div className="rightbarFollowing">
        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Asif Khan</span>
    </div><div className="rightbarFollowing">
        <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Asif Khan</span>
    </div><div className="rightbarFollowing">
        <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Asif Khan</span>
    </div><div className="rightbarFollowing">
        <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Asif Khan</span>
    </div><div className="rightbarFollowing">
        <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Asif Khan</span>
    </div><div className="rightbarFollowing">
        <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Asif Khan</span>
    </div>
</div>

        </>)
    }
    return (
        <div className='rightbar'>
        <div className="rightbarWrapper">
          { profile ? <ProfileRightbar/> : <HomeRightbar/>}
                </div> 
        </div>
    )
}

export default Rightbar
