import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Private = () => {

    const auth = useContext(AuthContext)

    return(
        <div>
            Privado
        <h2>
            Ola {auth.user?.name}
        </h2>
        </div>
    )
}