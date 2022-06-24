/* eslint-disable */
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import HeaderSecondaryEditor from './HeaderEditorSecondary';

const HeaderEditor = ({ current, setMenu, setHeight, model, actionUpdate, loading, form_id, setLoading }) => {
  let headerRef = useRef();
  let sidebarEl = useRef();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setHeight(headerRef.current.clientHeight);
  });

  const [sidebarTop, setSidebarTop] = useState(undefined);

  const handleSetMenu = async (key) => {
    setMenu(key)
    setLoading(true)
    // await saveForm(form_id, model)
    setLoading(false)
  }

  useEffect(() => {
    const sidebarEl = document.querySelector('#secondary-header').getBoundingClientRect();
    setSidebarTop(sidebarEl.top);
  }, []);


  useEffect(() => {
    if (!sidebarTop) return;

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [sidebarTop]);

  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 10) {
      sidebarEl.current.style.position ='fixed';
      sidebarEl.current.style.zIndex ='999999';
    } else {
      sidebarEl.current.style.position ='relative';
      sidebarEl.current.style.zIndex ='50';
    }
  }


  return (<div id='form-order-editor-header' ref={headerRef}
               className={'w-full relative z-top transition'}>
    <div className='main-menu bg-gray-900 text-white border-b z-50 flex justify-between items-center py-2 h-12 px-6 md:px-10'>
      <Link to={'/'}>
					<span
            className='cursor-pointer flex items-center space-x-1 py-2'>
						<span className='material-icons-outlined'>navigate_before</span>
						<span>Back to all form</span>
					</span>
      </Link>
      <div className="text-lg">{model.hasOwnProperty('title') && typeof model.title !=='undefined'? model.title : 'Form Order Baru'}</div>
      <div className='h-full flex items-center px-6'>
        <Button color={'red'} size={'small'}>Simpan</Button>
      </div>
    </div>
    <div ref={sidebarEl} id={'secondary-header'} className=' top-0 w-full'>
      <HeaderSecondaryEditor form_id={form_id} current={current} setMenu={handleSetMenu}/>
    </div>

  </div>);
};


export default HeaderEditor;