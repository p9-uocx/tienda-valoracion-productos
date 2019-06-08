import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Image from 'react-bootstrap/Image';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

import './admin-list-product.scss';

export class ListProduct extends PureComponent {


  static defaultProps = {
    data: [
      {
        "id_product": 2,
        "reference": 197876,
        "title": "Checked Wide Tie DetailTable Wonderful Furniture Rustic Amp",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 189.49,
        "img_url": "static/img/products/bedroomFurniture/2_4.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-05-20"
      },
      {
        "id_product": 3,
        "reference": 476543,
        "title": "Bauhaus Steel Tube Cantilever Sofa",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 380.99,
        "img_url": "static/img/products/sofas/5_5.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-23"
      },
      {
        "id_product": 4,
        "reference": 789456,
        "title": "Noctis LONDON Double bed up with container",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 1250,
        "img_url": "/static/img/products/bedroomFurniture/BOB_160_9.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-26"
      },
      {
        "id_product": 5,
        "reference": 159357,
        "title": "Noctis DUCK H25 RING Padded double bed",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 881.25,
        "img_url": "/static/img/products/bedroomFurniture/4q0zrdf2xfzd.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-18"
      },
      {
        "id_product": 6,
        "reference": 486413,
        "title": "Letto matrimoniale NOCTIS london noctis top white green day",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 952.49,
        "img_url": "/static/img/products/bedroomFurniture/123.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-12"
      },
      {
        "id_product": 7,
        "reference": 486426,
        "title": "Forzza daniel side table matt finish wenge",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 199.99,
        "img_url": "static/img/products/coffeTables/9_4.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-09"
      },
      {
        "id_product": 8,
        "reference": 987654,
        "title": "Yaheetech Lift up Top Coffee Table with Under Storage",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 355.59,
        "img_url": "static/img/products/coffeTables/13_13029819_13029819-1-180602151916.jpeg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-05"
      },
      {
        "id_product": 10,
        "reference": 159358,
        "title": "Forzza Daniel Small TV Unit (Matt Finish, Teak)",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 389.49,
        "img_url": "static/img/products/coffeTables/41gyNASmibL-400x400.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-10"
      },
      {
        "id_product": 11,
        "reference": 123456,
        "title": "Zara Coffee Table with Tray Top",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 569.99,
        "img_url": "static/img/products/coffeTables/61yOhzsUHXL._SL1200_.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-16"
      },
      {
        "id_product": 12,
        "reference": 123654,
        "title": "Jamiya Coffee Table",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 199.5,
        "img_url": "static/img/products/coffeTables/81K97w-YRfL._SX425_.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-16"
      },
      {
        "id_product": 13,
        "reference": 759513,
        "title": "Rittenhouse Tufted Cocktail Ottoman",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 150.49,
        "img_url": "static/img/products/coffeTables/cf_5.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-09"
      },
      {
        "id_product": 14,
        "reference": 132987,
        "title": "Nowak Coffee Table",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 378.99,
        "img_url": "static/img/products/coffeTables/cf_6.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-05"
      },
      {
        "id_product": 15,
        "reference": 555486,
        "title": "Juliette Glass Top Coffee Table",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 678.45,
        "img_url": "static/img/products/coffeTables/cf_7.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-05"
      },
      {
        "id_product": 16,
        "reference": 741852,
        "title": "Quartz Coffee Table",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 187.99,
        "img_url": "static/img/products/coffeTables/cf_8.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-03"
      },
      {
        "id_product": 17,
        "reference": 654987,
        "title": "Oxford Pop-Up Platform Sleeper Sofa",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 825.99,
        "img_url": "static/img/products/sofas/0175610_PE328883_S5.webp",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-13"
      },
      {
        "id_product": 18,
        "reference": 963852,
        "title": "Murphy Sofa",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 1450.99,
        "img_url": "static/img/products/sofas/618gTeX+DCL._SY355_.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-16"
      },
      {
        "id_product": 19,
        "reference": 426888,
        "title": "York Custom Sofa",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 999.99,
        "img_url": "static/img/products/sofas/sofa-cama-2-plazas-en-tela_772677.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-08"
      },
      {
        "id_product": 20,
        "reference": 999123,
        "title": "Macalester Sofa",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 950.99,
        "img_url": "static/img/products/sofas/sofa-cama-2-plazas-mod-sahara.jpg",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-03"
      },
      {
        "id_product": 21,
        "reference": 784512,
        "title": "Braden Sofa",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.",
        "price": 1110.5,
        "img_url": "static/img/products/sofas/0728518_PE736345_S5.webp",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-08"
      },
      {
        "id_product": 22,
        "reference": 986532,
        "title": "Easton Sofa",
        "description": "Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus sea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones, eu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.\r\n\r\n",
        "price": 550.55,
        "img_url": "static/img/products/sofas/Bemz.webp",
        "excerpt": null,
        "available": 1,
        "meta_title": null,
        "meta_description": null,
        "date_add": "2019-06-05"
      }
    ],
  };

  render() {

    console.log(this.props.data);

    function HomeIcon(props) {
      return (
        <SvgIcon {...props}>
          <path fill="#FFFFFF" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
        </SvgIcon>
      );
    }

    return (
      <div>
        <Typography variant="h6">
          List of products
        </Typography>
        <GridList spacing={30} cols={4} cellHeight={"auto"}>
          {this.props.data.map(elem => (
            <GridListTile key={elem.img_url}>
              <Image fluid src={elem.img_url}></Image>
              <GridListTileBar className="custom-tile-bar"
                title={elem.title}
                subtitle={
                  <div className="info-block-elem">
                    <span >Date Added: {elem.date_add}</span>
                    <span>Reference: {elem.reference}</span>
                  </div>

                }
                actionIcon={
                  <IconButton>
                    <HomeIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>

      </div>
    );
  }
}

ListProduct.defa;
