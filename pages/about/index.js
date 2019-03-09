// Hay que importar simepre la libreria de React para que pueda interpretar el html, el PoreCompoente es un tipo de compoente nuevo que puedes uasr o no
import React, { PureComponent } from 'react';
// el componente Link se encarga de manejar los enlaces, como veras sirve para navegar a pa pagina de about
import Link from 'next/link';

// Todos los componentes reutilizables sera importados con @Components y despues dentro de los corchetes seleccionar el o los componentes necesarios
import { Layout } from '@Components';

// importamos el css especifo de cada componente, esta en SASS
import './about.scss';

// aqui tienes que exportar el compoente, puede ser una funcion o una clase
export default class About extends PureComponent {
  // esto es de next.js, y esta funcion se ejecuta antes de hacer nada. Y vale para traer datos de backEnd por ejejmplo.
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  // este metodo tiene que estar siempre en React, es el encargado de pintar el html
  render() {
    return (
      <div>
        {/* Usaremos este componente para cargar todas las cabeceras footer y cosas comunes del proyecto */}
        {/* Tiene una propiedad importante que es title, la cual controla el nombre de la pagina */}
        <Layout title="Sobre Nosotros" {...this.props}>
          {/* <Layout> Todo lo que este aqui dentro estara includo con las cabeceras y footer </Layout> */}
          <h1>About!</h1>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Layout>
      </div>
    );
  }
}
