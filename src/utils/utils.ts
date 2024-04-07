import perfil1 from "../assets/profilePictures/Perfil1.png"
import perfil2 from "../assets/profilePictures/Perfil2.png"

export const handlePicture = (pic: string) => {
    switch (pic) {
        case 'perfil1':
            return perfil1
        case 'perfil2':
            return perfil2

        default:
            break;
    }
}