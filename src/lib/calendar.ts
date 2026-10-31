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
