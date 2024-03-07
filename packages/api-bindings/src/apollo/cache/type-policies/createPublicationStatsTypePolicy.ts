import { FieldFunctionOptions } from '@apollo/client/cache/inmemory/policies';
import { PublicationId } from '@digiv3rse/domain/entities';

import {
  OpenActionCategoryType,
  PublicationStatsCountOpenActionArgs,
  StrictTypedTypePolicies,
} from '../../../digi';
import { countAnyPendingCollectFor } from '../transactions';

type CountOpenActionsArgs = {
  request?: PublicationStatsCountOpenActionArgs;
};

function isCollectsAlias(args: CountOpenActionsArgs) {
  return args?.request?.anyOf?.[0]?.category === OpenActionCategoryType.Collect;
}

export function createPublicationStatsTypePolicy(): StrictTypedTypePolicies['PublicationStats'] {
  return {
    fields: {
      countOpenActions: {
        read(
          existing: number | undefined,
          { args, readField }: FieldFunctionOptions<CountOpenActionsArgs>,
        ) {
          if (args && isCollectsAlias(args)) {
            const id = readField('id') as PublicationId;

            return (existing ?? 0) + countAnyPendingCollectFor(id);
          }
          return existing ?? 0;
        },
      },
    },
  };
}
