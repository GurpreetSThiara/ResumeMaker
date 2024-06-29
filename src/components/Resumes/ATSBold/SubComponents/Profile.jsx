import React from 'react'

const Profile = ({state,data,fontSizes}) => {
  return (
    <div>
                    <div className="ATSBold-subheading" style={{fontSize:fontSizes.header}}>SUMMARY</div>

      {state.Profile && (
            <div className="ATSBold-profile" style={{ fontSize: fontSizes.description }}>{data.profileDescription}</div>
          )}

    </div>
  )
}

export default Profile
