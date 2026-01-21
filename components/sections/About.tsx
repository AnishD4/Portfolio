'use client'

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hi, I&apos;m <strong>Atharv Amey Dhore</strong>, a passionate Computer Science student at
            Lightridge High School in the Academies of Loudoun. With a 4.39/4.2 GPA and an expected
            graduation in 2028, I&apos;m deeply interested in robotics, cybersecurity, and competitive programming.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            I have experience working with Java, Python, JavaScript (React), HTML, C++, and various
            technologies including Arduinos, VEX, FRC robotics, and cybersecurity tools like Wireshark
            and BurpSuite. I&apos;m also skilled in leadership, having founded and led a county-wide
            Hindu Swayamsevak Sangh chapter and organizing statewide coding competitions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            My intended major is Computer Science, and I&apos;m constantly exploring new areas in AI,
            machine learning, and quantum computing through courses like MIT&apos;s CubeSat program.
          </p>
        </div>
      </div>
    </section>
  )
}

