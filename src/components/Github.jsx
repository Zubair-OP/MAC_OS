import Window from './Windows'
import data from '../assets/github.json'


export const GitCard = ({ data = { id: 1, image: '', title: '', description: '', tags: [], repoLink: '', demoLink: '' } }) => {
  return (
    <div className='card bg-[#1c1c1c] p-1 rounded-md max-w-[12.5rem] '>
      <img className='' src={data.image} alt="" />
      <h2 className='text-xs font-semibold pt-2'>{data.title}</h2>
      <p className='text-xs font-light mt-1 opacity-80'>{data.description}</p>
      <div className="tags flex gap-1 text-xs flex-wrap mt-2 font-semibold opacity-80">
        {data.tags.map((tag) => {
          return (
            <p key={tag}>{tag}</p>
          )
        })}
      </div>
      <div className="links flex gap-3 text-[10px] flex-wrap mt-2 font-light opacity-80">
        {data.repoLink && <a href={data.repoLink} className='underline'>RepoLink</a>}
        {data.demoLink && <a href={data.demoLink} className='underline'>DemoLink</a>}
      </div>
    </div>
  )
}


const Github = () => {

  return (
    <Window name="github">
      <div className="cards p-1 overflow-y-scroll h-full overflow-x-hidden flex flex-wrap gap-5 justify-center red-scrollbar">
        {data.map((project, idx) => {
          return <GitCard key={idx} data={project} />
        })}
      </div>
    </Window>
  )
}

export default Github