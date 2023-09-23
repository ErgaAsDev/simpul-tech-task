export const currentTime = new Date()
  .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  .split(".")
  .join(":");
