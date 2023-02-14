import * as React from 'react';

import PrimaryLayout from '../components/Layouts/PrimaryLayout';
import Seo from '../components/seo';

const IndexPage = () => (
  <PrimaryLayout>
    <div>Home</div>
  </PrimaryLayout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
