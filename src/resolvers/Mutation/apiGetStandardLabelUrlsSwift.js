import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiGetStandardLabelUrlsSwift(
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
  const apiGetStandardLabelUrlsSwiftResponse =
    await context.mutations.apiGetStandardLabelUrlsSwift(context, input);
  console.log(
    "apiGetStandardLabelUrlsSwiftResponse",
    apiGetStandardLabelUrlsSwiftResponse
  );
  if (apiGetStandardLabelUrlsSwiftResponse?.error) {
    return {
      code: apiGetStandardLabelUrlsSwiftResponse?.error?.statusCode,
      status: apiGetStandardLabelUrlsSwiftResponse?.error?.name,
      message: apiGetStandardLabelUrlsSwiftResponse?.error?.message,
    };
  } else {
    return {
      code: apiGetStandardLabelUrlsSwiftResponse?.statusCode,
      status: apiGetStandardLabelUrlsSwiftResponse?.name,
      message: apiGetStandardLabelUrlsSwiftResponse?.message,
    };
  }
}
