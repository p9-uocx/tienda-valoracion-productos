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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const AdminCreateProduct = ({ data = {}, onCloseClick }) => {
  return (
    <Card className="edit-product-modal-container modal-container">
      <CardHeader
        title="Crear Producto"
        className="modal-header"
        action={
          <IconButton aria-label="Settings" onClick={onCloseClick}>
            <CloseIcon />
          </IconButton>
        }
      />
      <CardContent className="padding-top-card-content">
        <form id="form-create-user" noValidate autoComplete="off">
          <Container>
            <Row>
              <Col>
                <TextField                  
                  name="reference"
                  label="Reference"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                />
              </Col>
              <Col>
                <TextField                  
                  name="title"
                  label="Title"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <TextField
                  multiline
                  rowsMax="5"
                  name="description"
                  label="Description"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <TextField
                  name="price"
                  label="Price"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                />
              </Col>
              <Col>
                <TextField
                  name="img_url"
                  label="Img Url"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                />
              </Col>
            </Row>
          </Container>
        </form>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="secondary"
          className="margin-button"
          type="submit"
          form="form-create-product"

        >
          Create Product
          </Button>
      </CardActions>
    </Card>
  );
};
