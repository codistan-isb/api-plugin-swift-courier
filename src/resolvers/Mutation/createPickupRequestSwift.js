import ReactionError from "@reactioncommerce/reaction-error";

export default async function createPickupRequestSwift(parent, { input }, context, info) {
  // console.log("input", input);
  if (context.user === undefined || context.user === null) {
    throw new ReactionError(
      "access-denied",
      "Unauthorized access. Please Login First"
    );
  }
  const createPickupRequestSwiftResponse = await context.mutations.createPickupRequestSwift(
    context,
    input
  );
  // console.log("apiUploadSwiftResponse", apiUploadSwiftResponse);
  if (createPickupRequestSwiftResponse) {
    return createPickupRequestSwiftResponse;
  } else {
    return null;
  }
}
