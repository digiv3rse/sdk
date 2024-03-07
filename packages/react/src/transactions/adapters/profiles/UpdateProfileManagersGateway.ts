import {
  ChangeProfileManagerActionType,
  CreateChangeProfileManagersBroadcastItemResult,
  CreateChangeProfileManagersTypedDataData,
  CreateChangeProfileManagersTypedDataDocument,
  CreateChangeProfileManagersTypedDataVariables,
  SafeApolloClient,
  omitTypename,
} from '@digiv3rse/api-bindings';
import { digiHub } from '@digiv3rse/blockchain-bindings';
import { Nonce } from '@digiv3rse/domain/entities';
import { UpdateProfileManagersRequest } from '@digiv3rse/domain/use-cases/profile';
import { ISignedOnChainGateway } from '@digiv3rse/domain/use-cases/transactions';
import { Data } from '@digiv3rse/shared-kernel';

import { RequiredConfig } from '../../../config';
import { UnsignedProtocolCall } from '../../../wallet/adapters/ConcreteWallet';
import { IProviderFactory } from '../../../wallet/adapters/IProviderFactory';
import { AbstractContractCallGateway, ContractCallDetails } from '../AbstractContractCallGateway';

export class UpdateProfileManagersGateway
  extends AbstractContractCallGateway<UpdateProfileManagersRequest>
  implements ISignedOnChainGateway<UpdateProfileManagersRequest>
{
  constructor(
    config: RequiredConfig,
    providerFactory: IProviderFactory,
    private apolloClient: SafeApolloClient,
  ) {
    super(config, providerFactory);
  }

  async createUnsignedProtocolCall(
    request: UpdateProfileManagersRequest,
    nonceOverride?: Nonce,
  ): Promise<UnsignedProtocolCall<UpdateProfileManagersRequest>> {
    const result = await this.createTypedData(request, nonceOverride);

    return UnsignedProtocolCall.create({
      id: result.id,
      request,
      typedData: omitTypename(result.typedData),
    });
  }

  protected async createCallDetails(
    request: UpdateProfileManagersRequest,
  ): Promise<ContractCallDetails> {
    const result = await this.createTypedData(request);
    return this.createChangeDelegatedExecutorsConfigCallDetails(result);
  }

  private async createTypedData(request: UpdateProfileManagersRequest, nonce?: Nonce) {
    const { data } = await this.apolloClient.mutate<
      CreateChangeProfileManagersTypedDataData,
      CreateChangeProfileManagersTypedDataVariables
    >({
      mutation: CreateChangeProfileManagersTypedDataDocument,
      variables: {
        request: {
          approveSignless: request.approveSignless,
          changeManagers: [
            ...(request.add?.map((address) => ({
              action: ChangeProfileManagerActionType.Add,
              address,
            })) ?? []),
            ...(request.remove?.map((address) => ({
              action: ChangeProfileManagerActionType.Remove,
              address,
            })) ?? []),
          ],
        },
        options: nonce ? { overrideSigNonce: nonce } : undefined,
      },
    });

    return data.result;
  }

  private createChangeDelegatedExecutorsConfigCallDetails(
    data: CreateChangeProfileManagersBroadcastItemResult,
  ): ContractCallDetails {
    const contract = digiHub(data.typedData.domain.verifyingContract);
    const encodedData = contract.interface.encodeFunctionData(
      'changeDelegatedExecutorsConfig(uint256,address[],bool[],uint64,bool)',
      [
        data.typedData.message.delegatorProfileId,
        data.typedData.message.delegatedExecutors,
        data.typedData.message.approvals,
        data.typedData.message.configNumber,
        data.typedData.message.switchToGivenConfig,
      ],
    );
    return {
      contractAddress: data.typedData.domain.verifyingContract,
      encodedData: encodedData as Data,
    };
  }
}
