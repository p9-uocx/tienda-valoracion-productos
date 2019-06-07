import React, { PureComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleTwoTone from '@material-ui/icons/AccountCircleTwoTone'
import Create from '@material-ui/icons/Create';

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
            {this.props.data.map(elem => (
              <ListItem className="bottom-border">
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleTwoTone />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <div className="info-block-elem user-list">
                      <span >First Name: {elem.first_name}</span>
                      <span>Last Name: {elem.last_name}</span>
                      <span>Email: {elem.email}</span>
                      <span>Date Added: {elem.date_add}</span>
                      <span>Rol: {elem.rol}</span>
                    </div>
                  }

                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="Delete">
                    <Create></Create>                    
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
