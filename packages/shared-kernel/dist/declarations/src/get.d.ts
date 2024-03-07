type GetFieldType<Obj, Path> = Path extends `${infer Left}.${infer Right}` ? Left extends keyof Obj ? GetFieldType<Exclude<Obj[Left], undefined>, Right> | Extract<Obj[Left], undefined> : undefined : Path extends keyof Obj ? Obj[Path] : undefined;
export declare function get<TData, TPath extends string, TDefault = GetFieldType<TData, TPath>>(data: TData, path: TPath, defaultValue?: TDefault): GetFieldType<TData, TPath> | TDefault;
export {};
