import { PromiseResult } from '@digiv3rse/shared-kernel';
import type { Authentication } from "../authentication/index.js";
import { CredentialsExpiredError, NotAuthenticatedError } from "../errors.js";
type Handler<Val> = (headers: Record<string, string>) => Promise<Val>;
export declare function requireAuthHeaders<Val>(authentication: Authentication, handler: Handler<Val>): PromiseResult<Val, CredentialsExpiredError | NotAuthenticatedError>;
export {};
