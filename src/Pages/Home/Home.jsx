import { Children, useState } from 'react';
import '../../assets/imgHeader1.jpeg';
import'../../Sass/Home.scss';

import { HomeHeader } from './HomeHeader';
import { HomeMain } from './HomeMain';







function Home() {
return(
    <>
    <div className='body'>
<HomeHeader/>
<HomeMain/>

</div>

</>
)
}

export default Home
