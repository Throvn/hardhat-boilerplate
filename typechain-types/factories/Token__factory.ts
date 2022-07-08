/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Token, TokenInterface } from "../Token";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280601081526020017f4d79204861726468617420546f6b656e000000000000000000000000000000008152506000908051906020019061004f92919061013c565b506040518060400160405280600381526020017f4d485400000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b92919061013c565b50620f42406002553480156100af57600080fd5b50600254600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610240565b8280546101489061020e565b90600052602060002090601f01602090048101928261016a57600085556101b1565b82601f1061018357805160ff19168380011785556101b1565b828001600101855582156101b1579182015b828111156101b0578251825591602001919060010190610195565b5b5090506101be91906101c2565b5090565b5b808211156101db5760008160009055506001016101c3565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061022657607f821691505b6020821081141561023a576102396101df565b5b50919050565b6109838061024f6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806306fdde031461006757806318160ddd1461008557806370a08231146100a35780638da5cb5b146100d357806395d89b41146100f1578063a9059cbb1461010f575b600080fd5b61006f61012b565b60405161007c91906105db565b60405180910390f35b61008d6101b9565b60405161009a9190610616565b60405180910390f35b6100bd60048036038101906100b89190610694565b6101bf565b6040516100ca9190610616565b60405180910390f35b6100db610208565b6040516100e891906106d0565b60405180910390f35b6100f961022e565b60405161010691906105db565b60405180910390f35b61012960048036038101906101249190610717565b6102bc565b005b6000805461013890610786565b80601f016020809104026020016040519081016040528092919081815260200182805461016490610786565b80156101b15780601f10610186576101008083540402835291602001916101b1565b820191906000526020600020905b81548152906001019060200180831161019457829003601f168201915b505050505081565b60025481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6001805461023b90610786565b80601f016020809104026020016040519081016040528092919081815260200182805461026790610786565b80156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b505050505081565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561033e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033590610804565b60405180910390fd5b61036260405180606001604052806024815260200161092a60249139338484610477565b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103b19190610853565b9250508190555080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104079190610887565b925050819055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161046b9190610616565b60405180910390a35050565b6105138484848460405160240161049194939291906108dd565b6040516020818303038152906040527f6eb7943d000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610519565b50505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561057c578082015181840152602081019050610561565b8381111561058b576000848401525b50505050565b6000601f19601f8301169050919050565b60006105ad82610542565b6105b7818561054d565b93506105c781856020860161055e565b6105d081610591565b840191505092915050565b600060208201905081810360008301526105f581846105a2565b905092915050565b6000819050919050565b610610816105fd565b82525050565b600060208201905061062b6000830184610607565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061066182610636565b9050919050565b61067181610656565b811461067c57600080fd5b50565b60008135905061068e81610668565b92915050565b6000602082840312156106aa576106a9610631565b5b60006106b88482850161067f565b91505092915050565b6106ca81610656565b82525050565b60006020820190506106e560008301846106c1565b92915050565b6106f4816105fd565b81146106ff57600080fd5b50565b600081359050610711816106eb565b92915050565b6000806040838503121561072e5761072d610631565b5b600061073c8582860161067f565b925050602061074d85828601610702565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061079e57607f821691505b602082108114156107b2576107b1610757565b5b50919050565b7f4e6f7420656e6f75676820746f6b656e73000000000000000000000000000000600082015250565b60006107ee60118361054d565b91506107f9826107b8565b602082019050919050565b6000602082019050818103600083015261081d816107e1565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061085e826105fd565b9150610869836105fd565b92508282101561087c5761087b610824565b5b828203905092915050565b6000610892826105fd565b915061089d836105fd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156108d2576108d1610824565b5b828201905092915050565b600060808201905081810360008301526108f781876105a2565b905061090660208301866106c1565b61091360408301856106c1565b6109206060830184610607565b9594505050505056fe5472616e7366657272696e672066726f6d20257320746f20257320257320746f6b656e73a264697066735822122008d375356b1556fd6f7547a5cba0bc8dc7a61f8a883d7049f6476aa299858f6764736f6c63430008090033";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Token> {
    return super.deploy(overrides || {}) as Promise<Token>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Token {
    return super.attach(address) as Token;
  }
  override connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}
