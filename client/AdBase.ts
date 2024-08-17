export const abi=[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_org",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_verifier",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "campaignId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "region",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "campaignName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "spendingLimit",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string[]",
          "name": "adCIDs",
          "type": "string[]"
        }
      ],
      "name": "CampaignCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "developer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Payout",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "CPC",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "campaignCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "campaigns",
      "outputs": [
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "region",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "campaignName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "spendingLimit",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isActive",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_region",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_campaignName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_spendingLimit",
          "type": "uint256"
        },
        {
          "internalType": "string[]",
          "name": "_adCIDs",
          "type": "string[]"
        }
      ],
      "name": "createCampaign",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "campaignId",
          "type": "uint256"
        }
      ],
      "name": "getAds",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getUserCampaigns",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "org",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "campaignId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_spentAmount",
          "type": "uint256"
        }
      ],
      "name": "pauseCampaign",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "developer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        },
        {
          "internalType": "uint256[]",
          "name": "pubSignals",
          "type": "uint256[]"
        }
      ],
      "name": "payout",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "payouts",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "userCampaigns",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "verifier",
      "outputs": [
        {
          "internalType": "contract PlonkVerifier",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ] as const ;

  export const bytecode ='0x60806040526509184e72a0006006553480156200001b57600080fd5b50604051620021673803806200216783398181016040528101906200004191906200013c565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060018190555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000183565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200010482620000d7565b9050919050565b6200011681620000f7565b81146200012257600080fd5b50565b60008151905062000136816200010b565b92915050565b60008060408385031215620001565762000155620000d2565b5b6000620001668582860162000125565b9250506020620001798582860162000125565b9150509250929050565b611fd480620001936000396000f3fe6080604052600436106100a75760003560e01c80634ccd3008116100645780634ccd3008146101d757806365bcfbe714610202578063a1e5084c1461023f578063c99dd60c1461027c578063cc1e2cb014610298578063fca604d7146102c3576100a7565b8063141961bc146100ac578063143ce764146100ed57806319ac74bd146101165780632b7ac3f31461015357806334a542601461017e5780633c84899c146101bb575b600080fd5b3480156100b857600080fd5b506100d360048036038101906100ce9190610dd7565b6102ee565b6040516100e4959493929190610eff565b60405180910390f35b3480156100f957600080fd5b50610114600480360381019061010f9190611189565b610461565b005b34801561012257600080fd5b5061013d60048036038101906101389190611228565b610705565b60405161014a9190611268565b60405180910390f35b34801561015f57600080fd5b50610168610736565b60405161017591906112e2565b60405180910390f35b34801561018a57600080fd5b506101a560048036038101906101a09190610dd7565b61075c565b6040516101b29190611409565b60405180910390f35b6101d560048036038101906101d0919061142b565b61084b565b005b3480156101e357600080fd5b506101ec6109b1565b6040516101f99190611268565b60405180910390f35b34801561020e57600080fd5b506102296004803603810190610224919061146b565b6109b7565b6040516102369190611268565b60405180910390f35b34801561024b57600080fd5b506102666004803603810190610261919061146b565b6109cf565b6040516102739190611556565b60405180910390f35b610296600480360381019061029191906116fa565b610a66565b005b3480156102a457600080fd5b506102ad610c89565b6040516102ba91906117b5565b60405180910390f35b3480156102cf57600080fd5b506102d8610cad565b6040516102e59190611268565b60405180910390f35b60036020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054610337906117ff565b80601f0160208091040260200160405190810160405280929190818152602001828054610363906117ff565b80156103b05780601f10610385576101008083540402835291602001916103b0565b820191906000526020600020905b81548152906001019060200180831161039357829003601f168201915b5050505050908060020180546103c5906117ff565b80601f01602080910402602001604051908101604052809291908181526020018280546103f1906117ff565b801561043e5780601f106104135761010080835404028352916020019161043e565b820191906000526020600020905b81548152906001019060200180831161042157829003601f168201915b5050505050908060030154908060050160009054906101000a900460ff16905085565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e69061187c565b60405180910390fd5b824711610531576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610528906118e8565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631e8e1e1383836040518363ffffffff1660e01b815260040161058e92919061195d565b602060405180830381865afa1580156105ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cf91906119c0565b61060e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060590611a39565b60405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff168460405161063490611a8a565b60006040518083038185875af1925050503d8060008114610671576040519150601f19603f3d011682016040523d82523d6000602084013e610676565b606091505b5050905083600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806106fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f590611aeb565b60405180910390fd5b5050505050565b6004602052816000526040600020818154811061072157600080fd5b90600052602060002001600091509150505481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060036000838152602001908152602001600020600401805480602002602001604051908101604052809291908181526020016000905b828210156108405783829060005260206000200180546107b3906117ff565b80601f01602080910402602001604051908101604052809291908181526020018280546107df906117ff565b801561082c5780601f106108015761010080835404028352916020019161082c565b820191906000526020600020905b81548152906001019060200180831161080f57829003601f168201915b505050505081526020019060010190610794565b505050509050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d09061187c565b60405180910390fd5b600060036000848152602001908152602001600020905060003373ffffffffffffffffffffffffffffffffffffffff168383600301546109199190611b3a565b60405161092590611a8a565b60006040518083038185875af1925050503d8060008114610962576040519150601f19603f3d011682016040523d82523d6000602084013e610967565b606091505b50509050806109ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a290611be0565b60405180910390fd5b50505050565b60065481565b60056020528060005260406000206000915090505481565b6060600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610a5a57602002820191906000526020600020905b815481526020019060010190808311610a46575b50505050509050919050565b813414610aa8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9f90611c4c565b60405180910390fd5b6040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020018281526020016001151581525060036000600154815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019081610b5f9190611e0e565b506040820151816002019081610b759190611e0e565b50606082015181600301556080820151816004019080519060200190610b9c929190610cb3565b5060a08201518160050160006101000a81548160ff021916908315150217905550905050600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600154908060018154018082558091505060019003906000526020600020016000909190919091505560016000815480929190610c3b90611ee0565b91905055507f1c8729f16ab80b4459d88ddf24ff843da549702ea14ea40aa065c6f608b1dc556001543386868686604051610c7b96959493929190611f28565b60405180910390a150505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b828054828255906000526020600020908101928215610cfb579160200282015b82811115610cfa578251829081610cea9190611e0e565b5091602001919060010190610cd3565b5b509050610d089190610d0c565b5090565b5b80821115610d2c5760008181610d239190610d30565b50600101610d0d565b5090565b508054610d3c906117ff565b6000825580601f10610d4e5750610d6d565b601f016020900490600052602060002090810190610d6c9190610d70565b5b50565b5b80821115610d89576000816000905550600101610d71565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610db481610da1565b8114610dbf57600080fd5b50565b600081359050610dd181610dab565b92915050565b600060208284031215610ded57610dec610d97565b5b6000610dfb84828501610dc2565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e2f82610e04565b9050919050565b610e3f81610e24565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e7f578082015181840152602081019050610e64565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ea782610e45565b610eb18185610e50565b9350610ec1818560208601610e61565b610eca81610e8b565b840191505092915050565b610ede81610da1565b82525050565b60008115159050919050565b610ef981610ee4565b82525050565b600060a082019050610f146000830188610e36565b8181036020830152610f268187610e9c565b90508181036040830152610f3a8186610e9c565b9050610f496060830185610ed5565b610f566080830184610ef0565b9695505050505050565b610f6981610e24565b8114610f7457600080fd5b50565b600081359050610f8681610f60565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610fce82610e8b565b810181811067ffffffffffffffff82111715610fed57610fec610f96565b5b80604052505050565b6000611000610d8d565b905061100c8282610fc5565b919050565b600067ffffffffffffffff82111561102c5761102b610f96565b5b61103582610e8b565b9050602081019050919050565b82818337600083830152505050565b600061106461105f84611011565b610ff6565b9050828152602081018484840111156110805761107f610f91565b5b61108b848285611042565b509392505050565b600082601f8301126110a8576110a7610f8c565b5b81356110b8848260208601611051565b91505092915050565b600067ffffffffffffffff8211156110dc576110db610f96565b5b602082029050602081019050919050565b600080fd5b6000611105611100846110c1565b610ff6565b90508083825260208201905060208402830185811115611128576111276110ed565b5b835b81811015611151578061113d8882610dc2565b84526020840193505060208101905061112a565b5050509392505050565b600082601f8301126111705761116f610f8c565b5b81356111808482602086016110f2565b91505092915050565b600080600080608085870312156111a3576111a2610d97565b5b60006111b187828801610f77565b94505060206111c287828801610dc2565b935050604085013567ffffffffffffffff8111156111e3576111e2610d9c565b5b6111ef87828801611093565b925050606085013567ffffffffffffffff8111156112105761120f610d9c565b5b61121c8782880161115b565b91505092959194509250565b6000806040838503121561123f5761123e610d97565b5b600061124d85828601610f77565b925050602061125e85828601610dc2565b9150509250929050565b600060208201905061127d6000830184610ed5565b92915050565b6000819050919050565b60006112a86112a361129e84610e04565b611283565b610e04565b9050919050565b60006112ba8261128d565b9050919050565b60006112cc826112af565b9050919050565b6112dc816112c1565b82525050565b60006020820190506112f760008301846112d3565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b600061134582610e45565b61134f8185611329565b935061135f818560208601610e61565b61136881610e8b565b840191505092915050565b600061137f838361133a565b905092915050565b6000602082019050919050565b600061139f826112fd565b6113a98185611308565b9350836020820285016113bb85611319565b8060005b858110156113f757848403895281516113d88582611373565b94506113e383611387565b925060208a019950506001810190506113bf565b50829750879550505050505092915050565b600060208201905081810360008301526114238184611394565b905092915050565b6000806040838503121561144257611441610d97565b5b600061145085828601610dc2565b925050602061146185828601610dc2565b9150509250929050565b60006020828403121561148157611480610d97565b5b600061148f84828501610f77565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6114cd81610da1565b82525050565b60006114df83836114c4565b60208301905092915050565b6000602082019050919050565b600061150382611498565b61150d81856114a3565b9350611518836114b4565b8060005b8381101561154957815161153088826114d3565b975061153b836114eb565b92505060018101905061151c565b5085935050505092915050565b6000602082019050818103600083015261157081846114f8565b905092915050565b600067ffffffffffffffff82111561159357611592610f96565b5b61159c82610e8b565b9050602081019050919050565b60006115bc6115b784611578565b610ff6565b9050828152602081018484840111156115d8576115d7610f91565b5b6115e3848285611042565b509392505050565b600082601f830112611600576115ff610f8c565b5b81356116108482602086016115a9565b91505092915050565b600067ffffffffffffffff82111561163457611633610f96565b5b602082029050602081019050919050565b600061165861165384611619565b610ff6565b9050808382526020820190506020840283018581111561167b5761167a6110ed565b5b835b818110156116c257803567ffffffffffffffff8111156116a05761169f610f8c565b5b8086016116ad89826115eb565b8552602085019450505060208101905061167d565b5050509392505050565b600082601f8301126116e1576116e0610f8c565b5b81356116f1848260208601611645565b91505092915050565b6000806000806080858703121561171457611713610d97565b5b600085013567ffffffffffffffff81111561173257611731610d9c565b5b61173e878288016115eb565b945050602085013567ffffffffffffffff81111561175f5761175e610d9c565b5b61176b878288016115eb565b935050604061177c87828801610dc2565b925050606085013567ffffffffffffffff81111561179d5761179c610d9c565b5b6117a9878288016116cc565b91505092959194509250565b60006020820190506117ca6000830184610e36565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061181757607f821691505b60208210810361182a576118296117d0565b5b50919050565b7f43616c6c6572206973206e6f7420746865206f7267616e697a6174696f6e0000600082015250565b6000611866601e83610e50565b915061187182611830565b602082019050919050565b6000602082019050818103600083015261189581611859565b9050919050565b7f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000600082015250565b60006118d2601283610e50565b91506118dd8261189c565b602082019050919050565b60006020820190508181036000830152611901816118c5565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061192f82611908565b6119398185611913565b9350611949818560208601610e61565b61195281610e8b565b840191505092915050565b600060408201905081810360008301526119778185611924565b9050818103602083015261198b81846114f8565b90509392505050565b61199d81610ee4565b81146119a857600080fd5b50565b6000815190506119ba81611994565b92915050565b6000602082840312156119d6576119d5610d97565b5b60006119e4848285016119ab565b91505092915050565b7f496e76616c69642050726f6f6600000000000000000000000000000000000000600082015250565b6000611a23600d83610e50565b9150611a2e826119ed565b602082019050919050565b60006020820190508181036000830152611a5281611a16565b9050919050565b600081905092915050565b50565b6000611a74600083611a59565b9150611a7f82611a64565b600082019050919050565b6000611a9582611a67565b9150819050919050565b7f4661696c656420746f205472616e736665722121000000000000000000000000600082015250565b6000611ad5601483610e50565b9150611ae082611a9f565b602082019050919050565b60006020820190508181036000830152611b0481611ac8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611b4582610da1565b9150611b5083610da1565b9250828203905081811115611b6857611b67611b0b565b5b92915050565b7f4661696c656420746f20776974686472617720616e642070617375652063616d60008201527f706169676e212100000000000000000000000000000000000000000000000000602082015250565b6000611bca602783610e50565b9150611bd582611b6e565b604082019050919050565b60006020820190508181036000830152611bf981611bbd565b9050919050565b7f496e76616c696420416d6f756e74000000000000000000000000000000000000600082015250565b6000611c36600e83610e50565b9150611c4182611c00565b602082019050919050565b60006020820190508181036000830152611c6581611c29565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611cce7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611c91565b611cd88683611c91565b95508019841693508086168417925050509392505050565b6000611d0b611d06611d0184610da1565b611283565b610da1565b9050919050565b6000819050919050565b611d2583611cf0565b611d39611d3182611d12565b848454611c9e565b825550505050565b600090565b611d4e611d41565b611d59818484611d1c565b505050565b5b81811015611d7d57611d72600082611d46565b600181019050611d5f565b5050565b601f821115611dc257611d9381611c6c565b611d9c84611c81565b81016020851015611dab578190505b611dbf611db785611c81565b830182611d5e565b50505b505050565b600082821c905092915050565b6000611de560001984600802611dc7565b1980831691505092915050565b6000611dfe8383611dd4565b9150826002028217905092915050565b611e1782610e45565b67ffffffffffffffff811115611e3057611e2f610f96565b5b611e3a82546117ff565b611e45828285611d81565b600060209050601f831160018114611e785760008415611e66578287015190505b611e708582611df2565b865550611ed8565b601f198416611e8686611c6c565b60005b82811015611eae57848901518255600182019150602085019450602081019050611e89565b86831015611ecb5784890151611ec7601f891682611dd4565b8355505b6001600288020188555050505b505050505050565b6000611eeb82610da1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611f1d57611f1c611b0b565b5b600182019050919050565b600060c082019050611f3d6000830189610ed5565b611f4a6020830188610e36565b8181036040830152611f5c8187610e9c565b90508181036060830152611f708186610e9c565b9050611f7f6080830185610ed5565b81810360a0830152611f918184611394565b905097965050505050505056fea264697066735822122096bb01b8ff24669971017e4546832c30763ba892682b79b852904f9a916a69f464736f6c63430008180033' as const ;