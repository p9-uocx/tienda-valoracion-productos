import React, { PureComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Create from '@material-ui/icons/Create';
import CheckCircle from '@material-ui/icons/CheckCircle';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';

import './list-role.scss';

export class ListRole extends PureComponent {
  defaultProps = {
    data: [
      {
        "id_roles": 1,
        "name": "Administrador",
        "edit_product": true,
        "create_product": true,
        "delete_product": true,
        "edit_review": false,
        "create_review": false,
        "delete_review": false,
        "dashboard_access": true,
        "edit_category": true,
        "create_category": true,
        "delete_category": true,
        "edit_user": true,
        "create_user": true,
        "delete_user": true,
        "edit_role": true,
        "create_role": true,
        "delete_role": true
      },
      {
        "id_roles": 2,
        "name": "Registrado",
        "edit_product": false,
        "create_product": false,
        "delete_product": false,
        "edit_review": true,
        "create_review": true,
        "delete_review": true,
        "dashboard_access": false,
        "edit_category": false,
        "create_category": false,
        "delete_category": false,
        "edit_user": false,
        "create_user": false,
        "delete_user": false,
        "edit_role": false,
        "create_role": false,
        "delete_role": false
      },
      {
        "id_roles": 3,
        "name": "Avanzado",
        "edit_product": false,
        "create_product": false,
        "delete_product": false,
        "edit_review": true,
        "create_review": true,
        "delete_review": true,
        "dashboard_access": false,
        "edit_category": false,
        "create_category": false,
        "delete_category": false,
        "edit_user": false,
        "create_user": false,
        "delete_user": false,
        "edit_role": false,
        "create_role": false,
        "delete_role": false
      },
      {
        "id_roles": 4,
        "name": "Profesional",
        "edit_product": false,
        "create_product": false,
        "delete_product": false,
        "edit_review": true,
        "create_review": true,
        "delete_review": true,
        "dashboard_access": false,
        "edit_category": false,
        "create_category": false,
        "delete_category": false,
        "edit_user": false,
        "create_user": false,
        "delete_user": false,
        "edit_role": false,
        "create_role": false,
        "delete_role": false
      }
    ]
  }


  render() {
    return (
      <div>
        <Grid item md={12}>
          <Typography variant="h6">List of Roles</Typography>
          <div>
            <List>
              {this.props.data.map(elem => (
                <ListItem className="bottom-border">
                  <ListItemAvatar>
                    <Avatar>
                      <CheckCircle />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <div>
                        <div className="user-list padding-bottom">
                          <span>
                            Role Name: <b>{elem.name}</b>
                          </span>
                          <span>
                            {' '}
                            - Id Rol: <b>{elem.id_roles}</b>
                          </span>
                        </div>
                        <div className="user-list display-inline">
                          <FormControl component="fieldset">
                            <FormLabel component="legend">Product Roles</FormLabel>
                            <FormGroup>
                              <FormControlLabel
                                control={<Checkbox className="margin-right-checkbox" checked={elem.edit_product} />}
                                label="Edit Product"
                              />
                              <FormControlLabel
                                control={<Checkbox className="margin-right-checkbox" checked={elem.create_product} onChange="" />}
                                label="Create Product"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox className="margin-right-checkbox" checked={elem.delete_product} onChange="" />
                                }
                                label="Delete Product"
                              />
                            </FormGroup>
                          </FormControl>
                        </div>
                        <div className="display-inline">
                          <FormControl component="fieldset">
                            <FormLabel component="legend">Review Roles</FormLabel>
                            <FormGroup>
                              <FormControlLabel
                                control={<Checkbox className="margin-right-checkbox" checked={elem.edit_review} />}
                                label="Edit Review"
                              />
                              <FormControlLabel
                                control={<Checkbox className="margin-right-checkbox" checked={elem.create_review} onChange="" />}
                                label="Create Review"
                              />
                              <FormControlLabel
                                control={<Checkbox className="margin-right-checkbox" checked={elem.delete_review} onChange="" />}
                                label="Delete Review"
                              />
                            </FormGroup>
                          </FormControl>
                        </div>
                        <div className="display-inline">
                          <FormControl component="fieldset">
                            <FormLabel component="legend">Category Roles</FormLabel>
                            <FormGroup>
                              <FormControlLabel
                                control={<Checkbox className="margin-right-checkbox" checked={elem.edit_category} />}
                                label="Edit Category"
                              />
                              <FormControlLabel
                                control={<Checkbox className="margin-right-checkbox" checked={elem.create_category} onChange="" />}
                                label="Create Category"
                              />
                              <FormControlLabel
                                control={<Checkbox className="margin-right-checkbox" checked={elem.delete_category} onChange="" />}
                                label="Delete Category"
                              />
                            </FormGroup>
                          </FormControl>
                        </div>
                        <div className="display-inline">
                          <FormControl component="fieldset">
                            <FormLabel component="legend">User Roles</FormLabel>
                            <FormGroup>
                              <FormControlLabel
                                control={<Checkbox className="margin-right-checkbox" checked={elem.edit_user} />}
                                label="Edit User"
                              />
                              <FormControlLabel
                                control={<Checkbox className="margin-right-checkbox" checked={elem.create_user} onChange="" />}
                                label="Create User"
                              />
                              <FormControlLabel
                                control={<Checkbox className="margin-right-checkbox" checked={elem.delete_user} onChange="" />}
                                label="Delete User"
                              />
                            </FormGroup>
                          </FormControl>
                        </div>
                        <div className="display-inline">
                          <FormControl component="fieldset">
                            <FormLabel component="legend">Roles</FormLabel>
                            <FormGroup>
                              <FormControlLabel
                                control={<Checkbox className="margin-right-checkbox" checked={elem.edit_role} />}
                                label="Edit Role"
                              />
                              <FormControlLabel
                                control={<Checkbox className="margin-right-checkbox" checked={elem.create_role} onChange="" />}
                                label="Create Role"
                              />
                              <FormControlLabel
                                control={<Checkbox className="margin-right-checkbox" checked={elem.delete_role} onChange="" />}
                                label="Delete Role"
                              />
                            </FormGroup>
                          </FormControl>
                        </div>
                      </div>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="Delete"
                      onClick={this.props.onEditClick(elem.id_user)}>
                      <Create className="margin-right" />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="Delete"
                      onClick={this.props.onDeleteClick(elem.id_user)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </div>
    );
  }
}
