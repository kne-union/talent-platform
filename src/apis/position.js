import { range } from 'lodash';

export const list = {
  /*url: '/api/v1/jd/jd/list',
  method: 'POST',
  data: {
    currentPage: 1,
    perPage: 20
  }*/
  loader: async ({ params }) => {
    return {
      pageData: range(0, 50).map(index => {
        return {
          id: index,
          name: '职位名称',
          clientName: '职位所属公司名称',
          level: '1',
          description: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
        };
      }),
      totalCount: 50
    };
  }
};
