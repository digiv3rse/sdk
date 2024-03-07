import { AnyPublication } from '@digiv3rse/api-bindings';
import { PublicationId } from '@digiv3rse/domain/entities';
export interface IPublicationCacheManager {
    update(publicationId: PublicationId, updateFn: <TPublication extends AnyPublication>(current: TPublication) => TPublication): void;
    refresh(publicationId: PublicationId): Promise<void>;
}
