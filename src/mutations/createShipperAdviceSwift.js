var secretApiKey = process.env.SWIFT_API_SECRET;
var venderID = process.env.SWIFT_VENDER_ID;
var baseUrl = process.env.SWIFT_BASE_URL;
import fetch from "node-fetch";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function createShipperAdviceSwift(context, input) {
  console.log("input", input);
  let { requestedStatus, remarks, parcelId } = input;
  var myHeaders = {
    Authorization: secretApiKey,
    "Content-Type": "application/json",
  };
  var raw = JSON.stringify({
    requestedStatus: requestedStatus,
    remarks: remarks,
    parcelId: parcelId,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  try {
    let response = await fetch(
      `${baseUrl}/${venderID}/create-shipper-advice?vendorId=${venderID}`,
      requestOptions
    );
    let result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw new ReactionError("access-denied", `${error}`);
  }
}
