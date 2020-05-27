import React from 'react';



import SysRibbonMenu from './components/SysRibbonMenu';

function App() {



  return (
    <>
      <SysRibbonMenu activeMnu={"Home"} />
    </>
  );
}

export default App;



/*

 <div className="App">
    <nav style={{width:'100%',padding: '2rem 0', backgroundColor:'gray'}}>
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
    </nav>
      <header className="App-header">
       
        <p>
          {t('Thanks.1')}
        </p>
        <p>
          {t('Why.1')}
        </p>
      
       
      </header>
      <div className="container">
      
      </div>
      
    </div>

*/