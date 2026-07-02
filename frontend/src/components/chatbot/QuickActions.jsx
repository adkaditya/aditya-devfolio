const actions = [

"About",

"Projects",

"Skills",

"Resume",

"Contact",

];

const QuickActions = ({ onSelect }) => {

return (

<div className="mt-5 flex flex-wrap gap-3">

{actions.map((item)=>(

<button

key={item}

onClick={()=>onSelect(item)}

className="rounded-full border border-cyan-500/20 bg-slate-800 px-4 py-2 text-sm text-white transition hover:bg-cyan-600"

>

{item}

</button>

))}

</div>

);

};

export default QuickActions;