import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'src/components/Layout';
import './style.scss';

const HomePage = () => (
  <div>
    <Layout title="Home">

      <Link to="/contents/demo">Content Demo1</Link>
      <br/>
      <Link to="/contents/new">Add Translations Demo</Link>

    </Layout>
  </div>
);

export default HomePage;
