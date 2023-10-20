import styles from './MyInfo.module.css'
import 'animate.css';

import myPictureInfo from '../picture/section1/my-profileInfo.jpg'
import imgTape from '../picture/section1/Tape.png'

function MyInfo() {
    const birthday = new Date('1999-06-29'); // เปลี่ยนวันเกิดเป็นวันที่คุณต้องการ
    const today = new Date(); // สร้างวันที่ปัจจุบัน
    const ageInMilliseconds = today - birthday; // ลบวันเกิดจากวันปัจจุบัน
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    return (
        <div className={styles.MyInfoBg}>
            <h4><span>Name : </span> Techin Kowpasert</h4>
            <h4><span>Nick-Name : </span> Tom</h4>
            <h4><span>Date of birth : </span> June 29.1999</h4>
            <h4><span>Age : </span> {ageInYears.toFixed(0)} </h4>
            <h4><span>Education : </span> <br />
                2016 – 2018 Kamphaeng PhetPittayakhom <br />
                2018 – 2022 King Mongkut's Institute of Technology Ladkrabang (KMITL)
                Faculty of Information Technology (IT)
            </h4>
            <h4><span>Address : </span> <br />
                67 Ratchadamnern 1
                Soi 10 Sub-district
                NaiMaueng District Mueang
                Kamphaeng Phet 62000
            </h4>
            <img id={styles.tapeInfo1} src={imgTape} alt="tapeInfo 1" />
            <img id={styles.tapeInfo2} src={imgTape} alt="tapeInfo 2" />
            <img id={styles.myPictureInfo} src={myPictureInfo} alt="My Profile Infomation." />
        </div>
    )
}

export default MyInfo;