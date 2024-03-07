import * as raw from '@digiv3rse/metadata';
import { DistributiveOmit, UnknownObject } from '@digiv3rse/shared-kernel';

import * as gql from './graphql';
import { PathsOf } from './types';

type ExtractPathsOf<Target extends UnknownObject, By extends UnknownObject> = PathsOf<
  Extract<Target, By>
>;

type MapOfPaths<
  Target extends UnknownObject,
  Discriminant extends keyof Target = keyof Target,
  DiscriminantValue extends string = Target[Discriminant] extends string
    ? Target[Discriminant]
    : never,
> = {
  [P in DiscriminantValue]: ExtractPathsOf<Target, { [KK in Discriminant]: P }>[];
};

const ToEncryptPaths: MapOfPaths<raw.PublicationMetadata, '$schema'> = {
  [raw.PublicationSchemaId.ARTICLE_LATEST]: [
    'digi.content',
    'digi.attachments[n].item',
    'digi.attachments[n].altTag',
    'digi.attachments[n].cover',
    'digi.attachments[n].credits',
    'digi.attachments[n].artist',
    'digi.attachments[n].genre',
    'digi.attachments[n].recordLabel',
    'digi.attachments[n].lyrics',
  ],
  [raw.PublicationSchemaId.AUDIO_LATEST]: [
    'digi.content',
    'digi.audio.item',
    'digi.audio.cover',
    'digi.audio.credits',
    'digi.audio.artist',
    'digi.audio.genre',
    'digi.audio.recordLabel',
    'digi.audio.lyrics',
    'digi.attachments[n].item',
    'digi.attachments[n].altTag',
    'digi.attachments[n].cover',
    'digi.attachments[n].credits',
    'digi.attachments[n].artist',
    'digi.attachments[n].genre',
    'digi.attachments[n].recordLabel',
    'digi.attachments[n].lyrics',
  ],
  [raw.PublicationSchemaId.CHECKING_IN_LATEST]: [
    'digi.content',
    'digi.location',
    'digi.address.country',
    'digi.address.formatted',
    'digi.address.locality',
    'digi.address.postalCode',
    'digi.address.region',
    'digi.address.streetAddress',
    'digi.position',
    'digi.attachments[n].item',
    'digi.attachments[n].altTag',
    'digi.attachments[n].cover',
    'digi.attachments[n].credits',
    'digi.attachments[n].artist',
    'digi.attachments[n].genre',
    'digi.attachments[n].recordLabel',
    'digi.attachments[n].lyrics',
  ],
  [raw.PublicationSchemaId.EMBED_LATEST]: [
    'digi.content',
    'digi.embed',
    'digi.attachments[n].item',
    'digi.attachments[n].altTag',
    'digi.attachments[n].cover',
    'digi.attachments[n].credits',
    'digi.attachments[n].artist',
    'digi.attachments[n].genre',
    'digi.attachments[n].recordLabel',
    'digi.attachments[n].lyrics',
  ],
  [raw.PublicationSchemaId.EVENT_LATEST]: [
    'digi.content',
    'digi.location',
    'digi.address.country',
    'digi.address.formatted',
    'digi.address.locality',
    'digi.address.postalCode',
    'digi.address.region',
    'digi.address.streetAddress',
    'digi.position',
    'digi.startsAt',
    'digi.endsAt',
    'digi.links[n]',
    'digi.attachments[n].item',
    'digi.attachments[n].altTag',
    'digi.attachments[n].cover',
    'digi.attachments[n].credits',
    'digi.attachments[n].artist',
    'digi.attachments[n].genre',
    'digi.attachments[n].recordLabel',
    'digi.attachments[n].lyrics',
  ],
  [raw.PublicationSchemaId.IMAGE_LATEST]: [
    'digi.content',
    'digi.image.item',
    'digi.image.altTag',
    'digi.attachments[n].item',
    'digi.attachments[n].altTag',
    'digi.attachments[n].cover',
    'digi.attachments[n].credits',
    'digi.attachments[n].artist',
    'digi.attachments[n].genre',
    'digi.attachments[n].recordLabel',
    'digi.attachments[n].lyrics',
  ],

  [raw.PublicationSchemaId.LINK_LATEST]: [
    'digi.content',
    'digi.sharingLink',
    'digi.attachments[n].item',
    'digi.attachments[n].altTag',
    'digi.attachments[n].cover',
    'digi.attachments[n].credits',
    'digi.attachments[n].artist',
    'digi.attachments[n].genre',
    'digi.attachments[n].recordLabel',
    'digi.attachments[n].lyrics',
  ],

  [raw.PublicationSchemaId.LIVESTREAM_LATEST]: [
    'digi.content',
    'digi.startsAt',
    'digi.endsAt',
    'digi.playbackUrl',
    'digi.liveUrl',
    'digi.checkLiveAPI',
    'digi.attachments[n].item',
    'digi.attachments[n].altTag',
    'digi.attachments[n].cover',
    'digi.attachments[n].credits',
    'digi.attachments[n].artist',
    'digi.attachments[n].genre',
    'digi.attachments[n].recordLabel',
    'digi.attachments[n].lyrics',
  ],

  [raw.PublicationSchemaId.MINT_LATEST]: [
    'digi.content',
    'digi.mintLink',
    'digi.attachments[n].item',
    'digi.attachments[n].altTag',
    'digi.attachments[n].cover',
    'digi.attachments[n].credits',
    'digi.attachments[n].artist',
    'digi.attachments[n].genre',
    'digi.attachments[n].recordLabel',
    'digi.attachments[n].lyrics',
  ],

  [raw.PublicationSchemaId.SPACE_LATEST]: [
    'digi.content',
    'digi.link',
    'digi.startsAt',
    'digi.attachments[n].item',
    'digi.attachments[n].altTag',
    'digi.attachments[n].cover',
    'digi.attachments[n].credits',
    'digi.attachments[n].artist',
    'digi.attachments[n].genre',
    'digi.attachments[n].recordLabel',
    'digi.attachments[n].lyrics',
  ],

  [raw.PublicationSchemaId.STORY_LATEST]: [
    'digi.content',
    'digi.asset.item',
    'digi.asset.altTag',
    'digi.asset.cover',
    'digi.asset.credits',
    'digi.asset.artist',
    'digi.asset.genre',
    'digi.asset.recordLabel',
    'digi.asset.lyrics',
  ],

  [raw.PublicationSchemaId.TEXT_ONLY_LATEST]: ['digi.content'],

  [raw.PublicationSchemaId.THREE_D_LATEST]: [
    'digi.content',
    'digi.assets[n].uri',
    'digi.assets[n].playerUrl',
    'digi.attachments[n].item',
    'digi.attachments[n].altTag',
    'digi.attachments[n].cover',
    'digi.attachments[n].credits',
    'digi.attachments[n].artist',
    'digi.attachments[n].genre',
    'digi.attachments[n].recordLabel',
    'digi.attachments[n].lyrics',
  ],

  [raw.PublicationSchemaId.TRANSACTION_LATEST]: [
    'digi.content',
    'digi.txHash',
    'digi.attachments[n].item',
    'digi.attachments[n].altTag',
    'digi.attachments[n].cover',
    'digi.attachments[n].credits',
    'digi.attachments[n].artist',
    'digi.attachments[n].genre',
    'digi.attachments[n].recordLabel',
    'digi.attachments[n].lyrics',
  ],

  [raw.PublicationSchemaId.VIDEO_LATEST]: [
    'digi.content',
    'digi.video.item',
    'digi.video.altTag',
    'digi.video.cover',
    'digi.attachments[n].item',
    'digi.attachments[n].altTag',
    'digi.attachments[n].cover',
    'digi.attachments[n].credits',
    'digi.attachments[n].artist',
    'digi.attachments[n].genre',
    'digi.attachments[n].recordLabel',
    'digi.attachments[n].lyrics',
  ],
};

type EncryptablePath = PathsOf<DistributiveOmit<raw.PublicationMetadata, 'encryptedWith'>>;

export function resolvePathsToEncrypt({ $schema }: raw.PublicationMetadata): EncryptablePath[] {
  if ($schema in ToEncryptPaths) {
    return ToEncryptPaths[$schema];
  }
  // Fail-safe: do not encrypt if schema is not supported, this could happen if a
  // new schema is defined and the dev adopts it without updating the SDK first.
  return [];
}

type DecryptablePath = PathsOf<DistributiveOmit<gql.PublicationMetadata, 'encryptedWith'>>;

const DecryptablePathsMapping: { [key in EncryptablePath]?: DecryptablePath | DecryptablePath[] } =
  {
    'digi.address.country': 'address.country',
    'digi.address.formatted': 'address.formatted',
    'digi.address.locality': 'address.locality',
    'digi.address.postalCode': 'address.postalCode',
    'digi.address.region': 'address.region',
    'digi.address.streetAddress': 'address.streetAddress',
    'digi.asset.altTag': 'asset.altTag',
    'digi.asset.artist': 'asset.artist',
    'digi.asset.cover': 'asset.cover.raw.uri',
    'digi.asset.credits': 'asset.credits',
    'digi.asset.genre': 'asset.genre',
    'digi.asset.item': ['asset.audio.raw.uri', 'asset.image.raw.uri', 'asset.video.raw.uri'],
    'digi.asset.lyrics': 'asset.lyrics',
    'digi.asset.recordLabel': 'asset.recordLabel',
    'digi.assets[n].playerUrl': 'assets[n].playerURL',
    'digi.assets[n].uri': 'assets[n].uri',
    'digi.attachments[n].altTag': 'attachments[n].altTag',
    'digi.attachments[n].artist': 'attachments[n].artist',
    'digi.attachments[n].cover': 'attachments[n].cover.raw.uri',
    'digi.attachments[n].credits': 'attachments[n].credits',
    'digi.attachments[n].genre': 'attachments[n].genre',
    'digi.attachments[n].item': [
      'attachments[n].audio.raw.uri',
      'attachments[n].image.raw.uri',
      'attachments[n].video.raw.uri',
    ],
    'digi.attachments[n].lyrics': 'attachments[n].lyrics',
    'digi.attachments[n].recordLabel': 'attachments[n].recordLabel',
    'digi.audio.artist': 'asset.artist',
    'digi.audio.cover': 'asset.cover.raw.uri',
    'digi.audio.credits': 'asset.credits',
    'digi.audio.genre': 'asset.genre',
    'digi.audio.item': 'asset.audio.raw.uri',
    'digi.audio.lyrics': 'asset.lyrics',
    'digi.audio.recordLabel': 'asset.recordLabel',
    'digi.checkLiveAPI': 'checkLiveAPI',
    'digi.content': 'content',
    'digi.embed': 'embed',
    'digi.endsAt': 'endsAt',
    'digi.position': 'geographic.rawURI',
    'digi.image.altTag': 'asset.altTag',
    'digi.image.item': 'asset.image.raw.uri',
    'digi.link': 'link',
    'digi.links[n]': 'links[n]',
    'digi.liveUrl': 'liveURL',
    'digi.location': 'location',
    'digi.mintLink': 'mintLink',
    'digi.playbackUrl': 'playbackURL',
    'digi.sharingLink': 'sharingLink',
    'digi.startsAt': 'startsAt',
    'digi.txHash': 'txHash',
    'digi.video.altTag': 'asset.altTag',
    'digi.video.cover': 'asset.cover.raw.uri',
    'digi.video.item': 'asset.video.raw.uri',
  };

export function resolvePathsToDecrypt({
  encryptedWith,
}: gql.EncryptedFragmentOfAnyPublicationMetadata) {
  return encryptedWith.encryptedPaths
    .reduce((acc, path) => {
      if (path in DecryptablePathsMapping && DecryptablePathsMapping[path as EncryptablePath]) {
        acc.push(DecryptablePathsMapping[path as EncryptablePath] as DecryptablePath);
      }
      return acc;
    }, [] as DecryptablePath[])
    .flat();
}
