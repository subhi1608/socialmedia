import styles from './sidebar.module.css'
import MyContacts from './Contacts'
import Suggestions from './Suggestions'

const SideBarContainer = () => {
   
    return (
        <div className={styles.sidebar}>
            <MyContacts />
            <Suggestions />
        </div>
    )
}

export default SideBarContainer