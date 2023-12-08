import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, FileAddOutlined, SettingOutlined } from '@ant-design/icons'

export default function MenuList({ darkTheme }){
    return(
        <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className='menu-bar'>
            <Menu.Item key="home" icon={<HomeOutlined/>}>Inicial</Menu.Item>
            <Menu.Item key="documents" icon={<AppstoreOutlined />}>Atividades</Menu.Item>
            <Menu.SubMenu key='reports' icon={<FileAddOutlined />} 
            title="Inserir Laudos">
                <Menu.Item key="warehouse">Almoxarifado</Menu.Item>
                <Menu.Item key="quality">Qualidade</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="admin" icon={<SettingOutlined />}>Administração</Menu.Item>
        </Menu>
    )
}