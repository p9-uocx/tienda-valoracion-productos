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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <form id="form-create-category" noValidate autoComplete="off">
          <Container>
            <Row>
              <Col>
                <TextField
                  id="outlined-name"
                  name="name"
                  label="Category Name"
                  className="flex-child"
                  defaultValue=""
                  margin="normal"
                  variant="outlined"
                />
              </Col>
              <Col>
                <TextField
                  id="outlined-name"
                  name="excerpt"
                  label="Category Excerpt"
                  className="flex-child"
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
          form="form-create-category"
          >
          Create Category
          </Button>
      </CardActions>
    </Card>
  );
};
