import boosty from "../../resources/img/boosty.png"
import ruble from "../../resources/img/ruble.png"
import {useGlobalState} from '../hooks/useGlobalState';
import translationText from "../../translation.json"

import './SupportComponent.css'


const SupportComponent = ()=>{

    const [translation] = useGlobalState('translation');

    const supportRU = translationText.ru[0].supportMyProjects;
    const supportEN = translationText.eng[0].supportMyProjects;

    return(
        <>
            <div className="supportComponent-box">
                <div className={translation ? "supportComponent-support-text-ru" : "supportComponent-support-text-en"}>
                    {translation ? supportRU : supportEN}
                </div>

                <div className="supportComponent-support-money">
                <a href="https://www.donationalerts.com/r/kozjar"
                   target="_blank"
                   rel="noreferrer">
                    <img    className="supportComponent-support-money-img"
                            src={ruble}
                            alt='ruble'>
                    </img>
                </a>
                </div>
                
                <div className="supportComponent-support-boosty">
                <a href="https://boosty.to/kozjar"
                   target="_blank"
                   rel="noreferrer">
                    <img    className="supportComponent-support-boosty-img"
                            src={boosty}
                            alt='boosty'>
                    </img>
                </a>
                </div>
            </div>
        </>
    )
}
export default SupportComponent;