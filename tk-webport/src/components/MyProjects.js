import styles from './MyProjects.module.css'

function MyProjects() {
    return (
        <div className={styles.MyProjectsBg}>
            <h2>MY PROJECTS</h2>
            <h3>WEBSITE PROJECTS</h3>
            <ul>
                <li>Apr 2020 ASEAN Information Web</li>
                <li>Sep 2020 Rocket Web</li>
                <li>Nov 2020 Cleanfield Web</li>
            </ul>
            <h3>GAME PROJECTS</h3>
            <ul>
                <li>May 2022 DropQuest (UE4)</li>
                <li>Dec 2020 JustCook (UE4)</li>
                <li>Sep 2020 DuckHunt for Rocket Web (JS)</li>
            </ul>
        </div>
    )
}

export default MyProjects;