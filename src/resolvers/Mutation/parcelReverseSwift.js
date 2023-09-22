import ReactionError from "@reactioncommerce/reaction-error";

export default async function parcelReverseSwift(
  parent,
  { input },
  context,
  info
) {
  // console.log("input", input);
  //   if (context.user === undefined || context.user === null) {
  //     throw new ReactionError(
  //       "access-denied",
  //       "Unauthorized access. Please Login First"
  //     );
  //   }
  const parcelReverseSwiftResponse = await context.mutations.parcelReverseSwift(
    context,
    input
  );
  console.log("parcelReverseSwiftResponse", parcelReverseSwiftResponse);
  if (parcelReverseSwiftResponse.data) {
    return parcelReverseSwiftResponse.data[0];
  } else {
    throw new ReactionError("access-denied", `${parcelReverseSwiftResponse}`);
  }
  // if (parcelReverseSwiftResponse) {

  // }
}
