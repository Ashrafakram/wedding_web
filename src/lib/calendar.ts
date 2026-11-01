export function downloadWeddingCalendarEvent() {
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Swetha & Deepak Kumar Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:Swetha & Deepak Kumar Wedding Reception
DESCRIPTION:Reception of Swetha & Deepak Kumar at AVVS Mahal, Ammapet, Salem.
LOCATION:AVVS Mahal, 13 Military Rd, Ammapet, Salem, Tamil Nadu 636003
DTSTART:20261119T123000Z
DTEND:20261119T153000Z
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
BEGIN:VEVENT
SUMMARY:Swetha & Deepak Kumar Wedding Ceremony (Muhurtham)
DESCRIPTION:Wedding Ceremony & Muhurtham of Swetha & Deepak Kumar at Senraya Perumal Temple, Salem.
LOCATION:Senraya Perumal Temple, Odayapatti, Salem, Tamil Nadu
DTSTART:20261119T223000Z
DTEND:20261120T003000Z
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'Swetha_Deepak_Wedding_2026.ics')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}


export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent("Swetha & Deepak Kumar Wedding Celebration")
  const details = encodeURIComponent(
    "Join us to celebrate the wedding of Swetha & Deepak Kumar!\n\nDay 1 (19 Nov, 6:00 PM): Reception at AVVS Mahal, Ammapet, Salem\nDay 2 (20 Nov, 4:00 AM): Muhurtham at Senraya Perumal Temple, Salem"
  )
  const location = encodeURIComponent("AVVS Mahal, Ammapet, Salem & Senraya Perumal Temple, Salem")
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261119T123000Z/20261120T060000Z&details=${details}&location=${location}`
}
