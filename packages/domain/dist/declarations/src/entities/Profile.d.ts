import { Brand } from '@digiv3rse/shared-kernel';
export type ProfileId = Brand<string, 'ProfileId'>;
export declare class Profile {
    readonly id: ProfileId;
    readonly handle: string;
    private constructor();
    static create({ id, handle }: {
        id: ProfileId;
        handle: string;
    }): Profile;
}
