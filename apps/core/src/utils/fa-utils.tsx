import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faHome,
    faDashboard,
    faMap,
    faCog,
    faDiagramProject,
    faAddressBook,
    faPizzaSlice,
    faChevronUp,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export const loadFaIcons = (): void => {
    library.add(
        faHome, faDashboard, faMap, faCog, faDiagramProject, faAddressBook, faPizzaSlice, faChevronUp, faChevronDown,
        faChevronLeft, faChevronRight)
}