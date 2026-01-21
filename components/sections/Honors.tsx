'use client'

const honors = [
  'Presidential Award (Middle School & Elementary School)',
  'Writing Published in Young Writers\' Anthology',
  'National Latin Exam Magna Cum Laude Award',
  '2nd Place, School MathCounts',
  'Chapter MathCounts Team 2nd Place',
  '2nd Place, GoSTEM Chemistry Competition (TJHSST Hosted)',
  'Completed MIT CubeSat Course',
  'Completed MIT AI & Quantum Computing Courses',
  'Completed Robotics & Arduinos Camp',
  '1st Place, School-wide AMC 8 Competition',
  '8th & 9th Grade Honor Roll',
  'Principal\'s List (5th Grade)',
]

const hobbies = [
  'Leetcode',
  'Code Forces',
  'National Cyber League',
  'PicoCTF',
  'Weight Lifting',
  'Latin',
  'Art',
  'Puzzle Solving',
  'Escape Rooms',
  'Chess',
  'Computer Games',
  'CTFLearn',
  'CyberPatriot',
]

export default function Honors() {
  return (
    <section id="honors" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Honors & Achievements</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Honors */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-amber-700 dark:text-amber-400 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
              Awards &amp; Recognition
            </h3>
            <ul className="space-y-2">
              {honors.map((honor, idx) => (
                <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="text-amber-500 mr-2">*</span>
                  <span>{honor}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hobbies */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Hobbies &amp; Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-purple-200 dark:border-purple-700"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

