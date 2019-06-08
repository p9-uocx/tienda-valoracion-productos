// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React, { PureComponent, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import classNames from 'classnames';

import { ListProduct, ListCategory, ListReview, ListRole, ListUser } from '@Components';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';

const listServiceSelector = {
  product: ListProduct,
  category: ListCategory,
  user: ListUser,
  review: ListReview,
  role: ListRole,
};

const modalServiceSelector = {
  productCreate: ListProduct,
  productEdit: ListProduct,
  category: ListProduct,
  user: ListProduct,
  notification: ListProduct,
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
    fetch(`${process.env.DB_API_HOST}/${service}/${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ modal: 'notification', modaData: res });
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
    fetch(`${process.env.DB_API_HOST}/${service}/${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ modal: 'notification', modaData: res });
      });
  };

  fetchCreateItem = (service, postData) => {
    fetch(`${process.env.DB_API_HOST}/${service}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ modal: 'notification', modaData: res });
      });
  };

  onDeleteClick = id => {
    this.fetchDeleteItem(this.props.query.service, id);
  };
  onEditClick = id => {
    this.fetchDataItem(this.props.query.service, id);
  };
  onCreateClick = () => {
    this.setState({ modal: `${this.props.query.service}Create` });
  };
  onEditSave = (id, postData) => {
    this.fetchEditItem(this.props.query.service, id, postData);
  };
  onCreateSave = postData => {
    this.fetchCreateItem(this.props.query.service, postData);
  };
  onCloseClick = () => {
    this.setState({ modal: null });
  };

  render() {
    const { listData, modal, modalData } = this.state;
    const ListService = listServiceSelector[this.props.query.service];
    const ModalService = modalServiceSelector[this.state.modal];

    return (
      <Container>
        {ListService && (
          <ListService
            data={listData}
            onDeleteClick={this.onDeleteClick}
            onEditClick={this.onEditClick}
          />
        )}
        <Modal open={Boolean(modal)}>{ModalService && <ModalService data={modalData} />}</Modal>
      </Container>
    );
  }
}
