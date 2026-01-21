'use client'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'JavaScript (React)', 'HTML', 'C++'],
  },
  {
    title: 'Technologies & Tools',
    skills: ['Arduinos', 'VEX', 'FRC', 'Cyber Security', 'CISCO'],
  },
  {
    title: 'Development Tools',
    skills: ['Eclipse', 'IntelliJ', 'Visual Studios', 'OnShape', 'Desmos', 'Scratch', 'Google Sheets', 'Canva'],
  },
  {
    title: 'Cybersecurity Tools',
    skills: ['Wireshark', 'BurpSuite', 'Hashcat'],
  },
  {
    title: 'AI & Productivity',
    skills: ['ChatGPT', 'Gemini', 'CoPilot', 'DeepSeek', 'Perplexity'],
  },
  {
    title: 'Math & Science',
    skills: ['Algebra 2/Trigonometry', 'Physics', 'Biology', 'Computer Science'],
  },
  {
    title: 'Lab Skills',
    skills: ['Microscopy', 'Data Recording & Analysis', 'Conclusions'],
  },
  {
    title: 'Operating Systems',
    skills: ['Linux Mint', 'Ubuntu', 'Windows'],
  },
  {
    title: 'Soft Skills',
    skills: ['Public Speaking', 'Leadership', 'Communication', 'Team Organization'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded text-sm border border-gray-200 dark:border-gray-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

