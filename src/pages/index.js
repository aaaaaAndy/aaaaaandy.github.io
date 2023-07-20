import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import './index.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  console.log('siteConfig', siteConfig);

  const PRIMARY_CLASS = 'button button--primary button--lg mg-8';

  return (
    <Layout>
      <main className="layout-main">
	      <Link className={PRIMARY_CLASS} to="/docs/JavaScript">
		      JavaScript
	      </Link>
	      <Link className={PRIMARY_CLASS} to="/docs/es6">
		      es6
	      </Link>
        <Link className={PRIMARY_CLASS} to="/docs/css">
	        css
        </Link>
        <Link className={PRIMARY_CLASS} to="/docs/vim">
          Vim
        </Link>
        <Link className={PRIMARY_CLASS} to="/docs/react">
          react
        </Link>
        <Link className={PRIMARY_CLASS} to="/docs/git">
          git
        </Link>
	      <Link className={PRIMARY_CLASS} to="/docs/charles">
		      charles
	      </Link>
	      <Link className={PRIMARY_CLASS} to="/docs/http">
		      HTTP
	      </Link>
	      <Link className={PRIMARY_CLASS} to="/docs/vue">
		      vue
	      </Link>
	      <Link className={PRIMARY_CLASS} to="/docs/vue3">
		      vue3
	      </Link>
	      <Link className={PRIMARY_CLASS} to="/docs/webpack">
		      webpack
	      </Link>
	      {/*<Link className={PRIMARY_CLASS} to="/docs/algorithm">*/}
		    {/*  algorithm*/}
	      {/*</Link>*/}
      </main>
    </Layout>
  );
}
