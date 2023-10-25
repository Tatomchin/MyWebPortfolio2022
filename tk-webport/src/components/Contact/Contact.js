import styles from './Contact.module.css'
import stylesForm from './ContactForm.module.css'
import picEmail from '../../picture/assets/logo/mail.png'
import picLine from '../../picture/assets/logo/line.png'
import picPhone from '../../picture/assets/logo/tel.png'
import picFB from '../../picture/assets/logo/fb.png'
import picGithub from '../../picture/assets/logo/github.png'
import picLinkedin from '../../picture/assets/logo/linkedin.png'
import picPDF from '../../picture/assets/logo/pdf.png'
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
            <img id={styles.stampPic} src={picStamp} alt='stamp' />
            <div id={styles.headContct}>
                <h2 className={styles.headContct}>CONTACT</h2>
            </div>
            <div className={styles.ContactForm}>
                <ContactForm animInputText={animInputText} animLabelName={animLabelName}
                    animLabelEmail={animLabelEmail} animLabelMassage={animLabelMassage} />
            </div>
            <div className={styles.ContactICON}>
                <ul className={`${styles.ListContact} ${animListContact}`}>
                    <li><p><a href="mailto: tom.kowprasert@gmail.com"><img class={styles.imgLogo} src={picEmail} alt='e-mail' />tom.kowprasert@gmail.com</a></p></li>
                    <li><p><a href="https://line.me/ti/p/Kz7ELZgIw8?fbclid=IwAR2P8Q7GJX3aHni3DOZsIfhHH-H0dHkwkMupSArjItcOruqg8FKQCrroeHI"><img class={styles.imgLogo} src={picLine} alt='Line' />tom.kowprasert</a></p></li>
                    <li><p><a href="tel: +6662-363-1016"><img class={styles.imgLogo} src={picPhone} alt='Telephone number' />+6662-363-1016</a></p></li>
                    <li><p><a href="https://www.facebook.com/tomkung.kowprasert/"><img class={styles.imgLogo} src={picFB} alt='Facebook' />TK Techin Kowprasert</a></p></li>
                    <li><p><a href="https://github.com/Tatomchin"><img class={styles.imgLogo} src={picGithub} alt='Github' />Tatomchin</a></p></li>
                    <li><p><a href="https://www.linkedin.com/in/techin-kowprasert-9a3a08263"><img class={styles.imgLogo} src={picLinkedin} alt='Linkedin' />Techin Kowprasert</a></p></li>
                    <li><p><a href='https://drive.google.com/drive/folders/1c0_ouhbf6RGNgCNTJGKMVxXEzxlbvFF4?usp=drive_link'><img class={styles.imgLogo} src={picPDF} alt='PDF resume' />Download Resume PDF</a></p></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;