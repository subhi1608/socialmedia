import ImportantLink from './importantlinks'
import styles from './leftsidebarcontainer.module.css'
import UserProfileCard from './userprofile'

const LeftSideBarContainer = () => {
    return (
        <div className={styles.mainDiv}>
            <UserProfileCard/>
            <ImportantLink/>
        </div>
    )
}

export default LeftSideBarContainer
