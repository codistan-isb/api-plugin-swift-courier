import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiCancelMultipleParcelsSwift(
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
  const apiCancelMultipleParcelsSwiftResponse =
    await context.mutations.apiCancelMultipleParcelsSwift(context, input);
  console.log(
    "apiCancelMultipleParcelsSwiftResponse",
    apiCancelMultipleParcelsSwiftResponse
  );
  if (apiCancelMultipleParcelsSwiftResponse) {
    return {
      message: apiCancelMultipleParcelsSwiftResponse,
    };
  }
}
