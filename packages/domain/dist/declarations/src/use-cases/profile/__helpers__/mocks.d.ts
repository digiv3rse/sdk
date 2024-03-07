import { BlockProfilesRequest } from "../BlockProfiles.js";
import { ClaimHandleRequest } from "../ClaimHandle.js";
import { CreateProfileRequest } from "../CreateProfile.js";
import { ChargeFollowConfig } from "../FollowPolicy.js";
import { FreeFollowRequest, PaidFollowRequest, UnknownFollowRequest } from "../FollowProfile.js";
import { LinkHandleRequest } from "../LinkHandle.js";
import { SetProfileMetadataRequest } from "../SetProfileMetadata.js";
import { UnblockProfilesRequest } from "../UnblockProfiles.js";
import { UnfollowRequest } from "../UnfollowProfile.js";
import { UnlinkHandleRequest } from "../UnlinkHandle.js";
import { UpdateFollowPolicyRequest } from "../UpdateFollowPolicy.js";
import { UpdateProfileManagersRequest } from "../UpdateProfileManagers.js";
export declare function mockChargeFollowConfig(overrides?: Partial<ChargeFollowConfig>): ChargeFollowConfig;
export declare function mockCreateProfileRequest(overrides?: Partial<CreateProfileRequest>): CreateProfileRequest;
export declare function mockUpdateFollowPolicyRequest(overrides?: Partial<UpdateFollowPolicyRequest>): UpdateFollowPolicyRequest;
export declare function mockSetProfileMetadataRequest(overrides?: Partial<SetProfileMetadataRequest>): SetProfileMetadataRequest;
export declare function mockUpdateProfileManagersRequest(overrides?: Partial<UpdateProfileManagersRequest>): UpdateProfileManagersRequest;
export declare function mockFreeFollowRequest(overrides?: Partial<FreeFollowRequest>): FreeFollowRequest;
export declare function mockPaidFollowRequest(overrides?: Partial<PaidFollowRequest>): PaidFollowRequest;
export declare function mockUnknownFollowRequest(overrides?: Partial<UnknownFollowRequest>): UnknownFollowRequest;
export declare function mockUnfollowRequest(): UnfollowRequest;
export declare function mockLinkHandleRequest(overrides?: Partial<LinkHandleRequest>): LinkHandleRequest;
export declare function mockUnlinkHandleRequest(overrides?: Partial<UnlinkHandleRequest>): UnlinkHandleRequest;
export declare function mockClaimHandleRequest(): ClaimHandleRequest;
export declare function mockBlockProfilesRequest(overrides?: Partial<BlockProfilesRequest>): BlockProfilesRequest;
export declare function mockUnblockProfilesRequest(overrides?: Partial<UnblockProfilesRequest>): UnblockProfilesRequest;