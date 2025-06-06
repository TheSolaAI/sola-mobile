
export interface TopHolder {
  amount: number;
  insider: boolean;
  owner: string;
}

export interface TokenExtensions {
  coingeckoId: string;
  website: string;
  telegram: string | null;
  twitter: string;
  description: string;
  discord: string;
}

export interface TokenDataResponse {
  address: string;
  decimals: number;
  symbol: string;
  name: string;
  marketCap: number;
  fdv: number;
  extensions: TokenExtensions;
  logoURI: string;
  liquidity: number;
  price: number;
  priceChange30mPercent: number;
  priceChange1hPercent: number;
  priceChange4hPercent: number;
  priceChange24hPercent: number;
  uniqueWallet30m: number;
  uniqueWallet1h: number;
  uniqueWallet4h: number;
  uniqueWallet24h: number;
  holder: number;
  sell30m: number;
  buy30m: number;
  vBuy30mUSD: number;
  vSell30mUSD: number;
  sell1h: number;
  buy1h: number;
  vBuy1hUSD: number;
  vSell1hUSD: number;
  sell4h: number;
  buy4h: number;
  vBuy4hUSD: number;
  vSell4hUSD: number;
  sell24h: number;
  buy24h: number;
  vBuy24hUSD: number;
  vSell24hUSD: number;
}

export interface TokenAddressResult {
  type: 'token_address_result';
  symbol: string;
  tokenAddress: string;
  success: boolean;
  source?: string;
  errorMessage?: string;
  response_id: string;
  sender: string;
  timestamp: string;
}
