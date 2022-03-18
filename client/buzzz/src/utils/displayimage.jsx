import Image from "../assets/person.jpg"
import style from './displayimage.module.css'

const DisplayImage = (props) => {
    return (
        <div className={style.displayImageDiv}>
            <img src={props.Image?props.Image:Image}  className={style.displayImage} alt="" />
        </div>
    )
}

export default DisplayImage
