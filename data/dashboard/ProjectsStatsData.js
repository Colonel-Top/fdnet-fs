import {
	Briefcase,
    ListTask,
    People,
    Bullseye
} from 'react-bootstrap-icons';

export const ProjectsStats = [
    {
       id:1,
       title : "กรอกขอใหม่",
       value : "Waiting",
       icon: <Briefcase size={18}/>,
       statInfo: '<span className="text-dark me-2">2</span> Completed' 
    },
    {
        id:2,
        title : "รอ หน. กองอนุมัติ",
        value : "...",
        icon: <ListTask size={18}/>,
        statInfo: '<span className="text-dark me-2">28</span> Completed' 
     },
     {
        id:3,
        title : "รอ ผอ. สำนักอนุมัติ",
        value : "...",
        icon: <People size={18}/>,
        statInfo: '<span className="text-dark me-2">1</span> Completed' 
     },
     {
        id:4,
        title : "รอ คกก. อนุมัติ",
        value : "...",
        icon: <Bullseye size={18}/>,
        statInfo: '<span className="text-dark me-2">5%</span> Completed' 
     },
     {
        id:5,
        title : "รอ จนท.ดำเนินการ",
        value : "...",
        icon: <Bullseye size={18}/>,
        statInfo: '<span className="text-dark me-2">5%</span> Completed'
     },
     {
        id:6,
        title : "รอ เบิกจ่ายอุปกรณ์",
        value : "...",
        icon: <Bullseye size={18}/>,
        statInfo: '<span className="text-dark me-2">5%</span> Completed'
     }
];
export default ProjectsStats;
