export type StorageKey = keyof StorageMap;

export interface StorageMap {
  tokenInfo: TokenInfo | null;
}
