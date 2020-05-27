import React from 'react'
import { useTranslation } from 'react-i18next';


function SysRibbonMenu(props) {
    const { t, i18n } = useTranslation();

    function handleClick(lang){
        i18n.changeLanguage(lang);
      }

    return (
        <div class="container">

            <ul class="nav nav-tabs">
                <li ><a data-toggle="tab" >{t('File.1')}</a></li>
                <li className="active"><a data-toggle="tab" >{t('Home.1')}</a></li>
                <li ><a data-toggle="tab" >{t('Share.1')}</a></li>
                <li><a data-toggle="tab" >{t('View.1')}</a></li>
            </ul>

            <div class="tab-content">
                <div id="home" class="tab-pane fade in active">
                    <h3>HOME</h3>
                    <button onClick={()=>handleClick('mn')}>
                    Mongolia
                    </button>
                    <button onClick={()=>handleClick('en')}>
                    English
                    </button>
                    <button onClick={()=>handleClick('ko')}>
                    Korean
                    </button>
                    <button onClick={()=>handleClick('chi')}>
                    China
                    </button>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div id="menu1" class="tab-pane fade">
                    <h3>Menu 1</h3>
                   
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div id="menu2" class="tab-pane fade">
                    <h3>Menu 2</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
                <div id="menu3" class="tab-pane fade">
                    <h3>Menu 3</h3>
                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
            </div>
        </div>
    )
}


export default SysRibbonMenu;