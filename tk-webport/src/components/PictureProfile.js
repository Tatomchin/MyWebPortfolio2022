import styles from './PictureProfile.module.css'
import myPicture from '../picture/my-profile3.jpg'
import imgTape from '../picture/section1/Tape.png'

import picLine from '../picture/logo/line.png'
import picFB from '../picture/logo/fb.png'
import picGithub from '../picture/logo/github.png'
import picLinkedin from '../picture/logo/linkedin.png'

function PictureProfile() {
    return (
        <div className={styles.PictureBg}>
            <img id={styles.tape1} src={imgTape} alt="Tape1" />
            <img id={styles.tape2} src={imgTape} alt="Tape2" />
            <img id={styles.myPicture} src={myPicture} alt="My Profile." />
            <ul className={`${styles.listIcon}`}>
                <li><a href="https://www.facebook.com/tomkung.kowprasert/"><img class={styles.listProfileimgLogo} src={picFB} alt='Facebook' /></a></li>
                <li><a href="https://line.me/ti/p/Kz7ELZgIw8?fbclid=IwAR2P8Q7GJX3aHni3DOZsIfhHH-H0dHkwkMupSArjItcOruqg8FKQCrroeHI"><img class={styles.listProfileimgLogo} src={picLine} alt='Line' /></a></li>
                <li><a href="https://www.linkedin.com/in/techin-kowprasert-9a3a08263"><img class={styles.listProfileimgLogo} src={picLinkedin} alt='Linkedin' /></a></li>
                <li><a href="https://github.com/Tatomchin"><img class={styles.listProfileimgLogo} src={picGithub} alt='Github' /></a></li>
            </ul>
        </div>
    )
}

export default PictureProfile;