var secretApiKey = process.env.SWIFT_API_SECRET;
var venderID = process.env.SWIFT_VENDER_ID;
var baseUrl = process.env.SWIFT_BASE_URL;
import fetch from "node-fetch";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiGetCustomLabelUrlsSwift(context, input) {
  console.log("input", input);
  let { parcel_ids, dimensions } = input;
  var myHeaders = {
    Authorization: secretApiKey,
    "Content-Type": "application/json",
  };
  var raw = JSON.stringify({
    parcel_ids: parcel_ids,
    dimensions: dimensions,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  try {
    let response = await fetch(
      `${baseUrl}/${venderID}/api-get-custom-label-urls?vendorId=${venderID}`,
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
