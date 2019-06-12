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
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';

import './create-user.scss';

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
        <Container>
          <form id="form-create-user" onSubmit={onCreateSave}>
            <Row className="padding-bottom-row">
              <Col>
                <TextField name="first_name" label="First Name" variant="outlined" />
              </Col>
              <Col>
                <TextField name="last_name" label="Last Name" variant="outlined" />
              </Col>
            </Row>
            <Row className="padding-bottom-row">
              <Col>
                <TextField name="email" label="Email" variant="outlined" />
              </Col>
              <Col>
                <TextField name="password" label="Password" variant="outlined" />
              </Col>
            </Row>
            <Row >
              <Col>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="rol">Rol</InputLabel>
                  <Select
                    className="min-width-select"
                    name="rol"
                    inputProps={{
                      name: 'rol',
                      id: 'rol'
                    }}
                  >
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={3}>4</MenuItem>
                  </Select>
                </FormControl>
              </Col>
              <Col>
                <FormControl variant="outlined" >
                  <InputLabel htmlFor="gender">Gender</InputLabel>
                  <Select
                    className="min-width-select"
                    name="gender"
                    inputProps={{
                      name: 'gender',
                      id: 'gender'
                    }}
                  >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Col>
            </Row>
          </form>
        </Container>
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
