var secretApiKey = process.env.SWIFT_API_SECRET;
var venderID = process.env.SWIFT_VENDER_ID;
var baseUrl = process.env.SWIFT_BASE_URL;
import fetch from "node-fetch";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function parcelReverseSwift(context, input) {
  // try {
  // console.log("input", input);
  var { parcelId, dropOffLocationId } = input;
  var myHeaders = {
    Authorization: secretApiKey,
    "Content-Type": "application/json",
  };
  var raw = JSON.stringify([
    {
      parcelId: parcelId,
      dropoffLocationId: dropOffLocationId,
    },
  ]);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  // console.log(
  //   "`${baseUrl}/${venderID}/parcel-reverse?vendorId=${venderID}`",
  //   `${baseUrl}/${venderID}/parcel-reverse?vendorId=${venderID}`
  // );
  let response = await fetch(
    `${baseUrl}/${venderID}/parcel-reverse?vendorId=${venderID}`,
    requestOptions
  );
  let result = await response.json();
  console.log("result", result);
  return result;

  // if (result.error) {
  //   return result.error;
  // } else {
  //   return result;
  // }
  // } catch (error) {
  //   console.log("error", error);
  //   throw new ReactionError("access-denied", `${error}`);
  // }
}
