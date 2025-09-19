//First study the NotesInstamrt.jsx this instamart code is the 
//optimized code for it.

import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border-2 border-black-200 p-3 ">
      <h1 className="text-3xl">{title}</h1>

      {!isVisible ? (
        <button
          className=" w-20 border-2 border-green-600 cursor-pointer"
          onClick={() => setIsVisible(true)}
        >
          show
        </button>
      ) : (
        <button
          className=" w-20 border-2 border-green-600 cursor-pointer"
          onClick={() => setIsVisible(null)}
        >
          hide
        </button>
      )}

      {isVisible && <p className="text-sm">{description}</p>}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");//initialy about is visible
  return (
    <>
      <Section
        title="About Instamart"
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        isVisible={visibleSection==="about"}//this is will give true
        setIsVisible={()=>setVisibleSection("about")}
      />

      <Section
        title="Team Instamart"
        description="Team us et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        isVisible={visibleSection==="team"}
        setIsVisible={()=>setVisibleSection("team")}
      />

      <Section
        title="Carrer Instamart"
        description="Carrer et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        isVisible={visibleSection==="carrer"}
        setIsVisible={()=>setVisibleSection("carrer")}
      />
    </>
  );
};

export default Instamart;
