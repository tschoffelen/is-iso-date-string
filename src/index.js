const isIsoDateString = (dateString) => {
  if (!dateString || typeof dateString !== "string") return false;

  if (dateString.includes("T")) {
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(dateString)) return false;
  } else {
    if (!/^\d{4}-\d{2}-\d{2}/.test(dateString)) return false;
  }

  const date = new Date(dateString);
  return (
    date instanceof Date &&
    !isNaN(date.getTime()) &&
    date.toISOString().startsWith(dateString.split('.')[0])
  );
};

module.exports = isIsoDateString;
