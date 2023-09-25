import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiParcelProofOfDeliverySwift(
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
  const apiParcelProofOfDeliverySwiftResponse =
    await context.queries.apiParcelProofOfDeliverySwift(context, input);
  //   console.log(
  //     "apiParcelProofOfDeliverySwiftResponse",
  //     apiParcelProofOfDeliverySwiftResponse
  //   );
  if (apiParcelProofOfDeliverySwiftResponse) {
    return apiParcelProofOfDeliverySwiftResponse;
  } else {
    return null;
  }
}
