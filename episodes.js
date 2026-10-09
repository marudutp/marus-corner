// MARUS PODCAST EPISODES - ADMIN V5 APPEND FIX
// Generated: 2026-10-09T03:21:22.504Z
// Total Episodes: 2
// Source Merge: DEFAULT(5) => MERGED 1
// FIX: This file now includes ALL episodes, never replaces

window.MARUS_EPISODES = [
  {
    "id": "ep_1791516072032_3dys",
    "number": 1,
    "title": "Menaklukkan Geografi Mustahil Belasan Ribu Pulau",
    "duration": "25:20",
    "filename": "Menaklukkan_Geografi_Mustahil_Belasan_Ribu_Pulau.m4a",
    "size": "46.7 MB"
  },
  {
    "id": "ep01",
    "number": 2,
    "title": "Melepas Ransel Batu",
    "duration": "19:44",
    "filename": "melepas-ransel-batu.mp3"
  }
];

try {
  localStorage.setItem('marus_podcasts', JSON.stringify(window.MARUS_EPISODES));
  console.log('[MARUS] Saved', window.MARUS_EPISODES.length, 'episodes to localStorage');
} catch(e) {
  console.warn('[MARUS] localStorage save failed', e);
}

// For ES module compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.MARUS_EPISODES;
}
