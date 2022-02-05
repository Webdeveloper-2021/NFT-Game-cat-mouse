// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CatClaimed extends ethereum.Event {
  get params(): CatClaimed__Params {
    return new CatClaimed__Params(this);
  }
}

export class CatClaimed__Params {
  _event: CatClaimed;

  constructor(event: CatClaimed) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get unstaked(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get earned(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CrazyCatLadyClaimed extends ethereum.Event {
  get params(): CrazyCatLadyClaimed__Params {
    return new CrazyCatLadyClaimed__Params(this);
  }
}

export class CrazyCatLadyClaimed__Params {
  _event: CrazyCatLadyClaimed;

  constructor(event: CrazyCatLadyClaimed) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get unstaked(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get earned(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class HouseClaimed extends ethereum.Event {
  get params(): HouseClaimed__Params {
    return new HouseClaimed__Params(this);
  }
}

export class HouseClaimed__Params {
  _event: HouseClaimed;

  constructor(event: HouseClaimed) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get unstaked(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get earned(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MouseClaimed extends ethereum.Event {
  get params(): MouseClaimed__Params {
    return new MouseClaimed__Params(this);
  }
}

export class MouseClaimed__Params {
  _event: MouseClaimed;

  constructor(event: MouseClaimed) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get unstaked(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get earned(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TokenStaked extends ethereum.Event {
  get params(): TokenStaked__Params {
    return new TokenStaked__Params(this);
  }
}

export class TokenStaked__Params {
  _event: TokenStaked;

  constructor(event: TokenStaked) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokenType(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get value(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Habitat extends ethereum.SmartContract {
  static bind(address: Address): Habitat {
    return new Habitat("Habitat", address);
  }

  DAILY_CHEDDAR_RATE(): BigInt {
    let result = super.call(
      "DAILY_CHEDDAR_RATE",
      "DAILY_CHEDDAR_RATE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_DAILY_CHEDDAR_RATE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DAILY_CHEDDAR_RATE",
      "DAILY_CHEDDAR_RATE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  DAILY_MANSION_CHEDDAR_RATE(): BigInt {
    let result = super.call(
      "DAILY_MANSION_CHEDDAR_RATE",
      "DAILY_MANSION_CHEDDAR_RATE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_DAILY_MANSION_CHEDDAR_RATE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DAILY_MANSION_CHEDDAR_RATE",
      "DAILY_MANSION_CHEDDAR_RATE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  DAILY_RANCH_CHEDDAR_RATE(): BigInt {
    let result = super.call(
      "DAILY_RANCH_CHEDDAR_RATE",
      "DAILY_RANCH_CHEDDAR_RATE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_DAILY_RANCH_CHEDDAR_RATE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DAILY_RANCH_CHEDDAR_RATE",
      "DAILY_RANCH_CHEDDAR_RATE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  DAILY_SHACK_CHEDDAR_RATE(): BigInt {
    let result = super.call(
      "DAILY_SHACK_CHEDDAR_RATE",
      "DAILY_SHACK_CHEDDAR_RATE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_DAILY_SHACK_CHEDDAR_RATE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DAILY_SHACK_CHEDDAR_RATE",
      "DAILY_SHACK_CHEDDAR_RATE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAXIMUM_GLOBAL_CHEDDAR(): BigInt {
    let result = super.call(
      "MAXIMUM_GLOBAL_CHEDDAR",
      "MAXIMUM_GLOBAL_CHEDDAR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAXIMUM_GLOBAL_CHEDDAR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAXIMUM_GLOBAL_CHEDDAR",
      "MAXIMUM_GLOBAL_CHEDDAR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_RANK(): i32 {
    let result = super.call("MAX_RANK", "MAX_RANK():(uint8)", []);

    return result[0].toI32();
  }

  try_MAX_RANK(): ethereum.CallResult<i32> {
    let result = super.tryCall("MAX_RANK", "MAX_RANK():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  MINIMUM(): BigInt {
    let result = super.call("MINIMUM", "MINIMUM():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MINIMUM(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MINIMUM", "MINIMUM():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PERIOD(): BigInt {
    let result = super.call("PERIOD", "PERIOD():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PERIOD(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PERIOD", "PERIOD():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  cheddarToken(): Address {
    let result = super.call("cheddarToken", "cheddarToken():(address)", []);

    return result[0].toAddress();
  }

  try_cheddarToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("cheddarToken", "cheddarToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  cnmGame(): Address {
    let result = super.call("cnmGame", "cnmGame():(address)", []);

    return result[0].toAddress();
  }

  try_cnmGame(): ethereum.CallResult<Address> {
    let result = super.tryCall("cnmGame", "cnmGame():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  cnmNFT(): Address {
    let result = super.call("cnmNFT", "cnmNFT():(address)", []);

    return result[0].toAddress();
  }

  try_cnmNFT(): ethereum.CallResult<Address> {
    let result = super.tryCall("cnmNFT", "cnmNFT():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getOwedForCnM(tokenId: BigInt): BigInt {
    let result = super.call(
      "getOwedForCnM",
      "getOwedForCnM(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toBigInt();
  }

  try_getOwedForCnM(tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getOwedForCnM",
      "getOwedForCnM(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOwedForHouse(tokenId: BigInt): BigInt {
    let result = super.call(
      "getOwedForHouse",
      "getOwedForHouse(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toBigInt();
  }

  try_getOwedForHouse(tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getOwedForHouse",
      "getOwedForHouse(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  houseGame(): Address {
    let result = super.call("houseGame", "houseGame():(address)", []);

    return result[0].toAddress();
  }

  try_houseGame(): ethereum.CallResult<Address> {
    let result = super.tryCall("houseGame", "houseGame():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  houseNFT(): Address {
    let result = super.call("houseNFT", "houseNFT():(address)", []);

    return result[0].toAddress();
  }

  try_houseNFT(): ethereum.CallResult<Address> {
    let result = super.tryCall("houseNFT", "houseNFT():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isOwner(tokenId: BigInt, owner: Address): boolean {
    let result = super.call("isOwner", "isOwner(uint256,address):(bool)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBoolean();
  }

  try_isOwner(tokenId: BigInt, owner: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner(uint256,address):(bool)", [
      ethereum.Value.fromUnsignedBigInt(tokenId),
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  onERC721Received(
    param0: Address,
    from: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    from: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  randomCatOwner(seed: BigInt): Address {
    let result = super.call(
      "randomCatOwner",
      "randomCatOwner(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(seed)]
    );

    return result[0].toAddress();
  }

  try_randomCatOwner(seed: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "randomCatOwner",
      "randomCatOwner(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(seed)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  randomCrazyCatOwner(seed: BigInt): Address {
    let result = super.call(
      "randomCrazyCatOwner",
      "randomCrazyCatOwner(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(seed)]
    );

    return result[0].toAddress();
  }

  try_randomCrazyCatOwner(seed: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "randomCrazyCatOwner",
      "randomCrazyCatOwner(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(seed)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  randomizer(): Address {
    let result = super.call("randomizer", "randomizer():(address)", []);

    return result[0].toAddress();
  }

  try_randomizer(): ethereum.CallResult<Address> {
    let result = super.tryCall("randomizer", "randomizer():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rescueEnabled(): boolean {
    let result = super.call("rescueEnabled", "rescueEnabled():(bool)", []);

    return result[0].toBoolean();
  }

  try_rescueEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall("rescueEnabled", "rescueEnabled():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalCHEDDAREarned(): BigInt {
    let result = super.call(
      "totalCHEDDAREarned",
      "totalCHEDDAREarned():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalCHEDDAREarned(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalCHEDDAREarned",
      "totalCHEDDAREarned():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddManyHouseToStakingPoolCall extends ethereum.Call {
  get inputs(): AddManyHouseToStakingPoolCall__Inputs {
    return new AddManyHouseToStakingPoolCall__Inputs(this);
  }

  get outputs(): AddManyHouseToStakingPoolCall__Outputs {
    return new AddManyHouseToStakingPoolCall__Outputs(this);
  }
}

export class AddManyHouseToStakingPoolCall__Inputs {
  _call: AddManyHouseToStakingPoolCall;

  constructor(call: AddManyHouseToStakingPoolCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenIds(): Array<i32> {
    return this._call.inputValues[1].value.toI32Array();
  }
}

export class AddManyHouseToStakingPoolCall__Outputs {
  _call: AddManyHouseToStakingPoolCall;

  constructor(call: AddManyHouseToStakingPoolCall) {
    this._call = call;
  }
}

export class AddManyToStakingPoolCall extends ethereum.Call {
  get inputs(): AddManyToStakingPoolCall__Inputs {
    return new AddManyToStakingPoolCall__Inputs(this);
  }

  get outputs(): AddManyToStakingPoolCall__Outputs {
    return new AddManyToStakingPoolCall__Outputs(this);
  }
}

export class AddManyToStakingPoolCall__Inputs {
  _call: AddManyToStakingPoolCall;

  constructor(call: AddManyToStakingPoolCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenIds(): Array<i32> {
    return this._call.inputValues[1].value.toI32Array();
  }
}

export class AddManyToStakingPoolCall__Outputs {
  _call: AddManyToStakingPoolCall;

  constructor(call: AddManyToStakingPoolCall) {
    this._call = call;
  }
}

export class ClaimManyFromHabitatAndYieldCall extends ethereum.Call {
  get inputs(): ClaimManyFromHabitatAndYieldCall__Inputs {
    return new ClaimManyFromHabitatAndYieldCall__Inputs(this);
  }

  get outputs(): ClaimManyFromHabitatAndYieldCall__Outputs {
    return new ClaimManyFromHabitatAndYieldCall__Outputs(this);
  }
}

export class ClaimManyFromHabitatAndYieldCall__Inputs {
  _call: ClaimManyFromHabitatAndYieldCall;

  constructor(call: ClaimManyFromHabitatAndYieldCall) {
    this._call = call;
  }

  get tokenIds(): Array<i32> {
    return this._call.inputValues[0].value.toI32Array();
  }

  get unstake(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class ClaimManyFromHabitatAndYieldCall__Outputs {
  _call: ClaimManyFromHabitatAndYieldCall;

  constructor(call: ClaimManyFromHabitatAndYieldCall) {
    this._call = call;
  }
}

export class ClaimManyHouseFromHabitatCall extends ethereum.Call {
  get inputs(): ClaimManyHouseFromHabitatCall__Inputs {
    return new ClaimManyHouseFromHabitatCall__Inputs(this);
  }

  get outputs(): ClaimManyHouseFromHabitatCall__Outputs {
    return new ClaimManyHouseFromHabitatCall__Outputs(this);
  }
}

export class ClaimManyHouseFromHabitatCall__Inputs {
  _call: ClaimManyHouseFromHabitatCall;

  constructor(call: ClaimManyHouseFromHabitatCall) {
    this._call = call;
  }

  get tokenIds(): Array<i32> {
    return this._call.inputValues[0].value.toI32Array();
  }

  get unstake(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class ClaimManyHouseFromHabitatCall__Outputs {
  _call: ClaimManyHouseFromHabitatCall;

  constructor(call: ClaimManyHouseFromHabitatCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RescueCall extends ethereum.Call {
  get inputs(): RescueCall__Inputs {
    return new RescueCall__Inputs(this);
  }

  get outputs(): RescueCall__Outputs {
    return new RescueCall__Outputs(this);
  }
}

export class RescueCall__Inputs {
  _call: RescueCall;

  constructor(call: RescueCall) {
    this._call = call;
  }

  get tokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class RescueCall__Outputs {
  _call: RescueCall;

  constructor(call: RescueCall) {
    this._call = call;
  }
}

export class RescueHouseCall extends ethereum.Call {
  get inputs(): RescueHouseCall__Inputs {
    return new RescueHouseCall__Inputs(this);
  }

  get outputs(): RescueHouseCall__Outputs {
    return new RescueHouseCall__Outputs(this);
  }
}

export class RescueHouseCall__Inputs {
  _call: RescueHouseCall;

  constructor(call: RescueHouseCall) {
    this._call = call;
  }

  get tokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class RescueHouseCall__Outputs {
  _call: RescueHouseCall;

  constructor(call: RescueHouseCall) {
    this._call = call;
  }
}

export class SetContractsCall extends ethereum.Call {
  get inputs(): SetContractsCall__Inputs {
    return new SetContractsCall__Inputs(this);
  }

  get outputs(): SetContractsCall__Outputs {
    return new SetContractsCall__Outputs(this);
  }
}

export class SetContractsCall__Inputs {
  _call: SetContractsCall;

  constructor(call: SetContractsCall) {
    this._call = call;
  }

  get _cnmNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _cheddar(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _cnmGame(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _houseGame(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _rand(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _houseNFT(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class SetContractsCall__Outputs {
  _call: SetContractsCall;

  constructor(call: SetContractsCall) {
    this._call = call;
  }
}

export class SetPausedCall extends ethereum.Call {
  get inputs(): SetPausedCall__Inputs {
    return new SetPausedCall__Inputs(this);
  }

  get outputs(): SetPausedCall__Outputs {
    return new SetPausedCall__Outputs(this);
  }
}

export class SetPausedCall__Inputs {
  _call: SetPausedCall;

  constructor(call: SetPausedCall) {
    this._call = call;
  }

  get _paused(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetPausedCall__Outputs {
  _call: SetPausedCall;

  constructor(call: SetPausedCall) {
    this._call = call;
  }
}

export class SetRescueEnabledCall extends ethereum.Call {
  get inputs(): SetRescueEnabledCall__Inputs {
    return new SetRescueEnabledCall__Inputs(this);
  }

  get outputs(): SetRescueEnabledCall__Outputs {
    return new SetRescueEnabledCall__Outputs(this);
  }
}

export class SetRescueEnabledCall__Inputs {
  _call: SetRescueEnabledCall;

  constructor(call: SetRescueEnabledCall) {
    this._call = call;
  }

  get _enabled(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetRescueEnabledCall__Outputs {
  _call: SetRescueEnabledCall;

  constructor(call: SetRescueEnabledCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateMinimumExitCall extends ethereum.Call {
  get inputs(): UpdateMinimumExitCall__Inputs {
    return new UpdateMinimumExitCall__Inputs(this);
  }

  get outputs(): UpdateMinimumExitCall__Outputs {
    return new UpdateMinimumExitCall__Outputs(this);
  }
}

export class UpdateMinimumExitCall__Inputs {
  _call: UpdateMinimumExitCall;

  constructor(call: UpdateMinimumExitCall) {
    this._call = call;
  }

  get _minimum(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateMinimumExitCall__Outputs {
  _call: UpdateMinimumExitCall;

  constructor(call: UpdateMinimumExitCall) {
    this._call = call;
  }
}

export class UpdatePeriodCall extends ethereum.Call {
  get inputs(): UpdatePeriodCall__Inputs {
    return new UpdatePeriodCall__Inputs(this);
  }

  get outputs(): UpdatePeriodCall__Outputs {
    return new UpdatePeriodCall__Outputs(this);
  }
}

export class UpdatePeriodCall__Inputs {
  _call: UpdatePeriodCall;

  constructor(call: UpdatePeriodCall) {
    this._call = call;
  }

  get _period(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdatePeriodCall__Outputs {
  _call: UpdatePeriodCall;

  constructor(call: UpdatePeriodCall) {
    this._call = call;
  }
}