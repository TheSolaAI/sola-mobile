export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string;

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number;
}
