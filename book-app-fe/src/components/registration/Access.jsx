import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Access() {
  return (
    <div className="container py-5 mb-5">

    <h1 className="text-center text-danger"><FontAwesomeIcon icon="triangle-exclamation" /></h1>

    <div className="alert alert-danger" role="alert">
        <h1>Access Denied! You are not allowed to see this page. Go away.</h1>
    </div>
    </div>
  )
}
