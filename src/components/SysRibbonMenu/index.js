import React from 'react'
import { useTranslation } from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import {toggleHover, clickTab} from '../../store/actions';
import RibbonHome from './RibbonHome';
import RibbonView from './RibbonView';
import RibbonShare from './RibbonShare';


function SysRibbonMenu(props) {
    const { t, i18n } = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }

    const isH= useSelector(state=>state.isHovered);
    console.log(isH);

    const dispatch=useDispatch();

    return (

        <div className="container">

            <ul className="nav nav-tabs">
                <li ><a class="dropdown-toggle" data-toggle="dropdown" href="#" >{t('File.1')}</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">{t('File.1-1')}</a></li>
                        <li><a href="#">{t('File.1-2')}</a></li>
                        <li><a href="#">{t('File.1-3')}</a></li>
                        
                    </ul>
                </li>
                <li className={ isH.activeTabName==='Home' ? 'active': null} ><a data-toggle="tab"  onClick={() => dispatch(clickTab("Home"))}>{t('Home.1')}</a></li>
                <li  className={ isH.activeTabName==='Share' ? 'active': null} ><a data-toggle="tab"  onClick={() => dispatch(clickTab("Share"))}>{t('Share.1')}</a></li>
                <li  className={ isH.activeTabName==='View' ? 'active': null} ><a data-toggle="tab" onClick={() => dispatch(clickTab("View"))}>{t('View.1')}</a></li>
                <li  className={ isH.activeTabName==='.' ? 'active': null}  style={{textAlign:'right'}}><a data-toggle="tab" onClick={() => dispatch(clickTab("."))}>.</a></li>
            </ul>

            <div className="tab-content">
                {isH.activeTabName==='Home'&&<div>
                  <RibbonHome />
                </div>}
                {isH.activeTabName==='Share'&&<div>
                
                <RibbonShare />
                </div>}
                {isH.activeTabName==='View'&&<div>
                <RibbonView />
                </div>}
               <div> Active tab name is  {isH.activeTabName}</div> 
            </div>
        </div>
    )
}


export default SysRibbonMenu;



/*

<div id="home" className="tab-pane fade in active">
                    <h3>HOME</h3>
                    <button onClick={() => handleClick('mn')}>
                        Mongolia
                    </button>
                    <button onClick={() => handleClick('en')}>
                        English
                    </button>
                    <button onClick={() => handleClick('ko')}>
                        Korean
                    </button>
                    <button onClick={() => handleClick('chi')}>
                        China
                    </button>
                    <p>{isH.isHoveMenu? <div>true</div>:<div>false</div>}</p>
                    <button onClick={() => dispatch(toggleHover())}>
                        is hover
                    </button>
                </div>
                <div id="menu1" className="tab-pane fade">
                    <h3>Menu 1</h3>

                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div id="menu2" className="tab-pane fade">
                    <h3>Menu 2</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
                <div id="menu3" className="tab-pane fade">
                    <h3>Menu 3</h3>
                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>

*/