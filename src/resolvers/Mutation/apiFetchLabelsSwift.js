import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiFetchLabelsSwift(
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
  const apiFetchLabelsSwiftResponse =
    await context.mutations.apiFetchLabelsSwift(context, input);
  console.log("apiFetchLabelsSwiftResponse", apiFetchLabelsSwiftResponse);
  if (apiFetchLabelsSwiftResponse?.error) {
    return {
      code: apiFetchLabelsSwiftResponse?.error?.statusCode,
      status: apiFetchLabelsSwiftResponse?.error?.name,
      message: apiFetchLabelsSwiftResponse?.error?.message,
    };
  } else {
    return {
      code: apiFetchLabelsSwiftResponse?.statusCode,
      status: apiFetchLabelsSwiftResponse?.name,
      message: apiFetchLabelsSwiftResponse?.message,
    };
  }
}
