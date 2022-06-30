const routes = {
  home: '/',
  signIn: '/sign-in',
  profile: '/@:username',
  jobs: '/it-jobs',
  job: '/it-jobs/@:jobname',
  jobsByCompany: '/jobs-company-index',
  bestCompanies: '/vietnam-best-it-companies',
  reviewCompany: '/review-company',
  blog: '/blog',
  companyProfile: '/companies/@:companyname',
  employer: '/post-jobs',
  pending: '/pending/@:pathname',
};

export default routes;
