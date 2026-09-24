/**
 * Data Informasi Resmi TPMB ANNISA LL
 * Tempat Praktik Mandiri Bidan Annisa LL
 * Sahabat Terbaik Ibu & Buah Hati
 */

export const clinicInfo = {
  name: "TPMB ANNISA LL",
  subtitle: "Sahabat Ibu & Buah Hati",
  legalName: "Tempat Praktik Mandiri Bidan (TPMB) Annisa LL",
  licenseNumber: "503/SIPB-449/IBI/2023",
  accreditation: "Terakreditasi Paripurna & Mitra Resmi IBI",
  phone: "085156167918",
  phoneFormatted: "(0851) 5616-7918",
  whatsapp: "6285156167918",
  hotline: "0812-GENTLE-CARE",
  address: "Jl. Melati Harapan No. 42, Kebayoran Baru, Jakarta Selatan (Dekat Taman Melati Asri)",
  mapsQuery: "https://maps.google.com/?q=Kebayoran+Baru+Jakarta+Selatan",
  heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9vbmBP_3JtX-pt6ENyOgf68LdiLGleXhMbMzZwSe8XZFvPBjb1mpt4my4etv3RAwtr54UD_-s1vxLN3dqi74E6h0MnWRh20rB18lWN-G3alw9tf9TQMmmcgs2xXnheSrJVOJ4PCmXzzw6WLNHAbjS8ttIVYvmM5nbdPL9DJZYqWtk-7VswXYoCnU7Q4k3Ray6pzOCH61fPPzjYG1CuvCtolwiDMZkGn2NRFJ7GP_EJ51hlWkV9NCUSw",
  logoUrl: "https://lh3.googleusercontent.com/aida/AEtjO1VT9GrqdupOf-ekW-2EyE7gWQOLF0Hfs3bzZLSaUORBUj84CrOyxSl-lYl5LEig1R2PcZ3i562QZRqb01ubz6Z5AyYjjFD9tgg4uQBdTqY-8TCd89fFNT7OOfTHydW4ng-DW_qQhtwXMsCG1tVJ8L57zZQ6yh9kx0MZMuZPXDKvMbg1LkqDtWRkE6wFLtnZkQ0LvbNrfcGy609gNjzr5Wf6qdKEZI6Q4N3MbhWR9M3qSausux61JFAWHXSr",
  hours: [
    { service: "Poli ANC & USG", time: "Senin - Minggu (08.00 - 20.00 WIB)", isHighlight: false },
    { service: "Persalinan & IGD Bidan", time: "24 Jam Non-Stop", isHighlight: true },
    { service: "Imunisasi & MTBS Balita", time: "Senin - Sabtu (08.30 - 16.00 WIB)", isHighlight: false },
    { service: "Kunjungan Nifas Homecare", time: "Sesuai Janji Temu", isHighlight: false },
  ]
};

export const statsData = [
  {
    id: 1,
    icon: "family_history",
    value: "10+ Th",
    number: "10+ Th",
    label: "Dedikasi Kebidanan",
    description: "Mendampingi persalinan alami",
    color: "primary"
  },
  {
    id: 2,
    icon: "child_care",
    value: "5.000+",
    number: "5.000+",
    label: "Ibu & Bayi Bahagia",
    description: "Persalinan nyaman & gentle birth",
    color: "secondary"
  },
  {
    id: 3,
    icon: "workspace_premium",
    value: "100%",
    number: "100%",
    label: "Bidan Bersertifikasi IBI",
    description: "S.Tr.Keb & Bdn berpengalaman",
    color: "tertiary"
  },
  {
    id: 4,
    icon: "health_and_safety",
    value: "BPJS",
    number: "BPJS",
    label: "Mitra Faskes Resmi",
    description: "Klaim asuransi mudah & transparan",
    color: "primary"
  }
];

export const highlights = statsData;
export const highlightsData = statsData;

export const servicesData = [
  {
    id: "kehamilan",
    name: "Kehamilan",
    title: "Pemeriksaan Kehamilan (ANC)",
    tag: "Rutin Kehamilan",
    icon: "pregnant_woman",
    category: "Maternal",
    shortDesc: "Pemantauan detak jantung janin (Doppler), tensi darah berkala, skrining laboratorium rutin, dan konseling gizi nutrisi ibu hamil secara terpadu.",
    fullDesc: "Program Antenatal Care (ANC) terpadu berstandar 10T Kemenkes. Dilengkapi USG screening, cek lab rutin darah dan urin, pengukuran tinggi fundus uteri, suplementasi zat besi & asam folat, serta deteksi dini resiko tinggi kehamilan dengan pendekatan ramah emosional ibu.",
    features: [
      "Pemeriksaan detak jantung janin (Doppler digital)",
      "Pengukuran tensi darah, berat badan, & lingkar lengan",
      "Pemeriksaan laboratorium penunjang ANC terpadu",
      "Konseling gizi seimbang masa kehamilan per trimester"
    ],
    badgeColor: "bg-surface-container-high text-on-surface-variant",
    iconBg: "bg-primary-fixed text-primary",
    btnColor: "text-primary"
  },
  {
    id: "persalinan",
    name: "Persalinan",
    title: "Persalinan Nyaman & Gentle Birth",
    tag: "Prioritas Utama",
    icon: "water",
    category: "Maternal",
    shortDesc: "Metode gentle birth alami, opsi relaksasi aromaterapi, pendampingan doula atau bidan 1-on-1, serta terapi hypnobirthing untuk minim nyeri.",
    fullDesc: "Pelayanan persalinan 24 jam dengan filosofi Gentle Birth. Kami memfasilitasi persalinan alami tanpa intervensi yang tidak perlu, kebebasan memilih posisi melahirkan, pemotongan tali pusat secara gentle (lotus/delayed cord clamping), dan Inisiasi Menyusu Dini (IMD) segera setelah lahir.",
    features: [
      "Ruang bersalin privat beraroma terapeutik",
      "Fasilitas birth ball, peanut ball, & rebozo massage",
      "Pendampingan penuh suami & keluarga tercinta",
      "Siaga 24 jam oleh tim bidan terampil & dokter Sp.OG rekanan"
    ],
    badgeColor: "bg-secondary-container text-on-secondary-container",
    iconBg: "bg-secondary-fixed text-secondary",
    btnColor: "text-secondary"
  },
  {
    id: "nifas",
    name: "Nifas",
    title: "Perawatan Ibu Pascasalin (Nifas)",
    tag: "Pemulihan Bunda",
    icon: "favorite",
    category: "Maternal",
    shortDesc: "Pemantauan involusi rahim, pengeluaran lochea, perawatan luka perineum/SC, serta edukasi pemulihan stamina mental dan fisik ibu nifas.",
    fullDesc: "Masa nifas (puerperium) adalah periode krusial pemulihan bunda. Bidan kami mendampingi pemeriksaan fisik berkala (TTV, TFU, perineum), evaluasi tanda bahaya masa nifas, konseling 'baby blues', serta asuhan pijat relaksasi pascasalin.",
    features: [
      "Pemeriksaan klinis masa nifas KF 1, KF 2, KF 3 & KF 4",
      "Perawatan higienis & evaluasi luka jahitan perineum",
      "Pemberian kapsul Vitamin A & tablet tambah darah nifas",
      "Konseling psikologis pencegahan depresi pascamelahirkan"
    ],
    badgeColor: "bg-primary-fixed text-on-primary-fixed-variant",
    iconBg: "bg-primary-fixed text-primary",
    btnColor: "text-primary"
  },
  {
    id: "bayi-baru-lahir",
    name: "Bayi baru lahir",
    title: "Asuhan Bayi Baru Lahir (Neonatus)",
    tag: "Neonatus Sehat",
    icon: "child_friendly",
    category: "Anak",
    shortDesc: "Pemeriksaan vital bayi, suntik Vitamin K1, salep mata antibiotik profilaksis, imunisasi Hepatitis B0, dan perawatan tali pusat steril.",
    fullDesc: "Asuhan esensial bayi baru lahir berstandar medis tinggi. Meliputi penilaian APGAR score, menjaga kehangatan bayi (Kangaroo Mother Care), skrining kelainan kongenital dini, serta bimbingan kepada orang tua baru dalam memandikan dan merawat si kecil.",
    features: [
      "Inisiasi Menyusu Dini (IMD) skin-to-skin contact",
      "Pencegahan infeksi & hipotermia pada neonatus",
      "Injeksi Vit K1 & Imunisasi Hepatitis B (HB0)",
      "Edukasi perawatan tali pusat bersih dan kering"
    ],
    badgeColor: "bg-secondary-container text-on-secondary-container",
    iconBg: "bg-secondary-fixed text-secondary",
    btnColor: "text-secondary"
  },
  {
    id: "imunisasi-tumbuh-kembang",
    name: "Imunisasi dan tumbuh kembang anak",
    title: "Imunisasi & Tumbuh Kembang Anak",
    tag: "Kesehatan Anak",
    icon: "vaccines",
    category: "Anak",
    shortDesc: "Vaksinasi wajib dasar & lanjutan lengkap rekomendasi IDAI, pemantauan kurva KMS WHO, serta konsultasi stimulasi sensorik dan motorik anak.",
    fullDesc: "Layanan imunisasi komprehensif dengan rantai dingin (cold chain vaccine) bersertifikasi untuk menjaga potensi vaksin. Kami juga menyediakan evaluasi rutin buku KIA/KMS untuk mendeteksi stunting atau keterlambatan milestone bicara/motorik.",
    features: [
      "Vaksin wajib: BCG, Polio, DPT-HB-Hib, PCV, Rotavirus, Campak-Rubella",
      "Vaksin tambahan rekomendasi IDAI (Influenza, Varicella, dll)",
      "Pengukuran antropometri presisi (BB, TB/PB, Lingkar Kepala)",
      "Skrining perkembangan KPSP (Kuesioner Pra Skrining Perkembangan)"
    ],
    badgeColor: "bg-surface-container-high text-on-surface-variant",
    iconBg: "bg-secondary-fixed text-secondary",
    btnColor: "text-secondary"
  },
  {
    id: "mtbs",
    name: "Manajemen Terpadu Bayi dan Balita Sakit",
    title: "Manajemen Terpadu Bayi & Balita Sakit (MTBS)",
    tag: "Pediatrik Triage",
    icon: "medical_information",
    category: "Anak",
    shortDesc: "Pendekatan terpadu penanganan batuk, demam, diare, masalah telinga, dan malnutrisi pada balita sesuai panduan resmi Kemenkes & WHO.",
    fullDesc: "Layanan penanganan kuratif dan promotif bagi anak usia 0-5 tahun dengan algoritma MTBS terstandarisasi. Memastikan balita yang sakit mendapatkan terapi tepat sasaran tanpa penggunaan antibiotik berlebih, serta sistem rujukan sigap bila terdapat tanda bahaya umum.",
    features: [
      "Penilaian tanda bahaya umum pada balita sakit",
      "Manajemen dehidrasi pada diare & pemberian oralit/zinc",
      "Pemeriksaan infeksi pernapasan akut (ISPA)",
      "Pemberian edukasi home care bagi orang tua"
    ],
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    iconBg: "bg-tertiary-fixed text-tertiary",
    btnColor: "text-tertiary"
  },
  {
    id: "konseling-laktasi",
    name: "Konseling laktasi",
    title: "Konseling Laktasi & Pijat Oksitosin",
    tag: "ASI Sukses",
    icon: "support_agent",
    category: "Laktasi",
    shortDesc: "Solusi pelekatan tanpa nyeri, penanganan payudara bengkak/mastitis, pijat relaksasi oksitosin, dan manajemen ASI perah bagi ibu bekerja.",
    fullDesc: "Bimbingan langsung oleh konselor laktasi tersertifikasi IBI. Kami membantu mengurai hambatan menyusui seperti puting lecet/datar, bingung puting, suplai ASI yang dirasa kurang, serta teknik memerah dan menyimpan ASI eksklusif 6 bulan.",
    features: [
      "Bimbingan posisi dan perlekatan (latch-on) yang tepat",
      "Pijat stimulasi oksitosin & gentle breast massage",
      "Tindakan pelega saluran ASI tersumbat (clogged duct)",
      "Manajemen ASIP untuk ibu pekerja yang kembali ke kantor"
    ],
    badgeColor: "bg-primary-container/30 text-on-primary-fixed-variant",
    iconBg: "bg-primary-fixed text-primary",
    btnColor: "text-primary"
  },
  {
    id: "konseling-kb",
    name: "Konseling Keluarga Berencana (KB)",
    title: "Konseling & Pelayanan KB Berkualitas",
    tag: "Perencanaan Keluarga",
    icon: "family_restroom",
    category: "Reproduksi",
    shortDesc: "Pemasangan dan pelepasan IUD (Spiral), Implan/Susuk, KB Suntik 1 & 3 Bulan, Pil KB laktasi, dan konseling pemilihan kontrasepsi yang aman.",
    fullDesc: "Konsultasi ramah dan privat mengenai perencanaan jarak kehamilan yang aman bagi kesehatan bunda. Dilakukan oleh bidan bersertifikat CTU (Contraceptive Technology Update) dengan sterilisasi instrumen tingkat tinggi.",
    features: [
      "Pemasangan & pelepasan IUD (Copper T / Hormonal)",
      "Pemasangan & pelepasan Implan 1 atau 2 batang",
      "Suntik KB 1 Bulan & 3 Bulan (Aman untuk Busui)",
      "Pemeriksaan berkala benang IUD dan keluhan siklus KB"
    ],
    badgeColor: "bg-secondary-fixed text-on-secondary-fixed-variant",
    iconBg: "bg-secondary-fixed text-secondary",
    btnColor: "text-secondary"
  },
  {
    id: "konseling-reproduksi",
    name: "Konseling Dini Masalah Reproduksi",
    title: "Konseling Dini Masalah Reproduksi",
    tag: "Kesehatan Wanita",
    icon: "health_and_safety",
    category: "Reproduksi",
    shortDesc: "Skrining kesehatan pranikah (catin), konsultasi siklus haid tidak teratur, keputihan abnormal, infeksi saluran kemih, dan edukasi organ reproduksi.",
    fullDesc: "Ruang konsultasi aman dan nyaman bagi remaja putri, calon pengantin, hingga wanita usia subur untuk mendiskusikan berbagai keluhan reproduksi secara konfidensial dan ilmiah.",
    features: [
      "Pemeriksaan kesehatan calon pengantin (skrining anemia & TT catin)",
      "Edukasi higienitas organ kewanitaan & pencegahan infeksi",
      "Konseling gangguan siklus menstruasi & dismenore (nyeri haid)",
      "Deteksi dini tanda-tanda infeksi menular seksual (IMS)"
    ],
    badgeColor: "bg-surface-container-high text-on-surface-variant",
    iconBg: "bg-tertiary-fixed text-tertiary",
    btnColor: "text-tertiary"
  },
  {
    id: "perawatan-luka",
    name: "Perawatan Luka",
    title: "Perawatan Luka Medis & Pasca Bedah",
    tag: "Steril & Cepat Sembuh",
    icon: "healing",
    category: "Tindakan Medis",
    shortDesc: "Ganti balutan steril pasca operasi Caesar, perawatan luka jahitan robekan perineum, dan penanganan luka infeksi ringan dengan teknik modern dressing.",
    fullDesc: "Tindakan perawatan luka profesional dengan standar aseptic technique dan prinsip moist wound healing untuk mempercepat regenerasi epitel jaringan kulit, meminimalkan jaringan parut/bekas luka, dan mencegah infeksi sekunder.",
    features: [
      "Penggantian perban luka SC anti air (waterproof dressing)",
      "Pembersihan & disinfeksi luka jahitan episiotomi/perineum",
      "Angkat jahitan (hecting-off) steril dan minim rasa nyeri",
      "Edukasi nutrisi kaya protein pendukung penyembuhan jaringan"
    ],
    badgeColor: "bg-secondary-container text-on-secondary-container",
    iconBg: "bg-secondary-fixed text-secondary",
    btnColor: "text-secondary"
  },
  {
    id: "nebulizer-anak",
    name: "Nebulizer anak",
    title: "Terapi Nebulizer Balita Ramah Anak",
    tag: "Pernapasan Lega",
    icon: "air",
    category: "Anak",
    shortDesc: "Terapi inhalasi uap untuk mengencerkan dahak batuk, melegakan saluran napas balita, serta mengatasi sesak/mengi dengan suasana tidak menakutkan.",
    fullDesc: "Pelayanan nebulasi dengan alat modern silent compressor dan masker silikon pediatrik berkarakter lucu. Membantu si kecil bernapas plong saat terserang flu berat, bronkitis, atau serangan asma ringan di bawah observasi langsung bidan.",
    features: [
      "Pemberian obat bronkodilator & mukolitik sesuai dosis tepat",
      "Peralatan nebulizer steril one-patient-use / autoclavable",
      "Teknik fisioterapi dada (chest clapping) untuk pengeluaran dahak",
      "Lingkungan terapi yang menenangkan agar anak tidak menangis"
    ],
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    iconBg: "bg-primary-fixed text-primary",
    btnColor: "text-primary"
  }
];

export const facilitiesData = [
  {
    id: "ruang-bersalin",
    name: "Ruang Bersalin privat",
    category: "Maternity Suite",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqYQov56wixh0eC8s8lSnAwY8XHrSgtiDbFdCg7iLOoebPw1tf69TD4CySkiqcqJaC_5SRYHGhW2jggA7H_NgptSFnZHmtsO9ZCHXhgJjBqja0Q5rzrlr_AshMf9rmfmqtTHGXzk_tLkuOjybXUvdpd3wAyrqqAF-gpHEbH4woYEURhSLCCw9WK7WF5KQDHbEq9F5JwqB4TLZ90AbcJbw8ToZFWh6g_Wcqg4CPmp7yRD6mmgVu0ueilQ",
    shortDesc: "Dilengkapi birth ball, diffuser aromaterapi terapeutik, pencahayaan redup relaksasi, & sofa pendamping suami.",
    fullDesc: "Kamar bersalin yang dirancang khusus untuk mewujudkan Gentle Birth alami. Jauh dari suasana dingin rumah sakit, ruangan ini memiliki penerangan hangat yang dapat diredupkan, alunan musik binaural yang menenangkan, diffuser minyak esensial lavender alami, matras persalinan higienis, serta ruang gerak leluasa bagi ibu untuk berganti posisi bersalin.",
    highlights: ["Birth Ball & Peanut Ball", "Diffuser Aromaterapi Organik", "Sofa Istirahat Suami", "Pengatur Suhu & Lampu Redup"]
  },
  {
    id: "ruang-perawatan-nifas",
    name: "Ruang perawatan nifas privat",
    category: "Postpartum Room",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt2dFiXtxGcD0rRWbQ3s9Tvgkmjy-bq_7A9qNVy5p969whcKYuWEqMdKs0dFGLnOzcL4I1VCq2LuqF8NnuB4ja6AUyBYhibN2KWmDFW9oZ4jU9kDj2d2eKgwTl1NUiBYaWhDvye7pwglqaKVLJOKeDT5Ls6-P5H6Whk5ZckhUpDPFR_nXSWmDwmijZ-ReGh6J03R3rGjNBoLKv2Rk3cu9HYXTXO1LXoDxpVA2TpETttTT_icN9ffkJOQ",
    shortDesc: "Suasana hening privat untuk istirahat optimal ibu dan si kecil dengan fasilitas rooming-in ramah keluarga.",
    fullDesc: "Ruang pemulihan nifas satu pasien satu kamar (single private room) yang menjamin ketenangan istirahat bunda pascamelahirkan. Dilengkapi boks bayi ergonomis tepat di samping tempat tidur ibu (rooming-in), kamar mandi dalam yang bersih dan steril dengan air hangat, pendingin ruangan (AC), serta pendampingan laktasi 24 jam.",
    highlights: ["1 Pasien 1 Kamar Privat", "Fasilitas Rawat Gabung (Rooming-in)", "Kamar Mandi Dalam Air Hangat", "Bebas Jam Besuk Keluarga Inti"]
  },
  {
    id: "ruang-pemeriksaan",
    name: "Ruang pemeriksaan",
    category: "Diagnostic & Clinic",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB164gcoy_-J11m5DudQClhXq5e0ebt-Kc_rG2TfS4EmecOzvXmAyOjxe510RRFzsEFz40mJXJ3t5ScPZVavi1z6BsI0WYH980_FJrhR7d-LxHVI0SDYIVdV65PflG6dB85IxAI70poA72sqDSdtNzhOKit4MBUI4wCAaG2AiUmGKYbouTMZuu9NQaD-76a_RzV_L279U92mBlD_-0x4SnQDx9ByJXiTn5ewgjZE_TuGhyL5C0H0p5t_A",
    shortDesc: "Monitor layar besar resolusi tinggi agar calon ayah & ibu dapat menyaksikan gerakan si kecil dengan sangat jelas.",
    fullDesc: "Ruangan pemeriksaan antenatal dan kesehatan anak yang higienis, terang, dan berstandar dinas kesehatan. Dilengkapi USG modern berlayar monitor besar di dinding agar ayah dan ibu dapat menyaksikan gerak-gerik janin dengan bahagia, Doppler detak jantung janin nirkabel, bed periksa elektrik empuk, serta timbangan digital presisi bayi dan balita.",
    highlights: ["Monitor Layar Besar Pasien", "USG Live & Doppler Digital", "Bed Periksa Ginekologi Higienis", "Alat Autoclave Sterilisasi Medis"]
  },
  {
    id: "ruang-tunggu",
    name: "Ruang tunggu",
    category: "Welcoming Lounge",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfBB99t-k8P8zEszLwgMCzZXHWcoIoQx2JR-BJcFyg_bWe10I35NOsQ7OAIF60Uzhld6bYfsVjCLvIbhX6aZIFVm7xXq-PyLVIew88I_tA6_C3wpdwoIEWuQ4sLkT26QzzsVkryInwZEpQ3109RA4KQB0-q1SEThO4_Oo2WLsyLHMxFyTI6974pTjImdZivaDUo9FfkPj3F5qwwwaBwQOOvbxWdY0tqTAIeJ91T-ed3iWCbb3hGWMtvQ",
    shortDesc: "Lounge hangat bergaya homey dengan sofa nyaman, complimentary herbal tea bar, dan pojok baca ibu anak.",
    fullDesc: "Ruang tunggu yang didekorasi dengan nuansa kayu hangat dan sentuhan tanaman hijau alami untuk menghilangkan rasa tegang saat menunggu giliran periksa. Menyediakan teh herbal hangat ramah ibu hamil, air mineral kemasan, koneksi Wi-Fi berkecepatan tinggi, toilet bersih, serta pojok mainan edukatif mini yang aman untuk anak.",
    highlights: ["Sofa Empuk Estetik & Bersih", "Complimentary Lactation Tea Station", "Pojok Edukasi Buku KIA & Mainan", "AC Dingin & Wi-Fi Cepat Gratis"]
  }
];

export const midwivesData = [
  {
    id: "ratna-sari",
    name: "Bdn. Ratna Sari, S.Tr.Keb., Bdn.",
    role: "Bidan Utama & Praktisi Hypnobirthing",
    title: "Bidan Utama & Certified Hypnobirthing Practitioner",
    sipb: "503/412/IBI/2023",
    experience: "12 Th Pengalaman",
    image: "https://images.unsplash.com/photo-1594824813619-3549666c0d89?auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1594824813619-3549666c0d89?auto=format&fit=crop&w=600&q=80",
    specialties: ["Gentle Birth Alami", "Hypnobirthing", "Spinning Babies", "Asuhan Persalinan Normal (APN)"],
    bio: "Telah memfasilitasi lebih dari 2.000 persalinan alami ramah trauma. Berpengalaman dalam relaksasi maternal, gentle birth, dan penataan posisi janin optimal."
  },
  {
    id: "nurul-aulia",
    name: "Bdn. Nurul Aulia, S.Tr.Keb., Bdn.",
    role: "Konselor Laktasi & Spesialis Bayi",
    title: "Konselor Laktasi Tersertifikasi & Baby Care Specialist",
    sipb: "503/781/IBI/2023",
    experience: "8 Th Pengalaman",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    specialties: ["Konseling Laktasi", "Pijat Oksitosin & Bayi", "Asuhan Neonatus", "MTBS Balita"],
    bio: "Pakar dalam perlekatan menyusui bebas nyeri, penanganan mastitis, terapi relaksasi pijat bayi, dan stimulasi motorik emas 1.000 Hari Pertama Kehidupan (HPK)."
  },
  {
    id: "siti-rahmawati",
    name: "Bdn. Siti Rahmawati, Amd.Keb.",
    role: "Spesialis Senam Hamil & Nifas",
    title: "Spesialis Pemulihan Pasca Salin & Senam Hamil",
    sipb: "503/290/IBI/2023",
    experience: "10 Th Pengalaman",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    specialties: ["Prenatal Yoga", "Senam Kegel & Panggul", "Perawatan Luka Perineum", "Pelayanan KB CTU"],
    bio: "Instruktur prenatal yoga dan senam panggul bersertifikasi, berdedikasi membimbing bunda mempercepat pemulihan fisik dan kestabilan emosi pascamelahirkan."
  }
];

export const reviewsData = [
  {
    id: 1,
    name: "Khivi 48",
    role: "Gentle Birth Normal • Baby Arkan",
    serviceTag: "Gentle Birth",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    avatarInitial: "DK",
    avatarBg: "bg-primary-container text-on-primary",
    rating: 5,
    date: "12 Januari 2025",
    comment: "Alhamdulillah Bagus Pelayanannya, obat nya juga gk kalah sama dokter",
    quote: "Alhamdulillah Bagus Pelayanannya, obat nya juga gk kalah sama dokter"
  },
  {
    id: 2,
    name: "Bunda Maya & Ayah Wendy",
    role: "Pemeriksaan Kehamilan ANC & USG • Baby Kinara",
    serviceTag: "ANC & Doppler",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    avatarInitial: "MW",
    avatarBg: "bg-secondary-container text-on-secondary-container",
    rating: 5,
    date: "28 Desember 2024",
    comment: "Pemeriksaan ANC di TPMB Annisa LL penjelasannya sangat detail dan tidak buru-buru. Suasananya hangat sekali tidak seperti rumah sakit besar yang kaku. Ditambah sesi konseling laktasi pasca bersalin membuat saya semakin percaya diri memberikan ASI eksklusif.",
    quote: "Pemeriksaan ANC di TPMB Annisa LL penjelasannya sangat detail dan tidak buru-buru. Suasananya hangat sekali tidak seperti rumah sakit besar yang kaku. Ditambah sesi konseling laktasi pasca bersalin membuat saya semakin percaya diri memberikan ASI eksklusif."
  },
  {
    id: 3,
    name: "Bunda Siti Anisa",
    role: "Baby Care & Konseling Laktasi • Baby Rayyan",
    serviceTag: "Laktasi & Bayi",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    avatarInitial: "SA",
    avatarBg: "bg-tertiary-fixed text-tertiary",
    rating: 5,
    date: "5 Januari 2025",
    comment: "Pelayanan bayi baru lahir dan asuhan nifasnya luar biasa! Bayi saya yang tadinya sering kolik dan rewel di malam hari, setelah diedukasi posisi menyusui dan pijat bayi langsung tidur tenang. Ruang perawatannya bersih, higienis, dan bidannya sangat ramah.",
    quote: "Pelayanan bayi baru lahir dan asuhan nifasnya luar biasa! Bayi saya yang tadinya sering kolik dan rewel di malam hari, setelah diedukasi posisi menyusui dan pijat bayi langsung tidur tenang. Ruang perawatannya bersih, higienis, dan bidannya sangat ramah."
  },
  {
    id: 4,
    name: "Bunda Ratih & Ayah Dimas",
    role: "Persalinan & Rawat Nifas Privat • Baby Zayn",
    serviceTag: "Kamar Privat Nifas",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    avatarInitial: "RD",
    avatarBg: "bg-primary-container text-on-primary",
    rating: 5,
    date: "18 Februari 2025",
    comment: "Kamar rawat nifasnya privat sekali dan hening. Ayah bisa tidur nyaman di sofa bed pendamping. Bidan jaga datang secara berkala dengan senyuman dan sangat sabar mengajari cara memandikan bayi baru lahir.",
    quote: "Kamar rawat nifasnya privat sekali dan hening. Ayah bisa tidur nyaman di sofa bed pendamping. Bidan jaga datang secara berkala dengan senyuman dan sangat sabar mengajari cara memandikan bayi baru lahir."
  },
  {
    id: 5,
    name: "Bunda Clarissa Putri",
    role: "Imunisasi & Tumbuh Kembang • Baby Aluna",
    serviceTag: "Imunisasi Anak",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
    avatarInitial: "CP",
    avatarBg: "bg-secondary-container text-on-secondary-container",
    rating: 5,
    date: "2 Maret 2025",
    comment: "Imunisasi di sini bayinya tidak rewel karena bidannya sangat tenang dan punya teknik khusus mengalihkan perhatian. Penjelasan KIPI juga sangat jelas beserta penanganannya. Sangat direkomendasikan!",
    quote: "Imunisasi di sini bayinya tidak rewel karena bidannya sangat tenang dan punya teknik khusus mengalihkan perhatian. Penjelasan KIPI juga sangat jelas beserta penanganannya. Sangat direkomendasikan!"
  }
];

export const philosophyPillars = [
  {
    icon: "volunteer_activism",
    title: "Asuhan Penuh Kasih (Compassionate Care)",
    description: "Pendampingan personal tanpa intervensi yang tidak perlu, menenangkan kecemasan masa kehamilan hingga masa nifas.",
    bg: "bg-primary-container/30",
    color: "text-primary"
  },
  {
    icon: "cottage",
    title: "Lingkungan Hangat Seperti Rumah (Homey Clinic)",
    description: "Ruang bersalin beraroma herbal esensial, redup lembut, bebas tekanan, dan ramah kehadiran suami serta keluarga tercinta.",
    bg: "bg-secondary-container",
    color: "text-secondary"
  },
  {
    icon: "diversity_1",
    title: "Kemitraan Ibu & Keluarga (Family Empowerment)",
    description: "Edukasi pra-persalinan aktif bersama calon ayah untuk membangun kesiapan mental, teknik pernapasan, dan laktasi sukses.",
    bg: "bg-tertiary-fixed",
    color: "text-tertiary"
  }
];

// Convenient export aliases
export const clinic = clinicInfo;
export const stats = statsData;
export const services = servicesData;
export const midwives = midwivesData;
export const facilities = facilitiesData;
export const reviews = reviewsData;

