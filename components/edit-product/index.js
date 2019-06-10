import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export const AdminEditProduct = ({ data = {}, onCloseClick }) => {
  const defaultProps = {
    data: {
      "id_product": 2,
      "reference": 197876,
      "title": "Checked Wide Tie DetailTable Wonderful Furniture Rustic Amp",
      "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
      "price": 189.49,
      "img_url": "static/img/products/bedroomFurniture/2_4.jpg",
      "excerpt": null,
      "available": 1,
      "meta_title": null,
      "meta_description": null,
      "date_add": "2019-05-20"
    }
  }
  return (
    <Card className="edit-product-modal-container modal-container">
      <CardHeader
        title="Editar Producto"
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
            label="Reference"
            className="flex-child"
            value={defaultProps.data.reference}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Title"
            className="flex-child"
            value={defaultProps.data.title}
            margin="normal"
            variant="outlined"
          />
          <TextField
            multiline
            rowsMax="5"
            id="outlined-name"
            label="Description"
            className="flex-child"
            value={defaultProps.data.description}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Price"
            className="flex-child"
            value={defaultProps.data.price}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Img Url"
            className="flex-child img-url"
            value={defaultProps.data.img_url}
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
