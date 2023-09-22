import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiGetCustomLabelUrlsSwift(
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
  const apiGetCustomLabelUrlsSwiftResponse =
    await context.mutations.apiGetCustomLabelUrlsSwift(context, input);
  console.log(
    "apiGetCustomLabelUrlsSwiftResponse",
    apiGetCustomLabelUrlsSwiftResponse
  );
  if (apiGetCustomLabelUrlsSwiftResponse?.error) {
    return {
      code: apiGetCustomLabelUrlsSwiftResponse?.error?.statusCode,
      status: apiGetCustomLabelUrlsSwiftResponse?.error?.name,
      message: apiGetCustomLabelUrlsSwiftResponse?.error?.message,
    };
  } else {
    return {
      code: apiGetCustomLabelUrlsSwiftResponse?.statusCode,
      status: apiGetCustomLabelUrlsSwiftResponse?.name,
      message: apiGetCustomLabelUrlsSwiftResponse?.message,
    };
  }
}
