import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiPickupLocationsSwift(
  parent,
  { input },
  context,
  info
) {
  console.log("input", input);
  if (context.user === undefined || context.user === null) {
    throw new ReactionError(
      "access-denied",
      "Unauthorized access. Please Login First"
    );
  }
  const apiPickupLocationsSwiftResponse =
    await context.mutations.apiPickupLocationsSwift(context, input);
  console.log(
    "apiPickupLocationsSwiftResponse",
    apiPickupLocationsSwiftResponse
  );
  if (apiPickupLocationsSwiftResponse) {
    return apiPickupLocationsSwiftResponse;
  }
}
