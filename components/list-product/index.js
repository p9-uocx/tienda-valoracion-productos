import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Create from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import GridList from '@material-ui/core/GridList';

import './admin-list-product.scss';

export class ListProduct extends PureComponent {
  render() {
    return (
      <div>
        <Typography variant="h6">List of products</Typography>
        <GridList cols={5} cellHeight={'auto'}>
          <Card className="margin-card">
            <CardActionArea>
              <CardMedia
                className="heigth-media"
                image="/static/img/baseline_add_circle_black_48.png"
                title={'Add New Product'}
              />
              <CardContent>

              </CardContent>
              <CardActions align="center">
                <Typography color="textSecondary" gutterBottom variant="subtitle1" component="h6">
                  {'Add New Product'}
                </Typography>

              </CardActions>
            </CardActionArea>
          </Card>
          {this.props.data.map(elem => (
            <Card className="margin-card">
              <CardActionArea>
                <CardMedia
                  className="heigth-media"
                  image={elem.img_url}
                  title={'Product ID: ' + elem.id_product}
                />
                <CardContent>
                  <Typography color="textSecondary" gutterBottom variant="subtitle1" component="h6">
                    {'Product ID: ' + elem.id_product}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="subtitle2" component="h6">
                    {'Reference: ' + elem.reference}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="float-right-icons">
                <IconButton
                  edge="end"
                  aria-label="Create"
                  onClick={this.props.onEditClick(elem.id_product)}>
                  <Create edgeMode="end" className="margin-right" />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="Delete"
                  onClick={this.props.onDeleteClick(elem.id_product)}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </GridList>
      </div>
    );
  }
}

ListProduct.defa;
