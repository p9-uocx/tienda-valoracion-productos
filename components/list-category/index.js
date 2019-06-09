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
import Category from '@material-ui/icons/Category';
import Create from '@material-ui/icons/Create';

export class ListCategory extends PureComponent {
  static defaultProps = {
    data: [
      {
        id_category: 1,
        name: 'Bedroom Furniture',
        excerpt: 'The best Bedroom Furniture',
        meta_title: null,
        meta_description: null,
        date_add: '2019-05-30 00:00:00',
      },
      {
        id_category: 3,
        name: 'Coffe Tables',
        excerpt: 'The best Coffe Tables',
        meta_title: null,
        meta_description: null,
        date_add: '2019-05-30 00:00:00',
      },
      {
        id_category: 4,
        name: 'Sofas',
        excerpt: 'The best Sofas',
        meta_title: null,
        meta_description: null,
        date_add: '2019-05-30 00:00:00',
      },
    ],
  };

  render() {
    return (
      <div>
        <Grid item md={12}>
          <Typography color="" variant="h6">
            List of Categories
          </Typography>
          <div>
            <List>
              {this.props.data.map(elem => (
                <ListItem className="bottom-border">
                  <ListItemAvatar>
                    <Avatar>
                      <Category />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <div>
                        <div className="user-list">
                          <span>
                            Name Category: <b>{elem.name}</b>
                          </span>
                          <span>
                            {' '}
                            - Id Category: <b>{elem.id_category}</b>
                          </span>
                        </div>
                        <div className="user-list">
                          <span>
                            Email: <b>{elem.email}</b>
                          </span>
                          <span>
                            {' '}
                            - Date Added: <b>{elem.date_add}</b>
                          </span>
                          <span>
                            {' '}
                            - Excerpt: <b>{elem.excerpt}</b>
                          </span>
                        </div>
                      </div>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="Delete"
                      onClick={this.props.onEditClick(elem.id_category)}>
                      <Create className="margin-right" />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="Delete"
                      onClick={this.props.onDeleteClick(elem.id_category)}>
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
