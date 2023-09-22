var secretApiKey = process.env.SWIFT_API_SECRET;
var venderID = process.env.SWIFT_VENDER_ID;
var baseUrl = process.env.SWIFT_BASE_URL;
import fetch from "node-fetch";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function getShipperAdviceSwift(context, args) {
  console.log("input", args);
  let { id } = args;
  var myHeaders = {
    Authorization: secretApiKey,
    "Content-Type": "application/json",
  };
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  try {
    // `${baseUrl}/${venderID}/parcel-reverse?vendorId=${venderID}`,
    let response = await fetch(
      `${baseUrl}/${venderID}/shipper-advice?vendorId=${venderID}`,
      requestOptions
    );
    let result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log("error", error);
    throw new ReactionError("access-denied", `${error}`);
  }
}
