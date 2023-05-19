import styles from './PictureProfile.module.css'
import myPicture from '../picture/my-profile3.jpg'
import imgTape from '../picture/section1/Tape.png'

function PictureProfile() {
    return (
        <div className={styles.PictureBg}>
            <img id={styles.tape1} src={imgTape} alt="Tape1"/>
            <img id={styles.tape2} src={imgTape} alt="Tape2"/>
            <img id={styles.myPicture} src={myPicture} alt="My Profile."/>
        </div>
    )
}

export default PictureProfile;