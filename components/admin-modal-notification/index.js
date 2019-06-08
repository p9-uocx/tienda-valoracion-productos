// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React, { memo, PureComponent, Fragment } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export const ModalNotification = ({ data = {}, onCloseClick }) => {
  const titleCard = data.error ? 'Alerta Error!' : 'Notificacion!';
  const MsgCard = (
    <Fragment>
      {data.error && data.error.sql && (
        <div>
          <p>Se ha producido un error en la base de datos</p>
          <p>Error:{data.error.errno}</p>
          <p>Consulta:{data.error.sql}</p>
          <p>Mensaje:{data.error.sqlMessage}</p>
        </div>
      )}
      {data.data && data.data.affectedRows && (
        <div>
          <p>Se ha procesado correctamente la peticion</p>
          <p>Filas afectadas:{data.data.affectedRows}</p>
          <p>Status:{String(data.data.protocol41)}</p>
        </div>
      )}
      {data.data && !data.data.affectedRows && (
        <div>
          <p>Se ha procesado la peticion pero no se ha modificado la DB</p>
          <p>Status:{String(data.data.protocol41)}</p>
        </div>
      )}
    </Fragment>
  );

  return (
    <Card className="modal-container">
      <CardHeader
        title={titleCard}
        className="modal-header"
        action={
          <IconButton aria-label="Settings" onClick={onCloseClick}>
            <CloseIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {MsgCard}
        </Typography>
      </CardContent>
    </Card>
  );
};
