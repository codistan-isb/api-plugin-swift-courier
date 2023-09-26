import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiGetPackageTypesSwift(
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
  const apiGetParcelHistorySwiftResponse =
    await context.queries.apiGetPackageTypesSwift(context, input);
  console.log(
    "apiGetParcelHistorySwiftResponse",
    apiGetParcelHistorySwiftResponse
  );
  if (apiGetParcelHistorySwiftResponse) {
    return apiGetParcelHistorySwiftResponse;
  } else {
    return null;
  }
}
