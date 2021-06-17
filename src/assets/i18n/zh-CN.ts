import pages from './zh-CN/page';
import form from './zh-CN/form';
import abnormal from './zh-CN/abnormal';
import personalize from './zh-CN/personalize';
import transaction from './zh-CN/transaction';
import dashboard from './zh-CN/dashboard';
import login from './zh-CN/login';
import sideSetting from './zh-CN/side-setting';
import header from './zh-CN/header';
import footer from './zh-CN/footer';
import authGuard from './zh-CN/auth-guard';

export default {
  ...pages,
  ...form,
  ...transaction,
  ...abnormal,
  ...personalize,
  ...dashboard,
  ...login,
  ...sideSetting,
  ...header,
  ...footer,
  ...authGuard,
};
