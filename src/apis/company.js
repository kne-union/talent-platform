import { range } from 'lodash';

export const list = {
  loader: async ({ params }) => {
    return {
      pageData: range(0, 50).map(index => {
        return {
          id: index,
          name: '测试优先公司',
          shortName: '测试',
          englishName: 'test',
          companyNature: 3,
          description: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
        };
      }),
      totalCount: 50
    };
  }
};

export const contactsList = {
  loader: async () => {
    return {
      pageData: range(0, 50).map(index => {
        return {
          id: index,
          name: '联系人',
          phone: '1892829928',
          email: 'a@a.com',
          gender: 'M'
        };
      }),
      totalCount: 50
    };
  }
};

export const positionList = {
  loader: async () => {
    return {
      pageData: [],
      totalCount: 0
    };
  }
};

export const detail = {
  url: 'mock/position-detail.json'
};
