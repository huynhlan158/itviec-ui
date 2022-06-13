import config from '~/config';

// pages
import {
  Home,
  SignIn,
  Jobs,
  JobsBySkill,
  JobsByTitle,
  JobsByCompany,
  BestCompanies,
  BestCompanies2021,
  BestCompanies2020,
  BestCompanies2019,
  ReviewCompany,
  Blog,
  Employer,
} from '~/pages';

// public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.signIn, component: SignIn },
  { path: config.routes.jobs, component: Jobs },
  { path: config.routes.jobsBySkill, component: JobsBySkill },
  { path: config.routes.jobsByTitle, component: JobsByTitle },
  { path: config.routes.jobsByCompany, component: JobsByCompany },
  { path: config.routes.bestCompanies, component: BestCompanies },
  { path: config.routes.bestCompanies2021, component: BestCompanies2021 },
  { path: config.routes.bestCompanies2020, component: BestCompanies2020 },
  { path: config.routes.bestCompanies2019, component: BestCompanies2019 },
  { path: config.routes.reviewCompany, component: ReviewCompany },
  { path: config.routes.blog, component: Blog, layout: null },
  { path: config.routes.employer, component: Employer },
];

export { publicRoutes };
