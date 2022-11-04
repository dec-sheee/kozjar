import {NavLink} from 'react-router-dom';
import {useGlobalState} from '../hooks/useGlobalState';
import './Header.css'


const Header =()=>{

    const [translation, setTranslation] = useGlobalState('translation');

    return(
        <>
            <div className="box-header">
                <div className='wrapper-header'>
                <NavLink  to="/">
                    <div className='header-title'>Kozjar</div>
                </NavLink>  
                    <div
                        className='header-ru'
                        onClick={()=>setTranslation(true)}>
                            <span style={translation ? {"color":"#EDEDED"} : {"color":"#B8860B"}}>
                                RU
                            </span>
                    </div>
                    <div
                        className='header-eng'
                        onClick={()=>setTranslation(false)}>
                            <span style={translation ?  {"color":"#B8860B"} : {"color":"#EDEDED"}}>
                                EN
                            </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;