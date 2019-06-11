import React, { PureComponent } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './admin-welcome.scss';

export class AdminWelcome extends PureComponent {
  render() {
    return (
      <Card className="margin-card welcome-card">

        <CardMedia
          className="heigth-media"
          image={'static/img/welcome1.jpg'}
          title={'Product ID:'}
        />
        <CardContent>
          <Typography align="center" color="textSecondary" gutterBottom variant="h5">
            {'¡Welcome to Admin Page!'}
          </Typography>

        </CardContent>

      </Card>
    );
  }
}