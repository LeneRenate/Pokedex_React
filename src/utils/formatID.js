export default function formatID(id) {
  return "#" + String(id).padStart(4, "0");
}
