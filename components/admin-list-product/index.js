import React, { PureComponent } from 'react';

export class ListProduct extends PureComponent {
  static defaultProps = {
    data: [
      {
        id_product: 1,
        reference: 123123,
        title: 'silla',
        description: 'asdasd asd asd asd ',
        price: 50,
        img_url: 'sda.png',
        excerpt: 'asdasd asd asd asd ',
        available: 1,
        meta_title: 'silla',
        meta_description: 'asdasd asd asd asd ',
        date_add: '2019-05-27',
      },
      {
        id_product: 5,
        reference: 98567362,
        title: 'cojin verde',
        description: 'nuevo cojin foam con suave textura',
        price: 35,
        img_url: 'cojin.png',
        excerpt: 'nuevo cojin foam con suave...',
        available: 1,
        meta_title: 'cojin azul',
        meta_description: 'nuevo cojin foam con suave...',
        date_add: '2019-06-02',
      },
      {
        id_product: 7,
        reference: 98567334,
        title: 'cojin azul',
        description: 'nuevo cojin foam con suave textura',
        price: 35,
        img_url: 'cojin.png',
        excerpt: 'nuevo cojin foam con suave...',
        available: 1,
        meta_title: 'cojin azul',
        meta_description: 'nuevo cojin foam con suave...',
        date_add: '2019-06-02',
      },
    ],
  };

  render() {
    console.log(this.props.data);
    return (
      <div>
        {this.props.data.map(elem => (
          <div>
            <p>hola {elem.mane}</p>
            <h1>{elem.meta_title}</h1>
          </div>
        ))}
      </div>
    );
  }
}

ListProduct.defa;
