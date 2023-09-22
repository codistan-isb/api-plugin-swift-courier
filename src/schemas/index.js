import importAsString from "@reactioncommerce/api-utils/importAsString.js";

const apiUpload = importAsString("./apiUpload.graphql");
const pickSheet = importAsString("./pickSheet.graphql");
const parcelReverse = importAsString("./parcelReverse.graphql");
const createPickupRequest = importAsString("./createPickupRequest.graphql");
export default [apiUpload, pickSheet, parcelReverse, createPickupRequest];
