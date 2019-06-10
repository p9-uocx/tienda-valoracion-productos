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

export const AdminCreateCategory = ({ data = {}, onCloseClick }) => {
  return (
    <Card className="edit-category-modal-container modal-container">
      <CardHeader
        title="Crear Categoria"
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
            label="Category Name"
            className="flex-child"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Category Excerpt"
            className="flex-child"
            margin="normal"
            variant="outlined"
          />          
        </form>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary" className="margin-button">
          Create Category
          </Button>
      </CardActions>
    </Card>
  );
};
