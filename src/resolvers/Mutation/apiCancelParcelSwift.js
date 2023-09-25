import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiCancelParcelSwift(
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
  const apiCancelParcelSwiftResponse =
    await context.mutations.apiFetchLabelsSwift(context, input);
  console.log("apiCancelParcelSwiftResponse", apiCancelParcelSwiftResponse);
  if (apiCancelParcelSwiftResponse) {
    return {
      message: apiCancelParcelSwiftResponse,
    };
  }
}
