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
      label:'Text Field',
      link:'/text-field'
    },
    {
      label:'Text Field Material Default',
      link:'/text-field-md-default'
    },
    {
      label:'Text Field Material Outlined',
      link:'/text-field-md-outlined'
    },
    {
      label:'Text Field Material Filled',
      link:'/text-field-md-filled'
    },
  ]
  return(<div className={'w-[200px] h-screen fixed left-0 top-0 bg-gray-50 border-r py-6'}>
    <div className={'font-bold px-3'}>Pilih component</div>
    <nav className="flex flex-col gap-0">
      {components.map(item => <Link className={'block text-sm px-3 py-2 hover:bg-gray-100'} key={`sidebar-item-${item.label}`} to={item.link}>{item.label}</Link>)}


    <div className={'font-bold px-3'}>Form Example</div>
    <Link className={'block text-sm px-3 py-2 hover:bg-gray-100'} to={'/form'}>Contoh Form</Link>
    <Link className={'block text-sm px-3 py-2 hover:bg-gray-100'} to={'/form-material'}>Contoh Form MD</Link>

    </nav>
  </div>)
}

export default Sidebar;