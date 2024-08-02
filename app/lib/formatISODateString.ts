export function formatISODateString(isoDateString: string) {
  const date: Date = new Date(isoDateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate: string = date.toLocaleDateString("en-US", options);

  return formattedDate;
}
