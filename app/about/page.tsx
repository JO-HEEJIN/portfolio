import skillsData from "@/data/skills.json";

export default function AboutPage() {
  const { skillCategories } = skillsData;

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Creative technologist passionate about building the future of immersive experiences
          </p>
        </div>

        {/* Bio */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm Heejin Jo, a full-stack developer and creative technologist specializing in AR/VR, AI/ML,
            and immersive web experiences. I combine technical expertise with creative vision to build
            innovative applications that push the boundaries of what's possible.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            My work spans from Apple Vision Pro applications to AI-powered agricultural platforms,
            healthcare applications, and interactive web experiences. I'm passionate about creating
            technology that makes a meaningful impact on people's lives.
          </p>
        </div>

        {/* Skills */}
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
