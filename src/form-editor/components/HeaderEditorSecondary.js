/* eslint-disable */
import {dataServer, insertUrlParam} from "../../helper/functions";
import { Button } from '../../components';

const HeaderSecondaryEditor = ({current,setMenu,form_id}) => {
	const menus = [
		{
			label: 'Form',
			key: 'form'
		},
		{
			label: 'Produk',
			key: 'product'
		},
		// {
		// 	label: 'Follow-Up',
		// 	key: 'followup'
		// },
		{
			label: 'Pengaturan',
			key: 'settings'
		},
		{
			label: 'Style & Preview',
			key: 'style'
		}
	]

	let preview_url = insertUrlParam(dataServer.preview_page,{
		'form_id':form_id
	})

	return (
		<div
			className={'bg-white  shadow-md px-6 md:px-10 w-full flex items-center justify-between text-sm'}>
			<div>Sub Header</div>
			<div className={'flex items-center'}>
				{menus.map(menu => <div key={menu.key} onClick={() => setMenu(menu.key)}
										className={`py-2 cursor-pointer px-3 border-b-4 transition-all text-sm ${current ===menu.key ?'border-gray-700 text-gray-800':'border-transparent'}`}>
					{menu.label}
				</div>)}
			</div>
			<div>
				{dataServer.preview_page && <Button target={'_blank'} size={'small'} variant={'text'} buttonType={'link'} href={preview_url ?? '#'}>Preview</Button>}
			</div>

		</div>
	)

}
export default HeaderSecondaryEditor
