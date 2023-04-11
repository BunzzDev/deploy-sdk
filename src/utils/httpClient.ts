class HttpClient {
  BASE_URL: string;

  constructor() {
    this.BASE_URL = process.env.BUNZZ_SDK_SERVICE_URL || 'https://sdk-service.bunzz.dev';
  }

  protected async request<T>(
    endpoint: RequestInfo,
    config?: RequestInit
  ): Promise<T> {
    const res = await window.fetch(`${this.BASE_URL}/${endpoint}`, config);

    if (!res.ok)
      throw new Error(
        `Request to ${config?.method}:${endpoint} were failed with HTTP code: ${res.status}`
      );

    return await res.json();
  }

  public async get<T>(
    endpoint: RequestInfo,
    customConfig?: RequestInit
  ): Promise<T> {
    const config = { method: 'GET', ...customConfig };

    return await this.request<T>(endpoint, config);
  }

  public async post<T, U>(
    endpoint: RequestInfo,
    body: T,
    customConfig?: RequestInit
  ): Promise<U> {
    const config = {
      method: 'POST',
      body: JSON.stringify(body),
      ...customConfig
    };

    return await this.request<U>(endpoint, config);
  }
}

export const httpClient = new HttpClient();
