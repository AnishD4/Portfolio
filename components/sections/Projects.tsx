'use client'

const projects = [
  {
    title: 'Minesweeper AI',
    description: 'Developed an AI using logical inference to solve Minesweeper puzzles automatically.',
    tags: ['AI', 'Python', 'Logic'],
  },
  {
    title: 'Snake Reinforcement Learning Agent',
    description: 'Built a reinforcement learning agent that learns to play Snake through trial and error.',
    tags: ['Machine Learning', 'Python', 'RL'],
  },
  {
    title: 'A* Maze-Solving Agent',
    description: 'Implemented A* search algorithm to find optimal paths through complex mazes.',
    tags: ['Algorithms', 'Python', 'Pathfinding'],
  },
  {
    title: 'Clash Royale Facial Recognition',
    description: 'Created facial recognition software that matches faces to emotes in Clash Royale.',
    tags: ['Computer Vision', 'Python', 'OpenCV'],
  },
  {
    title: 'CS50 Machine Learning Projects',
    description: 'Completed multiple projects involving inference and pattern recognition.',
    tags: ['ML', 'Python', 'Harvard CS50'],
  },
  {
    title: 'AKKA Website',
    description: 'Built a website for a developing company during an internship.',
    tags: ['Web Dev', 'React', 'Internship'],
  },
  {
    title: 'Step Up Loudoun',
    description: 'Developed a website to support student mental health and initiated a tray recycling project.',
    tags: ['Web Dev', 'Community', 'Mental Health'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-600"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

