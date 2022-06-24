export const dataServer = {
  version: '0.1.0',
  _token: '06cae9bf54',
  ajax: 'http://wp.test/wp-admin/admin-ajax.php',
  wp_admin: 'http://wp.test/wp-admin/',
  query_args: [],
  current_url: '/wp-admin/admin.php?page=wp-order-forms',
  locale: 'en_US',
  assets_url: 'http://wp.test/wp-content/plugins/wp-order-forms/assets/',
  form_dashboard: 'http://wp.test/wp-admin/admin.php?page=wp-order-forms-dashboard',
  form_editor: 'http://wp.test/wp-admin/admin.php?page=wp-order-forms&action=form-editor',
  preview_page: 'http://wp.test/wp-order-forms-preview/',
  banks: [
    {
      code: 'mandiri',
      number: '46356533',
      name: 'Syamsul Hadi',
      active: true,
      _id: 'e47277a7-4dec-4af4-ad29-b8545677bd51'
    },
    {
      code: 'bca',
      number: '46356533',
      name: 'Muhammad Syamsul hadi',
      active: true,
      _id: 'badb5a4e-67a1-4991-9c9b-b6a37f96bce6'
    },
    {
      code: 'bsi',
      number: '46356533',
      name: 'Syamsul Hadi',
      active: true,
      _id: '6fb63002-7f3a-44fb-890e-36df047525c8'
    },
    {
      code: 'bni',
      number: '78888889999666',
      name: 'Muhammad Syamsul Hadi',
      active: true,
      _id: 'c14acb11-f36b-43a5-a80a-f35939b623f0'
    }
  ],
  shipping: {
    payments: { doku: { active: true, client_id: 'admin', secret_key: 'z&&ELPC91Qt99$jHBb' } },
    storeAddress: {
      postal_code: '32111',
      address: 'asdasdas',
      origin: { value: 4471, label: 'Baturaja Barat, Ogan Komering Ulu - Sumatera Selatan' }
    },
    take_on_store: true,
    couriers: [
      { jne: ['oke', 'reg', 'yes'] },
      { pos: ['paket-kilat-khusus', 'express-next-day-barang'] },
      { tiki: false },
      { anteraja: false },
      { jnt: false },
      { sicepat: false },
      { ninja: false },
      { jet: false },
      { wahana: false },
      { rex: false },
      { rpx: false },
      { lion: false }
    ]
  }
};

export const slugify = (string) => {
  return string.toString().trim().toLowerCase();
};

export const generateKey = (pre) => `${slugify(pre)}_${new Date().getTime()}`;

export const insertUrlParam = (baseUrl, params) => {
  const Url = new URL(baseUrl);
  const urlParams = new URLSearchParams(Url.search);
  for (const key in params) {
    if (params[key] !== undefined) {
      urlParams.set(key, params[key]);
    }
  }
  Url.search = urlParams.toString();
  return Url.toString();
};
