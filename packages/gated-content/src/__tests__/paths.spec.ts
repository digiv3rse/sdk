import * as raw from '@digiv3rse/metadata';

import * as gql from '../graphql';
import { resolvePathsToDecrypt, resolvePathsToEncrypt } from '../paths';

describe(`Given the paths helpers`, () => {
  describe(`when calling the "${resolvePathsToEncrypt.name}" function`, () => {
    describe.each([
      {
        schema: raw.PublicationSchemaId.ARTICLE_LATEST,
        expected: [
          'digi.content',
          // 'digi.title' // omitted on purpose to allow to tease potential audience
          'digi.attachments[n].item',
          'digi.attachments[n].altTag',
          'digi.attachments[n].cover',
          'digi.attachments[n].credits',
          'digi.attachments[n].artist',
          'digi.attachments[n].genre',
          'digi.attachments[n].recordLabel',
          'digi.attachments[n].lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.AUDIO_LATEST,
        expected: [
          'digi.content',
          // 'digi.title' // omitted on purpose to allow to tease potential audience
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
      },
      {
        schema: raw.PublicationSchemaId.CHECKING_IN_LATEST,
        expected: [
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
      },
      {
        schema: raw.PublicationSchemaId.EMBED_LATEST,
        expected: [
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
      },
      {
        schema: raw.PublicationSchemaId.EVENT_LATEST,
        expected: [
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
      },
      {
        schema: raw.PublicationSchemaId.IMAGE_LATEST,
        expected: [
          'digi.content',
          // 'digi.title' // omitted on purpose to allow to tease potential audience
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
      },
      {
        schema: raw.PublicationSchemaId.LINK_LATEST,
        expected: [
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
      },
      {
        schema: raw.PublicationSchemaId.LIVESTREAM_LATEST,
        expected: [
          'digi.content',
          // 'digi.title', // omitted on purpose to allow to tease potential audience
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
      },
      {
        schema: raw.PublicationSchemaId.MINT_LATEST,
        expected: [
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
      },
      {
        schema: raw.PublicationSchemaId.SPACE_LATEST,
        expected: [
          'digi.content',
          // 'digi.title', // omitted on purpose to allow to tease potential audience
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
      },
      {
        schema: raw.PublicationSchemaId.STORY_LATEST,
        expected: [
          'digi.content',
          // 'digi.title', // omitted on purpose to allow to tease potential audience
          'digi.asset.item',
          'digi.asset.altTag',
          'digi.asset.cover',
          'digi.asset.credits',
          'digi.asset.artist',
          'digi.asset.genre',
          'digi.asset.recordLabel',
          'digi.asset.lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.TEXT_ONLY_LATEST,
        expected: ['digi.content'],
      },
      {
        schema: raw.PublicationSchemaId.THREE_D_LATEST,
        expected: [
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
      },
      {
        schema: raw.PublicationSchemaId.TRANSACTION_LATEST,
        expected: [
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
      },
      {
        schema: raw.PublicationSchemaId.VIDEO_LATEST,
        expected: [
          'digi.content',
          // 'digi.title' // omitted on purpose to allow to tease potential audience
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
      },
    ])(`with metadata conforming to $schema schema`, ({ schema, expected }) => {
      it(`should return the expected list of paths to encrypt`, () => {
        const result = resolvePathsToEncrypt({
          $schema: schema,
        } as raw.PublicationMetadata);

        expect(result).toEqual(expected);
      });
    });
  });

  describe(`when calling the "${resolvePathsToDecrypt.name}" function`, () => {
    describe.each([
      {
        schema: raw.PublicationSchemaId.ARTICLE_LATEST,
        typename: 'ArticleMetadataV3',
        expected: [
          'content',
          'attachments[n].altTag',
          'attachments[n].audio.raw.uri',
          'attachments[n].image.raw.uri',
          'attachments[n].video.raw.uri',
          'attachments[n].cover.raw.uri',
          'attachments[n].credits',
          'attachments[n].artist',
          'attachments[n].genre',
          'attachments[n].recordLabel',
          'attachments[n].lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.AUDIO_LATEST,
        typename: 'AudioMetadataV3',
        expected: [
          'content',
          'asset.audio.raw.uri',
          'asset.cover.raw.uri',
          'asset.credits',
          'asset.artist',
          'asset.genre',
          'asset.recordLabel',
          'asset.lyrics',
          'attachments[n].altTag',
          'attachments[n].audio.raw.uri',
          'attachments[n].image.raw.uri',
          'attachments[n].video.raw.uri',
          'attachments[n].cover.raw.uri',
          'attachments[n].credits',
          'attachments[n].artist',
          'attachments[n].genre',
          'attachments[n].recordLabel',
          'attachments[n].lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.CHECKING_IN_LATEST,
        typename: 'CheckingInMetadataV3',
        expected: [
          'content',
          'location',
          'address.country',
          'address.formatted',
          'address.locality',
          'address.postalCode',
          'address.region',
          'address.streetAddress',
          'geographic.rawURI',
          'attachments[n].altTag',
          'attachments[n].audio.raw.uri',
          'attachments[n].image.raw.uri',
          'attachments[n].video.raw.uri',
          'attachments[n].cover.raw.uri',
          'attachments[n].credits',
          'attachments[n].artist',
          'attachments[n].genre',
          'attachments[n].recordLabel',
          'attachments[n].lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.EMBED_LATEST,
        typename: 'EmbedMetadataV3',
        expected: [
          'content',
          'embed',
          'attachments[n].altTag',
          'attachments[n].audio.raw.uri',
          'attachments[n].image.raw.uri',
          'attachments[n].video.raw.uri',
          'attachments[n].cover.raw.uri',
          'attachments[n].credits',
          'attachments[n].artist',
          'attachments[n].genre',
          'attachments[n].recordLabel',
          'attachments[n].lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.EVENT_LATEST,
        typename: 'EventMetadataV3',
        expected: [
          'address.country',
          'address.formatted',
          'address.locality',
          'address.postalCode',
          'address.region',
          'address.streetAddress',
          'content',
          'location',
          'geographic.rawURI',
          'startsAt',
          'endsAt',
          'links[n]',
          'attachments[n].altTag',
          'attachments[n].audio.raw.uri',
          'attachments[n].image.raw.uri',
          'attachments[n].video.raw.uri',
          'attachments[n].cover.raw.uri',
          'attachments[n].credits',
          'attachments[n].artist',
          'attachments[n].genre',
          'attachments[n].recordLabel',
          'attachments[n].lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.IMAGE_LATEST,
        typename: 'ImageMetadataV3',
        expected: [
          'content',
          'asset.altTag',
          'asset.image.raw.uri',
          'attachments[n].altTag',
          'attachments[n].audio.raw.uri',
          'attachments[n].image.raw.uri',
          'attachments[n].video.raw.uri',
          'attachments[n].cover.raw.uri',
          'attachments[n].credits',
          'attachments[n].artist',
          'attachments[n].genre',
          'attachments[n].recordLabel',
          'attachments[n].lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.LINK_LATEST,
        typename: 'LinkMetadataV3',
        expected: [
          'content',
          'sharingLink',
          'attachments[n].altTag',
          'attachments[n].audio.raw.uri',
          'attachments[n].image.raw.uri',
          'attachments[n].video.raw.uri',
          'attachments[n].cover.raw.uri',
          'attachments[n].credits',
          'attachments[n].artist',
          'attachments[n].genre',
          'attachments[n].recordLabel',
          'attachments[n].lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.LIVESTREAM_LATEST,
        typename: 'LiveStreamMetadataV3',
        expected: [
          'content',
          'startsAt',
          'endsAt',
          'playbackURL',
          'liveURL',
          'checkLiveAPI',
          'attachments[n].altTag',
          'attachments[n].audio.raw.uri',
          'attachments[n].image.raw.uri',
          'attachments[n].video.raw.uri',
          'attachments[n].cover.raw.uri',
          'attachments[n].credits',
          'attachments[n].artist',
          'attachments[n].genre',
          'attachments[n].recordLabel',
          'attachments[n].lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.MINT_LATEST,
        typename: 'MintMetadataV3',
        expected: [
          'content',
          'mintLink',
          'attachments[n].altTag',
          'attachments[n].audio.raw.uri',
          'attachments[n].image.raw.uri',
          'attachments[n].video.raw.uri',
          'attachments[n].cover.raw.uri',
          'attachments[n].credits',
          'attachments[n].artist',
          'attachments[n].genre',
          'attachments[n].recordLabel',
          'attachments[n].lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.SPACE_LATEST,
        typename: 'SpaceMetadataV3',
        expected: [
          'content',
          'link',
          'startsAt',
          'attachments[n].altTag',
          'attachments[n].audio.raw.uri',
          'attachments[n].image.raw.uri',
          'attachments[n].video.raw.uri',
          'attachments[n].cover.raw.uri',
          'attachments[n].credits',
          'attachments[n].artist',
          'attachments[n].genre',
          'attachments[n].recordLabel',
          'attachments[n].lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.STORY_LATEST,
        typename: 'StoryMetadataV3',
        expected: [
          'content',
          'asset.altTag',
          'asset.audio.raw.uri',
          'asset.image.raw.uri',
          'asset.video.raw.uri',
          'asset.cover.raw.uri',
          'asset.credits',
          'asset.artist',
          'asset.genre',
          'asset.recordLabel',
          'asset.lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.TEXT_ONLY_LATEST,
        typename: 'TextOnlyMetadataV3',
        expected: ['content'],
      },
      {
        schema: raw.PublicationSchemaId.THREE_D_LATEST,
        typename: 'ThreeDMetadataV3',
        expected: [
          'content',
          'assets[n].uri',
          'assets[n].playerURL',
          'attachments[n].altTag',
          'attachments[n].audio.raw.uri',
          'attachments[n].image.raw.uri',
          'attachments[n].video.raw.uri',
          'attachments[n].cover.raw.uri',
          'attachments[n].credits',
          'attachments[n].artist',
          'attachments[n].genre',
          'attachments[n].recordLabel',
          'attachments[n].lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.TRANSACTION_LATEST,
        typename: 'TransactionMetadataV3',
        expected: [
          'content',
          'txHash',
          'attachments[n].altTag',
          'attachments[n].audio.raw.uri',
          'attachments[n].image.raw.uri',
          'attachments[n].video.raw.uri',
          'attachments[n].cover.raw.uri',
          'attachments[n].credits',
          'attachments[n].artist',
          'attachments[n].genre',
          'attachments[n].recordLabel',
          'attachments[n].lyrics',
        ],
      },
      {
        schema: raw.PublicationSchemaId.VIDEO_LATEST,
        typename: 'VideoMetadataV3',
        expected: [
          'content',
          'asset.altTag',
          'asset.video.raw.uri',
          'asset.cover.raw.uri',
          'attachments[n].altTag',
          'attachments[n].audio.raw.uri',
          'attachments[n].image.raw.uri',
          'attachments[n].video.raw.uri',
          'attachments[n].cover.raw.uri',
          'attachments[n].credits',
          'attachments[n].artist',
          'attachments[n].genre',
          'attachments[n].recordLabel',
          'attachments[n].lyrics',
        ],
      },
    ])(`with a GQL $typename fragment`, ({ schema, expected }) => {
      it(`should return the expected list of paths to decrypt`, () => {
        const encryptedPaths = resolvePathsToEncrypt({
          $schema: schema,
        } as raw.PublicationMetadata);

        const result = resolvePathsToDecrypt({
          encryptedWith: {
            encryptedPaths,
          } as unknown, // TODO remove "as unknown" when the type is fixed
        } as gql.EncryptedFragmentOfAnyPublicationMetadata);

        expect(result).toEqual(expect.arrayContaining(expected));
      });
    });
  });
});
