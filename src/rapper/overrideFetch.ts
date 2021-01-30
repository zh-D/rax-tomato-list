import { overrideFetch } from './index';

overrideFetch({
  prefix: 'http://rap2api.taobao.org/app/mock/276879',
  fetchOption: {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
  },
});
