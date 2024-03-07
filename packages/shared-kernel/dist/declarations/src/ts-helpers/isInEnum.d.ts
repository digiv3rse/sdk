export declare const isInEnum: <TEnumValue extends string | number>(enumVariables: {
    [key: string]: TEnumValue;
}, value: string | number) => value is TEnumValue;
