import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiUploadSwift(parent, { input }, context, info) {
  // console.log("input", input);
  if (context.user === undefined || context.user === null) {
    throw new ReactionError(
      "access-denied",
      "Unauthorized access. Please Login First"
    );
  }
  const apiUploadSwiftResponse = await context.mutations.apiUploadSwift(
    context,
    input
  );
  // console.log("apiUploadSwiftResponse", apiUploadSwiftResponse);
  if (apiUploadSwiftResponse) {
    return apiUploadSwiftResponse.data[0];
  } else {
    return null;
  }
}
