var secretApiKey = process.env.SWIFT_API_SECRET;
var venderID = process.env.SWIFT_VENDER_ID;
import fetch from "node-fetch";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiUploadSwift(context, input) {
  //   console.log("input", input);
  //   console.log("venderID", venderID);
  //   console.log("secretApiKey", secretApiKey);
  const {
    ORDER_ID,
    ORDER_TYPE,
    CONSIGNEE_FIRST_NAME,
    CONSIGNEE_PHONE,
    CONSIGNEE_CITY,
    CONSIGNEE_ADDRESS,
    PACKAGING,
    ORIGIN_CITY,
    PIECES,
    COD,
    DESCRIPTION,
    WEIGHT,
    SHIPPER_ADDRESS_ID,
  } = input;
  //   var myHeaders = new Headers();
  //   myHeaders.append("Authorization", secretApiKey);
  //   myHeaders.append("Content-Type", "application/json");
  var myHeaders = {
    Authorization: secretApiKey,
    "Content-Type": "application/json",
  };
  var raw = JSON.stringify([
    {
      ORDER_ID: ORDER_ID,
      ORDER_TYPE: ORDER_TYPE,
      CONSIGNEE_FIRST_NAME: CONSIGNEE_FIRST_NAME,
      CONSIGNEE_PHONE: CONSIGNEE_PHONE,
      CONSIGNEE_CITY: CONSIGNEE_CITY,
      CONSIGNEE_ADDRESS: CONSIGNEE_ADDRESS,
      PACKAGING: PACKAGING,
      ORIGIN_CITY: ORIGIN_CITY,
      PIECES: PIECES,
      COD: COD,
      DESCRIPTION: DESCRIPTION,
      WEIGHT: WEIGHT,
      SHIPPER_ADDRESS_ID: SHIPPER_ADDRESS_ID,
    },
  ]);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  try {
    let response = await fetch(
      `https://gateway-prod.swyftlogistics.com/vendor/api/${venderID}/api-upload`,
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
