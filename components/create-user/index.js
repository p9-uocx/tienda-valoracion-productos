// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export const AdminCreateUser = ({ data = {}, onCloseClick, onCreateSave }) => {
  return (
    <Card className="create-user-modal-container modal-container">
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
        <form id="form-create-user" onSubmit={onCreateSave}>
          <TextField
            name="first_name"
            label="First Name"
            className="flex-child"
            variant="outlined"
          />
          <TextField name="last_name" label="Last Name" className="flex-child" variant="outlined" />
          <Select
            value="gender"
            name="gender"
            className="flex-child"
            inputProps={{
              name: 'gender'
            }}
          >
            <MenuItem value={'Male'}>Male</MenuItem>
            <MenuItem value={'Female'}>Female</MenuItem>
          </Select>
          <TextField name="email" label="Email" className="flex-child" variant="outlined" />
          <TextField name="password" label="Password" className="flex-child" variant="outlined" />
          <TextField name="rol" label="Password" className="flex-child" variant="outlined" />
        </form>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="secondary"
          className="margin-button"
          type="submit"
          form="form-create-user">
          Create User
        </Button>
      </CardActions>
    </Card>
  );
};
