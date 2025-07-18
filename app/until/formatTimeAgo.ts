export default function formatTimeAgo(dateString: string): string {
  const updatedTime = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - updatedTime.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays >= 1) return `${diffDays} ngày trước`;
  if (diffHours >= 1) return `${diffHours} giờ trước`;
  if (diffMinutes >= 1) return `${diffMinutes} phút trước`;
  return "Vừa xong";
}
