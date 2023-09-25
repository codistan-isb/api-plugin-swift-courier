var secretApiKey = process.env.SWIFT_API_SECRET;
var venderID = process.env.SWIFT_VENDER_ID;
var baseUrl = process.env.SWIFT_BASE_URL;
import fetch from "node-fetch";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiPickupLocationsSwift(context, input) {
  console.log("input", input);
  let {
    fname,
    lname,
    email,
    phone,
    brandName,
    cityId,
    shortId,
    zoneAreaId,
    zoneId,
    address,
    isActive,
    timeSlotIds,
    geoPoints,
  } = input;
  let { lat, lng } = geoPoints;
  var myHeaders = {
    Authorization: secretApiKey,
    "Content-Type": "application/json",
  };
  var raw = JSON.stringify({
    fname: fname,
    lname: lname,
    email: email,
    phone: phone,
    brandName: brandName,
    cityId: cityId,
    shortId: shortId,
    zoneAreaId: zoneAreaId,
    zoneId: zoneId,
    address: address,
    isActive: isActive,
    timeSlotIds: [timeSlotIds],
    geoPoints: geoPoints,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  try {
    let response = await fetch(
      `${baseUrl}/${venderID}/pickup-locations`,
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
