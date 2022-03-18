
import Switch from '@material-ui/core/Switch';
import {  useDispatch } from "react-redux";
import { flagPost} from "../../store/actions/like-dislike";


const ModeratorSwitch = () => {
    const dispatch = useDispatch()
    dispatch(flagPost(loggedUserId));
    return (
        <div>
             <Switch
             color="primary"/>
        </div>
    )
}

export default ModeratorSwitch
