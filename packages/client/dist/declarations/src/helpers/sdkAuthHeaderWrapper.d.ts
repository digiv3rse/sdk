import { Authentication } from "../authentication/index.js";
import { SdkFunctionWrapper } from "../graphql/fragments.generated.js";
type AuthHeaderWrapper = (authentication: Authentication | undefined) => SdkFunctionWrapper;
export declare const sdkAuthHeaderWrapper: AuthHeaderWrapper;
export {};
