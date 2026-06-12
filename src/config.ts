export const config = {
  name: 'Hookah Kinss',
  tagline: 'Bar & Tabacaria',
  whatsappDigits: 'SEUWHATSAPP', // só números com DDD: ex. 11999998888
  phoneDisplay: '(11) 0000-0000',
  instagram: 'hookahkins',
  address: 'Av. Analice Sakatauskas, 414',
  city: 'Osasco · SP',
  hours: 'Qui a Dom · a partir das 19h',
} as const

export const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Hookah Kinss, Av. Analice Sakatauskas, 414, Osasco SP')

export const wa = (msg: string) =>
  `https://wa.me/55${config.whatsappDigits}?text=${encodeURIComponent(msg)}`

export const ig = `https://instagram.com/${config.instagram}`
