
type TupleToObject<T extends any[]> = T extends [infer U, ...unknown[]] ? U :never;

