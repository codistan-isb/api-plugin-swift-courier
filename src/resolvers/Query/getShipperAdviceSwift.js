import ReactionError from "@reactioncommerce/reaction-error";

export default async function getShipperAdviceSwift(
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
  const getShipperAdviceSwiftResponse =
    await context.queries.getShipperAdviceSwift(context, args);
  console.log("getShipperAdviceSwiftResponse", getShipperAdviceSwiftResponse);
  if (getShipperAdviceSwiftResponse) {
    return getShipperAdviceSwiftResponse;
  } else {
    return null;
  }
}
