import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiParcelWeightHistorySwift(
  parent,
  { input },
  context,
  info
) {
  // console.log("input", input);
  if (context.user === undefined || context.user === null) {
    throw new ReactionError(
      "access-denied",
      "Unauthorized access. Please Login First"
    );
  }
  const apiParcelWeightHistorySwiftResponse =
    await context.queries.apiGetParcelHistorySwift(context, input);
  console.log(
    "apiParcelWeightHistorySwiftResponse",
    apiParcelWeightHistorySwiftResponse
  );
  if (apiParcelWeightHistorySwiftResponse) {
    return apiParcelWeightHistorySwiftResponse;
  } else {
    return null;
  }
}
