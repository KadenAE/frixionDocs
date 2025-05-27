import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Redirect() {
  const history = useHistory();

  useEffect(() => {
    history.replace('/docs/products');
  }, [history]);

  return null;
}