import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";

class LevanaJs {
  constructor(rpc, contract) {
    this.rpc = rpc;
    this.contract = contract;
    this.client = '';
  }  

  pingLevana() {
    return "pong from levana-js";
  }

  async initLevana() {
    const client = await CosmWasmClient.connect(this.rpc);
    this.client = client   
    return true; 
  }  
  async getPrice() {
    const price = await this.client.queryContractSmart(this.contract, {
      spot_price: {},
    });
    return price; 
  }
  async getPositionsByAddress(address) {
    const res = await this.client.queryContractSmart(this.contract, {
      nft_proxy: { 
        nft_msg: { 
          tokens: { 
            owner: address 
          }          
        }        
      }
    }); 
    return res; 
  } 
  async getPositionById(id) {
    const res = await this.client.queryContractSmart(this.contract, {
      positions: { position_ids: [id] },
    });  
    return res; 
  } 
  async getClosedPositionHistory(address) {
    const res = await this.client.queryContractSmart(this.contract, {
      closed_position_history: { owner: address },
    });  
    return res; 
  }    
  async getTradeHistorySummary(address) {
    const res = await this.client.queryContractSmart(this.contract, {
      trade_history_summary: { addr: address },
    });  
    return res; 
  }
  async getPositionActionHistory(id) {
    const res = await this.client.queryContractSmart(this.contract, {
      position_action_history: { id: id },
    });  
    return res; 
  }   
  async getTraderActionHistory(address) {
    const res = await this.client.queryContractSmart(this.contract, {
      trader_action_history: { owner: address },
    });  
    return res; 
  }    
  async getLpActionHistory(address) {
    const res = await this.client.queryContractSmart(this.contract, {
      lp_action_history: { addr: address },
    });  
    return res; 
  }    
  async getLimitOrderHistory(address) {
    const res = await this.client.queryContractSmart(this.contract, {
      limit_order_history: { addr: address },
    });  
    return res; 
  }  
  async getLpInfo(address) {
    const res = await this.client.queryContractSmart(this.contract, {
      lp_info: { liquidity_provider: address },
    });  
    return res; 
  }   
  async getDeltaNeutralityFee(value) {
    const res = await this.client.queryContractSmart(this.contract, {
      delta_neutrality_fee: { notional_delta: value.toString() },
    });  
    return res; 
  }     
}

export { LevanaJs };
