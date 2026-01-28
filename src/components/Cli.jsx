import Window from './Windows'
import Terminal from 'react-console-emulator'

const commands = {
  about: {
    description: 'About the developer',
    fn: () => 'I am Muhammad Zubair, a passionate Front-End Developer. I specialize in building modern, responsive, and user-friendly web applications using React, Tailwind CSS, and other cutting-edge technologies.'
  },
  skills: {
    description: 'List technical skills',
    fn: () => `
Languages & Technologies:
- HTML5, CSS3, JavaScript (ES6+)
- React.js, Redux, Context API
- Tailwind CSS, Bootstrap, SCSS
- Git, GitHub, VS Code
- Responsive Design, UI/UX Principles
    `
  },
  projects: {
    description: 'Showcase projects',
    fn: () => `
1. Mac OS Clone
   - A fully functional Mac OS simulation on the web.
   - Tech: React, Tailwind CSS, Context API.

2. Portfolio Website
   - Personal portfolio showcasing skills and work.
   - Tech: React, Framer Motion.

3. Interactive Dashboard
   - A data visualization dashboard with dark mode.
   - Tech: React, Chart.js.
    `
  },
  contact: {
    description: 'Contact information',
    fn: () => `
Email: zubair@example.com
LinkedIn: linkedin.com/in/muhammad-zubair
GitHub: github.com/Zubair-OP
    `
  },
  socials: {
    description: 'Social media links',
    fn: () => 'LinkedIn, GitHub, Twitter/X - Follow me @ZubairDev'
  }
}
 const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • Social - See my Socials
  • contact   - Get in touch

Happy exploring! 🚀
`

const Cli = () => {

  return (
    <Window name='cli'>
      <div className="red-scrollbar text-xs h-full w-full bg-[#0d0d0d] font-mono text-sm" style={{ minHeight: '100%' }}>
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={'zubair@mac:~$'}
          promptLabelStyle={{ color: '#22c55e', fontWeight: 'bold' }}
          inputTextStyle={{ color: '#ffffff' }}
          style={{
            height: '100%',
            backgroundColor: '#0d0d0d',
            padding: '0px'
          }}
          contentStyle={{ padding: '20px' }}
        />
      </div>
    </Window>
  )
}

export default Cli