import React from 'react';
import { Breadcrumb, Button, Layout, Divider } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { SettingOutlined, HeartFilled, CalendarTwoTone, IdcardFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './main-page.css';

export const MainPage: React.FC = () => {    
    return (
        <>
            <Layout>
                <Sider>
                    Sider
                </Sider>                
                <Layout>
                    <Header>
                    <div className='header-box'>
                        <Breadcrumb className='breabcump-style'>
                            <Breadcrumb.Item>Главная</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className='header-title-setting-box'>
                            <h1>Приветствуем тебя в CleverFit — приложении, 
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
                            и советам профессиональных тренеров.</div>
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
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </>
    );
};
