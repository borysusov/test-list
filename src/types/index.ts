export type JSONData =
  | string
  | number
  | boolean
  | null
  | JSONData[]
  | { [key: string]: JSONData };
