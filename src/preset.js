import React from 'react';
import { preset as fetchPreset } from '@kne/react-fetch';
import { Empty, message, Spin } from 'antd';
import axios from 'axios';
import { preset as remoteLoaderPreset, loadModule } from '@kne/remote-loader';
import omit from 'lodash/omit';
import apis from './apis';

window.PUBLIC_URL = process.env.PUBLIC_URL;

const componentsCoreRemote = {
  remote: 'components-core',
  url: 'https://registry.npmmirror.com',
  tpl: '{{url}}/@kne-components%2f{{remote}}/{{version}}/files/build',
  defaultVersion: '0.1.34'
};

remoteLoaderPreset({
  remotes: {
    default: componentsCoreRemote,
    'components-core': componentsCoreRemote,
    'components-iconfont': {
      remote: 'components-iconfont',
      url: 'https://registry.npmmirror.com',
      tpl: '{{url}}/@kne-components%2f{{remote}}/{{version}}/files/build',
      defaultVersion: '0.1.3'
    },
    'components-talent-platform': {
      remote: 'components-talent-platform',
      url: 'https://registry.npmmirror.com',
      tpl: '{{url}}/@kne-components%2f{{remote}}/{{version}}/files/build',
      defaultVersion: '0.1.3'
    },
    'components-view': {
      remote: 'components-view',
      url: 'https://registry.npmmirror.com',
      tpl: '{{url}}/@kne-components%2f{{remote}}/{{version}}/files/build',
      defaultVersion: '0.1.9'
    },
    'talent-platform':
      process.env.NODE_ENV === 'development'
        ? {
            remote: 'talent-platform',
            url: '/',
            tpl: '{{url}}'
          }
        : {
            remote: 'talent-platform',
            url: 'https://registry.npmmirror.com',
            tpl: '{{url}}/@kne-components%2f{{remote}}/{{version}}/files/build',
            defaultVersion: process.env.DEFAULT_VERSION
          }
  }
});

export const ajax = (() => {
  const instance = axios.create({
    validateStatus: function () {
      return true;
    }
  });

  return params => {
    if (params.hasOwnProperty('loader') && typeof params.loader === 'function') {
      return Promise.resolve(params.loader(omit(params, ['loader'])))
        .then(data => ({
          data: {
            code: 0,
            data
          }
        }))
        .catch(err => {
          message.error(err.message || '请求发生错误');
          return { data: { code: 500, msg: err.message } };
        });
    }
    return instance(params);
  };
})();

export const initGlobal = async () => {
  fetchPreset({
    ajax,
    loading: (
      <Spin
        delay={500}
        style={{
          position: 'absolute',
          left: '50%',
          padding: '10px',
          transform: 'translateX(-50%)'
        }}
      />
    ),
    error: null,
    empty: <Empty />,
    transformResponse: response => {
      const { data } = response;
      response.data = {
        code: data.code === 0 ? 200 : data.code,
        msg: data.msg,
        results: data.data
      };
      return response;
    }
  });
  const [resumeEnums] = await Promise.all(['components-talent-platform:Resume@enums'].map(token => loadModule(token).then(({ default: defaultModule }) => defaultModule)));
  return {
    globalPreset: {
      ajax,
      enums: Object.assign({}, resumeEnums),
      apis,
      themeToken: {
        colorPrimary: '#4F185A',
        colorPrimaryHover: '#702280'
      }
    }
  };
};
