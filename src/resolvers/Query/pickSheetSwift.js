import ReactionError from "@reactioncommerce/reaction-error";

export default async function pickSheetSwift(parent, { input }, context, info) {
  // console.log("input", input);
  if (context.user === undefined || context.user === null) {
    throw new ReactionError(
      "access-denied",
      "Unauthorized access. Please Login First"
    );
  }
  const pickSheetSwiftResponse = await context.queries.pickSheetSwift(
    context,
    input
  );
  console.log("pickSheetSwiftResponse", pickSheetSwiftResponse);
  //   if (pickSheetSwiftResponse) {
  //     return apiUploadSwiftResponse.data[0];
  //   } else {
  //     return null;
  //   }
}
