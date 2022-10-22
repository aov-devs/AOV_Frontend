import axios from 'axios';
import React, { useEffect } from 'react';
import Page from 'src/components/Page';
import { baseUrl } from '../../utils/constants';

const EmailVerifiedPage = () => {
  useEffect(() => {
    axios.get(baseUrl + window.location.pathname.replaceAll(':','.'));
  }, []);
  return (
    <div>
      <Page title="verified">your Email verified</Page>
    </div>
  );
};

export default EmailVerifiedPage;
