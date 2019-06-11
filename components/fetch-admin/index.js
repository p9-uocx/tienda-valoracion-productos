// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React, { PureComponent, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';

import {
  ModalNotification,
  ListCategory,
  ListProduct,
  ListReview,
  ListRole,
  ListUser,
  AdminEditCategory,
  AdminEditProduct,
  AdminEditReview,
  AdminEditRole,
  AdminEditUser,
  AdminCreateCategory,
  AdminCreateProduct,
  AdminCreateReview,
  AdminCreateRole,
  AdminCreateUser,
} from '@Components';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const listServiceSelector = {
  category: ListCategory,
  product: ListProduct,
  review: ListReview,
  role: ListRole,
  user: ListUser,
};

const modalServiceSelector = {
  notification: ModalNotification,
  categoryEdit: AdminEditCategory,
  productEdit: AdminEditProduct,
  reviewEdit: AdminEditReview,
  roleEdit: AdminEditRole,
  userEdit: AdminEditUser,
  categoryCreate: AdminCreateCategory,
  productCreate: AdminCreateProduct,
  reviewCreate: AdminCreateReview,
  roleCreate: AdminCreateRole,
  userCreate: AdminCreateUser,
};

export class FetchAdmin extends PureComponent {
  state = {
    listData: [],
    modal: null,
    modalData: null,
  };

  componentDidMount() {
    this.fetchListData(this.props.query.service);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.query.service !== this.props.query.service ||
      (!this.state.modal && prevState.modal)
    ) {
      this.fetchListData(this.props.query.service);
    }
  }

  fetchListData = service => {
    fetch(`${process.env.DB_API_HOST}/${service}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ listData: res.data });
      });
  };

  fetchDeleteItem = (service, id) => {
    fetch(`${process.env.DB_API_HOST}/${service}/${id}`, {
      method: 'DELETE',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ modal: 'notification', modalData: res });
      });
  };

  fetchDataItem = (service, id) => {
    fetch(`${process.env.DB_API_HOST}/${service}/${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ modal: `${this.props.query.service}Edit`, modalData: res });
      });
  };

  fetchEditItem = (service, id, postData) => {
    fetch(`${process.env.DB_API_HOST}/${service}/${id}`, {
      method: 'DELETE',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ modal: 'notification', modalData: res });
      });
  };

  fetchCreateItem = (service, postData) => {
    fetch(`${process.env.DB_API_HOST}/${service}`, {
      method: 'POST',
      headers: new Headers(),
      body: postData,
      mode: 'cors',
      cache: 'default',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ modal: 'notification', modalData: res });
      });
  };

  onDeleteClick = id => () => {
    this.fetchDeleteItem(this.props.query.service, id);
  };
  onEditClick = id => () => {
    this.fetchDataItem(this.props.query.service, id);
  };
  onCreateClick = () => {
    this.setState({ modal: `${this.props.query.service}Create` });
  };
  onEditSave = (id, event) => {
    event.preventDefault();
    const postData = new FormData(event.currentTarget);
    this.fetchEditItem(this.props.query.service, id, postData);
  };
  onCreateSave = event => {
    event.preventDefault();
    const postData = new FormData(event.currentTarget);
    this.fetchCreateItem(this.props.query.service, postData);
  };
  onCloseClick = () => {
    this.setState({ modal: null, modalData: null });
  };

  render() {
    const { listData, modal, modalData } = this.state;
    const ListService = listServiceSelector[this.props.query.service];
    const ModalService = modalServiceSelector[this.state.modal];

    console.log(this.state.modal);

    return (
      <Container>
        {ListService && (
          <ListService
            data={listData}
            onDeleteClick={this.onDeleteClick}
            onEditClick={this.onEditClick}
          />
        )}
        <Fab color="primary" className="float-icon" onClick={this.onCreateClick}>
          <AddIcon />
        </Fab>
        <Modal open={Boolean(modal)}>
          <div>
            <p>asdasd</p>
            {ModalService && (
              <ModalService
                data={modalData}
                onCloseClick={this.onCloseClick}
                onCreateSave={this.onCreateSave}
              />
            )}
          </div>
        </Modal>
      </Container>
    );
  }
}
