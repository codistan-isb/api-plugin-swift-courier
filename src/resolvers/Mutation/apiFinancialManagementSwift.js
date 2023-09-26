import ReactionError from "@reactioncommerce/reaction-error";

export default async function apiFinancialManagementSwift(
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
  const apiFinancialManagementSwiftResponse =
    await context.mutations.apiFinancialManagementSwift(context, input);
  console.log(
    "apiFinancialManagementSwiftResponse",
    apiFinancialManagementSwiftResponse
  );
  if (apiFinancialManagementSwiftResponse) {
    return apiFinancialManagementSwiftResponse;
  } else {
    return null;
  }
}
