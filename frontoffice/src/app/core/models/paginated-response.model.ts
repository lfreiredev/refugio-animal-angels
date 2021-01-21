export interface PaginatedResponse<T> {
  entities: T[];
  count: number;
}
