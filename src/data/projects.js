export const projectContent = {
  'password-manager-WEBextension': {
    title: {
      en: 'Aegis — Zero-Dependency Password Manager',
      tr: 'Aegis — Sıfır-Bağımlılıklı Parola Yöneticisi',
    },
    desc: {
      en: 'A Manifest V3 browser extension that encrypts and manages credentials entirely on the client side. Deliberately built with zero third-party libraries to minimize the attack surface; all cryptography is implemented through the browser\u2019s native Web Crypto API.',
      tr: 'Kimlik bilgilerini tamamen istemci tarafında şifreleyip yöneten bir Manifest V3 tarayıcı eklentisi. Saldırı yüzeyini en aza indirmek için bilinçli olarak sıfır üçüncü-taraf kütüphaneyle geliştirildi; tüm kriptografi tarayıcının yerel Web Crypto API\u2019si üzerinden uygulandı.',
    },
    tech: ['JavaScript', 'Web Crypto API', 'AES-GCM', 'PBKDF2', 'Manifest V3'],
  },
 
  'document-assistant-RAG': {
    title: {
      en: 'Themis — RAG Document Assistant',
      tr: 'Themis — RAG Belge Asistanı',
    },
    desc: {
      en: 'An assistant that answers questions from the user\u2019s own PDFs, shows the source passages each answer is grounded in, and refuses to respond when the documents don\u2019t support an answer. I built the pipeline end to end: boundary-aware chunking \u2192 embedding \u2192 vector similarity search \u2192 streamed generation, gated by a similarity threshold that triggers before the model is ever called.',
      tr: 'Kullanıcının kendi PDF\u2019lerinden soruları yanıtlayan, her cevabın dayandığı kaynak pasajları gösteren ve belgeler yetersiz kaldığında yanıt vermeyi reddeden bir asistan. Hattı uçtan uca kurdum: sınır-duyarlı parçalama \u2192 embedding \u2192 vektör benzerlik araması \u2192 akışlı üretim; modele gidilmeden önce devreye giren bir benzerlik-eşiği kapısıyla.',
    },
    tech: ['Next.js', 'TypeScript', 'PostgreSQL + pgvector', 'Ollama'],
  },
 
  'DoctorAppointment-BookingSystem': {
    title: {
      en: 'Hospital Appointment System',
      tr: 'Hastane Randevu Sistemi',
    },
    desc: {
      en: 'A full-stack web application with patient and doctor management, appointment scheduling, and a notification system.',
      tr: 'Hasta ve doktor yönetimi, randevu planlama ve bildirim sistemi içeren full-stack web uygulaması.',
    },
    tech: ['MERN', 'JWT Auth', 'Cloudinary', 'Vercel'],
  },
 
  FRAKTIA: {
    title: {
      en: 'FRAKTIA — Geolocation Game',
      tr: 'FRAKTIA — Coğrafi Konum Oyunu',
    },
    desc: {
      en: 'A detective-style geolocation game built on the MERN stack. Currently in development.',
      tr: 'MERN altyapısıyla geliştirilen dedektif tarzı bir coğrafi konum oyunu. Geliştirme aşamasında.',
    },
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
 
  'Portfolio-Website': {
    title: {
      en: 'Portfolio Site',
      tr: 'Portfolyo Sitesi',
    },
    desc: {
      en: 'A personal portfolio site that pulls its pinned projects live from the GitHub API.',
      tr: 'Pinlenmiş projeleri GitHub API üzerinden canlı çeken kişisel portfolyo sitesi.',
    },
    tech: ['React', 'Vite', 'CSS Modules', 'EmailJS', 'GitHub API'],
  },
 
  'algorithms-n-datastructes': {
    title: {
      en: 'Algorithms, Data Structures & Misc Projects',
      tr: 'Algoritmalar, Veri Yapıları & Çeşitli Projeler',
    },
    desc: {
      en: 'Projects and problems I worked through to reinforce the technologies I\u2019m learning. Hands-on work on stacks, queues, linked lists, trees and graphs; backtracking, dynamic programming and recursion. Research into software architecture and multi-agent AI by studying open-source repos like build-your-own-x and crewAI.',
      tr: 'Öğrendiğim teknolojileri pekiştirmek için geliştirdiğim projeler ve çözdüğüm problemler. Stack, queue, linked list, tree, graph; backtracking, dinamik programlama ve öz-yineleme üzerine uygulamalı çalışmalar. build-your-own-x ve crewAI gibi açık kaynak repolarını inceleyerek yazılım mimarisi ve çok-ajanlı YZ üzerine araştırmalar.',
    },
    tech: ['JavaScript', 'Algorithms', 'Data Structures'],
  },
}
 
