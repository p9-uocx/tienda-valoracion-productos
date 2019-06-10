import React, { PureComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import StarRatingComponent from 'react-star-rating-component';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Create from '@material-ui/icons/Create';

import './admin-list-review.scss';

export class ListReview extends PureComponent {
  render() {
    return (
      <div>
        <Grid item md={12}>
          <Typography color="" variant="h6">
            List of Reviews
          </Typography>
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
                      <div >
                        <div className="user-list">
                          <span>
                            User ID: <b>{elem.user_id}</b>
                          </span>
                          <span>
                            - Product ID: <b>{elem.product_id}</b>
                          </span>
                        </div>
                        <div className="user-list">
                          <span>
                            Review Date: <b>{elem.date_add}</b>
                          </span>
                          <span>
                            - Rating: ({elem.rating})
                            <StarRatingComponent className="rating-position"
                              starCount={5}
                              value={elem.rating}
                              emptyStarColor={'#CCCCCC'}
                            />
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
