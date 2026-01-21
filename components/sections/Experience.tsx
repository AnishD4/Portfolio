'use client'

import { useState, useEffect } from 'react'

interface Experience {
  title: string
  company: string
  period: string
  description: string
  responsibilities: string[]
  skills: string[]
  details: string
  links?: { label: string; url: string }[]
}

const experiences: Experience[] = [
  {
    title: 'Tutor & Course Maker',
    company: 'Code Ninjas',
    period: 'August 2024 - Present',
    description: 'Teaching coding and cybersecurity to students while developing comprehensive curricula.',
    responsibilities: [
      'Expanded a cybersecurity course from 2 hours to a comprehensive 12-hour interactive curriculum',
      'Currently developing an AI course for students',
      'Lead and facilitate various coding clubs',
      'Tutor students on debugging, 2D arrays, JavaScript, and other programming concepts',
      'Head Maker of Cyber Security program',
    ],
    skills: ['Teaching', 'Curriculum Development', 'Cybersecurity', 'JavaScript', 'Python'],
    details: 'At Code Ninjas, I work as both a tutor and course developer. My primary focus has been expanding the cybersecurity curriculum from a brief 2-hour introduction to a comprehensive 12-hour interactive course that covers topics from basic security concepts to hands-on ethical hacking exercises. I also mentor students one-on-one, helping them understand complex programming concepts and debug their code.',
    links: [
      { label: 'Code Ninjas', url: 'https://www.codeninjas.com/' },
    ],
  },
]

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedExperience(null)
    }
    if (selectedExperience) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedExperience])

  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp) => (
            <button
              key={exp.title}
              onClick={() => setSelectedExperience(exp)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition-all hover:scale-[1.01] hover:border-indigo-300 dark:hover:border-indigo-600 border border-transparent cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{exp.company}</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-0">{exp.period}</p>
              </div>

              <p className="mt-3 text-gray-700 dark:text-gray-300">{exp.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded text-xs"
                  >
                    {skill}
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
      {selectedExperience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedExperience(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="exp-modal-title"
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-between items-center">
              <div>
                <h3 id="exp-modal-title" className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedExperience.title}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400">{selectedExperience.company}</p>
              </div>
              <button
                onClick={() => setSelectedExperience(null)}
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
              {/* Period */}
              <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                {selectedExperience.period}
              </div>

              {/* Overview */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Overview</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedExperience.details}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {selectedExperience.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {selectedExperience.links && selectedExperience.links.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Links</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedExperience.links.map((link) => (
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
                onClick={() => setSelectedExperience(null)}
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
