import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
	console.log(222, siteConfig);

  return (
    <Layout>
      <main style={{ padding: 24 }}>
	      {/*<Link*/}
		    {/*  className="button button--secondary button--lg"*/}
		    {/*  to="/docs/git/command"*/}
	      {/*>*/}
		    {/*  Git*/}
	      {/*</Link>*/}
	      <Link
		      className="button button--secondary button--lg"
		      to="/docs/vim/vi与vim"
	      >
		      Vim
	      </Link>
      </main>
    </Layout>
  );
}
