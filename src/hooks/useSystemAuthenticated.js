import { useSelector } from 'react-redux'

export function useSystemAuthenticated() {
    const roleId = useSelector(state => state.user.profile.role_id)
    if (roleId === 1)
        return true
    return false
}
