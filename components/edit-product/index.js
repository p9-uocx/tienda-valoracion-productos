import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export const AdminEditProduct = ({ data = {}, onCloseClick }) => {
  return (
    <Card className="modal-container">
      <CardHeader
        title="Editar Producto"
        className="modal-header"
        action={
          <IconButton aria-label="Settings" onClick={onCloseClick}>
            <CloseIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          adasda
        </Typography>
      </CardContent>
    </Card>
  );
};
