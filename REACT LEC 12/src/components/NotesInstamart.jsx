import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border-2 border-black-200 p-3 ">
      <h1 className="text-3xl">{title}</h1>

      {!isVisible ? (
        <button
          className=" w-20 border-2 border-green-600 cursor-pointer"
          onClick={() => setIsVisible()}
        >
          show
        </button>
      ) : (
        <button
          className=" w-20 border-2 border-green-600 cursor-pointer"
          onClick={() => setIsVisible()}
        >
          hide
        </button>
      )}

      {isVisible && <p className="text-sm">{description}</p>}
    </div>
  );
};
const Instamart = () => {
  const [sectionconfig, setSectionConfig] = useState({
    showAboutInstamart: false,
    showTeamsInstamart: false,
    showCarrerInstamart: false,
  });
  return (
    <>
      <Section
        title="About Instamart"
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        isVisible={sectionconfig.showAboutInstamart}
        setIsVisible={()=>setSectionConfig({
          showAboutInstamart: true,
          showTeamsInstamart: false,
          showCarrerInstamart: false,
        })}
      />

      <Section
        title="Team Instamart"
        description="Team us et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        isVisible={sectionconfig.showTeamsInstamart}
        setIsVisible={()=>setSectionConfig({
            showAboutInstamart: false,
            showTeamsInstamart: true,
            showCarrerInstamart: false,
          })}
      />

      <Section
        title="Carrer Instamart"
        description="Carrer et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        isVisible={sectionconfig.showCarrerInstamart}
        setIsVisible={()=>setSectionConfig({
            showAboutInstamart: false,
            showTeamsInstamart: false,
            showCarrerInstamart: true,
          })}
      />
    </>
  );
};

export default Instamart;