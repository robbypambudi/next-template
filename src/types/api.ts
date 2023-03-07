export type UninterceptedApiError = {
  code: number;
  status: string;
  message: string | Record<string, string[]>;
};

export type ApiReturn<T> = {
  code: string;
  status: string;
  data: T;
};

export type ApiError = {
  code: number;
  status: string;
  message: string;
};

export interface PaginatedApiResponse<DataType, metaType> {
  code: number;
  status: string;
  data: DataType;
  meta:
    | ({
        last_page: number;
        total: number;
      } & metaType)
    | null;
}
