import Image from 'next/image';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi I'm <br />
            <span className="text-blue-500">Ahsan</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Greetings! I'm a passionate Computer Science student at MIT World Peace University, currently in my 2nd year. 
            I specialize in C++, Java, and web development technologies. Looking to bring innovative solutions to life through code!
          </p>
          <div className="flex space-x-6 mb-12">
            <a href="https://www.linkedin.com/in/ahsan-imam-khan-9a0443328" target="_blank" rel="noopener noreferrer" 
              className="text-3xl hover:text-blue-500 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/khan_ahsan_8055" target="_blank" rel="noopener noreferrer" 
              className="text-3xl hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="mailto:your.email@example.com" 
              className="text-3xl hover:text-yellow-500 transition-colors">
              <MdEmail />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-center transition-colors">
              Contact Me
            </a>
            <a href="#skills" className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg text-center transition-colors">
              My Skills
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'C++', level: 'Advanced' },
              { name: 'Java', level: 'Intermediate' },
              { name: 'HTML', level: 'Intermediate' },
              { name: 'CSS', level: 'Intermediate' },
            ].map((skill) => (
              <div key={skill.name} 
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">B.Tech in Computer Science</h3>
            <p className="text-xl text-gray-300 mb-2">MIT World Peace University</p>
            <p className="text-gray-400">2nd Year Student</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Contact Me</h2>
          <div className="bg-gray-800 p-8 rounded-lg">
            <p className="text-xl text-gray-300 mb-6">
              Currently based in Patna, looking for freelance opportunities and exciting projects.
            </p>
            <div className="flex flex-col space-y-4">
              <a href="https://www.linkedin.com/in/ahsan-imam-khan-9a0443328" target="_blank" rel="noopener noreferrer" 
                className="flex items-center text-blue-500 hover:text-blue-400">
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              <a href="https://www.instagram.com/khan_ahsan_8055" target="_blank" rel="noopener noreferrer" 
                className="flex items-center text-pink-500 hover:text-pink-400">
                <FaInstagram className="mr-2" /> Instagram
              </a>
              <a href="mailto:your.email@example.com" 
                className="flex items-center text-yellow-500 hover:text-yellow-400">
                <MdEmail className="mr-2" /> Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 