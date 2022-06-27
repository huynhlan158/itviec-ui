const routes = {
  home: '/',
  signIn: '/sign-in',
  profile: '/@:username',
  jobs: '/it-jobs',
  job: '/it-jobs/@:jobname',
  jobsBySkill: '/jobs-skill-index',
  jobsByTitle: '/jobs-title-index',
  jobsByCompany: '/jobs-company-index',
  bestCompanies: '/vietnam-best-it-companies',
  bestCompanies2021: '/vietnam-best-it-companies-2021',
  bestCompanies2020: '/vietnam-best-it-companies-2020',
  bestCompanies2019: '/vietnam-best-it-companies-2019',
  reviewCompany: '/review-company',
  blog: '/blog',
  companyProfile: '/companies/@:companyname',
  employer: '/post-jobs',
  textOnly: '/text-only',
  pending: '/pending',
};

export default routes;
