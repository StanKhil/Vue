import { useRouter } from 'vue-router'

export function useGoTo() {
    const router = useRouter()

    const goTo = (route) => {
        router.push(route)
    }

    return { goTo }
}