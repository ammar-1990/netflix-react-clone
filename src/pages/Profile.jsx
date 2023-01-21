import Nav from '../components/Nav'
import './Profile.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../features/user/userSlice'

const Profile = () => {
    const user=useSelector(state=>state.user.user)
    const dispatch = useDispatch()
  return (
    <div className='profile'>
        <Nav />

        <div className="profile__container">
            <h1>Edit Profile</h1>
            <div className="profile__content">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className="profile__info">
                    <p className="email">{user.email}</p>
                    <p className="currentPlans">Plans ( Current Plans : Premium)</p>
                    <p className="date">Renewal Date 15/5/2024</p>
                    <div className="subscribes">
                        <div><span>Netflix Standards <br/> 1082p</span><button>Subscribe</button></div>
                        <div><span>Netflix Standards <br/> 480p</span><button>Subscribe</button></div>
                        <div><span>Netflix Standards <br/> 4K + HDR</span><button>Current Package</button></div>
                        
                    </div>
                    <button onClick={()=>dispatch(LOGOUT())}>Sign Out</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile