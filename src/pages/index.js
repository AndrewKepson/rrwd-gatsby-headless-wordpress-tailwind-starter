import * as React from 'react';

import { PrimaryLayout, Seo, HomePageContent } from '../components';

const HomePage = () => (
  <PrimaryLayout>
    <div>Home</div>
    <HomePageContent />
  </PrimaryLayout>
);

export const Head = () => <Seo title="Home" />;

export default HomePage;
