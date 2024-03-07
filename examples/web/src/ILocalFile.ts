import { MediaImageMimeType } from '@digiv3rse/metadata';

export interface ILocalFile<T extends MediaImageMimeType> extends File {
  type: T;
}
