const isDev = process.env.NODE_ENV !== 'production';
// const isDev = false;
export const CLEAR_CACHE = true;
const DEV_IMAGE_BASE_URL = 'https://dx2z82lykwtpc.cloudfront.net/';
const PROD_IMAGE_BASE_URL = 'https://dx2z82lykwtpc.cloudfront.net/';

export const IMAGE_BASE_URL = isDev ? DEV_IMAGE_BASE_URL : PROD_IMAGE_BASE_URL;

const DEV_API_BASE_URL = 'http://localhost:3333/api/v1/';
const PROD_API_BASE_URL = 'https://api-gro.yayvo.com/api/v1/';
// const PROD_API_BASE_URL = 'https://api-tickets.yayvo.com/api/v1/';

export const API_BASE_URL = isDev ? DEV_API_BASE_URL : PROD_API_BASE_URL;

export const DEV_CHECKOUT_APP_URL = 'http://localhost:8085';
export const PROD_CHECKOUT_APP_URL = 'https://customgrocery.yayvo.com/shop';
// export const PROD_CHECKOUT_APP_URL = 'https://tickets.yayvo.com/shop';
export const CHECKOUT_APP_BASE_URL = isDev ? DEV_CHECKOUT_APP_URL : PROD_CHECKOUT_APP_URL;

export const SHOW_QTY=true;

export const ADMIN_API_KEY='4770677065f3ffff0197770ca14cd881';
export const APPLICATION_ID='GCSDMBZUXC';
export const API_KEY='ed9ad0bf70312a814781671c1cee6a60';

export const MAIL_CHIMP_URL='https://yayvo.us19.list-manage.com/subscribe/post?u=e7cf067659139862fd45282f8&amp;id=cbd2cde153';
