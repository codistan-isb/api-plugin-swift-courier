import importAsString from "@reactioncommerce/api-utils/importAsString.js";
const shipperAdvice = importAsString("./shipperAdvice.graphql");
const apiUpload = importAsString("./apiUpload.graphql");
const pickSheet = importAsString("./pickSheet.graphql");
const parcelReverse = importAsString("./parcelReverse.graphql");
const createPickupRequest = importAsString("./createPickupRequest.graphql");
const customLabelUrls = importAsString("./customLabelUrls.graphql");
const standardLabelUrls = importAsString("./standardLabelUrls.graphql");
const FetchLabels = importAsString("./FetchLabels.graphql");
const cancelParcel = importAsString("./cancelParcel.graphql");
const getParcelHistory = importAsString("./getParcelHistory.graphql");
const parcelWeightHistory = importAsString("./parcelWeightHistory.graphql");
const apiParcelProofOfDelivery = importAsString(
  "./apiParcelProofOfDelivery.graphql"
);

export default [
  parcelWeightHistory,
  apiUpload,
  pickSheet,
  parcelReverse,
  createPickupRequest,
  shipperAdvice,
  customLabelUrls,
  standardLabelUrls,
  FetchLabels,
  cancelParcel,
  getParcelHistory,
  apiParcelProofOfDelivery,
];
