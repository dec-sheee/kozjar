import {useGlobalState} from "../hooks/useGlobalState"
import translationText from "../../translation.json"



const useChangeLogTranslate = ()=>{

    const [translation] = useGlobalState('translation');

    const createChangeLogContent = (log)=>{
        let text;
        let RU;
        let ENG;
        let classs;

        if(log === 'video'){
            RU = translationText.ru[0].changeLogVideo;
            ENG = translationText.eng[0].changeLogVideo;
            classs = 'changeLogVideo'
            
        }else{
            RU = translationText.ru[0].changeLogAuc;
            ENG = translationText.eng[0].changeLogAuc;
            classs = 'changeLogWheel'
        }

        if(translation){
            text = RU;
        }else{
            text = ENG;
        }

            let content =text.map((item, i)=>{
                return (
                <>
                    <div key={i}>
                        <div key={i +1}  className={`${classs}-container-content-title`}>{item.changeLogTitle}</div>
                        <div key={i +2}  className={`${classs}-container-content-description`}>{item.changeLogDescription}</div>
                        <div key={i +3}  className={`${classs}-container-content-line`}></div>
                    </div>
                </>
                        )      
            })
            return content
    }

    return{createChangeLogContent}

}
export default useChangeLogTranslate;