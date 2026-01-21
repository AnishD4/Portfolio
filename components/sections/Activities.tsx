'use client'

const activities = [
  {
    category: 'Competitions & Cybersecurity',
    items: [
      'Competed in VT, MIT, UVA, USACO, USABO, Ranford Cyber Cup, Commonwealth Cyber Cup, and Regional competitions',
      'Competing in PicoCTF competitions',
      'Participated in National Cyber Skyline – Placed 67/910',
      'Competed in Cyber Patriot',
      'Competing in Coding for Wellbeing',
    ],
  },
  {
    category: 'Hackathons & Awards',
    items: [
      '1st Place, Spark Sphere Hackathon',
      '1st UI/UX, Academy of Loudoun Hackathon',
      '1st Place, Magic Mind Hackathon',
      'CubeSat MIT: Placed in the Top 40',
    ],
  },
  {
    category: 'Robotics & STEM',
    items: [
      'BLAST Robotics Boot Camp',
      'VT-ARC Robotics Camp - Learned and helped out',
      'Science Olympiad - Build and test competition events',
      'STEM Club (8th grade), AI Club, Neuroscience Clubs, Cyber Security Clubs, BioMedicine Club',
      'Computer Science Honor Society',
      'Leader of Competitive Programming Club',
      'Organizer of a Statewide Coding Competition in the Academies of Loudoun',
    ],
  },
  {
    category: 'Research & Outreach',
    items: [
      'Biomedicine Research: Wrote a paper on Postural Orthostatic Tachycardia Syndrome (POTS)',
      'Led an initiative to teach 20 middle school students coding',
      'Encouraged ~10 students to join Robotics through showcases',
      'Founder and Leader of a County-Wide Hindu Swayamsevak Sangh chapter (12 years)',
      'Volunteered at car shows, CS Outreach, and Marathi Kala Mandal for 50+ hours',
    ],
  },
  {
    category: 'Athletics & Martial Arts',
    items: [
      'Varsity Track & Field: Indoor and Outdoor Seasons, Regionals qualifier',
      'Hold School Record for Triple Jump',
      'Tae Kwon Do: 2nd-degree black belt',
      'Taught forms and kicks; part of the Demo Team',
    ],
  },
]

export default function Activities() {
  return (
    <section id="activities" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Activities & Leadership</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((group) => (
            <div
              key={group.category}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-indigo-500 mr-2 mt-1">•</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

