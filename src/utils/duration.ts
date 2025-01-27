export function convertToMinutes(duration: string): number {
  const hoursMatch = duration.match(/(\d+)\s*hours?/i);
  const minutesMatch = duration.match(/(\d+)\s*min(ute)?s?/i);
  
  let totalMinutes = 0;
  
  if (hoursMatch) {
    totalMinutes += parseInt(hoursMatch[1]) * 60;
  }
  
  if (minutesMatch) {
    totalMinutes += parseInt(minutesMatch[1]);
  }
  
  return totalMinutes;
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  return `${hours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}`;
}
