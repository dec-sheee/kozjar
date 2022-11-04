import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SupportComponent from "../../supportComponent/SupportComponent";
import AdvComponent from "../../advComponent/AdvComponent";
import {useGlobalState} from '../../hooks/useGlobalState';
import translationText from '../../../translation.json';
import useChangeLogTranslate from "../../hooks/useChangeLogTranslate";
import './ChaneLogWheel.css'




const ChaneLogWheel =()=>{

    const [translation] = useGlobalState('translation');
    const{createChangeLogContent} = useChangeLogTranslate();

    const latestChangesAucRU = translationText.ru[0].latestChangesAuc;
    const latestChangesAucEN = translationText.eng[0].latestChangesAuc;


    return(
        <>
        <div className="changeLogWheel-box">
            <Header/>

            <div className ='changeLogWheel-container'>
                <div className={translation ? 'changeLogWheel-container-title-ru' : 'changeLogWheel-container-title-eng'}>
                    {translation ?latestChangesAucRU : latestChangesAucEN }
                </div>
                <div className='changeLogWheel-container-line'></div>
                <div className='changeLogWheel-container-content'>

                {createChangeLogContent("auc")}

                </div>
            </div>
            <div className='changeLogWheel-line'></div>
            <div className="changeLogWheel-support">
                <SupportComponent/>
            </div>
            <div className="changeLogWheel-adv">
                <AdvComponent/>
            </div>
            <Footer/>
        </div>
    </>
    )
}

export default ChaneLogWheel;