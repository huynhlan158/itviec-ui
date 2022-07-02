import { createServer, Model } from 'miragejs';
import { companyList, topCompanyList } from './companyList';
import { jobList } from './jobList';

export let server = createServer({
  models: {
    users: Model,
  },
  routes() {
    this.get('/api/users', (schema) => {
      return schema.users.all();
    });

    this.post('/api/users', (schema, request) => {
      const payload = JSON.parse(request.requestBody);
      return schema.users.create(payload);
    });
  },
});

server.db.loadData({
  users: [
    {
      fullname: 'Nguyễn Văn A',
      email: 'nguyenvana@email.com',
      password: '123456a@A',
    },
  ],
});

export const setupServer = () => {
  server.get('/api/it-jobs', { jobs: jobList, companies: companyList });
  server.get('/api/top-companies', { topCompanies: topCompanyList });
};
