'use client'

interface ActivityItem {
  text: string
  url?: string
}

interface ActivityGroup {
  category: string
  items: ActivityItem[]
}

const activities: ActivityGroup[] = [
  {
    category: 'Competitions & Cybersecurity',
    items: [
      { text: 'VT High School Programming Contest', url: 'https://icpc.cs.vt.edu/#/hscontest' },
      { text: 'MIT THINK Scholars Program', url: 'https://think.mit.edu/' },
      { text: 'UVA HSPC', url: 'https://www.cs.virginia.edu/~sherriff/hspc/' },
      { text: 'USACO - USA Computing Olympiad', url: 'http://www.usaco.org/' },
      { text: 'USABO - USA Biology Olympiad', url: 'https://www.usabo-trc.org/' },
      { text: 'Ranford Cyber Cup' },
      { text: 'Commonwealth Cyber Cup' },
      { text: 'PicoCTF Competitions', url: 'https://picoctf.org/' },
      { text: 'National Cyber Skyline - Placed 67/910', url: 'https://www.nationalcyberleague.org/' },
      { text: 'CyberPatriot', url: 'https://www.uscyberpatriot.org/' },
      { text: 'Coding for Wellbeing' },
    ],
  },
  {
    category: 'Hackathons & Awards',
    items: [
      { text: '1st Place, Spark Sphere Hackathon' },
      { text: '1st UI/UX, Academy of Loudoun Hackathon' },
      { text: '1st Place, Magic Mind Hackathon' },
      { text: 'MIT CubeSat Program - Top 40', url: 'https://www.cubesat.mit.edu/' },
    ],
  },
  {
    category: 'Robotics & STEM',
    items: [
      { text: 'BLAST Robotics Boot Camp', url: 'https://blast.spacegrant.org/' },
      { text: 'VT-ARC Robotics Camp', url: 'https://vtarc.org/' },
      { text: 'Science Olympiad - Build and test events', url: 'https://www.soinc.org/' },
      { text: 'STEM Club, AI Club, Neuroscience Club' },
      { text: 'Cyber Security Club, BioMedicine Club' },
      { text: 'Computer Science Honor Society' },
      { text: 'Leader of Competitive Programming Club' },
      { text: 'Organizer of Statewide Coding Competition at Academies of Loudoun', url: 'https://www.academies-it.org/' },
    ],
  },
  {
    category: 'Research & Outreach',
    items: [
      { text: 'Biomedicine Research: Paper on Postural Orthostatic Tachycardia Syndrome (POTS)' },
      { text: 'Led initiative to teach 20 middle school students coding' },
      { text: 'Encouraged ~10 students to join Robotics through showcases' },
      { text: 'Founder & Leader of County-Wide Hindu Swayamsevak Sangh chapter (12 years)', url: 'https://hssus.org/' },
      { text: 'Volunteered 50+ hours at car shows, CS Outreach, and Marathi Kala Mandal' },
    ],
  },
  {
    category: 'Athletics & Martial Arts',
    items: [
      { text: 'Varsity Track & Field: Indoor and Outdoor Seasons' },
      { text: 'Regionals qualifier, School Record holder for Triple Jump' },
      { text: 'Tae Kwon Do: 2nd-degree black belt' },
      { text: 'Taught forms and kicks; Demo Team member' },
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
                    <span className="text-indigo-500 mr-2 mt-1">-</span>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 underline decoration-dotted underline-offset-2 inline-flex items-center gap-1"
                      >
                        {item.text}
                        <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <span className="text-sm">{item.text}</span>
                    )}
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
