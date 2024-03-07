import { Attribute } from './generated';
export declare class ProfileAttributeReader {
    private readonly attribute;
    constructor(attribute: Attribute);
    toBoolean(): boolean | null;
    toDate(): Date | null;
    toNumber(): number | null;
    toString(): string;
    private jsonParse;
}
