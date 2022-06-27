import config from '~/config';
import JobSearchLayout from '~/layouts/JobSearchLayout';

// pages
import {
  Home,
  SignIn,
  Profile,
  Jobs,
  Job,
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
  CompanyProfile,
  TextOnly,
  Pending,
} from '~/pages';

// public routes
const publicRoutes = [
  { path: config.routes.home, component: Home }, //done
  { path: config.routes.signIn, component: SignIn },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.jobs, component: Jobs, layout: JobSearchLayout }, //done
  { path: config.routes.job, component: Job }, //done
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
  { path: config.routes.companyProfile, component: CompanyProfile },
  { path: config.routes.textOnly, component: TextOnly },
  { path: config.routes.pending, component: Pending },
];

export { publicRoutes };
