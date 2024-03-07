import { AllFragmentVariables, AnyPublication, Comment, Mirror, Post, Quote, SafeApolloClient } from '@digiv3rse/api-bindings';
import { PublicationId } from '@digiv3rse/domain/entities';
import { CreateCommentRequest, CreateMirrorRequest, CreatePostRequest, CreateQuoteRequest } from '@digiv3rse/domain/use-cases/publications';
import { TransactionData } from '@digiv3rse/domain/use-cases/transactions';
import { IPublicationCacheManager } from "../adapters/IPublicationCacheManager.js";
export declare class PublicationCacheManager implements IPublicationCacheManager {
    private readonly client;
    private readonly variables;
    constructor(client: SafeApolloClient, variables: AllFragmentVariables);
    fetchNewPost(tx: TransactionData<CreatePostRequest>): Promise<Post>;
    fetchNewComment(tx: TransactionData<CreateCommentRequest>): Promise<Comment>;
    fetchNewMirror(tx: TransactionData<CreateMirrorRequest>): Promise<Mirror>;
    fetchNewQuote(tx: TransactionData<CreateQuoteRequest>): Promise<Quote>;
    refresh(publicationId: PublicationId): Promise<void>;
    update(publicationId: PublicationId, updateFn: <TPublication extends AnyPublication>(current: TPublication) => TPublication): void;
    private fetchNewPublication;
    private request;
}
