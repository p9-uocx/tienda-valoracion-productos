// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const AdminCreateUser = ({ data = {}, onCloseClick }) => {
  return (
    <Card className="edit-user-modal-container modal-container">
      <CardHeader
        title="Crear Usuario"
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
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Last Name"
            className="flex-child"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Email"
            className="flex-child"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Password"
            className="flex-child"
            margin="normal"
            variant="outlined"
          />
        </form>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary" className="margin-button">
          Create User
          </Button>
      </CardActions>
    </Card>
  );
};
