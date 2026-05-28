export default function PortfolioWebsite() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans scroll-smooth">
      {/* Background Blur */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-500/10 blur-3xl rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-black/40 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            Fatih<span className="text-gray-400">.dev</span>
          </h1>

          <div className="hidden md:flex gap-6 text-gray-300 text-sm">
            <a href="#tentang" className="hover:text-white transition">Tentang</a>
            <a href="#skill" className="hover:text-white transition">Skill</a>
            <a href="#project" className="hover:text-white transition">Project</a>
            <a href="#prestasi" className="hover:text-white transition">Prestasi</a>
            <a href="#kontak" className="hover:text-white transition">Kontak</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-gray-400 mb-4 tracking-[0.2em] uppercase text-sm">
              Portfolio Website
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Muhammad
              <br />
              <span className="text-gray-400">Fatihul Farhan</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Seorang pengembang teknologi yang fokus pada pemrograman,
              networking, dan pengembangan aplikasi modern. Menyukai proses
              membangun ide menjadi project nyata yang fungsional dan menarik.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#project"
                className="px-7 py-3 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition duration-300"
              >
                Lihat Project
              </a>

              <a
                href="#kontak"
                className="px-7 py-3 border border-white/20 rounded-2xl hover:bg-white/10 transition"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-[3rem] opacity-40 group-hover:opacity-70 transition"></div>

              <div className="relative w-[320px] h-[420px] rounded-[3rem] overflow-hidden border border-white/10 bg-gray-900 shadow-2xl hover:-translate-y-2 transition duration-500">
                <img
                  src="https://in.pinterest.com/pin/1143492161667586650/"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-2xl font-bold">IT & Software Enthusiast</h2>
                  <p className="text-gray-300 text-sm mt-2">
                    Programming • Networking • Infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-500 mb-3 uppercase tracking-[0.2em] text-sm">
              Tentang Saya
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Membangun pengalaman digital yang modern dan elegan.
            </h2>
          </div>

          <div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Saya memiliki minat besar di bidang teknologi, khususnya
              pengembangan aplikasi, jaringan komputer, dan sistem digital.
              Terbiasa mengerjakan project berbasis desktop, web, maupun
              networking dengan pendekatan yang detail dan terstruktur.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skill" className="py-28 bg-white/[0.02] border-y border-white/5 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-500 uppercase tracking-[0.2em] text-sm mb-3">
              Kemampuan
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Skill & Teknologi
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Programming',
                desc: 'Python, PHP, PyQt5, JSON, Modular Programming',
              },
              {
                title: 'Networking',
                desc: 'Cisco Packet Tracer, Routing, Wireless Network, IP Addressing',
              },
              {
                title: 'Infrastructure',
                desc: 'Debian CLI, VirtualBox, Troubleshooting',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-[2rem] p-8 hover:border-white/30 hover:-translate-y-2 transition duration-500"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project */}
      <section id="project" className="max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-[0.2em] text-sm mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Project Pilihan
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Aplikasi Simulasi Antrian',
              desc: 'Aplikasi desktop modern berbasis PyQt5 dengan sistem VIP, dark mode, dan penyimpanan JSON.',
            },
            {
              title: 'Topologi Jaringan Asrama',
              desc: 'Project Cisco Packet Tracer dengan multi gedung, wireless infrastructure, dan server integration.',
            },
            {
              title: 'AI Generator Website',
              desc: 'Website berbasis FastAPI untuk menghasilkan konten AI dengan tampilan modern.',
            },
            {
              title: 'Mini Cloud VPS',
              desc: 'Setup Ubuntu Server menggunakan Docker, Nginx, monitoring, dan firewall.',
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 hover:bg-white/[0.05] hover:border-white/20 transition duration-500"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-1 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Prestasi */}
      <section id="prestasi" className="py-28 bg-white/[0.02] border-y border-white/5 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 uppercase tracking-[0.2em] text-sm mb-3">
            Achievement
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Prestasi
          </h2>

          <div className="bg-black border border-white/10 rounded-[2.5rem] p-10 hover:border-white/30 transition duration-500 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Juara II LKS IT Network Systems Administration
            </h3>

            <p className="text-gray-400 leading-relaxed text-lg">
              Berhasil meraih Juara II pada kompetisi LKS bidang IT Network
              Systems Administration tingkat Kabupaten Demak tahun 2023.
              Kompetisi meliputi konfigurasi jaringan, troubleshooting,
              administrasi sistem, dan penyelesaian studi kasus teknologi.
            </p>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="max-w-5xl mx-auto px-6 py-28 text-center">
        <p className="text-gray-500 uppercase tracking-[0.2em] text-sm mb-3">
          Kontak
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Mari membangun sesuatu yang keren bersama.
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Terbuka untuk kolaborasi project, freelance, maupun kesempatan kerja
          di bidang teknologi dan pengembangan sistem.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="fatihfarhan63@gmail.com"
            className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition"
          >
            Email
          </a>

          <a
            href="https://github.com/X1-Node"
            target="_blank"
            className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white/10 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/muhammad-fatihul-farhan"
            target="_blank"
            className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Muhammad Fatihul Farhan — Portfolio Website
      </footer>
    </div>
  )
}
