import {NavLink} from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import SupportComponent from '../../supportComponent/SupportComponent';
import AdvComponent from '../../advComponent/AdvComponent';
import translationText from "../../../translation.json";
import {useGlobalState} from '../../hooks/useGlobalState'

import './MainPage.css'


const MainPage = ()=>{


    const [translation] = useGlobalState('translation');

    const latestChangesRU = translationText.ru[0].latestChanges;
    const latestChangesENG = translationText.eng[0].latestChanges;

    return(
        <>
            <div className="mainPage-box">
                <Header/>

                    <div className='mainPage-wrapper'>

                            <div className='mainPage-video'>
                                <div className='mainPage-video-title'>VIDEO REQUEST</div>
                                <img className='mainPage-video-preview'
                                    src='https://cdn.discordapp.com/attachments/872343092500504628/1034156666503057529/unknown.png'
                                    alt='video-preview'></img>

                                <NavLink  to="/change-log-video-request">
                                    <div className='mainPage-video-changelog'>{translation ? latestChangesRU : latestChangesENG }</div>
                                </NavLink>

                                <div className='mainPage-video-gitlab'>
                                    <a  className='mainPage-gitlink'
                                        href="https://about.gitlab.com/"
                                        target="_blank"
                                        rel="noreferrer">
                                             GitLab
                                    </a>
                                </div>
                            </div>

                            <div className='mainPage-wheel'>
                            <div className='mainPage-wheel-title'>POINT AUC</div>
                                <img className='mainPage-wheel-preview'
                                    src="https://cdn.discordapp.com/attachments/872343092500504628/1034161450169671781/unknown.png"
                                    alt='wheel-preview'></img>

                                <NavLink  to="/change-log-wheel">
                                    <div className='mainPage-wheel-changelog'>{translation ? latestChangesRU : latestChangesENG }</div>
                                </NavLink>

                                <div className='mainPage-wheel-gitlab'>
                                    <a  className='mainPage-gitlink'
                                        href="https://about.gitlab.com/"
                                        target="_blank"
                                        rel="noreferrer">
                                             GitLab
                                    </a> 
                                </div>

                            </div>
                                <div className='mainPage-line'></div>
                                <div className='mainPage-support'>
                                    <SupportComponent/>
                                </div>
                       
                                <div className='mainPage-adv'>
                                    <AdvComponent/>
                                </div>
                    </div>

                    <Footer/>

            </div>
    
        </>
    )
}

export default MainPage;