import Image1 from "../assets/img000.jpg";
import Image2 from "../assets/img02.jpg";
import Image3 from "../assets/img03.jpg";
import Worker from "@mui/icons-material/Engineering";
import Maintenance from "@mui/icons-material/Handyman";
import Management from "@mui/icons-material/Description";
import { IconProcess } from "../styles/CustomMUI";

export const ProyectsData = [
  {
    id: 1,
    title: "Proyecto 1",
    area: "Casas",
    year: "2021",
    description:
      "Lorem ipsum dolor sit amet, eu aperiam similique definitionem nec, ut mea periculis efficiendi. Eu usu verear vulputate. Id sed error adversarium, error accusamus dissentiunt usu an. Qui id facer putant urbanitas, tritani copiosae intellegebat vix ea, id mea sadipscing theophrastus. Ne his invenire salutandi moderatius, elitr tibique mea ei.",
    images: [Image1, Image2, Image3],
  },
  {
    id: 2,
    title: "Proyecto 2",
    year: "2022",
    area: "Edificios",
    description:
      "Lorem ipsum dolor sit amet, eu aperiam similique definitionem nec, ut mea periculis efficiendi. Eu usu verear vulputate. Id sed error adversarium, error accusamus dissentiunt usu an. Qui id facer putant urbanitas, tritani copiosae intellegebat vix ea, id mea sadipscing theophrastus. Ne his invenire salutandi moderatius, elitr tibique mea ei.",
    images: [Image1, Image2, Image3],
  },
  {
    id: 3,
    title: "Proyecto 3",
    year: "2023",
    area: "Baños",
    description:
      "Lorem ipsum dolor sit amet, eu aperiam similique definitionem nec, ut mea periculis efficiendi. Eu usu verear vulputate. Id sed error adversarium, error accusamus dissentiunt usu an. Qui id facer putant urbanitas, tritani copiosae intellegebat vix ea, id mea sadipscing theophrastus. Ne his invenire salutandi moderatius, elitr tibique mea ei.",
    images: [Image1, Image2, Image3],
  },
  {
    id: 4,
    title: "Proyecto 4",
    year: "2024",
    area: "Arquitectura",
    description:
      "Lorem ipsum dolor sit amet, eu aperiam similique definitionem nec, ut mea periculis efficiendi. Eu usu verear vulputate. Id sed error adversarium, error accusamus dissentiunt usu an. Qui id facer putant urbanitas, tritani copiosae intellegebat vix ea, id mea sadipscing theophrastus. Ne his invenire salutandi moderatius, elitr tibique mea ei.",
    images: [Image1, Image2, Image3],
  },
];

export const ProcessData = [
  {
    id: 1,
    title: "Gestión de Proyectos y Documentación",
    icon: <Management sx={{ ...IconProcess }} />,
    description:
      "Prima commune at mei, quod atomorum duo cu, putent admodum habemus vix no. Cum et eirmod appetere. Etiam nusquam mea in, feugiat suscipit appellantur pro an. Ludus quodsi constituto ad sea. Ea erant sanctus usu, an eum agam melius.",
  },
  {
    id: 2,
    title: "Desarrollo Completo de la Obra",
    icon: <Worker sx={{ ...IconProcess }} />,
    description:
      "Prima commune at mei, quod atomorum duo cu, putent admodum habemus vix no. Cum et eirmod appetere. Etiam nusquam mea in, feugiat suscipit appellantur pro an. Ludus quodsi constituto ad sea. Ea erant sanctus usu, an eum agam melius.",
  },
  {
    id: 3,
    title: "Servicio de Mantenimiento Post-Entrega",
    icon: <Maintenance sx={{ ...IconProcess }} />,
    description:
      "Prima commune at mei, quod atomorum duo cu, putent admodum habemus vix no. Cum et eirmod appetere. Etiam nusquam mea in, feugiat suscipit appellantur pro an. Ludus quodsi constituto ad sea. Ea erant sanctus usu, an eum agam melius.",
  },
];
