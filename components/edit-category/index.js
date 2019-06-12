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

import './edit-category.scss';

export const AdminEditCategory = ({ data = {}, onCloseClick }) => {

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
        <form id="form-edit-category" noValidate autoComplete="off">
          <Container>
            <Row>
              <Col>
                <TextField
                  id="outlined-name"
                  label="Category Name"
                  className="flex-child"
                  defaultValue={data.name}
                  margin="normal"
                  variant="outlined"
                />
              </Col>
              <Col>
                <TextField
                  id="outlined-name"
                  label="Category Excerpt"
                  className="flex-child"
                  defaultValue={data.excerpt}
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
          type="sumbit"
          form="form-edit-category"
          >
          Save Changes
          </Button>
      </CardActions>
    </Card>
  );
};
