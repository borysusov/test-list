export const isPrimitive = (v: any) => {
  return v !== Object(v);
};
