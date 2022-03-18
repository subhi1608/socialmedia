import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import CheckIcon from '@material-ui/icons/Check';
import { blue } from '@material-ui/core/colors';
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { acceptRequest } from '../../store/actions/acceptRequest';
import { showRequests} from '../../store/actions/userRequests'


const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  checkButton:{
    width:20,
    marginRight:5,
    backgroundColor:blue[300]
  }
});

function SimpleDialog(props) {
    const response            = useSelector((state)=>state.requestFriends.users)
    const loggedUserId        = useSelector((state)=>state.profile.user._id)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showRequests(loggedUserId))
    }, [loggedUserId,dispatch])

    const classes = useStyles();
    const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

 const addFriendHandler =(_id)=>{
  //  console.log(loggedUserId,'loggedId & clicked user',_id);
   dispatch(acceptRequest({loggedUserId,_id}))
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Accept Requests</DialogTitle>
      <List>
        {response.map((item) =>{
          var {id,name} =item;
          // console.log(id,name,'from map');
          return(
            <ListItem key={id}>
              <Button className={classes.checkButton} onClick={()=>{addFriendHandler(id)}} variant="contained" endIcon={<CheckIcon></CheckIcon>}></Button>
              <ListItemText primary={name} />
            </ListItem>
          )
        }
        )}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <PersonIcon />
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
