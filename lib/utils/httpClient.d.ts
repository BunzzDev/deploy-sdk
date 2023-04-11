declare class HttpClient {
    BASE_URL: string;
    constructor();
    protected request<T>(endpoint: RequestInfo, config?: RequestInit): Promise<T>;
    get<T>(endpoint: RequestInfo, customConfig?: RequestInit): Promise<T>;
    post<T, U>(endpoint: RequestInfo, body: T, customConfig?: RequestInit): Promise<U>;
}
export declare const httpClient: HttpClient;
export {};
