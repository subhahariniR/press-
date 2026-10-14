// ===== EDIT HERE: asset paths (files live in /public) =====
export const VIDEO_MP4 = '/media/intro.mp4';
export const VIDEO_WEBM = '/media/intro.webm';
export const VIDEO_POSTER = '/media/poster.jpg';

export const CLUB = {
  name: 'DHARAPURAM PRESS CLUB',
  tamil: 'தாராபுரம் பத்திரிகையாளர் மன்றம்',
  tagline: 'VOICE OF PEOPLE | FOR A BETTER DHARAPURAM',
};

// ===== EDIT HERE: reporters =====
// logo: drop the official logo in /public/logos and keep the filename below.
// photo: optional, only add with permission, e.g. '/reporters/thivakar.jpg'
export const REPORTERS = [
  { id: 'thivakar', name: 'Thivakar', org: 'Sun TV', phone: '9688271723', logo: '/logos/sun-tv.png', photo: null },
  { id: 'saravanan', name: 'Saravanan', org: 'Puthiya Thalaimurai', phone: '98427 27534', logo: '/logos/puthiya-thalaimurai.png', photo: null },
  { id: 'murugesh', name: 'Murugesh', org: 'Galatta Media', phone: '9965050502', logo: '/logos/galatta-media.png', photo: null },
  { id: 'karunanidhi', name: 'Karunanidhi', org: 'Vasanth TV', phone: '9843578880', logo: '/logos/vasanth-tv.png', photo: null },
];

// ===== EDIT HERE: placeholders – replace with real club information =====
export const ABOUT_TEXT =
  'Add a short description of the Dharapuram Press Club here: when it was formed, who it serves and what it stands for.';
export const NEWS_ITEMS = [
  { id: 1, date: 'Add date', title: 'Activity title goes here', text: 'Short summary of a club activity or event.' },
  { id: 2, date: 'Add date', title: 'Activity title goes here', text: 'Short summary of a club activity or event.' },
  { id: 3, date: 'Add date', title: 'Activity title goes here', text: 'Short summary of a club activity or event.' },
];
export const GALLERY = [
  // { src: '/gallery/photo1.jpg', alt: 'Describe the photo' },
];
export const ANNOUNCEMENTS = [
  { id: 1, date: 'Add date', title: 'Press release or announcement title', text: 'Details of the announcement.' },
  { id: 2, date: 'Add date', title: 'Press release or announcement title', text: 'Details of the announcement.' },
];
export const CONTACT = {
  email: '',   // e.g. 'press@example.com'
  address: '', // add the official address
  whatsappGroup: '',
};
export const SOCIALS = [
  // { label: 'Facebook', href: 'https://facebook.com/yourpage' },
  // { label: 'YouTube', href: 'https://youtube.com/@yourchannel' },
];
