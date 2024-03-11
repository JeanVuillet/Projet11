import { Children, useState } from 'react';
import '../assets/imgHeader1.jpeg';
import'../Sass/Home.scss';

import { HomeHeader } from './HomeHeader';
import { HomeMain } from './HomeMain';







function Home() {
return(
    <>
    <body className='body'>
<HomeHeader/>
<HomeMain>

</HomeMain>
</body>

</>
)
}

export default Home
