'use client'

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                Lightridge High School
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Academies of Loudoun</p>
            </div>
            <div className="mt-2 md:mt-0 text-right">
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                4.39 / 4.2 GPA
              </span>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Expected Graduation: 2028</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'AP Computer Science',
                'AP Biology',
                'AP Pre-Calculus',
                'Robotics',
                'Computer Science 1',
                'Physics',
                'Algebra 2/Trigonometry/Pre-Calculus',
                'Research Biology',
              ].map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Standardized Tests</h4>
            <p className="text-gray-600 dark:text-gray-400">
              PSAT (8/9): <strong>1330/1440</strong> (720 Math, 610 Reading & Writing)
            </p>
          </div>

          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Intended Major:</strong> Computer Science
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

