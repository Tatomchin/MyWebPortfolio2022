import styles from './MyProjects.module.css';
import ListWebPJ from './ListWebPJ';
import ListGamePJ from './ListGamePJ';

import { useInView } from 'react-intersection-observer';

let animBgProject = null;
function MyProjects() {
    const [ bgProject , bgProjectIsVisible ] = useInView({threshold: 0.3});
    if (bgProjectIsVisible === true && animBgProject === null){
        animBgProject = styles.ProjectBgAnim;
        document.documentElement.style.setProperty('--opacityBgProject--', 1);
    }
    return (
        <div className={`${styles.MyProjectsBg} ${animBgProject}`} ref={bgProject}>
            <h2>MY PROJECTS</h2>
            <ListWebPJ TagObserve={bgProjectIsVisible}/>
            <ListGamePJ TagObserve={bgProjectIsVisible}/>
        </div>
    )
}

export default MyProjects;