import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>404 – Page Not Found</h1>
        <p>Sorry, we couldn’t find what you were looking for.</p>
        <Link to="/">← Back to Home</Link>
      </div>
    </Layout>
  );
}
