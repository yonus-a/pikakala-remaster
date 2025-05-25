export default function fixTime(date: string) {
  return new Date(`${date} ${new Date().toTimeString()}`);
}
