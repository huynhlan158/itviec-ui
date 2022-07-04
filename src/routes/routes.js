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
  { path: config.routes.home, component: Home }, //DONE
  { path: config.routes.signUp, component: SignUp }, //DONE
  { path: config.routes.signIn, component: SignIn }, //DONE
  { path: config.routes.profile, component: Profile }, //DONE
  { path: config.routes.jobs, component: Jobs, layout: JobSearchLayout }, //DONE
  { path: config.routes.job, component: Job }, //DONE
  { path: config.routes.bestCompanies, component: BestCompanies }, //skip
  { path: config.routes.reviewCompany, component: ReviewCompany }, //skip
  { path: config.routes.blog, component: Blog }, // skip
  { path: config.routes.employer, component: Employer }, //skip
  { path: config.routes.companyProfile, component: CompanyProfile }, //DONE
  { path: config.routes.pending, component: Pending }, //skip
];

export { publicRoutes };
