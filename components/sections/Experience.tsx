'use client'

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-indigo-200 dark:bg-indigo-800" />

          {/* Experience Item */}
          <div className="relative flex flex-col md:flex-row md:justify-center mb-8">
            <div className="md:w-1/2 md:pr-8 md:text-right">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 ml-6 md:ml-0">
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-900" />

                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                  Tutor & Course Maker
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Code Ninjas</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">August 2024 – Present</p>

                <ul className="mt-4 text-gray-700 dark:text-gray-300 text-left space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Expanded a cybersecurity course from 2 hours to a comprehensive 12-hour interactive curriculum
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Currently developing an AI course for students
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Lead and facilitate various coding clubs
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Tutor students on debugging, 2D arrays, JavaScript, and other programming concepts
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Head Maker of Cyber Security program
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

