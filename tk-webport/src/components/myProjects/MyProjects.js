import styles from './MyProjects.module.css'
import ListWebPJ from './ListWebPJ'
import ListGamePJ from './ListGamePJ';

function MyProjects() {
    return (
        <div className={styles.MyProjectsBg}>
            <h2>MY PROJECTS</h2>
            <ListWebPJ/>
            <ListGamePJ/>
        </div>
    )
}

export default MyProjects;