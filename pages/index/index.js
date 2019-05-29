// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React, { PureComponent } from 'react';
import fetch from 'isomorphic-unfetch';

// el componente Link se encarga de manejar los enlaces, como veras sirve para navegar a pa pagina de about
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// Todos los componentes reutilizables sera importados con @Components y despues dentro de los corchetes seleccionar el o los componentes necesarios
import { Layout } from '@Components';
import { NavMenu } from '@Components';
import { Policy } from '@Components';
import { ProductsA } from '@Components';
import { ProductsB } from '@Components';
import { CustomCarousel } from '@Components';

// importamos el css especifo de cada componente, esta en SASS
import './index.scss';
import '../../components/layout/layout.scss';

// aqui tienes que exportar el compoente, puede ser una funcion o una clase
export default class Index extends PureComponent {
  // esto es de next.js, y esta funcion se ejecuta antes de hacer nada. Y vale para traer datos de backEnd por ejejmplo.
  static async getInitialProps({ req }) {
    const res = await fetch(`${process.env.DB_API_HOST}/category`);
    const data = await res.json();

    return data;
  }

  // este metodo tiene que estar siempre en React, es el encargado de pintar el html
  render() {
    console.log(this.props.data);
    return (
      <div>
        {/* Usaremos este componente para cargar todas las cabeceras footer y cosas comunes del proyecto */}
        {/* Tiene una propiedad importante que es title, la cual controla el nombre de la pagina */}
        <Layout title="Home" {...this.props}>
          {/* <Layout> Todo lo que este aqui dentro estara includo con las cabeceras y footer </Layout> */}
          <Container>
            <NavMenu />
            {/* Carousel Section*/}
            <CustomCarousel />
            {/* Policy Section */}
            <Policy />
            {/* Deal Section */}
            <section className="deal-title">
              <Row>
                <Col sm="auto">
                  <div>
                    <h3>Deal of the Week</h3>
                  </div>
                </Col>
                <Col id="hr">
                  <hr />
                </Col>
              </Row>
            </section>
            {/* Product Section */}
            <ProductsA />
            {/*Seccion Separador*/}
            <section>
              <Row>
                <Col className="no-padding">
                  <div id="section-container">
                    <div>
                      <p>
                        589,551 buyers from more than 150 countries experience secure trading on{' '}
                        <Image fluid id="logo" src="/static/img/header/logo2-1.png" />
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </section>
            {/* Deal Section */}
            <section className="deal-title">
              <Row>
                <Col sm="auto">
                  <div>
                    <h3>Featured Products</h3>
                  </div>
                </Col>
                <Col id="hr">
                  <hr />
                </Col>
              </Row>
            </section>
            {/* Product Section */}
            <ProductsB />
            {/* IMAGE SECTION */}
            <section className="padding-bottom-img">
              <div>
                <Image fluid src="/static/img/img3c.jpg" alt="product image" />
              </div>
            </section>
          </Container>
        </Layout>
      </div>
    );
  }
}
