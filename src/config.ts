export const config = {
  name: 'Hookah Kinss',
  tagline: 'Bar & Tabacaria',
  whatsappDigits: '11976151158',
  phoneDisplay: '(11) 976151158 ',
  instagram: 'hookahkins',
  address: 'Av. Analice Sakatauskas, 414',
  city: 'Osasco · SP',
  hours: 'Seg a Seg · a partir das 14h',
} as const

export const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Hookah Kinss, Av. Analice Sakatauskas, 414, Osasco SP')

export const wa = (msg: string) =>
  `https://wa.me/55${config.whatsappDigits}?text=${encodeURIComponent(msg)}`

export const ig = `https://instagram.com/${config.instagram}`

export const ifoodUrl =
  'https://www.ifood.com.br/delivery/osasco-sp/hookah-kins-bela-vista/8d46c8e8-1b4a-4d5d-a086-68611786f59e?UTM_Medium=share'
