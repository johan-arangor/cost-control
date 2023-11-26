import {Fragment} from 'react';
import Menu from '../menu/menu';
import Footer from '../footer/footer';

export default function Layout(props) {
    return (
      <Fragment>
        <Menu />
            {props.children}
        <Footer />
      </Fragment>
    );
}