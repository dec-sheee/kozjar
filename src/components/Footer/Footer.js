import './Footer.css'
import twitch from "../../resources/img/twitch.png"
import discord from "../../resources/img/discord.png"
import telegram from "../../resources/img/telegram.png"

const Footer = ()=>{

    return(
    <>
          <div className="wrapper-footer">
                <a href="https://www.twitch.tv/kozjar"
                   target="_blank"
                   rel="noreferrer">
                        <img className='footer-twitch'
                                src={twitch}
                                alt="twitch-img"/>
                </a>

                <a href="https://discord.com/invite/8KP83hy2Ck"
                   target="_blank"
                   rel="noreferrer">
                        <img className='footer-discord'
                                src={discord}
                                alt="discord-img"/>           
                </a>
                
                <a href="https://t.me/kozjarwtf"
                   target="_blank"
                   rel="noreferrer">
                    <img className='footer-telegram'
                            src={telegram}
                            alt="telegram-img"/>
                </a>  
            </div>
    </>
    )
}
export default Footer;