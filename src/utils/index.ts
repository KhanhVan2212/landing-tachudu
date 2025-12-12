export const formatNumber = (amount: any) => {
  return new Intl.NumberFormat("en-US", { maximumSignificantDigits: 6 }).format(
    parseFloat(amount) || 0
  );
};

export function cleanObject(obj: any) {
  const cleaned: any = {};
  for (const key in obj) {
    const value = obj[key];
    if (
      value !== null &&
      value !== undefined &&
      !(typeof value === "number" && isNaN(value)) &&
      value !== "" &&
      value !== "invalid" // Add other rules here
    ) {
      cleaned[key] = value;
    }
  }
  return cleaned;
}

export function capitalize(str: string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
