export type Pair = {
  id: number;
  name: {
    fa: string;
    en: string;
  };
  logo: string;
  trading_chart_settings: {
    ramzinex: string;
    international: string;
    charts: never[];
  };
  quote_currency: {
    id: number;
    symbol: {
      en: string;
      fa: string;
    };
    precision: number;
  };
  base_currency: {
    id: number;
    symbol: {
      en: string;
      fa: string;
    };
    precision: number;
  };
  slug: string;
  crypto_box: number;
};
