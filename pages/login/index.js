import React, { PureComponent } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Layout } from '../../components/layout';

export default class Login extends PureComponent {

    render () {
        return (
            <div>
                <Layout title="Login" {...this.props}></Layout>
            </div>
        );
    }
}