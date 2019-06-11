// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './edit-user.scss';

export const AdminEditUser = ({ data = {}, onCloseClick }) => {
  debugger;
  return (
    <Card className="edit-user-modal-container modal-container">
      <CardHeader
        title="Editar Usuario"
        className="modal-header"
        action={
          <IconButton aria-label="Settings" onClick={onCloseClick}>
            <CloseIcon />
          </IconButton>
        }
      />
      <CardContent className="padding-top-card-content">
        <form className="form-edit-user" noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="First Name"
            className="flex-child"
            value={data.first_name}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Last Name"
            className="flex-child"
            value={data.last_name}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Email"
            className="flex-child"
            value={data.email}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Password"
            className="flex-child"
            value={data.password}
            margin="normal"
            variant="outlined"
          />
        </form>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary" className="margin-button">
          Save Changes
        </Button>
      </CardActions>
    </Card>
  );
};

AdminEditUser.defaultProps = {
  data: {
    id_user: 1,
    first_name: 'Javier',
    last_name: 'Delgado',
    gender: 'male',
    email: 'mohatar@yahoo.com',
    password: 'zanfona',
    rol: 1,
    date_add: '2019-05-20',
    id: 1,
  },
};
