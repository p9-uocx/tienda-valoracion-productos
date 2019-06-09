import React, { PureComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleTwoTone from '@material-ui/icons/AccountCircleTwoTone'
import Create from '@material-ui/icons/Create';
import AddCircle from '@material-ui/icons/AddCircle';

import './admin-list-user.scss';

export class ListUser extends PureComponent {

  static defaultProps = {
    data: [
      {
        "id_user": 1,
        "first_name": "Javier",
        "last_name": "Delgado",
        "gender": "male",
        "email": "mohatar@yahoo.com",
        "password": "zanfona",
        "rol": 1,
        "date_add": "2019-05-20",
        "id": 1
      },
      {
        "id_user": 2,
        "first_name": "Sergio",
        "last_name": "Garcia",
        "gender": "male",
        "email": "sergio@gmail.com",
        "password": "zanfona",
        "rol": 1,
        "date_add": "2019-06-02",
        "id": 2
      }
    ]
  };

  render() {
    return <div>
      <Grid item md={12}>
        <Typography variant="h6" >
          List of users
          </Typography>
        <div >
          <List>
            <ListItem className="bottom-border">
              <ListItemAvatar>
                <Avatar>
                  <AddCircle />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <div className="user-list">
                    <span><b>Add New User</b></span>
                  </div>
                }
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Delete">
                  <AddCircle className="margin-right"></AddCircle>
                </IconButton>                
              </ListItemSecondaryAction>
            </ListItem>
            {this.props.data.map(elem => (
              <ListItem className="bottom-border">
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleTwoTone />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <div>
                      <div className="user-list">
                        <span>First Name: <b>{elem.first_name}</b></span>
                        <span> - Last Name: <b>{elem.last_name}</b></span>
                      </div>
                      <div className="user-list">
                        <span>Email: <b>{elem.email}</b></span>
                        <span> - Date Added: <b>{elem.date_add}</b></span>
                        <span> - Rol: <b>{elem.rol}</b></span>
                      </div>
                    </div>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="Delete">
                    <Create className="margin-right"></Create>
                  </IconButton>
                  <IconButton edge="end" aria-label="Delete">
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
    </div>;
  }
}
