import { FieldFunctionOptions, FieldPolicy, Reference } from '@apollo/client';
import { Profile, SingleProfileQueryRequest } from '../../digi';
export declare function createProfileFieldPolicy(): FieldPolicy<Profile, Profile, Reference, FieldFunctionOptions<{
    request: SingleProfileQueryRequest;
}>>;
