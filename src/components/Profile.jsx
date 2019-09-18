import React from 'react';
import '../components/Profile.module.css'
// import s from '../components/Profile.module.css'

function Profile(){
    return  <div className={s.content}>
    <img src='https://static.scientificamerican.com/sciam/cache/file/EAF12335-B807-4021-9AC95BBA8BEE7C8D_source.jpg?w=590&h=800&74A94564-944F-4349-96BD18788411EAA6'></img>
       <div>
         ava + description
       </div>
    <div>
      My post
      <div>
        New post
        </div>
        <div className={s.posts}>
          <div className={s.item}>
            post 1
          </div>
        <div className='item'>
            post 2  
          </div>
        </div>
    </div>
  </div>
}

export default Profile;