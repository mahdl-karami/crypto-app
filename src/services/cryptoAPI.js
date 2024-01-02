const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets`;
const DEMO_KEY = `CG-kvnvjdv6JUYHPC9y6CkgHPPU`;
export const returnURL = (page , currency) =>
  `${BASE_URL}?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${DEMO_KEY}`;