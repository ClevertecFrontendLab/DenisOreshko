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
import Logo from '../../resources/img/logo.svg';
import Exit from '../../resources/img/exit.svg';


export const MainPage: React.FC = () => {  
    const [collapsed, setCollapsed] = useState(false);  
    return (
        <>
            <div className="main-container">
                <Layout>
                    <Sider data-test-id="slider-switch" width={208} trigger={null} collapsible collapsed={collapsed}>
                        <div className='slider-menu-box'>
                            <div>
                                <div className='logo'>
                                    <img src={Logo} alt="Logo"/>
                                </div>
                                <ul className='menu-ul'>
                                    <li>
                                        <Button>
                                            <CalendarTwoTone style={{ color: '#2F54EB' }} twoToneColor="#2F54EB"/>
                                            Календарь
                                        </Button> 
                                    </li>
                                    <li>
                                        <Button>
                                            <HeartFilled style={{ color: '#2F54EB' }}/>
                                            Тренировки
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <TrophyFilled  style={{ color: '#2F54EB' }}/>
                                            Достижения
                                        </Button>
                                    </li>
                                    <li>
                                        <Button>
                                            <IdcardOutlined  style={{ color: '#2F54EB' }}/>
                                            Профиль
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                            <Button className='exit-btn'><img src={Exit}/>Выход</Button>
                        </div>
                    </Sider>
                    <Layout>
                        <Header>
                        <div className='header-box'>
                            <Breadcrumb className='breabcump-style'>
                                <Breadcrumb.Item>Главная</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className='header-title-setting-box'>
                                <h1>Приветствуем тебя в CleverFit — приложении,<br/> 
                                которое поможет тебе добиться своей мечты!
                                </h1>
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
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            })}
                            <div className='container-big-mini'>
                                <div className='card-box wrapp'>
                                    CleverFit — это не просто приложение,
                                    а твой личный помощник в мире фитнеса.
                                    Не откладывай на завтра — начни тренироваться уже сегодня!
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
