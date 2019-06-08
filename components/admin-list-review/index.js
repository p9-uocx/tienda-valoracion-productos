import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    return <div>ListUser</div>;
  }
}
