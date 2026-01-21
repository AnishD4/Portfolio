'use client'

import { useState, useEffect } from 'react'

interface Project {
  title: string
  description: string
  tags: string[]
  details: string
  features?: string[]
  technologies?: string[]
  links?: { label: string; url: string }[]
}

const projects: Project[] = [
  {
    title: 'Minesweeper AI',
    description: 'Developed an AI using logical inference to solve Minesweeper puzzles automatically.',
    tags: ['AI', 'Python', 'Logic'],
    details: 'This project implements an AI agent that uses propositional logic and knowledge-based reasoning to solve Minesweeper puzzles. The AI maintains a knowledge base of safe cells and mines, making inferences to determine the safest moves.',
    features: [
      'Propositional logic for mine detection',
      'Knowledge base management',
      'Inference engine for safe cell identification',
      'Handles edge cases and ambiguous situations',
    ],
    technologies: ['Python', 'Logic Programming', 'AI Algorithms'],
    links: [
      { label: 'CS50 AI Course', url: 'https://cs50.harvard.edu/ai/' },
    ],
  },
  {
    title: 'Snake Reinforcement Learning Agent',
    description: 'Built a reinforcement learning agent that learns to play Snake through trial and error.',
    tags: ['Machine Learning', 'Python', 'RL'],
    details: 'A deep reinforcement learning project where an AI agent learns to play the classic Snake game. The agent uses Q-learning with a neural network to approximate the optimal policy, improving its performance over thousands of training episodes.',
    features: [
      'Deep Q-Network (DQN) implementation',
      'Experience replay buffer',
      'Epsilon-greedy exploration strategy',
      'Real-time training visualization',
    ],
    technologies: ['Python', 'PyTorch', 'Reinforcement Learning', 'Neural Networks'],
    links: [
      { label: 'PyTorch Documentation', url: 'https://pytorch.org/docs/' },
    ],
  },
  {
    title: 'A* Maze-Solving Agent',
    description: 'Implemented A* search algorithm to find optimal paths through complex mazes.',
    tags: ['Algorithms', 'Python', 'Pathfinding'],
    details: 'An implementation of the A* pathfinding algorithm that finds the shortest path through mazes. The project includes visualization of the search process and comparison with other algorithms like BFS and DFS.',
    features: [
      'A* search with Manhattan distance heuristic',
      'Visualization of node exploration',
      'Comparison with BFS, DFS, and Greedy search',
      'Support for custom maze generation',
    ],
    technologies: ['Python', 'Algorithm Design', 'Data Structures'],
    links: [
      { label: 'A* Algorithm Explained', url: 'https://en.wikipedia.org/wiki/A*_search_algorithm' },
    ],
  },
  {
    title: 'Clash Royale Facial Recognition',
    description: 'Created facial recognition software that matches faces to emotes in Clash Royale.',
    tags: ['Computer Vision', 'Python', 'OpenCV'],
    details: 'A fun computer vision project that uses facial landmark detection to analyze facial expressions and match them to corresponding Clash Royale emotes. Uses OpenCV and dlib for face detection and feature extraction.',
    features: [
      'Real-time facial landmark detection',
      'Expression classification',
      'Emote matching algorithm',
      'Webcam integration',
    ],
    technologies: ['Python', 'OpenCV', 'dlib', 'Machine Learning'],
    links: [
      { label: 'OpenCV Documentation', url: 'https://docs.opencv.org/' },
      { label: 'Clash Royale', url: 'https://clashroyale.com/' },
    ],
  },
  {
    title: 'CS50 Machine Learning Projects',
    description: 'Completed multiple projects involving inference and pattern recognition.',
    tags: ['ML', 'Python', 'Harvard CS50'],
    details: 'A collection of machine learning projects completed as part of Harvard CS50 AI curriculum. Projects include traffic sign recognition, shopping behavior prediction, and natural language processing tasks.',
    features: [
      'Traffic sign classification with CNNs',
      'Shopping behavior prediction',
      'Natural language processing',
      'Bayesian inference models',
    ],
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'NLP'],
    links: [
      { label: 'CS50 AI Course', url: 'https://cs50.harvard.edu/ai/' },
      { label: 'Harvard Online', url: 'https://www.harvardonline.harvard.edu/' },
    ],
  },
  {
    title: 'AKKA Website',
    description: 'Built a website for a developing company during an internship.',
    tags: ['Web Dev', 'React', 'Internship'],
    details: 'During my internship at AKKA, I developed a professional website for the company. The project involved working with stakeholders to understand requirements, designing the UI/UX, and implementing a responsive, modern web application.',
    features: [
      'Responsive design for all devices',
      'Modern UI/UX design',
      'Contact form integration',
      'SEO optimization',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
  },
  {
    title: 'Step Up Loudoun',
    description: 'Developed a website to support student mental health and initiated a tray recycling project.',
    tags: ['Web Dev', 'Community', 'Mental Health'],
    details: 'Step Up Loudoun is a community initiative focused on student mental health awareness and environmental sustainability. I developed the website and led a tray recycling project at local schools to reduce waste.',
    features: [
      'Mental health resources and information',
      'Event calendar for community activities',
      'Recycling initiative tracking',
      'Student testimonials and stories',
    ],
    technologies: ['Web Development', 'Community Outreach', 'Project Management'],
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    if (selectedProject) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-100 dark:border-gray-600 text-left hover:scale-[1.02] hover:border-indigo-300 dark:hover:border-indigo-600 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-indigo-600 dark:text-indigo-400">
                Click for details
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-between items-center">
              <h3 id="modal-title" className="text-xl font-bold text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-4 space-y-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Overview</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedProject.details}
                </p>
              </div>

              {/* Features */}
              {selectedProject.features && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {selectedProject.technologies && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {selectedProject.links && selectedProject.links.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Related Links</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm transition-colors"
                      >
                        {link.label}
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full py-2 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

