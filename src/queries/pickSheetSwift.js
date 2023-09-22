var secretApiKey = process.env.SWIFT_API_SECRET;
var venderID = process.env.SWIFT_VENDER_ID;
var baseUrl = process.env.SWIFT_BASE_URL;
import fetch from "node-fetch";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function pickSheetSwift(context, input) {
  // console.log("input", input);
  // console.log("secretApiKey", secretApiKey);
  // console.log("venderID", venderID);
  try {
    var { parcel_ids, pl_code, vendorId } = input;
    var myHeaders = {
      Authorization: secretApiKey,
      // "Content-Type": "application/json",
    };
    //   var raw = "";   body: raw,

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let response = await fetch(
      `${baseUrl}/${venderID}/picksheet?vendorId=${venderID}&parcel_ids=${parcel_ids}&pl_code=${pl_code}`,
      requestOptions
    );
    console.log("response", response);
    let contentType = response.headers.get("content-type");
    console.log("contentType", contentType);
    // let result = response;
    // console.log(result);
    // return result;
  } catch (error) {
    console.log("error", error);
    throw new ReactionError("access-denied", `${error}`);
  }
}
