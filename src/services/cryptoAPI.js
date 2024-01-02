const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets`;
const DEMO_KEY = `CG-kvnvjdv6JUYHPC9y6CkgHPPU`;

export const returnURL = () =>
  `${BASE_URL}?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${DEMO_KEY}`;