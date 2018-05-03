export const siteUrls = {
  root: () => '',
  landingPage: () => '/',
  app: () => {
    const app = '/app';
    return {
      root: () => app,
      home: () => app + '/',
      about: () => app + '/about',
    };
  },
  auth: () => {
    const root = '/auth';
    return {
      root: () => root,
      login: () => root + '/login',
      profile: () => root + '/profile',
      register: () => root + '/register',
    };
  },
};
