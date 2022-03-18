import styles from './feeds.module.css'
import Header from '../components/header/header-bar';
import SideBarContainer from '../components/sidebars/rightsidebar/SideBarContainer';
import NewsFeed from '../components/newsfeed/newsFeed';
import LeftSideBarContainer from '../components/sidebars/leftsidebar/leftsidebarcontainer';

const Feeds = () => {
   
    return (
        <div className={styles.mainDiv}>
            <Header />
            <div className={styles.wrapper}>
            <LeftSideBarContainer />
            <NewsFeed />
            <SideBarContainer />
            </div>
        </div>
    )
}

export default Feeds
