import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const servers = {
  // 'localhost:3000': {
  //   host: 'sfdev1.sdggroup.com',
  //   prefix: '',
  //   port: 443,
  //   secure: true,
  // },
  'localhost:3000': {
    host: 'localhost',
    prefix: '',
    port: 4848,
    secure: false,
  },
  'tst01.tf7.lacaixa.es': {
    host: 'intrtst.ia.lacaixa.es',
    secure: true,
    port: 443,
    prefix: 'qlikisam',
  },
  'tst02.tf7.lacaixa.es': {
    host: 'intrtst.ia.lacaixa.es',
    secure: true,
    port: 443,
    prefix: 'qlikisam',
  },
  'pre01.tf7.lacaixa.es': {
    host: 'intrpre.ia.lacaixa.es',
    secure: true,
    port: 443,
    prefix: 'qlikisam',
  },
  'pro01.tf7.lacaixa.es': {
    host: 'ia.lacaixa.es',
    secure: true,
    port: 443,
    prefix: 'qlikisamnrt',
  },
  'pro02.tf7.lacaixa.es': {
    host: 'ia.lacaixa.es',
    secure: true,
    port: 443,
    prefix: 'qlikisamnrt',
  },
};

Page.propTypes = {
  setQAppContext: PropTypes.func.isRequired,
  children: PropTypes.any,
};

function Page(props) {
  const [qApp, setQApp] = useState(null);
  const [currentAppId, setCurrentAppId] = useState('');

  useEffect(() => {
    
  }, [props.children]);

  return <>{props.children}</>;
}

export default Page;
