import styles from './Contact.module.css'
import picEmail from '../../picture/logo/mail.png'
import picLine from '../../picture/logo/line.png'
import picPhone from '../../picture/logo/tel.png'
import picFB from '../../picture/logo/fb.png'
import picGithub from '../../picture/logo/github.png'
import picLinkedin from '../../picture/logo/linkedin.png'

function Contact() {
    return (
        <div className={styles.ContactBg}>
            
            <div>
                <h2>Contact</h2>
                <p><img class={styles.imgLogo} src={picEmail} alt='e-mail' />tom.kowprasert@gmail.com</p>
                <p><img class={styles.imgLogo} src={picLine} alt='Line' />tom.kowprasert</p>
                <p><img class={styles.imgLogo} src={picPhone} alt='Telephone number' />+6662-363-1016</p>
                <p><img class={styles.imgLogo} src={picFB} alt='Facebook' />TK Techin Kowprasert</p>
                <p><img class={styles.imgLogo} src={picGithub} alt='Github' />Tatomchin</p>
                <p><img class={styles.imgLogo} src={picLinkedin} alt='Linkedin' />Techin Kowprasert</p>
            </div>
        </div>
    )
}

export default Contact;