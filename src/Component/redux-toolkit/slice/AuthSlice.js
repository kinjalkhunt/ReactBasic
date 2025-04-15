import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload
        },
        signOut: (state, action) => {
            state.user =null
        }
    }
})
export const {signIn, signOut} = AuthSlice.actions
export default AuthSlice.reducer
// export const selectUser = (state) => state.auth.user
// export const selectIsAuthenticated = (state) => !!state.auth.user
// export const selectIsLoggedIn = (state) => !!state.auth.user
// export const selectIsLoggedOut = (state) => !state.auth.user
// export const selectUserEmail = (state) => state.auth.user?.email || null
// export const selectUserName = (state) => state.auth.user?.name || null
// export const selectUserId = (state) => state.auth.user?.id || null
// export const selectUserRole = (state) => state.auth.user?.role || null
// export const selectUserToken = (state) => state.auth.user?.token || null
// export const selectUserProfile = (state) => state.auth.user?.profile || null
// export const selectUserAvatar = (state) => state.auth.user?.avatar || null
// export const selectUserBio = (state) => state.auth.user?.bio || null
// export const selectUserLocation = (state) => state.auth.user?.location || null
// export const selectUserWebsite = (state) => state.auth.user?.website || null
// export const selectUserSocialLinks = (state) => state.auth.user?.socialLinks || null
// export const selectUserSettings = (state) => state.auth.user?.settings || null
// export const selectUserPreferences = (state) => state.auth.user?.preferences || null
// export const selectUserNotifications = (state) => state.auth.user?.notifications || null
// export const selectUserMessages = (state) => state.auth.user?.messages || null
// export const selectUserFriends = (state) => state.auth.user?.friends || null
// export const selectUserGroups = (state) => state.auth.user?.groups || null
