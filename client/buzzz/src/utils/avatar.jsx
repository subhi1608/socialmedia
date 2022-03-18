import  style  from './avatar.module.css'
import Pic from '../assets/avatar.jpg'

const Avatar = (props) => {
    return (
        <div className={style.mainDiv}>
            <img className={style.avatarImage} src={props.Image?props.Image:Pic} alt="" />
        </div>
    )
}

export default Avatar
