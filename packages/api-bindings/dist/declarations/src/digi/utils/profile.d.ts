import { Overwrite } from '@digiv3rse/shared-kernel';
import { Profile, ProfileFields } from '../generated';
export type ProfileOwnedByMe<T extends ProfileFields = Profile> = Overwrite<T, {
    ownedByMe: true;
}>;
/**
 * @group Helpers
 */
export declare function isProfileOwnedByMe<T extends ProfileFields>(profile: ProfileFields): profile is ProfileOwnedByMe<T>;
export type FollowModule = NonNullable<Profile['followModule']>;
export type ProfilePictureMedia = NonNullable<Profile['picture']>;
export type ProfileCoverMedia = NonNullable<Profile['coverPicture']>;
