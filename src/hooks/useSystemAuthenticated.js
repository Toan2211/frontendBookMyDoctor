import { useSelector } from 'react-redux'

export function useSystemAuthenticated() {
    const role = useSelector(state => state.user.profile.role)
    if (role && role.name === 'ROLE_ADMIN')
        return true
    return false
}
