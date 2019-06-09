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

  static defaultProps = {
    "data": [
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 4,
        "user_id": 1,
        "product_id": 2,
        "date_add": "2019-05-20"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 3,
        "user_id": 1,
        "product_id": 3,
        "date_add": "2019-06-11"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 4,
        "user_id": 1,
        "product_id": 4,
        "date_add": "2019-06-26"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 3,
        "user_id": 1,
        "product_id": 5,
        "date_add": "2019-06-19"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 5,
        "user_id": 1,
        "product_id": 6,
        "date_add": "2019-06-26"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 5,
        "user_id": 1,
        "product_id": 7,
        "date_add": "2019-06-18"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 4,
        "user_id": 1,
        "product_id": 8,
        "date_add": "2019-06-21"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 5,
        "user_id": 1,
        "product_id": 10,
        "date_add": "2019-06-15"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 4,
        "user_id": 1,
        "product_id": 11,
        "date_add": "2019-06-12"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 3,
        "user_id": 1,
        "product_id": 12,
        "date_add": "2019-06-21"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 4,
        "user_id": 1,
        "product_id": 13,
        "date_add": "2019-06-12"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 5,
        "user_id": 1,
        "product_id": 14,
        "date_add": "2019-06-02"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 2,
        "user_id": 1,
        "product_id": 15,
        "date_add": "2019-06-08"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 5,
        "user_id": 1,
        "product_id": 16,
        "date_add": "2019-06-02"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 3,
        "user_id": 1,
        "product_id": 17,
        "date_add": "2019-06-14"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 4,
        "user_id": 1,
        "product_id": 18,
        "date_add": "2019-06-06"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 5,
        "user_id": 1,
        "product_id": 19,
        "date_add": "2019-06-03"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 4,
        "user_id": 1,
        "product_id": 20,
        "date_add": "2019-06-08"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 5,
        "user_id": 1,
        "product_id": 21,
        "date_add": "2019-06-04"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 4,
        "user_id": 1,
        "product_id": 22,
        "date_add": "2019-06-06"
      },
      {
        "title": null,
        "descripction": null,
        "images_url": null,
        "rating": 2,
        "user_id": 2,
        "product_id": 2,
        "date_add": "2019-06-08"
      }
    ]
  };

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
                      <div>
                        <div className="user-list">
                          <span>
                            User ID: <b>{elem.user_id}</b>
                          </span>
                          <span>
                            {' '}
                            - Product ID: <b>{elem.product_id}</b>
                          </span>
                        </div>
                        <div className="user-list">
                          <span>
                            {' '}
                            Review Date: <b>{elem.date_add}</b>
                          </span>
                          <span>
                            {' '}
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
