import styles from './ListWebPJ.module.css'
import picGithub from '../../picture/logo/github.png'

import picAsean1 from '../../picture/exProjects/web/asean/1.png'
import picAsean2 from '../../picture/exProjects/web/asean/2.png'
import picAsean3 from '../../picture/exProjects/web/asean/3.png'

import picConsole1 from '../../picture/exProjects/web/rocket/1.png'
import picConsole2 from '../../picture/exProjects/web/rocket/2.png'
import picConsole3 from '../../picture/exProjects/web/rocket/3.png'

import picCleanfield1 from '../../picture/exProjects/web/cleanfield/1.png'
import picCleanfield2 from '../../picture/exProjects/web/cleanfield/2.png'
import picCleanfield3 from '../../picture/exProjects/web/cleanfield/3.png'

function ListWebPJ() {
    return (
        <div>
            <h3>WEBSITE PROJECTS</h3>
            <ul>
                <li className={styles.listProject}>
                    <h4>
                        <a href="https://asean-information-itkmitl.netlify.app/">Apr 2020 ASEAN Information Web</a> 
                        <a href="https://github.com/Tatomchin/AseanWebIT"><img src={picGithub} alt="GitHub Logo" /></a>
                    </h4>
                    <div>
                        <img src={picAsean1} alt="Asean 1" />
                        <img src={picAsean2} alt="Asean 2" />
                        <img src={picAsean3} alt="Asean 3" />
                    </div>
                </li>
                <li className={styles.listProject}>
                    <h4>
                        <a href="https://console-travel-rocketpj.netlify.app/#home">Sep 2020 Consoles's Travel</a> 
                        <a href="https://github.com/Tatomchin/RockProject-MP2020"><img src={picGithub} alt="GitHub Logo" /></a>
                    </h4>
                    <div>
                        <img src={picConsole1} alt="Consoles's Travel 1" />
                        <img src={picConsole2} alt="Consoles's Travel 2" />
                        <img src={picConsole3} alt="Consoles's Travel 3" />
                    </div>
                </li>
                <li className={styles.listProject}>
                    <h4>
                        <a href="https://cleanfield.netlify.app/">Nov 2020 Cleanfield Web</a> 
                        <a href="https://github.com/Tatomchin/coopProject-Cleanfield"><img src={picGithub} alt="GitHub Logo" /></a>
                    </h4>
                    <div>
                        <img src={picCleanfield1} alt="Clean Field 1" />
                        <img src={picCleanfield2} alt="Clean Field 2" />
                        <img src={picCleanfield3} alt="Clean Field 3" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ListWebPJ;