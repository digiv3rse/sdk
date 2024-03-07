import { JustProtocolRequest } from "../../entities/index.js";
import { BlockProfilesRequest } from "../profile/BlockProfiles.js";
import { ClaimHandleRequest } from "../profile/ClaimHandle.js";
import { CreateProfileRequest } from "../profile/CreateProfile.js";
import { FollowRequest } from "../profile/FollowProfile.js";
import { LinkHandleRequest } from "../profile/LinkHandle.js";
import { SetProfileMetadataRequest } from "../profile/SetProfileMetadata.js";
import { UnblockProfilesRequest } from "../profile/UnblockProfiles.js";
import { UnfollowRequest } from "../profile/UnfollowProfile.js";
import { UnlinkHandleRequest } from "../profile/UnlinkHandle.js";
import { UpdateFollowPolicyRequest } from "../profile/UpdateFollowPolicy.js";
import { UpdateProfileManagersRequest } from "../profile/UpdateProfileManagers.js";
import { CreateCommentRequest } from "../publications/CreateComment.js";
import { CreateMirrorRequest } from "../publications/CreateMirror.js";
import { CreatePostRequest } from "../publications/CreatePost.js";
import { CreateQuoteRequest } from "../publications/CreateQuote.js";
import { OpenActionRequest } from "../publications/OpenAction.js";
import { TokenAllowanceRequest } from "./TokenAllowance.js";
export type AnyTransactionRequest = BlockProfilesRequest | OpenActionRequest | ClaimHandleRequest | CreateCommentRequest | CreateMirrorRequest | CreatePostRequest | CreateQuoteRequest | CreateProfileRequest | FollowRequest | TokenAllowanceRequest | UnblockProfilesRequest | UnfollowRequest | UpdateProfileManagersRequest | UpdateFollowPolicyRequest | SetProfileMetadataRequest | LinkHandleRequest | UnlinkHandleRequest;
export type ProtocolTransactionRequest = JustProtocolRequest<AnyTransactionRequest>;
