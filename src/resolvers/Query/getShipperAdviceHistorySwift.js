import ReactionError from "@reactioncommerce/reaction-error";

export default async function getShipperAdviceHistorySwift(
  parent,
  args,
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
  const getShipperAdviceHistorySwiftResponse =
    await context.queries.getShipperAdviceHistorySwift(context, args);
  console.log(
    "getShipperAdviceHistorySwiftResponse",
    getShipperAdviceHistorySwiftResponse
  );
  if (getShipperAdviceHistorySwiftResponse) {
    return getShipperAdviceHistorySwiftResponse;
  } else {
    return null;
  }
}
