import axios from 'axios';
import React, { useEffect } from 'react';
import Layout from 'src/components/Layout';
import { baseUrl } from '../../utils/constants';

const Page = () => {
  useEffect(() => {
    axios.get(baseUrl + window.location.pathname.replaceAll(':','.'));
  }, []);
  return (
    <div>
      <Layout title="verified">your Email verified</Layout>
    </div>
  );
};

export default Page;
