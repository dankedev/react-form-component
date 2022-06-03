import {Link} from "react-router-dom";

const Sidebar = () => {
  const components =[
    {
      label:'Button',
      link:'/buttons'
    },

    {
      label:'Button Icons',
      link:'/buttons-icon'
    },
    {
      label:'Icons',
      link:'/icons'
    },
    {
      label:'Input',
      link:'/input-fields'
    },
  ]
  return(<div className={'w-[200px] h-screen fixed left-0 top-0 bg-gray-50 border-r py-6'}>
    <div className={'font-bold px-3'}>Pilih component</div>
    <nav className="flex flex-col gap-0">
      {components.map(item => <Link className={'block px-3 py-2 hover:bg-gray-100'} key={`sidebar-item-${item.label}`} to={item.link}>{item.label}</Link>)}

    </nav>
  </div>)
}

export default Sidebar;