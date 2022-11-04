import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import SupportComponent from "../../supportComponent/SupportComponent";
import AdvComponent from "../../advComponent/AdvComponent";
import {useGlobalState} from '../../hooks/useGlobalState';
import translationText from '../../../translation.json';
import useChangeLogTranslate from "../../hooks/useChangeLogTranslate";
import './ChangeLogVideo.css'


const ChangeLogVideo =()=> {

    const [translation] = useGlobalState('translation');
    const{createChangeLogContent} = useChangeLogTranslate();

    const latestChangesVideoRU = translationText.ru[0].latestChangesVideo;
    const latestChangesVideoEN = translationText.eng[0].latestChangesVideo;


    return(
        <>
            <div className="changeLogVideo-box">
                <Header/>

                <div className ='changeLogVideo-container'>
                    <div className={translation ? 'changeLogVideo-container-title-ru' : 'changeLogVideo-container-title-eng'}>
                        {translation ? latestChangesVideoRU : latestChangesVideoEN}
                    </div>
                    <div className='changeLogVideo-container-line'></div>
                    <div className='changeLogVideo-container-content'>

                        {createChangeLogContent("video")}
                        
                    </div>
                </div>
                    <div className='changeLogVideo-line'></div>
                    <div className="changeLogVideo-support">
                        <SupportComponent/>
                    </div>
                    <div className="changeLogVideo-adv">
                        <AdvComponent/>
                    </div>



                <Footer/>
            </div>
        </>
    )
}

export default ChangeLogVideo;