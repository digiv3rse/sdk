import { AppId } from '@digiv3rse/domain/entities';

import { ImageTransform } from './ImageTransform';
import { SupportedFiatType } from './graphql/generated';

/**
 * @internal
 */
export type AllFragmentVariables = {
  fxRateFor: SupportedFiatType;
  imageMediumSize: ImageTransform;
  imageSmallSize: ImageTransform;
  profileCoverSize: ImageTransform;
  profileMetadataSource: AppId | null;
  profilePictureSize: ImageTransform;
  statsFor: AppId[];
};
