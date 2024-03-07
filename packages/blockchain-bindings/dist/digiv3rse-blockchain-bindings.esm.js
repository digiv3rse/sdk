import { Contract } from '@ethersproject/contracts';
import { ParamType, defaultAbiCoder } from '@ethersproject/abi';
import { invariant } from '@digiv3rse/shared-kernel';
import { parseUnits } from '@ethersproject/units';

var digiFollowNftAbi = [
	{
		inputs: [
			{
				internalType: "address",
				name: "hub",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		inputs: [
		],
		name: "BlockNumberInvalid",
		type: "error"
	},
	{
		inputs: [
		],
		name: "InitParamsInvalid",
		type: "error"
	},
	{
		inputs: [
		],
		name: "Initialized",
		type: "error"
	},
	{
		inputs: [
		],
		name: "NotHub",
		type: "error"
	},
	{
		inputs: [
		],
		name: "NotOwnerOrApproved",
		type: "error"
	},
	{
		inputs: [
		],
		name: "SignatureExpired",
		type: "error"
	},
	{
		inputs: [
		],
		name: "SignatureInvalid",
		type: "error"
	},
	{
		inputs: [
		],
		name: "TokenDoesNotExist",
		type: "error"
	},
	{
		inputs: [
		],
		name: "ZeroSpender",
		type: "error"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "ApprovalForAll",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
		],
		name: "HUB",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "burn",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				components: [
					{
						internalType: "uint8",
						name: "v",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "r",
						type: "bytes32"
					},
					{
						internalType: "bytes32",
						name: "s",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "deadline",
						type: "uint256"
					}
				],
				internalType: "struct DataTypes.EIP712Signature",
				name: "sig",
				type: "tuple"
			}
		],
		name: "burnWithSig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "delegatee",
				type: "address"
			}
		],
		name: "delegate",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "delegator",
				type: "address"
			},
			{
				internalType: "address",
				name: "delegatee",
				type: "address"
			},
			{
				components: [
					{
						internalType: "uint8",
						name: "v",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "r",
						type: "bytes32"
					},
					{
						internalType: "bytes32",
						name: "s",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "deadline",
						type: "uint256"
					}
				],
				internalType: "struct DataTypes.EIP712Signature",
				name: "sig",
				type: "tuple"
			}
		],
		name: "delegateBySig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "exists",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "getApproved",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			}
		],
		name: "getDelegatedSupplyByBlockNumber",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getDomainSeparator",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "blockNumber",
				type: "uint256"
			}
		],
		name: "getPowerByBlockNumber",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			}
		],
		name: "initialize",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "mint",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "mintTimestampOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "ownerOf",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				components: [
					{
						internalType: "uint8",
						name: "v",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "r",
						type: "bytes32"
					},
					{
						internalType: "bytes32",
						name: "s",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "deadline",
						type: "uint256"
					}
				],
				internalType: "struct DataTypes.EIP712Signature",
				name: "sig",
				type: "tuple"
			}
		],
		name: "permit",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool"
			},
			{
				components: [
					{
						internalType: "uint8",
						name: "v",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "r",
						type: "bytes32"
					},
					{
						internalType: "bytes32",
						name: "s",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "deadline",
						type: "uint256"
					}
				],
				internalType: "struct DataTypes.EIP712Signature",
				name: "sig",
				type: "tuple"
			}
		],
		name: "permitForAll",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "_data",
				type: "bytes"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "setApprovalForAll",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "sigNonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4"
			}
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "tokenByIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "tokenDataOf",
		outputs: [
			{
				components: [
					{
						internalType: "address",
						name: "owner",
						type: "address"
					},
					{
						internalType: "uint96",
						name: "mintTimestamp",
						type: "uint96"
					}
				],
				internalType: "struct IERC721Time.TokenData",
				name: "",
				type: "tuple"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "tokenOfOwnerByIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "tokenURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var digiHubAbi = [
	{
		inputs: [
			{
				internalType: "address",
				name: "followNFTImpl",
				type: "address"
			},
			{
				internalType: "address",
				name: "collectNFTImpl",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		inputs: [
		],
		name: "CallerNotCollectNFT",
		type: "error"
	},
	{
		inputs: [
		],
		name: "CallerNotFollowNFT",
		type: "error"
	},
	{
		inputs: [
		],
		name: "CannotInitImplementation",
		type: "error"
	},
	{
		inputs: [
		],
		name: "EmergencyAdminCannotUnpause",
		type: "error"
	},
	{
		inputs: [
		],
		name: "InitParamsInvalid",
		type: "error"
	},
	{
		inputs: [
		],
		name: "Initialized",
		type: "error"
	},
	{
		inputs: [
		],
		name: "NotGovernance",
		type: "error"
	},
	{
		inputs: [
		],
		name: "NotGovernanceOrEmergencyAdmin",
		type: "error"
	},
	{
		inputs: [
		],
		name: "NotOwnerOrApproved",
		type: "error"
	},
	{
		inputs: [
		],
		name: "NotProfileOwner",
		type: "error"
	},
	{
		inputs: [
		],
		name: "NotProfileOwnerOrDispatcher",
		type: "error"
	},
	{
		inputs: [
		],
		name: "Paused",
		type: "error"
	},
	{
		inputs: [
		],
		name: "ProfileCreatorNotWhitelisted",
		type: "error"
	},
	{
		inputs: [
		],
		name: "ProfileImageURILengthInvalid",
		type: "error"
	},
	{
		inputs: [
		],
		name: "PublicationDoesNotExist",
		type: "error"
	},
	{
		inputs: [
		],
		name: "PublishingPaused",
		type: "error"
	},
	{
		inputs: [
		],
		name: "SignatureExpired",
		type: "error"
	},
	{
		inputs: [
		],
		name: "SignatureInvalid",
		type: "error"
	},
	{
		inputs: [
		],
		name: "ZeroSpender",
		type: "error"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "ApprovalForAll",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "burn",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				components: [
					{
						internalType: "uint8",
						name: "v",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "r",
						type: "bytes32"
					},
					{
						internalType: "bytes32",
						name: "s",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "deadline",
						type: "uint256"
					}
				],
				internalType: "struct DataTypes.EIP712Signature",
				name: "sig",
				type: "tuple"
			}
		],
		name: "burnWithSig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "pubId",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "collect",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "collector",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "profileId",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "pubId",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "data",
						type: "bytes"
					},
					{
						components: [
							{
								internalType: "uint8",
								name: "v",
								type: "uint8"
							},
							{
								internalType: "bytes32",
								name: "r",
								type: "bytes32"
							},
							{
								internalType: "bytes32",
								name: "s",
								type: "bytes32"
							},
							{
								internalType: "uint256",
								name: "deadline",
								type: "uint256"
							}
						],
						internalType: "struct DataTypes.EIP712Signature",
						name: "sig",
						type: "tuple"
					}
				],
				internalType: "struct DataTypes.CollectWithSigData",
				name: "vars",
				type: "tuple"
			}
		],
		name: "collectWithSig",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "profileId",
						type: "uint256"
					},
					{
						internalType: "string",
						name: "contentURI",
						type: "string"
					},
					{
						internalType: "uint256",
						name: "profileIdPointed",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "pubIdPointed",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "referenceModuleData",
						type: "bytes"
					},
					{
						internalType: "address",
						name: "collectModule",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "collectModuleInitData",
						type: "bytes"
					},
					{
						internalType: "address",
						name: "referenceModule",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "referenceModuleInitData",
						type: "bytes"
					}
				],
				internalType: "struct DataTypes.CommentData",
				name: "vars",
				type: "tuple"
			}
		],
		name: "comment",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "profileId",
						type: "uint256"
					},
					{
						internalType: "string",
						name: "contentURI",
						type: "string"
					},
					{
						internalType: "uint256",
						name: "profileIdPointed",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "pubIdPointed",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "referenceModuleData",
						type: "bytes"
					},
					{
						internalType: "address",
						name: "collectModule",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "collectModuleInitData",
						type: "bytes"
					},
					{
						internalType: "address",
						name: "referenceModule",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "referenceModuleInitData",
						type: "bytes"
					},
					{
						components: [
							{
								internalType: "uint8",
								name: "v",
								type: "uint8"
							},
							{
								internalType: "bytes32",
								name: "r",
								type: "bytes32"
							},
							{
								internalType: "bytes32",
								name: "s",
								type: "bytes32"
							},
							{
								internalType: "uint256",
								name: "deadline",
								type: "uint256"
							}
						],
						internalType: "struct DataTypes.EIP712Signature",
						name: "sig",
						type: "tuple"
					}
				],
				internalType: "struct DataTypes.CommentWithSigData",
				name: "vars",
				type: "tuple"
			}
		],
		name: "commentWithSig",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "to",
						type: "address"
					},
					{
						internalType: "string",
						name: "handle",
						type: "string"
					},
					{
						internalType: "string",
						name: "imageURI",
						type: "string"
					},
					{
						internalType: "address",
						name: "followModule",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "followModuleInitData",
						type: "bytes"
					},
					{
						internalType: "string",
						name: "followNFTURI",
						type: "string"
					}
				],
				internalType: "struct DataTypes.CreateProfileData",
				name: "vars",
				type: "tuple"
			}
		],
		name: "createProfile",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "wallet",
				type: "address"
			}
		],
		name: "defaultProfile",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "pubId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "collectNFTId",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "emitCollectNFTTransferEvent",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "followNFTId",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			}
		],
		name: "emitFollowNFTTransferEvent",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "exists",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256[]",
				name: "profileIds",
				type: "uint256[]"
			},
			{
				internalType: "bytes[]",
				name: "datas",
				type: "bytes[]"
			}
		],
		name: "follow",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "follower",
						type: "address"
					},
					{
						internalType: "uint256[]",
						name: "profileIds",
						type: "uint256[]"
					},
					{
						internalType: "bytes[]",
						name: "datas",
						type: "bytes[]"
					},
					{
						components: [
							{
								internalType: "uint8",
								name: "v",
								type: "uint8"
							},
							{
								internalType: "bytes32",
								name: "r",
								type: "bytes32"
							},
							{
								internalType: "bytes32",
								name: "s",
								type: "bytes32"
							},
							{
								internalType: "uint256",
								name: "deadline",
								type: "uint256"
							}
						],
						internalType: "struct DataTypes.EIP712Signature",
						name: "sig",
						type: "tuple"
					}
				],
				internalType: "struct DataTypes.FollowWithSigData",
				name: "vars",
				type: "tuple"
			}
		],
		name: "followWithSig",
		outputs: [
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "getApproved",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "pubId",
				type: "uint256"
			}
		],
		name: "getCollectModule",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "pubId",
				type: "uint256"
			}
		],
		name: "getCollectNFT",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getCollectNFTImpl",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "pubId",
				type: "uint256"
			}
		],
		name: "getContentURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			}
		],
		name: "getDispatcher",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getDomainSeparator",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			}
		],
		name: "getFollowModule",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			}
		],
		name: "getFollowNFT",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getFollowNFTImpl",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			}
		],
		name: "getFollowNFTURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getGovernance",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			}
		],
		name: "getHandle",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			}
		],
		name: "getProfile",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "pubCount",
						type: "uint256"
					},
					{
						internalType: "address",
						name: "followModule",
						type: "address"
					},
					{
						internalType: "address",
						name: "followNFT",
						type: "address"
					},
					{
						internalType: "string",
						name: "handle",
						type: "string"
					},
					{
						internalType: "string",
						name: "imageURI",
						type: "string"
					},
					{
						internalType: "string",
						name: "followNFTURI",
						type: "string"
					}
				],
				internalType: "struct DataTypes.ProfileStruct",
				name: "",
				type: "tuple"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "handle",
				type: "string"
			}
		],
		name: "getProfileIdByHandle",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "pubId",
				type: "uint256"
			}
		],
		name: "getPub",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "profileIdPointed",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "pubIdPointed",
						type: "uint256"
					},
					{
						internalType: "string",
						name: "contentURI",
						type: "string"
					},
					{
						internalType: "address",
						name: "referenceModule",
						type: "address"
					},
					{
						internalType: "address",
						name: "collectModule",
						type: "address"
					},
					{
						internalType: "address",
						name: "collectNFT",
						type: "address"
					}
				],
				internalType: "struct DataTypes.PublicationStruct",
				name: "",
				type: "tuple"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			}
		],
		name: "getPubCount",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "pubId",
				type: "uint256"
			}
		],
		name: "getPubPointer",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "pubId",
				type: "uint256"
			}
		],
		name: "getPubType",
		outputs: [
			{
				internalType: "enum DataTypes.PubType",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "pubId",
				type: "uint256"
			}
		],
		name: "getReferenceModule",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getState",
		outputs: [
			{
				internalType: "enum DataTypes.ProtocolState",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "string",
				name: "symbol",
				type: "string"
			},
			{
				internalType: "address",
				name: "newGovernance",
				type: "address"
			}
		],
		name: "initialize",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "collectModule",
				type: "address"
			}
		],
		name: "isCollectModuleWhitelisted",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "followModule",
				type: "address"
			}
		],
		name: "isFollowModuleWhitelisted",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "profileCreator",
				type: "address"
			}
		],
		name: "isProfileCreatorWhitelisted",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "referenceModule",
				type: "address"
			}
		],
		name: "isReferenceModuleWhitelisted",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "mintTimestampOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "profileId",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "profileIdPointed",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "pubIdPointed",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "referenceModuleData",
						type: "bytes"
					},
					{
						internalType: "address",
						name: "referenceModule",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "referenceModuleInitData",
						type: "bytes"
					}
				],
				internalType: "struct DataTypes.MirrorData",
				name: "vars",
				type: "tuple"
			}
		],
		name: "mirror",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "profileId",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "profileIdPointed",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "pubIdPointed",
						type: "uint256"
					},
					{
						internalType: "bytes",
						name: "referenceModuleData",
						type: "bytes"
					},
					{
						internalType: "address",
						name: "referenceModule",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "referenceModuleInitData",
						type: "bytes"
					},
					{
						components: [
							{
								internalType: "uint8",
								name: "v",
								type: "uint8"
							},
							{
								internalType: "bytes32",
								name: "r",
								type: "bytes32"
							},
							{
								internalType: "bytes32",
								name: "s",
								type: "bytes32"
							},
							{
								internalType: "uint256",
								name: "deadline",
								type: "uint256"
							}
						],
						internalType: "struct DataTypes.EIP712Signature",
						name: "sig",
						type: "tuple"
					}
				],
				internalType: "struct DataTypes.MirrorWithSigData",
				name: "vars",
				type: "tuple"
			}
		],
		name: "mirrorWithSig",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "ownerOf",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				components: [
					{
						internalType: "uint8",
						name: "v",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "r",
						type: "bytes32"
					},
					{
						internalType: "bytes32",
						name: "s",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "deadline",
						type: "uint256"
					}
				],
				internalType: "struct DataTypes.EIP712Signature",
				name: "sig",
				type: "tuple"
			}
		],
		name: "permit",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool"
			},
			{
				components: [
					{
						internalType: "uint8",
						name: "v",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "r",
						type: "bytes32"
					},
					{
						internalType: "bytes32",
						name: "s",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "deadline",
						type: "uint256"
					}
				],
				internalType: "struct DataTypes.EIP712Signature",
				name: "sig",
				type: "tuple"
			}
		],
		name: "permitForAll",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "profileId",
						type: "uint256"
					},
					{
						internalType: "string",
						name: "contentURI",
						type: "string"
					},
					{
						internalType: "address",
						name: "collectModule",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "collectModuleInitData",
						type: "bytes"
					},
					{
						internalType: "address",
						name: "referenceModule",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "referenceModuleInitData",
						type: "bytes"
					}
				],
				internalType: "struct DataTypes.PostData",
				name: "vars",
				type: "tuple"
			}
		],
		name: "post",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "profileId",
						type: "uint256"
					},
					{
						internalType: "string",
						name: "contentURI",
						type: "string"
					},
					{
						internalType: "address",
						name: "collectModule",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "collectModuleInitData",
						type: "bytes"
					},
					{
						internalType: "address",
						name: "referenceModule",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "referenceModuleInitData",
						type: "bytes"
					},
					{
						components: [
							{
								internalType: "uint8",
								name: "v",
								type: "uint8"
							},
							{
								internalType: "bytes32",
								name: "r",
								type: "bytes32"
							},
							{
								internalType: "bytes32",
								name: "s",
								type: "bytes32"
							},
							{
								internalType: "uint256",
								name: "deadline",
								type: "uint256"
							}
						],
						internalType: "struct DataTypes.EIP712Signature",
						name: "sig",
						type: "tuple"
					}
				],
				internalType: "struct DataTypes.PostWithSigData",
				name: "vars",
				type: "tuple"
			}
		],
		name: "postWithSig",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "_data",
				type: "bytes"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "setApprovalForAll",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			}
		],
		name: "setDefaultProfile",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "wallet",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "profileId",
						type: "uint256"
					},
					{
						components: [
							{
								internalType: "uint8",
								name: "v",
								type: "uint8"
							},
							{
								internalType: "bytes32",
								name: "r",
								type: "bytes32"
							},
							{
								internalType: "bytes32",
								name: "s",
								type: "bytes32"
							},
							{
								internalType: "uint256",
								name: "deadline",
								type: "uint256"
							}
						],
						internalType: "struct DataTypes.EIP712Signature",
						name: "sig",
						type: "tuple"
					}
				],
				internalType: "struct DataTypes.SetDefaultProfileWithSigData",
				name: "vars",
				type: "tuple"
			}
		],
		name: "setDefaultProfileWithSig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "dispatcher",
				type: "address"
			}
		],
		name: "setDispatcher",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "profileId",
						type: "uint256"
					},
					{
						internalType: "address",
						name: "dispatcher",
						type: "address"
					},
					{
						components: [
							{
								internalType: "uint8",
								name: "v",
								type: "uint8"
							},
							{
								internalType: "bytes32",
								name: "r",
								type: "bytes32"
							},
							{
								internalType: "bytes32",
								name: "s",
								type: "bytes32"
							},
							{
								internalType: "uint256",
								name: "deadline",
								type: "uint256"
							}
						],
						internalType: "struct DataTypes.EIP712Signature",
						name: "sig",
						type: "tuple"
					}
				],
				internalType: "struct DataTypes.SetDispatcherWithSigData",
				name: "vars",
				type: "tuple"
			}
		],
		name: "setDispatcherWithSig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newEmergencyAdmin",
				type: "address"
			}
		],
		name: "setEmergencyAdmin",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "followModule",
				type: "address"
			},
			{
				internalType: "bytes",
				name: "followModuleInitData",
				type: "bytes"
			}
		],
		name: "setFollowModule",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "profileId",
						type: "uint256"
					},
					{
						internalType: "address",
						name: "followModule",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "followModuleInitData",
						type: "bytes"
					},
					{
						components: [
							{
								internalType: "uint8",
								name: "v",
								type: "uint8"
							},
							{
								internalType: "bytes32",
								name: "r",
								type: "bytes32"
							},
							{
								internalType: "bytes32",
								name: "s",
								type: "bytes32"
							},
							{
								internalType: "uint256",
								name: "deadline",
								type: "uint256"
							}
						],
						internalType: "struct DataTypes.EIP712Signature",
						name: "sig",
						type: "tuple"
					}
				],
				internalType: "struct DataTypes.SetFollowModuleWithSigData",
				name: "vars",
				type: "tuple"
			}
		],
		name: "setFollowModuleWithSig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "string",
				name: "followNFTURI",
				type: "string"
			}
		],
		name: "setFollowNFTURI",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "profileId",
						type: "uint256"
					},
					{
						internalType: "string",
						name: "followNFTURI",
						type: "string"
					},
					{
						components: [
							{
								internalType: "uint8",
								name: "v",
								type: "uint8"
							},
							{
								internalType: "bytes32",
								name: "r",
								type: "bytes32"
							},
							{
								internalType: "bytes32",
								name: "s",
								type: "bytes32"
							},
							{
								internalType: "uint256",
								name: "deadline",
								type: "uint256"
							}
						],
						internalType: "struct DataTypes.EIP712Signature",
						name: "sig",
						type: "tuple"
					}
				],
				internalType: "struct DataTypes.SetFollowNFTURIWithSigData",
				name: "vars",
				type: "tuple"
			}
		],
		name: "setFollowNFTURIWithSig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newGovernance",
				type: "address"
			}
		],
		name: "setGovernance",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "string",
				name: "imageURI",
				type: "string"
			}
		],
		name: "setProfileImageURI",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "profileId",
						type: "uint256"
					},
					{
						internalType: "string",
						name: "imageURI",
						type: "string"
					},
					{
						components: [
							{
								internalType: "uint8",
								name: "v",
								type: "uint8"
							},
							{
								internalType: "bytes32",
								name: "r",
								type: "bytes32"
							},
							{
								internalType: "bytes32",
								name: "s",
								type: "bytes32"
							},
							{
								internalType: "uint256",
								name: "deadline",
								type: "uint256"
							}
						],
						internalType: "struct DataTypes.EIP712Signature",
						name: "sig",
						type: "tuple"
					}
				],
				internalType: "struct DataTypes.SetProfileImageURIWithSigData",
				name: "vars",
				type: "tuple"
			}
		],
		name: "setProfileImageURIWithSig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "enum DataTypes.ProtocolState",
				name: "newState",
				type: "uint8"
			}
		],
		name: "setState",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		name: "sigNonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4"
			}
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "tokenByIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "tokenDataOf",
		outputs: [
			{
				components: [
					{
						internalType: "address",
						name: "owner",
						type: "address"
					},
					{
						internalType: "uint96",
						name: "mintTimestamp",
						type: "uint96"
					}
				],
				internalType: "struct IERC721Time.TokenData",
				name: "",
				type: "tuple"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "tokenOfOwnerByIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "tokenURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "collectModule",
				type: "address"
			},
			{
				internalType: "bool",
				name: "whitelist",
				type: "bool"
			}
		],
		name: "whitelistCollectModule",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "followModule",
				type: "address"
			},
			{
				internalType: "bool",
				name: "whitelist",
				type: "bool"
			}
		],
		name: "whitelistFollowModule",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "profileCreator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "whitelist",
				type: "bool"
			}
		],
		name: "whitelistProfileCreator",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "referenceModule",
				type: "address"
			},
			{
				internalType: "bool",
				name: "whitelist",
				type: "bool"
			}
		],
		name: "whitelistReferenceModule",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var digiTokenHandleRegistryAbi = [
	{
		inputs: [
			{
				internalType: "address",
				name: "digiHub",
				type: "address"
			},
			{
				internalType: "address",
				name: "digiHandles",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		inputs: [
		],
		name: "DoesNotExist",
		type: "error"
	},
	{
		inputs: [
		],
		name: "DoesNotHavePermissions",
		type: "error"
	},
	{
		inputs: [
		],
		name: "HandleAndTokenNotInSameWallet",
		type: "error"
	},
	{
		inputs: [
		],
		name: "NotHandleNorTokenOwner",
		type: "error"
	},
	{
		inputs: [
		],
		name: "NotLinked",
		type: "error"
	},
	{
		inputs: [
		],
		name: "OnlyLensHub",
		type: "error"
	},
	{
		inputs: [
		],
		name: "SignatureExpired",
		type: "error"
	},
	{
		inputs: [
		],
		name: "SignatureInvalid",
		type: "error"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			}
		],
		name: "getDefaultHandle",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "handleId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			}
		],
		name: "link",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "handleId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				components: [
					{
						internalType: "address",
						name: "signer",
						type: "address"
					},
					{
						internalType: "uint8",
						name: "v",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "r",
						type: "bytes32"
					},
					{
						internalType: "bytes32",
						name: "s",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "deadline",
						type: "uint256"
					}
				],
				internalType: "struct Types.EIP712Signature",
				name: "signature",
				type: "tuple"
			}
		],
		name: "linkWithSig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "handleId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			}
		],
		name: "migrationLink",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "signer",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				internalType: "uint256",
				name: "nonce",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "handleId",
				type: "uint256"
			}
		],
		name: "resolve",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "handleId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			}
		],
		name: "unlink",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "handleId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				components: [
					{
						internalType: "address",
						name: "signer",
						type: "address"
					},
					{
						internalType: "uint8",
						name: "v",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "r",
						type: "bytes32"
					},
					{
						internalType: "bytes32",
						name: "s",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "deadline",
						type: "uint256"
					}
				],
				internalType: "struct Types.EIP712Signature",
				name: "signature",
				type: "tuple"
			}
		],
		name: "unlinkWithSig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var permissionlessCreatorAbi = [
	{
		inputs: [
			{
				components: [
					{
						internalType: "address",
						name: "to",
						type: "address"
					},
					{
						internalType: "address",
						name: "followModule",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "followModuleInitData",
						type: "bytes"
					}
				],
				internalType: "struct Types.CreateProfileParams",
				name: "createProfileParams",
				type: "tuple"
			},
			{
				internalType: "string",
				name: "handle",
				type: "string"
			},
			{
				internalType: "address[]",
				name: "delegatedExecutors",
				type: "address[]"
			}
		],
		name: "createProfileWithHandle",
		outputs: [
			{
				internalType: "uint256",
				name: "profileId",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "handleId",
				type: "uint256"
			}
		],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "getProfileWithHandleCreationPrice",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];

var publicActProxyAbi = [
	{
		inputs: [
			{
				internalType: "address",
				name: "digiHub",
				type: "address"
			},
			{
				internalType: "address",
				name: "collectPublicationAction",
				type: "address"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		inputs: [
			{
				internalType: "uint8",
				name: "increment",
				type: "uint8"
			}
		],
		name: "incrementNonce",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "signer",
				type: "address"
			}
		],
		name: "nonces",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "publicationActedProfileId",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "publicationActedId",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "actorProfileId",
						type: "uint256"
					},
					{
						internalType: "uint256[]",
						name: "referrerProfileIds",
						type: "uint256[]"
					},
					{
						internalType: "uint256[]",
						name: "referrerPubIds",
						type: "uint256[]"
					},
					{
						internalType: "address",
						name: "actionModuleAddress",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "actionModuleData",
						type: "bytes"
					}
				],
				internalType: "struct Types.PublicationActionParams",
				name: "publicationActionParams",
				type: "tuple"
			}
		],
		name: "publicCollect",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "publicationActedProfileId",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "publicationActedId",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "actorProfileId",
						type: "uint256"
					},
					{
						internalType: "uint256[]",
						name: "referrerProfileIds",
						type: "uint256[]"
					},
					{
						internalType: "uint256[]",
						name: "referrerPubIds",
						type: "uint256[]"
					},
					{
						internalType: "address",
						name: "actionModuleAddress",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "actionModuleData",
						type: "bytes"
					}
				],
				internalType: "struct Types.PublicationActionParams",
				name: "publicationActionParams",
				type: "tuple"
			},
			{
				components: [
					{
						internalType: "address",
						name: "signer",
						type: "address"
					},
					{
						internalType: "uint8",
						name: "v",
						type: "uint8"
					},
					{
						internalType: "bytes32",
						name: "r",
						type: "bytes32"
					},
					{
						internalType: "bytes32",
						name: "s",
						type: "bytes32"
					},
					{
						internalType: "uint256",
						name: "deadline",
						type: "uint256"
					}
				],
				internalType: "struct Types.EIP712Signature",
				name: "signature",
				type: "tuple"
			}
		],
		name: "publicCollectWithSig",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "publicationActedProfileId",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "publicationActedId",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "actorProfileId",
						type: "uint256"
					},
					{
						internalType: "uint256[]",
						name: "referrerProfileIds",
						type: "uint256[]"
					},
					{
						internalType: "uint256[]",
						name: "referrerPubIds",
						type: "uint256[]"
					},
					{
						internalType: "address",
						name: "actionModuleAddress",
						type: "address"
					},
					{
						internalType: "bytes",
						name: "actionModuleData",
						type: "bytes"
					}
				],
				internalType: "struct Types.PublicationActionParams",
				name: "publicationActionParams",
				type: "tuple"
			}
		],
		name: "publicFreeAct",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];

var erc20Abi = [
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	}
];

function erc20(address, provider) {
  return new Contract(address, erc20Abi, provider);
}
function digiFollowNFT(address, provider) {
  return new Contract(address, digiFollowNftAbi, provider);
}
function digiHub(address, provider) {
  return new Contract(address, digiHubAbi, provider);
}
function digiTokenHandleRegistry(address, provider) {
  return new Contract(address, digiTokenHandleRegistryAbi, provider);
}
function publicActProxy(address, provider) {
  return new Contract(address, publicActProxyAbi, provider);
}
function permissionlessCreator(address, provider) {
  return new Contract(address, permissionlessCreatorAbi, provider);
}

/**
 * Module data.
 */

/**
 * A module parameter.
 */

/**
 * Encode an array of values into a DataHexString according to the provided ABI.
 *
 * @param abi - array of types to encode
 * @param data - array of data to encode
 * @returns encoded calldata
 *
 * @example
 * ```ts
 * const encoded = encodeData(
 *   JSON.parse(module.metadata.processCalldataABI) as ModuleParam[],
 *   [ 'value1', 'value2' ]
 * );
 * ```
 */
function encodeData(abi, data) {
  invariant(abi.length === data.length, 'Please provide the same number of data items as required by the contract method');
  var types = abi.map(function (param, index) {
    var dataItem = data[index];
    invariant(dataItem !== undefined, 'Please provide a value for each data item');
    return ParamType.fromObject({
      name: param.name,
      type: param.type,
      components: param.components,
      arrayLength: Array.isArray(dataItem) ? dataItem.length : undefined
    });
  });
  return defaultAbiCoder.encode(types, data);
}

/**
 * Decode a DataHexString into an array of values according to the provided ABI.
 *
 * @param abi - array of types to decode
 * @param calldata - data to decode
 * @returns decoded data
 *
 * @example
 * ```ts
 * const decoded = decodeData(
 *   JSON.parse(module.metadata.initializeResultDataABI) as ModuleParam[],
 *   openActionSettings.initializeResultData
 * );
 * ```
 */
function decodeData(abi, encoded) {
  var types = abi.map(function (param) {
    return ParamType.fromObject({
      name: param.name,
      type: param.type,
      components: param.components
    });
  });
  return defaultAbiCoder.decode(types, encoded);
}

/**
 * Checks if suggested profile handle name is valid.
 *
 * @param handle - profile handle to check
 * @returns true if the handle is valid
 */
function isValidHandle(handle) {
  var validationRegex = /^[a-z](?:[a-z0-9_]{4,25})$/;
  return validationRegex.test(handle);
}

function hexToInt(hex) {
  return parseInt(hex, 16);
}
function isTheSameAddress(address1, address2) {
  // lowercase before comparing to avoid comparing checksum address with a normal one
  return address1.toLowerCase() === address2.toLowerCase();
}
function bigNumber(from) {
  return parseUnits(from.toFixed(), from.asset.decimals);
}

export { bigNumber, decodeData, digiFollowNFT, digiHub, digiTokenHandleRegistry, encodeData, erc20, hexToInt, isTheSameAddress, isValidHandle, permissionlessCreator, publicActProxy };
