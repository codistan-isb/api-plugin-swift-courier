var secretApiKey = process.env.SWIFT_API_SECRET;
var venderID = process.env.SWIFT_VENDER_ID;
var baseUrl = process.env.SWIFT_BASE_URL;
import fetch from "node-fetch";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiCancelMultipleParcelsSwift(context, input) {
  console.log("input", input);
  let { parcels } = input;
  var myHeaders = {
    Authorization: secretApiKey,
    "Content-Type": "application/json",
  };
  var raw = JSON.stringify({ parcels: parcels });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  try {
    let response = await fetch(
      `${baseUrl}/${venderID}/cancel-parcels`,
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
