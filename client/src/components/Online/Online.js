import './online.css'

const Online = ({User}) => {
    console.log(User)
    return (
        <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={User?.profilePicture} className='rightbarProfileImg' alt="" />
    <span className='rightbarOnline'></span>
        </div>
        <span className="rightbarUsername">{User?.username}</span>
    </li>
    )
}

export default Online
