import ReactionError from "@reactioncommerce/reaction-error";

export default async function createShipperAdviceSwift(
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
  const createShipperAdviceSwiftResponse =
    await context.mutations.createShipperAdviceSwift(context, input);
  console.log(
    "createShipperAdviceSwiftResponse",
    createShipperAdviceSwiftResponse
  );
  if (createShipperAdviceSwiftResponse) {
    return { data: createShipperAdviceSwiftResponse };
  } else {
    return null;
  }
}
