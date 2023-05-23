import styles from './Contact.module.css'
import stylesForm from './ContactForm.module.css'
import picEmail from '../../picture/logo/mail.png'
import picLine from '../../picture/logo/line.png'
import picPhone from '../../picture/logo/tel.png'
import picFB from '../../picture/logo/fb.png'
import picGithub from '../../picture/logo/github.png'
import picLinkedin from '../../picture/logo/linkedin.png'

import picStamp from '../../picture/section4/stamp.png'

import ContactForm from './ContactForm';
import { useInView } from 'react-intersection-observer';

let animContactBg = null;
let animListContact = null;
let animInputText = null;
let animLabelName = null;
let animLabelEmail = null;
let animLabelMassage = null;

function Contact() {
    const [ContactBg, ContactBgIsVisible] = useInView({ threshold: 0.3 });
    if (ContactBgIsVisible === true && animContactBg === null) {
        animContactBg = styles.AnimContactBg;
        document.documentElement.style.setProperty('--opacityContactBg--', 1);
        animListContact = styles.AnimListContact;
        animInputText = stylesForm.AnimInputText;
        animLabelName = stylesForm.AnimName;
        animLabelEmail = stylesForm.AnimEmail;
        animLabelMassage = stylesForm.AnimMessage;
    }
    return (
        <div className={`${styles.ContactBg} ${animContactBg}`} ref={ContactBg}>
            <img id={styles.stampPic} src={picStamp} alt='stamp'/>
            <div id={styles.headContct}>
                <h2 className={styles.headContct}>CONTACT</h2>
            </div>
            <div className={styles.ContactForm}>
                <ContactForm animInputText={animInputText} animLabelName={animLabelName}
                    animLabelEmail={animLabelEmail} animLabelMassage={animLabelMassage} />
            </div>
            <div className={styles.ContactICON}>
                <ul className={`${styles.ListContact} ${animListContact}`}>
                    <li><p><img class={styles.imgLogo} src={picEmail} alt='e-mail' />tom.kowprasert@gmail.com</p></li>
                    <li><p><img class={styles.imgLogo} src={picLine} alt='Line' />tom.kowprasert</p></li>
                    <li><p><img class={styles.imgLogo} src={picPhone} alt='Telephone number' />+6662-363-1016</p></li>
                    <li><p><img class={styles.imgLogo} src={picFB} alt='Facebook' />TK Techin Kowprasert</p></li>
                    <li><p><img class={styles.imgLogo} src={picGithub} alt='Github' />Tatomchin</p></li>
                    <li><p><img class={styles.imgLogo} src={picLinkedin} alt='Linkedin' />Techin Kowprasert</p></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;