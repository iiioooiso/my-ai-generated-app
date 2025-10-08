import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const HomePage = () => (
  <div className="text-center p-8 bg-white rounded-lg shadow-md">
    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Hello, I'm John Doe</h1>
    <p className="text-xl text-gray-700 mb-6">A passionate Web Developer | Designer | Creator</p>
    <Link
      to="/projects"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
    >
      View My Work
    </Link>
  </div>
);

const AboutPage = () => (
  <div className="p-8 bg-white rounded-lg shadow-md">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-4">
      I am a frontend developer with a passion for building beautiful and functional web applications.
      With expertise in React, JavaScript, HTML, and CSS (including Tailwind CSS), I enjoy bringing ideas
      to life and solving complex problems with elegant solutions.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      My journey into web development started with a curiosity for how websites are made,
      and it quickly evolved into a full-blown career. I am constantly learning new technologies
      and improving my skills to deliver the best user experiences.
    </p>
  </div>
);

const ProjectsPage = () => (
  <div className="p-8 bg-white rounded-lg shadow-md">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project Alpha</h3>
        <p className="text-gray-600 mb-4">A responsive e-commerce platform built with React and Tailwind CSS.</p>
        <a href="#" className="text-blue-600 hover:underline font-medium">View Live</a>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project Beta</h3>
        <p className="text-gray-600 mb-4">A task management application with a clean, intuitive interface.</p>
        <a href="#" className="text-blue-600 hover:underline font-medium">View Live</a>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project Gamma</h3>
        <p className="text-gray-600 mb-4">Personal blog showcasing articles on web development topics.</p>
        <a href="#" className="text-blue-600 hover:underline font-medium">View Live</a>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="p-8 bg-white rounded-lg shadow-md">
    <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Me</h2>
    <p className="text-lg text-gray-700 mb-4">
      I'm always open to new opportunities and collaborations. Feel free to reach out!
    </p>
    <ul className="text-lg text-gray-700 space-y-2">
      <li>Email: <a href="mailto:john.doe@example.com" className="text-blue-600 hover:underline">john.doe@example.com</a></li>
      <li>LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/johndoe</a></li>
      <li>GitHub: <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/johndoe</a></li>
    </ul>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition duration-300">
            MyPortfolio
          </Link>
          <div className="space-x-6">
            <Link to="/" className="text-lg text-gray-700 hover:text-blue-600 transition duration-300">Home</Link>
            <Link to="/about" className="text-lg text-gray-700 hover:text-blue-600 transition duration-300">About</Link>
            <Link to="/projects" className="text-lg text-gray-700 hover:text-blue-600 transition duration-300">Projects</Link>
            <Link to="/contact" className="text-lg text-gray-700 hover:text-blue-600 transition duration-300">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto p-4 md:p-8 flex-grow flex items-center justify-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="bg-gray-800 text-white py-6 text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
