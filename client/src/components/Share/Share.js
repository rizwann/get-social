import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

const Share = () => {
    return (
        <div className='share'>
           <div className="shareWrapper">
               <div className="shareTop">
                   <img src="/assets/person/1.jpeg" alt="pp" className='shareProfileImg' />
               <input placeholder="What the fuck is in your mind" className='shareInput' />
               </div>
               <hr className="shareHr" />

               <div className="shareBottom">
                   <div className="shareOptions">
                       <div className="shareOption">
                           <PermMedia htmlColor='tomato' className="shareIcon"/>
                           <span className="shareOptionText">Photo or Video</span>
                       </div>
                       <div className="shareOption">
                           <Label className="shareIcon" htmlColor='skyblue'/>
                           <span className="shareOptionText">Tag</span>
                       </div>
                       <div className="shareOption">
                           <Room className="shareIcon" htmlColor='green'/>
                           <span className="shareOptionText">Location</span>
                       </div>
                       <div className="shareOption">
                           <EmojiEmotions className="shareIcon" htmlColor='goldenrod'/>
                           <span className="shareOptionText">Feeling/Activity</span>
                       </div>
                   </div>

                   <button className="shareButton">Share</button>
               </div>
           </div>
        </div>
    )
}

export default Share
