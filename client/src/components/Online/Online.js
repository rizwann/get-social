import './online.css'

const Online = ({User}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    // console.log(User)
    return (
        <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={PF+User?.profilePicture} className='rightbarProfileImg' alt="" />
    <span className='rightbarOnline'></span>
        </div>
        <span className="rightbarUsername">{User?.username}</span>
    </li>
    )
}

export default Online
