import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './edit-category.scss';

export const AdminEditCategory = ({ data = {}, onCloseClick }) => {

  const defaultProps = {
    data: [
      {
        "id_category": 1,
        "name": "Bedroom Furniture",
        "excerpt": "The best Bedroom Furniture",
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-05-30 00:00:00"
      },
      {
        "id_category": 3,
        "name": "Coffe Tables",
        "excerpt": "The best Coffe Tables",
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-05-30 00:00:00"
      },
      {
        "id_category": 4,
        "name": "Sofas",
        "excerpt": "The best Sofas",
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-05-30 00:00:00"
      }
    ]
  };

  return (
    <Card className="edit-category-modal-container modal-container">
      <CardHeader
        title="Editar Categoria"
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
            value={defaultProps.data[0].name}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Category Excerpt"
            className="flex-child"
            value={defaultProps.data[0].excerpt}
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
