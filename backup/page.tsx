import Image from 'next/image';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm Ahsan
          </h1>
          <p className="text-xl text-gray-300">
            B.Tech Computer Science Student at MIT WPU
          </p>
          <p className="text-gray-400">
            Passionate developer specializing in C++, Java, HTML, and CSS. Currently in my 2nd year, looking for freelance opportunities.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/ahsan-imam-khan-9a0443328" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/khan_ahsan_8055" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['C++', 'Java', 'HTML', 'CSS'].map((skill) => (
            <div key={skill} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold">B.Tech in Computer Science</h3>
          <p className="text-gray-300">MIT World Peace University</p>
          <p className="text-gray-400">2nd Year Student</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-gray-300">Based in Patna</p>
          <p className="text-gray-300">Open to freelance opportunities</p>
          <div className="mt-4">
            <a href="mailto:your.email@example.com" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-block transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 