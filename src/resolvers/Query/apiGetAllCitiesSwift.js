import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiGetAllCitiesSwift(
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
  const apiGetAllCitiesSwiftResponse =
    await context.queries.apiGetAllCitiesSwift(context, input);
  console.log("apiGetAllCitiesSwiftResponse", apiGetAllCitiesSwiftResponse);
  if (apiGetAllCitiesSwiftResponse) {
    return apiGetAllCitiesSwiftResponse;
  } else {
    return null;
  }
}
