import config from '~/config';
import JobSearchLayout from '~/layouts/JobSearchLayout';

// pages
import {
  Home,
  SignUp,
  SignIn,
  Profile,
  Jobs,
  Job,
  BestCompanies,
  ReviewCompany,
  Blog,
  Employer,
  CompanyProfile,
  Pending,
} from '~/pages';

// public routes
const publicRoutes = [
  { path: config.routes.home, component: Home }, //done
  { path: config.routes.signUp, component: SignUp },
  { path: config.routes.signIn, component: SignIn },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.jobs, component: Jobs, layout: JobSearchLayout }, //done
  { path: config.routes.job, component: Job }, //done
  { path: config.routes.bestCompanies, component: BestCompanies }, //skip
  { path: config.routes.reviewCompany, component: ReviewCompany }, //skip
  { path: config.routes.blog, component: Blog }, // skip
  { path: config.routes.employer, component: Employer },
  { path: config.routes.companyProfile, component: CompanyProfile }, //done
  { path: config.routes.pending, component: Pending }, //skip
];

export { publicRoutes };
