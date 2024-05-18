import React from 'react'

const Profile = ({state,data}) => {
  return (
    <div>
      
      {state.Profile && (
            <div className="ATSBold-profile">{data.profileDescription}</div>
          )}

    </div>
  )
}

export default Profile
