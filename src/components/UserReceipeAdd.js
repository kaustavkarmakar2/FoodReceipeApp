import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../redux/actions/noteActions';
import inputActions from '../redux/actions/inputActions';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
function UserReceipeAdd() {
    const classes = useStyles();

    // const id = useSelector(state => state.inputs.id);
    const title = useSelector(state => state.inputs.title);
    const content = useSelector(state => state.inputs.content);
    const dispatch = useDispatch();
    const addNote = () => {
      if(title && content) {
        dispatch(noteActions.addNote({
          title,
          content
        }))
        dispatch(inputActions.resetInputs())
      }
    }
    return (
        <div className="bordersA">
            <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Name of dish</InputLabel>
        <Input
          id="input-with-icon-adornment"
          value={title}
          onChange={e => 
            dispatch(inputActions.setInputTitle(e.target.value))
          }
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        <TextField
        value={content}
        onChange={e => 
          dispatch(inputActions.setInputContent(e.target.value))
        }
        id="input-with-icon-textfield"
        label="Steps To cook"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
        
        </FormControl>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Quatity"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Ingredient name" />
          </Grid>
            <Grid item>
              <Button style={{color:'Green',backgrondColor:'Blue'}} onClick={ addNote}>ADD</Button>
            </Grid>
        </Grid>
      </div>
        </div>
    )
}

export default UserReceipeAdd
