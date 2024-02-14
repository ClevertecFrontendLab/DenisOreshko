import React, { useState } from 'react';
import { Breadcrumb, Button, Layout, Divider, Menu, Switch  } from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
const { Header, Footer, Sider, Content } = Layout;
import { LinkOutlined, 
    MailOutlined, 
    AppstoreOutlined, 
    SettingOutlined, 
    HeartFilled, 
    CalendarOutlined, 
    CalendarTwoTone, 
    IdcardFilled, 
    IdcardOutlined, 
    TrophyFilled,
    AppleFilled,
    AndroidFilled,
    MenuFoldOutlined,
    MenuUnfoldOutlined,  } from '@ant-design/icons';

import 'antd/dist/antd.css';
import './main-page.css';
import Clever from '../../resources/img/Clever.svg';
import Fit from '../../resources/img/fit.svg';
import Exit from '../../resources/img/exit.svg';


export const MainPage: React.FC = () => {  
    const [collapsed, setCollapsed] = useState(false); 
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }; 
    return (
        <>
            <div className="main-container">
                <Layout>                    
                    <Sider  width={208} collapsedWidth={64} trigger={null} collapsible collapsed={collapsed}>
                        <div className='slider-menu-box'>
                            <div>
                                {collapsed ? 
                                    <div className='logo collapsed-logo'>                                        
                                        <img src={Fit} alt="Fit"/>
                                    </div>
                                :
                                    <div className='logo'>                                    
                                        <img className='show' src={Clever} alt="Clever"/>
                                        <img src={Fit} alt="Fit"/>
                                    </div>
                                }                                
                                <Menu
                                    theme="light"
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    items={[
                                        {
                                            key: '1',
                                            icon: <CalendarOutlined style={{ color: '#061178' }} />,
                                            label: 'Календарь',
                                        },
                                        {
                                            key: '2',
                                            icon: <HeartFilled />,
                                            label: 'Тренировки',
                                        },
                                        {
                                            key: '3',
                                            icon: <TrophyFilled />,
                                            label: 'Достижения',
                                        },
                                        {
                                            key: '4',
                                            icon: <IdcardOutlined />,
                                            label: 'Профиль',
                                        },
                                    ]}
                                />
                            </div>                   
                            <Button className='exit-btn'>
                                <img src={Exit}/>
                                {collapsed ? <span className='hide'>Выход</span>  : <span className='show'>Выход</span>}
                             </Button>                            
                        </div>
                    </Sider>
                    <Layout>
                        <Header>
                        <div className='header-box'>
                            <Breadcrumb className='breabcump-style'>
                                <Breadcrumb.Item>Главная</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className='header-title-setting-box'>
                                <div className='h-wrapper'>
                                    <h1>Приветствуем тебя в CleverFit — приложении,<br/> 
                                    которое поможет тебе добиться своей мечты!
                                    </h1>
                                </div>
                                <Button className='btn-settings'>
                                <SettingOutlined />Настройки</Button>
                            </div>
                        </div>
                        </Header>
                        <Content>
                            <div className='card-box actions'>
                                CleverFit ты сможешь:
                                <br/>— планировать свои тренировки 
                                на календаре, выбирая тип и уровень нагрузки; 
                                <br/>— отслеживать свои достижения
                                в разделе статистики, сравнивая свои результаты
                                с нормами и рекордами; 
                                <br/>— создавать свой профиль, где ты можешь 
                                загружать свои фото, видео и отзывы о тренировках; 
                                <br/>— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям 
                                и советам профессиональных тренеров.
                            </div>
                            <div data-test-id='slider-switch' className='side-menu-switcher'  onClick={toggleCollapsed} >
                                {collapsed ? <MenuUnfoldOutlined style={{color:'#8C8C8C'}}/> : <MenuFoldOutlined  style={{color:'#8C8C8C'}}/>}
                            </div>
                            <div className='container-big-mini'>
                                <div className='card-box wrapp'>
                                CleverFit — это не просто приложение, а твой личный помощник
                                <br/> в мире фитнеса. Не откладывай на завтра — начни тренироваться
                                 <br/>уже сегодня!
                                </div>
                                <div className='mini-card-box'>
                                    <div className='mini-card'>
                                        <div className='card-head'>Расписать тренировки</div>
                                        <Divider />
                                        <div className='mini-card-btn-box'>
                                            <Button><HeartFilled style={{ color: '#2F54EB' }}/>Тренировки</Button>
                                        </div>
                                    </div>
                                    <div className='mini-card'>
                                        <div className='card-head'>Назначить календарь</div>
                                        <Divider />
                                        <div className='mini-card-btn-box'>
                                            <Button><CalendarTwoTone style={{ color: '#2F54EB' }} twoToneColor="#2F54EB"/>Календарь</Button> 
                                        </div>                                   
                                    </div>
                                    <div className='mini-card'>
                                        <div className='card-head'>Заполнить профиль</div>
                                        <Divider />
                                        <div className='mini-card-btn-box'>
                                            <Button><IdcardFilled style={{ color: '#2F54EB' }}/>Профиль</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Content>
                        <Footer>
                            <div className='footer-box'>
                                <div className='show-reviews'>
                                    <a href='#' className='download-phone'>Смотреть отзывы</a>
                                </div>
                                <div className='card-box download-app'>
                                     <div className='download-header'>
                                        <a href='#' className='download-phone'>Скачать на телефон</a>
                                        <div className='pro-style'>Доступно в PRO-тарифе</div>
                                    </div>
                                    <Divider></Divider>
                                    <div className='download-footer'>
                                        <Button><AndroidFilled/>Android OS</Button>
                                        <Button><AppleFilled  />Apple iOS</Button>
                                    </div>
                                </div>
                            </div>
                        </Footer>
                    </Layout>
                </Layout>
            </div>  
        </>
    );
};
